"use client";

import profilePic from "../../public/profileButton.svg";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import home from "../../public/home.svg";

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="w-full flex items-center justify-between p-2 bg-white shadow-md">
      {pathname === "/HomePage" ? (
        <a href="/Profile" className="pl-4">
          <Image src={profilePic} alt="Profile Button" className="h-10 w-10" />
        </a>
      ) : (
        <a href="/HomePage" className="pl-4 pr-2 md:pr-0" data-testid="homeButton">
          <Image src={home} alt="Home Button" className="h-8 w-8" />
        </a>
      )}
      <a href="/HomePage" className="pl-9">
        <img src="/logo1.png" alt="Level Up Logo" className="h-20 md:h-28" />
      </a>
      <div className="pr-4">
        <a
          onClick={() => signOut()}
          className="cursor-pointer text-white bg-red-600 hover:bg-red-700 px-2 py-2  rounded-lg transition-colors duration-300"
          data-testid="logOutButton"
        >
          Log out
        </a>
      </div>
    </nav>
  );
}
