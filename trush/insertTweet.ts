// "use server";

// import insertTwitter from "@/database/queries/forum/insertTwitter";
// import getSession from "../auth/getSession";

// interface insertTweetProps {
//   text: string;
//   parentTweetId: string | null;
// }

// export default async function insertTweet({
//   text,
//   parentTweetId,
// }: insertTweetProps): Promise<void> {
//   // const userId = (await getSession())?.id;
//   const session = await getSession();
//   const userId = session?.id;

//   if (!userId) {
//     return;
//   }

//   await insertTwitter(userId, text, parentTweetId);
// }
