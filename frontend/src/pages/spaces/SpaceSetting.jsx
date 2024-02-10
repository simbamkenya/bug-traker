import React from "react";
import SpaceSidebar from "../../components/SpaceSidebar";

function SpaceSetting(props) {
  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      <SpaceSidebar />
      <main className="flex-1">Space Setting</main>
    </div>
  );
}

export default SpaceSetting;
