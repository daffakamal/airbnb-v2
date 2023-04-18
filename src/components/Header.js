import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400">
          <input
            className="h-full p-2 px-4 w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
            type="text"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>
      </div>
      {/* Bottom Nav */}
      <div></div>
    </header>
  );
}

export default Header;
