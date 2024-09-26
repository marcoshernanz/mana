import { db } from "@/database/db";
import { twitterLikesTable } from "@/database/schemas/tweetLikes";
import getSession from "@/server-actions/auth/getSession";
import { count, eq } from "drizzle-orm";
import { isRedirectError } from "next/dist/client/components/redirect";

export async function POST(request: Request) {
  try {
    const response = await request.json();

    if (!response.tweetId) {
      throw new Error("ID is required");
    }

    const session = await getSession();
    if (!session) {
      throw new Error();
    }

    const numLikes = await db
      .select({ count: count() })
      .from(twitterLikesTable)
      .where(eq(twitterLikesTable.tweetId, response.tweetId))
      .then((res) => (res.length === 1 ? res[0].count : 0));

    return new Response(JSON.stringify(numLikes), { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 400 });
    }
    if (isRedirectError(error)) {
      throw error;
    }
  }
}
