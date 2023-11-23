"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.error) {
        setError("Invalid credentials");
        return;
      }
      router.replace("/HomePage");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <p className="mt-2 text-lg text-gray-600">
        Please sign in to your account.
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-md mt-8 space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-bold text-gray-700"
          >
            Email address
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="text"
            placeholder="Enter your email"
            className="w-full px-4 py-3 mt-1 border rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-bold text-gray-700"
          >
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 mt-1 border rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-3 text-sm font-bold text-white bg-cyan-400 rounded-md hover:bg-cyan-600 focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
          <div className="flex justify-end mt-4">
            <Link href={"/register"}>
              <button type="button" className="text-lg text-cyan-600 ">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
        {/* TODO: Update error to redux state equivalent */}
        {error && (
          <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
            {error}
          </div>
        )}
      </form>
    </>
  );
}
