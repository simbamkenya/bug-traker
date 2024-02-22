import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import useComponentVisible from "../hooks/useComponentVisible";
import { Tooltip } from "react-tooltip";
import { IoSettingsSharp } from "react-icons/io5";
import { GoProject } from "react-icons/go";
import AddModalProject from "./AddModalProject";
import AddModalUser from "./AddModalUser";
import { FaCaretLeft } from "react-icons/fa6";

import { IoNotifications } from "react-icons/io5";
import { RiProjectorFill } from "react-icons/ri";
// import { TiTick } from "react-icons/ti";

function MainNavBar(props) {
  const [dropVisible, setDropVisible] = useState(false);
  const {
    ref,
    addRef,
    spaceRef,
    profileRef,
    notificationRef,
    isComponentVisible,
    setIsComponentVisible,
    isSecondComponentVisible,
    setIsSecondComponentVisible,
    setIsProfileComponentVisible,
    setIsNotificationComponentVisible,
    isNotificationComponentVisible,
    isProfileComponentVisible,
    isSpaceComponentVisible,
    setIsSpaceComponentVisible,
  } = useComponentVisible(false, false, false, false, false);

  const searchRef = useRef(null);
  console.log("ref", isNotificationComponentVisible);
  const showDropDownAdd = () => {
    //setDropVisible(true)
    setIsSecondComponentVisible(true);
  };

  const showDropDown = () => {
    //setDropVisible(true)
    setIsComponentVisible(true);
  };
  return (
    <nav className="flex p-2 bg-gray-200 relative">
      <ul className="flex gap-2">
        <Link
          to="/dashboard"
          className="py-2 px-2 text-sm rounded-sm hover:bg-green-300"
        >
          Dashboard
        </Link>
        <Link
          onClick={showDropDown}
          ref={ref}
          className="relative py-2 px-2 text-sm rounded-sm hover:bg-green-300"
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

        <Link className="py-2 px-2 text-sm rounded-sm hover:bg-green-300">
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
          className="flex relative my-auto items-center justify-center h-6 w-6  rounded-full bg-blue-300"
        >
          <a className="add">
            <span className="text-2xl flex items-center text-white mb-[4px] items-center">
              +
            </span>
          </a>
          <div
            className={`absolute w-32 top-12 rounded-md shadow-lg ${
              isSecondComponentVisible ? "absolute" : "hidden"
            }`}
          >
            <ul className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm">
              <li className="whitespace-nowrap rounded-sm  text-sm text-left px-2 py-[4px] hover:bg-green-300">
                <Link className="" to="/projects/addissue">
                  Add Issue
                </Link>
              </li>
              <li className="whitespace-nowrap rounded-sm  text-left px-2 py-[4px] text-sm hover:bg-green-300">
                <Link to="">Add Project</Link>
              </li>
              <li className="whitespace-nowrap rounded-sm px-2 py-[4px] text-left text-sm hover:bg-green-300">
                <Link to="">Add User</Link>
              </li>
            </ul>
          </div>
        </Link>
      </ul>
      <div className="ml-auto flex items-center  mx-8">
        <div onClick={() => setIsNotificationComponentVisible(true)} className="text-4xl p-2 rounded-full h-10 w-10 flex items-center justify-center mr-2 text-green-800 transition-all hover:bg-gray-400 hover:opacity-70 hover:text-green-900">
          <IoNotifications />
        </div>

        <div className="bg-red-600 h-8 w-8  flex items-center justify-center text-white rounded-full">
          S
        </div>
        <div
          ref={profileRef}
          onClick={() => setIsProfileComponentVisible(true)}
          className="relative flex justify-center  w-8 ml-auto text-lg hover:text-green-600"
        >
          <span className="-rotate-90">
            <FaCaretLeft />
          </span>
          <ul
            className={`${
              isProfileComponentVisible ? "block" : "hidden "
            } border-slate-400 px-4 py-2 absolute bg-white text-sm top-7 left-0 w-40 shadow-md rounded`}
          >
            <p className="text-slate-400 text-sm py-2 px-2">Hello, simba</p>
            <li className="whitespace-nowrap rounded-sm px-2 py-[4px] text-left text-sm hover:bg-green-300">
              <Link to="">Activities</Link>
            </li>
            <li className="whitespace-nowrap rounded-sm px-2 py-[4px] text-left text-sm hover:bg-green-300">
              <Link to="">Gantt Chart</Link>
            </li>
            <li className="whitespace-nowrap rounded-sm px-2 py-[4px] text-left text-sm hover:bg-green-300">
              <Link to="">Personal Setting</Link>
            </li>
            <li className="whitespace-nowrap rounded-sm px-2 py-[4px] text-left text-sm hover:bg-green-300">
              <Link to="">Space Setting</Link>
            </li>
          </ul>
        </div>
        <div className=" border-slate-400 border-l-[2px] px-2">
          <div
            ref={spaceRef}
            onClick={() => setIsSpaceComponentVisible(true)}
            className="flex relative items-center justify-center hover:text-green-800 cursor-pointer"
          >
            <span className="text-2xl">
              <RiProjectorFill />
            </span>

            <span className="text-lg my-auto ml-2 hover:text-slate-900 text-slate-400">
              simba
            </span>
            <div
              className={`${
                isSpaceComponentVisible ? "absolute" : "hidden "
              }  top-10 bg-white shadow-md border-slate-400 rounded p-2`}
            >
              <div className="flex flex-col rela tive items-center justify-center hover:text-green-800 cursor-pointer">
                <div className="w-40 flex items-center border-b py-2">
                  <span className="text-2xl">
                    <RiProjectorFill />
                  </span>

                  <div className="text-sm flex items-center w-full ml-2 hover:text-slate-900 text-slate-400">
                    simba
                  </div>
                  <div className="px-4">
                    {/* <TiTick /> */}
                    <svg
                      width="10px"
                      height="10px"
                      viewBox="0 0 16 16"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <path
                        fill="black"
                        d="M0,9.014L1.414,7.6L5.004,11.189L14.593,1.6L16.007,3.014L5.003,14.017L0,9.014Z"
                      />
                    </svg>
                  </div>
                </div>

                <ul className="py-2 bg-white text-sm w-40">
                  <li className="whitespace-nowrap border-b rounded-sm px-2 pb-2 py-[4px] text-left text-sm hover:bg-green-300">
                    <Link to="">Organization settings</Link>
                  </li>
                  <li className="whitespace-nowrap rounded-sm px-2 py-[4px] text-left text-sm hover:bg-green-300">
                    <Link to="">Activities</Link>
                  </li>
                  <li className="whitespace-nowrap rounded-sm px-2 py-[4px] text-left text-sm hover:bg-green-300">
                    <Link to="">My Profile</Link>
                  </li>
                  <li className="whitespace-nowrap rounded-sm px-2 py-[4px] text-left text-sm hover:bg-red-300">
                    <Link to="">Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={notificationRef} className={`${isNotificationComponentVisible ? 'absolute' : 'hidden'} min-h-screen w-1/3 right-0 bg-gray-400 absolute top-10 rounded shadow-md`}>
        <div className="flex items-center justify-between bg-green-800 px-4 py-2">
          <p className="text-lg font-bold text-white">Notifications</p>
          <div className="flex items-center justify-center h-8 w-8 hover:bg-gray-500 rounded-full">
            <svg
              fill="#f2f2f2"
              width="20px"
              height="20px"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setIsNotificationComponentVisible(false)}
            >
              <path
                stroke="#f2f2f2"
                stroke-width="2"
                stroke-linecap="round"
                d="M797.32 985.882 344.772 1438.43l188.561 188.562 452.549-452.549 452.548 452.549 188.562-188.562-452.549-452.548 452.549-452.549-188.562-188.561L985.882 797.32 533.333 344.772 344.772 533.333z"
              />
            </svg>
          </div>
        </div>
        <div className="px-2 bg-white min-h-screen">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            iure aliquid nesciunt illo voluptatum ratione quaerat quod accusamus
            officia pariatur quidem iste cum ea, dolor sapiente harum animi
            culpa qui? Tempora quis nemo enim mollitia, excepturi beatae, ipsum
            nesciunt vero labore error quisquam, accusantium laudantium ad
            deserunt aperiam sapiente adipisci rerum ut. At saepe iste eligendi
            alias provident voluptas. Alias deleniti atque quo blanditiis
            aperiam ducimus temporibus reiciendis ipsum, eaque nulla iusto?
            Facere debitis tenetur itaque alias illum ipsa vel excepturi,
            possimus commodi ab dolore eius suscipit, obcaecati consequatur
            perspiciatis quaerat quo. Repellat eos commodi dolore, debitis quos
            beatae possimus.
          </p>
        </div>
      </div>
    </nav>
  );
}

export default MainNavBar;
