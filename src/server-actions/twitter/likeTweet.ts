"use server";

import { db } from "@/database/db";
import { twitterLikesTable } from "@/database/schemas/tweetLikes";
import getSession from "../auth/getSession";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

interface likeTweetProps {
  tweetId: string;
  like: boolean;
}

export default async function likeTweet({ tweetId, like }: likeTweetProps) {
  const session = await getSession();
  if (!session) return;

  const userId = session.id;

  if (like) {
    await db.insert(twitterLikesTable).values({ userId, tweetId });
  } else {
    await db
      .delete(twitterLikesTable)
      .where(
        and(
          eq(twitterLikesTable.tweetId, tweetId),
          eq(twitterLikesTable.userId, userId),
        ),
      );
  }

  revalidatePath("/");
}
