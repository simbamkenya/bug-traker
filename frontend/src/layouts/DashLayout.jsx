import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import useComponentVisible from "../hooks/useComponentVisible"

function DashLayout(props) {
  const [dropVisible, setDropVisible] = useState(false)
  const { ref, isComponentVisible, setIsComponentVisible } =   useComponentVisible(true);
  console.log(isComponentVisible)

  const showDropDown = () => {
    //setDropVisible(true)
   setIsComponentVisible(true)
  }
  return (
    <div>
      <nav className="p-2 bg-gray-200">
        <ul className="flex gap-2">
          <Link className="py-4 px-2 text-sm rounded-sm hover:bg-green-100">
            Dashboard
          </Link>
          <Link className="py-4 px-2 text-sm rounded-sm hover:bg-green-100">
            Projects
          </Link>
          <Link className="py-4 px-2 text-sm rounded-sm hover:bg-green-100">
            Recently Viewed
          </Link>
          <Link onClick={showDropDown} ref={ref} className="flex relative my-auto items-center justify-center h-8 w-8 rounded-full bg-blue-300">
            <span className="text-2xl">+</span>
            <div className={`absolute w-32 top-12 ${isComponentVisible ? 'absolute' : 'hidden'}`}>
            <ul className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm">
              <li className="whitespace-nowrap rounded-sm  text-sm text-left px-2 py-[4px] hover:bg-gray-200">
                <Link className="">Add Item</Link>
              </li>
              <li className="whitespace-nowrap rounded-sm  text-left px-2 py-[4px] text-sm hover:bg-gray-200">
                <Link>Add Project</Link>
              </li>
              <li className="whitespace-nowrap rounded-sm px-2 py-[4px] text-left text-sm hover:bg-gray-200">
                <Link>Add User</Link>
              </li>
            </ul>
          </div>
          </Link>
          
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default DashLayout;
