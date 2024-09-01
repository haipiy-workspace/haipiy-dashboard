import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isLogin = request.cookies.get("haipiy_token")?.value;
  if (!isLogin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/login") && isLogin) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // we gonna fix latter about maatcher and conditional
  // current problemm if we exclude login on matcher it wont cuase any looping, but it will make second condition untouched

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|login).*)",
  ],
};
