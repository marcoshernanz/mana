"use server";

import { db } from "@/database/db";
import { twitterTable } from "@/database/schemas/twitter";
import { eq } from "drizzle-orm";

export default async function deleteTweet(id: string): Promise<void> {
  await db.delete(twitterTable).where(eq(twitterTable.id, id));
  await db.delete(twitterTable).where(eq(twitterTable.parentTweetId, id));
}
