import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      {/* Left */}
      <div className="flex items-center justify-between max-w-6xl">
        <div className=" cursor-pointer h-24 w-24 relative lg:inline-grid">
          <Image
            src="http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
            fill
            className="object-contain"
          />
        </div>
        <h1>right sides</h1>
      </div>

      {/*Middle */}

      {/*Right */}
    </div>
  );
};

export default Header;
