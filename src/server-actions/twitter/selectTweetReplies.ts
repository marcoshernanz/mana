"use server";

import { TweetType } from "@/app/app/twitter/Tweet";
import { db } from "@/database/db";
import { twitterTable } from "@/database/schemas/twitter";
import { eq } from "drizzle-orm";
import { usersTable } from "@/database/schemas/users";
import getSession from "../auth/getSession";

export default async function selectTweetReplies(
  id: string,
): Promise<TweetType[]> {
  const session = await getSession();
  if (!session) throw new Error("User not logged in");

  const tweetReplies = await db
    .select()
    .from(twitterTable)
    .where(eq(twitterTable.parentTweetId, id))
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

  return formattedTweetReplies;
}
