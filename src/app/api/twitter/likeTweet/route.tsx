import { db } from "@/database/db";
import { twitterLikesTable } from "@/database/schemas/tweetLikes";
import getSession from "@/server-actions/auth/getSession";
import { and, eq } from "drizzle-orm";
import { isRedirectError } from "next/dist/client/components/redirect";

export async function PATCH(request: Request) {
  try {
    const response = await request.json();

    if (!response.tweetId) {
      throw new Error("ID is required");
    } else if (!response.like === undefined) {
      throw new Error("Like is required");
    }

    const { tweetId, like } = response;

    const session = await getSession();
    if (!session) return;

    const userId = session.id;

    if (like) {
      await db.insert(twitterLikesTable).values({ userId, tweetId });
    } else {
      await db
        .delete(twitterLikesTable)
        .where(
          and(
            eq(twitterLikesTable.tweetId, tweetId),
            eq(twitterLikesTable.userId, userId),
          ),
        );
    }
    return new Response("", { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 400 });
    }
    if (isRedirectError(error)) {
      throw error;
    }
  }
}
