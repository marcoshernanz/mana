"use server";

import { db } from "@/database/db";
import { usersTable } from "@/database/schemas/users";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";
import signIn from "./signIn";
import { permanentRedirect, RedirectType } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect";

interface signUpProps {
  name: string;
  username: string;
  password: string;
}

export default async function signUp({
  name,
  username,
  password,
}: signUpProps): Promise<{ error: string } | undefined> {
  try {
    if (!name) {
      throw new Error("Full Name is required");
    } else if (!name.includes(" ")) {
      throw new Error("Enter your first and last name");
    } else if (!username) {
      throw new Error("Username is required");
    } else if (username.includes(" ")) {
      throw new Error("Username must not include spaces");
    } else if (!password) {
      throw new Error("Password is required");
    } else if (password.length < 8) {
      throw new Error("Password must have at least 8 characters");
    }

    const selectedUser = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.username, username))
      .then((res) => (res.length === 1 ? res[0] : null));
    if (selectedUser) {
      throw new Error("Username already in use");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db
      .insert(usersTable)
      .values({ name, username, password: hashedPassword });
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }

    if (isRedirectError(error)) {
      throw error;
    }
  }

  await signIn({ username, password });

  permanentRedirect("/app", RedirectType.replace);
}
