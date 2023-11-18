'use client'
// TODO: Make this server side rendering and make the button a separate client side rendered component
import React from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  const navigateToHome = () => {
    router.push('/signinPage');
  };

  return (
    <div >
      <div className="text-center p-5 rounded-xl ">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600 mb-6">
          THE APP <br/>TO DEVELOP <br/>USELESS <br/>SKILLS
        </h1>
        <p className="mb-8 text-lg text-gray-700 font-semibold">
        Start Wasting Time Today!
         </p>
        <button
          onClick={navigateToHome}
          className="px-6 py-3 text-lg font-bold text-white bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-colors duration-300 shadow-md"
        >
          Ready, Set, Go!
        </button>
      </div>
    </div>
  );
};

export default Page;
