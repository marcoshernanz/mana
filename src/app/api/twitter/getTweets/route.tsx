import { db } from "@/database/db";
import { todosTable } from "@/database/schemas/todos";
import { twitterTable } from "@/database/schemas/twitter";
import { usersTable } from "@/database/schemas/users";
import getSession from "@/lib/auth/getSession";
import { asc, desc, eq, isNotNull, isNull } from "drizzle-orm";
import { isRedirectError } from "next/dist/client/components/redirect";

export async function POST(request: Request) {
  try {
    const response = await request.json();

    if (!response.numTweets) {
      throw new Error("Num tweets per block is required");
    } else if (response.offset === undefined) {
      throw new Error("Block number is required");
    } else if (response.orderBy === undefined) {
      throw new Error("Order by is required");
    } else if (response.descending === undefined) {
      throw new Error("Descending is required");
    }

    const {
      numTweets,
      offset,
      orderBy,
      descending,
      replies = false,
    } = response;

    const orderValue = (
      {
        date: "createdAt",
        likes: "isLiked",
      } as const
    )[orderBy as "date" | "likes"];

    const tweets = await db
      .select()
      .from(twitterTable)
      .where(
        replies
          ? isNotNull(twitterTable.parentTweetId)
          : isNull(twitterTable.parentTweetId),
      )
      .leftJoin(usersTable, eq(twitterTable.userId, usersTable.id))
      .limit(numTweets)
      .offset(offset)
      .orderBy(
        descending
          ? desc(twitterTable[orderValue])
          : asc(twitterTable[orderValue]),
      );

    return new Response(JSON.stringify(tweets), { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 400 });
    }
    if (isRedirectError(error)) {
      throw error;
    }
  }
}
