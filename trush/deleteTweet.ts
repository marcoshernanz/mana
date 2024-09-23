// "use server";

// import deleteParentTweet from "@/database/queries/auth/deleteParentTweet";
// import deleteTweetReply from "@/database/queries/auth/deleteTweetReply";

// export default async function deleteTweet(id: string): Promise<void> {
//   // await db.delete(twitterTable).where(eq(twitterTable.id, id));
//   await deleteParentTweet(id);
//   // await db.delete(twitterTable).where(eq(twitterTable.parentTweetId, id));
//   await deleteTweetReply(id);
// }
