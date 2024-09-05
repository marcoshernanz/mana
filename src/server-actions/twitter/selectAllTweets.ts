"use server";

import { TweetType } from "@/app/app/twitter/Tweet";
import getAuthorName from "@/database/queries/auth/getAuthorName";
import selectTweets from "@/database/queries/forum/selectTweets";
import { TwitterType } from "@/database/schemas/twitter";

export default async function selectAllTweets(): Promise<TweetType[]> {
  // const tweets = await db.select().from(twitterTable);

  const tweets = await selectTweets();

  const formattedTweets = await Promise.all(
    tweets.map(async (tweet: TwitterType) => {
      // const author = await db
      //   .select({ name: usersTable.name })
      //   .from(usersTable)
      //   .where(eq(usersTable.id, tweet.userId))
      //   .then((res) => (res.length === 1 ? res[0].name : null));

      const author = await getAuthorName(tweet);

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
