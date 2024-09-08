"use server";

import jwt from "@/lib/jwt";
import { cookies } from "next/headers";

export type SessionType = {
  id: string;
  name: string;
  username: string;
};

export default async function getSession(): Promise<SessionType | null> {
  const jwtSession = cookies().get("session");

  if (!jwtSession) {
    return null;
  } else {
    const payload = await jwt.verify(jwtSession.value);
    return payload as SessionType;
  }
}
