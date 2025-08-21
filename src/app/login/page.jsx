"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto border rounded-2xl p-6 mt-10 bg-white">
      <h1 className="text-2xl font-bold mb-6 text-center">Sign in</h1>

      <button
        onClick={() => signIn("google", { callbackUrl: "/products" })}
        className="w-full rounded-xl bg-black text-white px-4 py-3 hover:opacity-90"
      >
        Continue with Google
      </button>

      <p className="text-center text-sm text-gray-500 mt-4">
        You’ll be redirected to /products after login.
      </p>
    </div>
  );
}