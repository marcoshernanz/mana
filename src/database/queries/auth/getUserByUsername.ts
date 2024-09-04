import { db } from "@/database/db";
import { usersTable, UserType } from "@/database/schemas/users";
import { eq } from "drizzle-orm";

export default async function getUserByUsername(
  username: string,
): Promise<UserType | null> {
  const selectedUser = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.username, username))
    .then((res) => (res.length === 1 ? res[0] : null));

  return selectedUser;
}
