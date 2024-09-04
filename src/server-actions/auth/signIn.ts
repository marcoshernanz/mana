"use server";

import "@/../envConfig";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { SessionType } from "./getSession";
import getUserByUsername from "@/database/queries/auth/getUserByUsername";
import { permanentRedirect, RedirectType } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect";

interface signInProps {
  username: string;
  password: string;
}

export default async function signIn({
  username,
  password,
}: signInProps): Promise<{ error: string } | undefined> {
  try {
    if (!username) {
      throw new Error("Username is required");
    } else if (!password) {
      throw new Error("Password is required");
    }

    const selectedUser = await getUserByUsername(username);
    if (!selectedUser) {
      throw new Error("Incorrect username or password");
    }

    const passwordsMatch = await bcrypt.compare(
      password,
      selectedUser.password,
    );
    if (!passwordsMatch) {
      throw new Error("Incorrect username or password");
    }

    const session = {
      id: selectedUser.id,
      name: selectedUser.name,
      username: selectedUser.username,
    } satisfies SessionType;

    const token = jwt.sign(session, process.env.AUTH_SECRET!);

    if (!token) {
      throw new Error("An unexpected error ocurred");
    }

    cookies().set("session", token);
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }

    if (isRedirectError(error)) {
      throw error;
    }
  }

  permanentRedirect("/app", RedirectType.replace);
}
