// "use server";

// import { db } from "@/database/db";
// import { twitterTable } from "@/database/schemas/twitter";
// import { usersTable } from "@/database/schemas/users";
// import { asc, desc, eq, isNotNull, isNull } from "drizzle-orm";

// interface selectTweetsProps {
//   numTweets: number;
//   offset: number;
//   orderBy: "date" | "likes";
//   descending: boolean;
//   replies?: boolean; // If true, it will fetch replies, if false, it will fetch normal tweets (without replies)
// }

// export default async function selectTweets({
//   numTweets,
//   offset,
//   orderBy,
//   descending,
//   replies = false,
// }: selectTweetsProps) {
//   const orderValue = (
//     {
//       date: "createdAt",
//       likes: "isLiked",
//     } as const
//   )[orderBy as "date" | "likes"];

//   const tweets = await db
//     .select()
//     .from(twitterTable)
//     .where(
//       replies
//         ? isNotNull(twitterTable.parentTweetId)
//         : isNull(twitterTable.parentTweetId),
//     )
//     .leftJoin(usersTable, eq(twitterTable.userId, usersTable.id))
//     .limit(numTweets)
//     .offset(offset)
//     .orderBy(
//       descending
//         ? desc(twitterTable[orderValue])
//         : asc(twitterTable[orderValue]),
//     );

//   return tweets;
// }
