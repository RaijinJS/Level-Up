import profilePic from "../../public/profileButton.svg";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="w-full flex items-center justify-between p-2 bg-white shadow-md">
      <div className="flex-grow text-center pl-20 pr-5">
        <a href="/HomePage" className="inline-block">
          <img
            src="/logo1.png"
            alt="Level Up Logo"
            className="h-20 md:h-28 inline-block"
          />
        </a>
      </div>
      <a href="/Profile" className="flex-shrink-0 pl-4 pr-5">
        {/* TODO: DONE - Make svg a component */}
        <Image src={profilePic} alt="Profile Button" className="h-8 w-8" />
      </a>
    </nav>
  );
}
