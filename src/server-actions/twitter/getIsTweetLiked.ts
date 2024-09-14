"use server";

import { db } from "@/database/db";
import getSession from "../auth/getSession";
import { twitterLikesTable } from "@/database/schemas/tweetLikes";
import { and, eq } from "drizzle-orm";

export default async function getIsTweetLiked(tweetId: string) {
  const session = await getSession();
  if (!session) {
    throw new Error();
  }

  const userId = session.id;

  const isLiked = await db
    .select()
    .from(twitterLikesTable)
    .where(
      and(
        eq(twitterLikesTable.tweetId, tweetId),
        eq(twitterLikesTable.userId, userId),
      ),
    )
    .then((res) => (res.length === 1 ? true : false));

  return isLiked;
}
