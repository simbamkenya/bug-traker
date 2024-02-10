import React from "react";
import SpaceSidebar from "../../components/SpaceSidebar";

function UserSetting(props) {
  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      <SpaceSidebar />
      <main className="flex-1">
        <div className="px-4 py-2">
        <h2 className=" text-lg"><span className="font-bold">Lists of Users </span><span className="rounded-full px-2 text-xs bg-gray-300">2 users</span></h2>

        </div>
      </main>
    </div>
  );
}

export default UserSetting;
