"use server";

import { TweetType } from "@/app/app/twitter/Tweet";
import { db } from "@/database/db";
import { twitterTable, TwitterType } from "@/database/schemas/twitter";
import { usersTable } from "@/database/schemas/users";
import { eq } from "drizzle-orm";

export default async function selectAllTweets(): Promise<TweetType[]> {
  const tweets = await db.select().from(twitterTable);

  const formattedTweets = await Promise.all(
    tweets.map(async (tweet: TwitterType) => {
      const author = await db
        .select({ name: usersTable.name })
        .from(usersTable)
        .where(eq(usersTable.id, tweet.userId))
        .then((res) => (res.length === 1 ? res[0].name : null));

      return {
        id: tweet.id,
        parentTweetId: tweet.parentTweetId,
        author: author as string,
        text: tweet.text,
        isLiked: tweet.isLiked,
      };
    }),
  );

  return formattedTweets;
}
