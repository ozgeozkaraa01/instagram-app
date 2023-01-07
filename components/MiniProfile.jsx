import React from "react";

const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14">
      <img
        className="h-16 rounded-full border p-[2px]"
        src="https://media.licdn.com/dms/image/D4D03AQFCbGuqUohg5w/profile-displayphoto-shrink_800_800/0/1671976917166?e=2147483647&v=beta&t=jqC4evYtmj4UJRpJosBclfifHwWjCLWKzyyDoiWFkuE"
        alt="photo"
      ></img>
      <div className="flex-1 ml-4">
        <h2 className="font-bold">ozgeozkaraa01</h2>
        <h3 className="text-sm text-gray-400">Özge ÖZKARA</h3>
      </div>
      <button className="font-semibold text-blue-400 text-sm">Geçiş Yap</button>
    </div>
  );
};

export default MiniProfile;
