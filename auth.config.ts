import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = auth?.user != null;
      const protectedRoutes = ['/dashboard'];
      const protectedRoute = protectedRoutes.find((route) =>
        request.nextUrl.pathname.startsWith(route),
      );
      if (protectedRoute) {
        if (isLoggedIn) return true;
        return Response.redirect(new URL('/login', request.nextUrl));
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', request.nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
