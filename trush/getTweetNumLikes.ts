// "use server";

// import { db } from "@/database/db";
// import getSession from "../auth/getSession";
// import { twitterLikesTable } from "@/database/schemas/tweetLikes";
// import { count, eq } from "drizzle-orm";

// export default async function getTweetNumLikes(tweetId: string) {
//   const session = await getSession();
//   if (!session) {
//     throw new Error();
//   }

//   const numLikes = await db
//     .select({ count: count() })
//     .from(twitterLikesTable)
//     .where(eq(twitterLikesTable.tweetId, tweetId))
//     .then((res) => (res.length === 1 ? res[0].count : 0));

//   return numLikes;
// }
