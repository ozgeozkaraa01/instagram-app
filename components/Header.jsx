import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="flex items-center justify-between max-w-6xl ">
      {/* Left */}
      <div className=" cursor-pointer h-24 w-24 relative">
        <Image
          src="http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
          alt="photo"
          fill
          className="object-contain"
        />
      </div>

      {/* Middle */}

      <div className="relative mt-1">
        <div className="absolute top-2 left-2">
          <FontAwesomeIcon icon={faSearch} className="h-5 text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Ara"
          className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
        />
      </div>

      {/* Right */}
      <h1>right sides</h1>
    </div>
  );
};

export default Header;
