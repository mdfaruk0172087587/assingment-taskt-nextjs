// src/auth.js
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const {
  auth,                       // server-side session helper
  signIn, signOut,            // server actions (needed if you use them)
  handlers: { GET, POST }     // for /api/auth route
} = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",         // not-authenticated হলে এখানে পাঠাবে
  },
  session: { strategy: "jwt" },
  callbacks: {
    // middleware-এর simple protect কলে ব্যবহার করা যায়
    authorized: async ({ auth }) => !!auth,
  },
  secret: process.env.NEXTAUTH_SECRET,
});
