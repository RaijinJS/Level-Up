import React from "react";
import { NavigateToHomeButton } from "../components/Buttons";

// TODO: DONE - Make this server side rendering and make the button a separate client side rendered component
const Page = () => {
  return (
    <div className="flex flex-col min-h-screen grow items-center justify-center">
      <div className="text-center p-5 rounded-xl">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600 mb-6">
          THE APP <br />
          TO DEVELOP <br />
          USELESS <br />
          SKILLS
        </h1>
        <p className="mb-8 text-lg text-gray-700 font-semibold">Start Wasting Time Today!</p>
        <NavigateToHomeButton />
      </div>
    </div>
  );
};

export default Page;
