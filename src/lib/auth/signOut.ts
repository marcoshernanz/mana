"use server";

import { permanentRedirect, RedirectType } from "next/navigation";
import "../../../envConfig";
import { cookies } from "next/headers";

export default async function signOut(): Promise<void> {
  cookies().delete("session");

  permanentRedirect("/sign-in", RedirectType.replace);
}
