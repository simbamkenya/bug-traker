import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import useComponentVisible from "../hooks/useComponentVisible";
import { Tooltip } from "react-tooltip";
import { IoSettingsSharp } from "react-icons/io5";
import { GoProject } from "react-icons/go";

function MainNavBar(props) {
  const [dropVisible, setDropVisible] = useState(false);
  const { ref, addRef, isComponentVisible, setIsComponentVisible, isSecondComponentVisible, setIsSecondComponentVisible } =
    useComponentVisible(false, false);

  const searchRef = useRef(null);
  console.log('ref', isSecondComponentVisible)
  const showDropDownAdd = () => {
    //setDropVisible(true)
    setIsSecondComponentVisible(true)
  };

  const showDropDown = () => {
    //setDropVisible(true)
    setIsComponentVisible(true);
  };
  return (
    <nav className="p-2 bg-gray-200">
      <ul className="flex gap-2">
        <Link
          to="/dashboard"
          className="py-2 px-2 text-sm rounded-sm hover:bg-green-100"
        >
          Dashboard
        </Link>
        <Link
          onClick={showDropDown}
          ref={ref}
          className="relative py-2 px-2 text-sm rounded-sm hover:bg-green-100"
        >
          Projects
          <div
            className={`absolute w-96 top-12 ${
              isComponentVisible ? "absolute" : "hidden"
            }`}
          >
            <div className="w-full border rounded-md shadow-sm">
              <div className="p-2 text-sm font-bold bg-blue-200">Projects</div>
              <div class="relative border-b-2">
                <input
                  class="text-sm appearance-none pl-10 border-gray-300 hover:border-gray-400 transition-colors w-full py-2 px-2 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  ref={searchRef}
                  onClick={() => {}}
                  placeholder="Search..."
                />
                <div
                  class={`absolute right-0 inset-y-0 flex items-center ${
                    true ? "" : "hidden"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>

                <div class="absolute left-0 inset-y-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={""}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="relative p-2 flex items-center bg-gray-100 border-slate-100">
                <div className="text-4xl flex items-center mr-2 fill-white">
                  <GoProject />
                </div>
                <div className="flex flex-col ">
                  <span className="font-medium px-2 mb-[2px]">bugtracker</span>
                  {/* <span className="px-2 font-light uppercase text-xs">bugtracker</span> */}
                  <div className="flex text-sm font-light">
                    <Link className="px-2 hover:bg-green-600" to="">
                      Add Issue
                    </Link>
                    <Link className="px-2 hover:bg-green-600" to="">
                      Issues
                    </Link>
                  </div>
                  <div className="text-xl absolute top-2 right-2">
                    <a className="my-anchor-element">
                      <IoSettingsSharp />
                    </a>
                    <Tooltip
                      style={{
                        paddingBlock: "0px",
                        paddingInline: "6px",
                        fontSize: "14px",
                      }}
                      anchorSelect=".my-anchor-element"
                      place="top"
                    >
                      Project Setting
                    </Tooltip>
                  </div>
                </div>
              </div>
              <div></div>
              {/* <ul className=" p-2.5 text-gray-500 bg-white ">yy
                  <li className="whitespace-nowrap rounded-sm  text-sm text-left px-2 py-[4px] hover:bg-gray-200">
                    <Link className="">Add Item</Link>
                  </li>
                  <li className="whitespace-nowrap rounded-sm  text-left px-2 py-[4px] text-sm hover:bg-gray-200">
                    <Link>Add Project</Link>
                  </li>
                  <li className="whitespace-nowrap rounded-sm px-2 py-[4px] text-left text-sm hover:bg-gray-200">
                    <Link>Add User</Link>
                  </li>
                </ul> */}
            </div>
          </div>
        </Link>

        <Link className="py-2 px-2 text-sm rounded-sm hover:bg-green-100">
          Recently Viewed
        </Link>
        <Tooltip
          style={{
            paddingBlock: "0px",
            paddingInline: "6px",
            fontSize: "14px",
          }}
          anchorSelect=".add"
          place="bottom"
        >
          Add
        </Tooltip>
        <Link
          onClick={showDropDownAdd}
          ref={addRef}
          className="flex relative my-auto items-center justify-center h-6 w-6  rounded-full bg-blue-300 hover:bg-blue-200"
        >
          <a className="add">
            <span className="text-2xl flex items-center text-white mb-[4px] items-center">
              +
            </span>
          </a>
          <div
            className={`absolute w-32 top-12 ${
              isSecondComponentVisible ? "absolute" : "hidden"
            }`}
          >
            <ul className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm">
              <li className="whitespace-nowrap rounded-sm  text-sm text-left px-2 py-[4px] hover:bg-gray-200">
                <Link className="">Add Issue</Link>
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
  );
}

export default MainNavBar;
