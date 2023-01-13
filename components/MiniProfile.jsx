import React from "react";
import { useSession, signOut } from "next-auth/react";

const MiniProfile = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-between mt-14">
      <img
        className="h-16 rounded-full border p-[2px]"
        src={session?.user.image}
        alt="photo"
      ></img>
      <div className="flex-1 ml-4">
        <h2 className="font-bold">{session?.user.username}</h2>
        <h3 className="text-sm text-gray-400">Özge ÖZKARA</h3>
      </div>
      <button onClick={signOut} className="font-semibold text-blue-400 text-sm">
        Geçiş Yap
      </button>
    </div>
  );
};

export default MiniProfile;
