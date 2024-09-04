"use server";

import { db } from "@/database/db";
import { twitterTable, TwitterType } from "@/database/schemas/twitter";
import { eq } from "drizzle-orm";
import getSession from "../auth/getSession";

interface insertTweetProps {
  text: string;
  parentTweetId: string | null;
}

export default async function insertTweet({
  text,
  parentTweetId,
}: insertTweetProps): Promise<void> {
  // const userId = (await getSession())?.id;
  const session = await getSession();
  const userId = session?.id;

  if (!userId) {
    return;
  }

  await db.insert(twitterTable).values({ userId, text, parentTweetId });
}
