// "use server";

// import { db } from "@/database/db";
// import { twitterTable, TwitterType } from "@/database/schemas/twitter";
// import { eq } from "drizzle-orm";


// export default async function expandedTweet(id:string): Promise<string> {
//   const [expandedTweet] = await db.select().from(twitterTable).where(eq(twitterTable.id, id));
//   return expandedTweet.id;
// }