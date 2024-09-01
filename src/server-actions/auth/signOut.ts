"use server";

import "../../../envConfig";
import { cookies } from "next/headers";

export default async function signOut(): Promise<void> {
  cookies().delete("session");
  return;
}

