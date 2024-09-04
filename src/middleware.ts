import { NextResponse, type NextRequest } from "next/server";
import { cookies } from "next/headers";

const protectedRoutes = ["/app"];
const unauthorizedRoutes = ["/sign-in", "/sign-up"];

export function middleware(request: NextRequest) {
  const isAuthenticated = cookies().get("session") !== undefined;
  const pathname = request.nextUrl.pathname;

  if (isAuthenticated) {
    for (const route of unauthorizedRoutes) {
      if (pathname.startsWith(route)) {
        return NextResponse.redirect(new URL("/app", request.nextUrl));
      }
    }

    if (pathname === "/") {
      return NextResponse.redirect(new URL("/app", request.nextUrl));
    }
  } else if (!isAuthenticated) {
    for (const route of protectedRoutes) {
      if (pathname.startsWith(route)) {
        return NextResponse.redirect(new URL("/sign-in", request.nextUrl));
      }
    }
  }
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
