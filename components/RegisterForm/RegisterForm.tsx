"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setError, setUserEmail, setUserName, setUserPassword } from "../../redux/features/auth-slice";

export default function RegisterForm() {

  const { name, email, password } = useAppSelector((state) => state.auth.user);
  const error = useAppSelector((state) => state.auth.error);
  const dispatch = useAppDispatch();

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      dispatch(setError("All fields required."));
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        dispatch(setError("User already exists."));
        return;
      } else {
        const res = await fetch("api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });

        if (res.ok) {
          const form = e.target as HTMLFormElement;
          form.reset();
          router.push("/signinPage");
        } else {
          console.log("User registration failed.");
        }
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <>
      <p className="mt-2 text-lg text-gray-600">Please register.</p>
      <form onSubmit={handleSubmit} className="w-full max-w-md mt-8 space-y-6">
        <div>
          <label htmlFor="fullname" className="block text-sm font-bold text-gray-700">
            Full Name
          </label>
          <input
            onChange={(e) => dispatch(setUserName(e.target.value))}
            id="fullname"
            type="text"
            placeholder="Enter your full name"
            className="w-full px-4 py-3 mt-1 border rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-gray-700">
            Email address
          </label>
          <input
            onChange={(e) => dispatch(setUserEmail(e.target.value))}
            id="email"
            type="text"
            placeholder="Enter your email"
            className="w-full px-4 py-3 mt-1 border rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-bold text-gray-700">
            Password
          </label>
          <input
            onChange={(e) => dispatch(setUserPassword(e.target.value))}
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 mt-1 border rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <button
            className="w-full px-4 py-3 text-sm font-bold text-white bg-cyan-400 rounded-md hover:bg-cyan-600 focus:outline-none focus:shadow-outline"
            type="submit">
            Register
          </button>
          <div className="flex justify-end mt-4">
            <Link href={"/signinPage"}>
              <button type="button" className="text-lg text-cyan-600 ">
                Already registered? Sign in
              </button>
            </Link>
          </div>
        </div>
        {error && <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>}
      </form>
    </>
  );
}
