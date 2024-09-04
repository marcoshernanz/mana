"use server";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

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
    const payload = jwt.verify(jwtSession.value, process.env.AUTH_SECRET!);
    return payload as SessionType;
  }
}
