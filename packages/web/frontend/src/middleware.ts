import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { Utils } from '@/lib/index';
import { User } from '@employee-salary-manager/core';

const protectedRoutes = ['/', '/admin', '/employee']
 
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const authCookie = request.cookies.get(Utils.USER_SESSION_COOKIE);
  const user: User = authCookie?.value ? JSON.parse(authCookie.value) : undefined;

  const isProtectedRoute = protectedRoutes.some(route => 
    pathname === route || 
    pathname.startsWith(`${route}/`)
  )

  if(isProtectedRoute && !user){
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if(user?.role == "admin" && pathname != "/admin"){
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  if(user?.role == "employee" && pathname != "/employee"){
    return NextResponse.redirect(new URL('/employee', request.url));
  }

  return NextResponse.next()
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
      '/((?!api|_next/static|_next/image|favicon.*|sitemap.xml|robots.txt).*)',
    ],
  }