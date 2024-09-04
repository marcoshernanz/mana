import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("session");

  if (
    session &&
    request.nextUrl.pathname.startsWith("/sign-in" || "/app/twitter")
  ) {
    return NextResponse.redirect(new URL("/app/twitter", request.url));
  } else if (
    session &&
    request.nextUrl.pathname.startsWith("/sign-in" || "/sign-up")
  ) {
    return NextResponse.redirect(new URL("/app/sign-up", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/sign-in, /app/twitter"],
};
