"use server";

import { db } from "@/database/db";
import { twitterTable, TwitterType } from "@/database/schemas/twitter";

type InsertTwitterType = Omit<
  TwitterType,
  "id" | "isLiked" | "parentTweetId" | "createdAt"
> & {
  id?: string;
  isLiked?: boolean;
  parentTweetId?: string | null | undefined;
  createdAt?: Date;
};

export default async function insertTweet(
  tweet: InsertTwitterType,
): Promise<void> {
  await db.insert(twitterTable).values(tweet).returning();

  console.log(await db.select().from(twitterTable));
}
