import { db } from "@/database/db";
import { twitterTable } from "@/database/schemas/twitter";
import { usersTable } from "@/database/schemas/users";
import getSession from "@/server-actions/auth/getSession";
import { eq } from "drizzle-orm";
import { isRedirectError } from "next/dist/client/components/redirect";

export async function POST(request: Request) {
  try {
    const response = await request.json();
    if (!response.id) {
      throw new Error("ID is required");
    }
    const session = await getSession();
    if (!session) throw new Error("User not logged in");

    const tweetReplies = await db
      .select()
      .from(twitterTable)
      .where(eq(twitterTable.parentTweetId, response.id))
      .leftJoin(usersTable, eq(twitterTable.userId, usersTable.id));

    const formattedTweetReplies = tweetReplies.map((tweet) => ({
      id: tweet.twitter.id,
      parentTweetId: tweet.twitter.parentTweetId,
      text: tweet.twitter.text,
      isLiked: tweet.twitter.isLiked,
      author: tweet.users?.name as string,
      account: tweet.users?.username as string,
      isUserTweet: tweet.twitter.userId === session.id,
    }));

    return new Response(JSON.stringify(formattedTweetReplies), { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 400 });
    }
    if (isRedirectError(error)) {
      throw error;
    }
  }
}
