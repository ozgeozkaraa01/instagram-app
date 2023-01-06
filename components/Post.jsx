import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const Post = ({ img, userImg, caption, username, id }) => {
  return (
    <div className="bg-white my-7 border rounded-md">
      {/* Post Header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt={username}
          className="h-12 rounded-full object-cover border p-1 mr-3"
        />
        <p className="font-bold">{username}</p>
        <FontAwesomeIcon icon={faEllipsis} className="h-5" />
      </div>
      {/* Post Image */}
      <img src={img} alt="photo" className="object-cover w-full"></img>
    </div>
  );
};

export default Post;
