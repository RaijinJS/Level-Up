"use client";

//TODO: Add actual auth logic
// TODO: Add register logic

const handleLogin = () => {
  window.location.href = "/HomePage";
};

export default function SignIn() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full px-6 py-8 text-center md:w-1/2 lg:w-1/3">
        <h1 className="text-4xl font-bold text-gray-700">Welcome back!</h1>
        <p className="mt-2 text-lg text-gray-600">Please sign in to your account.</p>
        <form className="w-full max-w-md mt-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 mt-1 border rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-gray-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 mt-1 border rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-bold text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 mt-1 border rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <button
              type="button"
              className="w-full px-4 py-3 text-sm font-bold text-white bg-cyan-400 rounded-md hover:bg-cyan-600 focus:outline-none focus:shadow-outline"
              onClick={handleLogin}>
              Sign In
            </button>
          </div>
          <div className="flex justify-between mt-4">
            <button type="button" className="text-sm text-cyan-600 hover:underline">
              Forgot Password?
            </button>
            <button type="button" className="text-lg text-cyan-600 ">
              Sign Up
            </button>
          </div>
        </form>
      </div>
      {/* TODO: delete below div */}
      <div
        className="hidden w-full bg-cover md:block md:w-1/2"
        style={{ backgroundImage: "url('your-background-image-url.jpg')" }}>
        {/* Background Image (if you have one) */}
      </div>
    </div>
  );
}
