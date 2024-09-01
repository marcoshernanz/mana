import "../../../envConfig";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import SignOutButton from "@/components/auth/SignOutButton";

export default function AuthPage() {
  const jwtSession = cookies().get("session");

  if (!jwtSession) {
    return null;
  } else {
    const payload = jwt.verify(jwtSession.value, process.env.AUTH_SECRET!);

    return (
      <>
        <pre className="text-white">{JSON.stringify(payload, null, 4)}</pre>
        <SignOutButton />
      </>
    );
  }
}
