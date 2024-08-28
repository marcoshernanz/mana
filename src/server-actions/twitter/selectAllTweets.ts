"use server";

import { db } from "@/database/db";
import { twitterTable, TwitterType } from "@/database/schemas/twitter";

export default async function selectAllTweets(): Promise<TwitterType[]> {
  const tweets = await db.select().from(twitterTable);
  return tweets;
}