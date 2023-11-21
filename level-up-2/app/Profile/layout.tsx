import React from "react";
import home from "../../public/home.svg";
import Image from "next/image";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: Potentially add more features here after auth, like change password
  return (
    <div>
      <nav className="w-full flex items-center justify-between p-2 bg-white shadow-md">
        <a
          data-testid="homeButton"
          href="/HomePage"
          className="flex-shrink-0 text-blue-600 hover:text-blue-800 pl-4"
        >
          {/* TODO: DONE - turn home icon svg below into component */}
          <Image src={home} alt="Home Button" className="h-8 w-8" />
        </a>

        <div className="flex-grow text-center pl-17 pr-13">
          <a data-testid="logoButton" href="/HomePage" className="inline-block">
            <img
              src="/logo1.png"
              alt="Level Up Logo"
              className="h-20 md:h-28 inline-block"
            />
          </a>
        </div>
        <div className="pr-4">
          <a
            data-testid="logOutButton"
            href="/signinPage"
            className="flex-shrink-0 text-white bg-red-600 hover:bg-red-700 px-2 py-2  rounded-lg transition-colors duration-300"
          >
            Log out
          </a>
        </div>
      </nav>

      <main className="flex flex-col mt-20 grow items-center justify-center mx-auto px-2 ">
        {children}
      </main>
    </div>
  );
}
