import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/dashboard/"];
const publicRoutes = ["/login/", "/register/"];

export function middleware(request: NextRequest) {
  const isLogin = request.cookies.get("haipiy_token")?.value;
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  if (!isLogin && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If the user is logged in and tries to access a public route, redirect to the dashboard
  if (isLogin && isPublicRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Allow the request to proceed if none of the conditions above are met
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
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
