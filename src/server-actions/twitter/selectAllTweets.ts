// "use server";

// import { TweetType } from "@/app/app/twitter/Tweet";
// import getAuthorName from "@/database/queries/auth/getAuthorName";
// import selectTweets from "@/database/queries/forum/selectTweets";
// import { TwitterType } from "@/database/schemas/twitter";

// export default async function selectAllTweets(): Promise<TweetType[]> {
//   // const tweets = await db.select().from(twitterTable);

//   const tweets = await selectTweets();

//   const formattedTweets = await Promise.all(
//     tweets.map(async (tweet: TwitterType) => {
//       const author = await getAuthorName(tweet);

//       return {
//         id: tweet.id,
//         parentTweetId: tweet.parentTweetId,
//         author: author as string,
//         text: tweet.text,
//         isLiked: tweet.isLiked,
//       };
//     }),
//   );

//   return formattedTweets;
// }
