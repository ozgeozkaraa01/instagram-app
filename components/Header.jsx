import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import {
  faSearch,
  faHouse,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="shadow border-b sticky top-0 bg-white z-30">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto ">
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
        <div className="flex space-x-4 items-center">
          <FontAwesomeIcon
            icon={faHouse}
            className=" hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transfrom duration-200 ease-out"
          />
          <FontAwesomeIcon
            icon={faCirclePlus}
            className="h-6 cursor-pointer hover:scale-125 transition-transfrom duration-200 ease-out"
          />
          <img
            src="https://media.licdn.com/dms/image/D4D03AQFCbGuqUohg5w/profile-displayphoto-shrink_200_200/0/1671976917166?e=1677715200&v=beta&t=FsfviezFZ3d2WnXTuPZgS5fRUiIKm4Vhiqh7IOMxqHE"
            alt="photo"
            className="h-10 rounded-full cursor-pointer"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
