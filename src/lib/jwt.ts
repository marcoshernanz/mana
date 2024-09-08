import { SessionType } from "@/server-actions/auth/getSession";
import { jwtVerify, SignJWT } from "jose";

const jwt = {
  verify: async (token: string) => {
    try {
      const { payload } = await jwtVerify(
        token,
        new TextEncoder().encode(process.env.AUTH_SECRET!),
      );

      return payload;
    } catch (e) {
      return null;
    }
  },

  sign: async (session: SessionType) => {
    const jwt = new SignJWT(session)
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setIssuedAt()
      .setExpirationTime("30d")
      .sign(new TextEncoder().encode(process.env.AUTH_SECRET!));

    return jwt;
  },
};

export default jwt;
