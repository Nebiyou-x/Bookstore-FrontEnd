// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get('token');
//   const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');
//   const isLoginPage = request.nextUrl.pathname === '/admin/login';

//   // Allow access to login page without token
//   if (isLoginPage) {
//     return NextResponse.next();
//   }

//   // Protect other admin routes
//   if (isAdminRoute && !token) {
//     return NextResponse.redirect(new URL('/admin/login', request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: '/admin/:path*',
// }; 