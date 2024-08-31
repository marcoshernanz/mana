// "use server";

import "../../../envConfig";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export default function AuthPage() {
  const jwtSession = cookies().get("session");

  if (!jwtSession) {
    return <div className="text-white">User has not signed in</div>;
  } else {
    const payload = jwt.verify(jwtSession.value, process.env.AUTH_SECRET!);

    return <pre className="text-white">{JSON.stringify(payload, null, 4)}</pre>;
  }
}
