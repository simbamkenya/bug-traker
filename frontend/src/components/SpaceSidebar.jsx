import React from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { RiUserSettingsFill } from "react-icons/ri";
import { MdOutlineSettingsBrightness } from "react-icons/md";
import { Link } from "react-router-dom";

function SpaceSidebar(props) {
  return (
    <aside className="bg-blue-300 w-48 min-h-screen">
      <span className="flex items-center gap-2 text-lg py-2 px-4 pt-8 text-white"><IoSettingsSharp/>General</span>   
         <ul className="ml-6">
            <Link to="/space/settings" className="inline-block min-w-full rounded p-2 px-6 hover:bg-gray-100 text-white hover:text-black">Space</Link>
        </ul>  
      <span className="flex items-center gap-2 text-lg py-2 px-4 text-white"><RiUserSettingsFill/>User Settings</span>
          <ul className="ml-6">
            <Link to="/space/user" className="inline-block min-w-full rounded p-2 px-6 hover:bg-gray-100 text-white hover:text-black">User</Link>
            <Link to="/space/team" className="inline-block min-w-full rounded p-2 px-6 hover:bg-gray-100 text-white hover:text-black">Team</Link>
          </ul>
      <span className="flex items-center gap-2 text-lg py-2 px-4 text-white"><MdOutlineSettingsBrightness/>Project Settings</span>
             <ul className="ml-6">
                <Link to="/space/project" className="inline-block min-w-full rounded p-2 px-6 hover:bg-gray-100 text-white hover:text-black">Project</Link>
             </ul>
    </aside>
  );
}

export default SpaceSidebar;
