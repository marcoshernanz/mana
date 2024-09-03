"use server"; 

import { db } from "@/database/db";
import { twitterTable } from "@/database/schemas/twitter";
import { eq } from "drizzle-orm";
import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";

export type SessionType = {
  id: string;
  name: string;
  username: string;
}

export async function getSession() {
  const jwtSession = cookies().get("session");


  if (!jwtSession) {
    return null;
  } else {
    const payload = jwt.verify(jwtSession.value, process.env.AUTH_SECRET!);
    return payload as SessionType;
  }
}