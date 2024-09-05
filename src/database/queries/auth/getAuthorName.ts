import { db } from "@/database/db";
import { TwitterType } from "@/database/schemas/twitter";
import { usersTable } from "@/database/schemas/users";
import { eq } from "drizzle-orm";

export default async function getAuthorName(tweet: TwitterType) {
  const author = await db
    .select({ name: usersTable.name })
    .from(usersTable)
    .where(eq(usersTable.id, tweet.userId))
    .then((res) => (res.length === 1 ? res[0].name : null));

  return author as string;
}
