// "use server";

// import { TweetType } from "@/app/app/twitter/Tweet";
// import selectTweets from "@/database/queries/forum/selectTweets";
// import getSession from "../auth/getSession";

// interface selectBlockTweetsProps {
//   numTweetsPerBlock: number;
//   blockNumber: number;
//   orderBy: "date" | "likes";
//   descending: boolean;
// }

// export default async function selectBlockTweets({
//   numTweetsPerBlock,
//   blockNumber,
//   orderBy,
//   descending,
// }: selectBlockTweetsProps): Promise<TweetType[]> {
//   const session = await getSession();
//   if (!session) throw new Error("User not logged in");

//   const tweets = await selectTweets({
//     numTweets: numTweetsPerBlock,
//     offset: numTweetsPerBlock * (blockNumber - 1),
//     orderBy,
//     descending,
//   });

//   const formattedTweets = tweets.map((tweet) => ({
//     id: tweet.twitter.id,
//     parentTweetId: tweet.twitter.parentTweetId,
//     text: tweet.twitter.text,
//     isLiked: tweet.twitter.isLiked,
//     author: tweet.users?.name as string,
//     account: tweet.users?.username as string,
//     isUserTweet: tweet.twitter.userId === session.id,
//   }));

//   return formattedTweets;
// }
