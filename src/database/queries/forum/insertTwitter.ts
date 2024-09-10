"use server";
import { db } from "@/database/db";
import { twitterTable } from "@/database/schemas/twitter";

export default async function insertTwitter(
  userId: string,
  text: string,
  parentTweetId: string | null,
) {
  await db.insert(twitterTable).values({ userId, text, parentTweetId });
}
