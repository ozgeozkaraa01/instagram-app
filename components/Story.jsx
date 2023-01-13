import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Story = ({ img, username, isUser }) => {
  return (
    <div className="relative group cursor-pointer">
      <img
        className="h-14 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer group:hover:scale-110 transition-transform duration-200 ease-out"
        src={img}
        alt={username}
      ></img>
      {isUser && (
        <FontAwesomeIcon
          icon={faPlus}
          className="h-6 absolute top-4 left-4 text-white"
        />
      )}
      <p className="text-xs w-14 truncate">{username}</p>
    </div>
  );
};

export default Story;
