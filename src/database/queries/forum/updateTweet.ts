"use server";

import { db } from "@/database/db";
import { twitterTable, TwitterType } from "@/database/schemas/twitter";
import { eq } from "drizzle-orm";

type UpdateTwitterType = Omit<
  TwitterType,
  "text" | "userId" | "id" | "isLiked" | "parentTweetId" | "createdAt"
> & {
  text?: string;
  userId?: string;
  id?: string;
  isLiked?: boolean;
  parentTweetId?: string;
  createdAt?: Date;
};

export default async function updateTweet(
  id: string,
  tweet: UpdateTwitterType,
): Promise<void> {
  await db.update(twitterTable).set(tweet).where(eq(twitterTable.id, id));
}
