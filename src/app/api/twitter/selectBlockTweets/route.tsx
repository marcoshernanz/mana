import { db } from "@/database/db";
import { twitterTable } from "@/database/schemas/twitter";
import { usersTable } from "@/database/schemas/users";
import getSession from "@/server-actions/auth/getSession";
import { asc, desc, eq, isNotNull, isNull } from "drizzle-orm";
import { isRedirectError } from "next/dist/client/components/redirect";

type TweetResponseType = {
  twitter: {
    id: string;
    parentTweetId: string | null;
    text: string;
    isLiked: boolean;
    userId: string;
    createdAt: Date;
  };
  users: {
    id: string;
    name: string;
    username: string;
    password: string;
    createdAt: Date;
  } | null;
};

export async function POST(request: Request) {
  try {
    const response = await request.json();

    if (!response.numTweetsPerBlock) {
      throw new Error("Num tweets per block is required");
    } else if (response.blockNumber === undefined) {
      throw new Error("Block number is required");
    } else if (response.orderBy === undefined) {
      throw new Error("Order by is required");
    } else if (response.descending === undefined) {
      throw new Error("Descending is required");
    }

    const {
      numTweetsPerBlock,
      blockNumber,
      orderBy,
      descending,
      replies = false,
    } = response;

    const session = await getSession();
    if (!session) throw new Error("User not logged in");

    const offset = numTweetsPerBlock * (blockNumber - 1);

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
      .limit(numTweetsPerBlock)
      .offset(offset)
      .orderBy(
        descending
          ? desc(twitterTable[orderValue])
          : asc(twitterTable[orderValue]),
      );

    // const tweets = await getTweets.json();
    const formattedTweets = tweets.map((tweet: TweetResponseType) => ({
      id: tweet.twitter.id,
      parentTweetId: tweet.twitter.parentTweetId,
      text: tweet.twitter.text,
      isLiked: tweet.twitter.isLiked,
      author: tweet.users?.name as string,
      account: tweet.users?.username as string,
      isUserTweet: tweet.twitter.userId === session.id,
    }));
    return new Response(JSON.stringify(formattedTweets), { status: 200 });
    // }
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 400 });
    }
    if (isRedirectError(error)) {
      throw error;
    }
  }
}
