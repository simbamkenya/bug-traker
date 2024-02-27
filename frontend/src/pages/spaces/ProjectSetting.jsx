import React from "react";
import SpaceSidebar from "../../components/SpaceSidebar";

function ProjectSetting(props) {
  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      <SpaceSidebar />
      <div className="flex-1">
        <div className="px-4 py-2">
          <h2 className=" text-lg"><span className="font-bold">Lists of Projects </span><span className="rounded-full px-2 text-xs bg-gray-300">2 projects</span></h2>
          <div className="flex flex-col gap-4">
            <p className="font-light text-lg pt-6">Space name</p>
            <div className="py-2 px-2 max-w-96 bg-gray-200 border rounded-sm">
              spacename
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSetting;
