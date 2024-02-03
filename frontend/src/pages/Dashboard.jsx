import React, { useRef, useState } from "react";
import { IoIosSettings } from "react-icons/io";
import { RxCaretRight } from "react-icons/rx";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { GoProject } from "react-icons/go";
import { IoSettingsSharp } from "react-icons/io5";
import { Tooltip } from "react-tooltip";

function Dashboard(props) {
  const [openProjects, setOpenProjects] = useState(false);
  const [openIssues, setOpenIssues] = useState(false);
  const [openUpdates, setOpenUpdates] = useState(false);

  const [showCancelIcon, setShowCancelIcon] = useState(true);

  let searchRef = useRef(null);

  const focus = () => {
    console.log("clicked", searchRef.current.focus());
    setShowCancelIcon(!showCancelIcon);

    searchRef.current.classList.toggle("w-0");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-center py-4">
        <span className="font-bold text-2xl mr-2">Simba</span>
        <div className="text-3xl h-8 w-8 p-[0.5] rounded-full border-2 flex items-center justify-center">
          <IoIosSettings />
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-2 py-8 px-4">
        <div
          className={`transition-all duration-1000 ${
            openIssues || openProjects ? "md:w-3/4" : "md:w-1/4"
          }`}
        >
          <div className="flex justify-between">
            <input
              id="expandCollapse"
              className="hidden"
              type="checkbox"
              checked={openProjects}
              onClick={() => setOpenProjects(!openProjects)}
            />
            {/* {{ label }} */}
            <label
              className="flex space-between font-bold text-xl"
              htmlFor="expandCollapse"
            >
              <div className="flex">
                <div
                  className={`font-extrabold text-3xl ease-out duration-300 ${
                    openProjects ? "rotate-90" : ""
                  }`}
                >
                  <RxCaretRight />
                </div>
                Projects
              </div>
            </label>
            {/* {btn and search} */}
            <div
              className={`${
                openProjects ? "flex" : "hidden"
              } transition-all delay-500 gap-2`}
            >
              <div className="flex items-center">
                <Link className="border-2 flex my-auto items-center justify-center text-2xl h-8 w-8 rounded-full bg-white">
                  +
                </Link>
              </div>
              <div class="relative ">
                <input
                  class="text-sm appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-full w-full py-2 px-2 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  ref={searchRef}
                  onClick={focus}
                  placeholder="Search..."
                />
                <div
                  class={`absolute right-0 inset-y-0 flex items-center ${
                    showCancelIcon ? "" : "hidden"
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
                    onClick={focus}
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
            </div>
          </div>
          <div
            className={classNames(
              "border-2 bg-white hover:bg-blue-600  min-w-full",
              {
                hidden: !openProjects,
              }
            )}
          >
            <div className="relative p-2 flex items-center border-slate-100 hover:text-white">
              <div className="text-5xl flex items-center mr-2 fill-white">
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
                    Issue
                  </Link>
                </div>
                <div className="text-xl absolute top-2 right-2">
                  <a className="my-anchor-element">
                    <IoSettingsSharp />
                  </a>
                  <Tooltip  style={{ paddingBlock: '0px', paddingInline: '6px', fontSize: '14px' }} anchorSelect=".my-anchor-element" place="top">
                    Hello world!
                  </Tooltip>
                  
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="">
              <input
                id="expandCollapseIssues"
                className="hidden"
                type="checkbox"
                checked={openIssues}
                onClick={() => setOpenIssues(!openIssues)}
              />
              <label
                className="flex font-bold text-xl"
                htmlFor="expandCollapseIssues"
              >
                <span
                  className={`font-extrabold text-3xl ease-out duration-300 ${
                    openIssues ? "rotate-90" : ""
                  }`}
                >
                  <RxCaretRight />
                </span>
                My Issues
              </label>

              <div
                className={classNames(
                  "p-8 border-2 bg-white hover:bg-blue-200 min-w-full",
                  {
                    hidden: !openIssues,
                  }
                )}
              ></div>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 ${
            openUpdates ? "md:w-3/4" : "md:w-1/4"
          }`}
        >
          <div>
            <input
              id="expandCollapseUpdates"
              className="hidden"
              type="checkbox"
              checked={openUpdates}
              onClick={() => setOpenUpdates(!openUpdates)}
            />
            <label
              className="flex font-bold text-xl"
              htmlFor="expandCollapseUpdates"
            >
              <span
                className={`font-extrabold text-3xl ease-out duration-300 ${
                  openUpdates ? "rotate-90" : ""
                }`}
              >
                <RxCaretRight />
              </span>
              Recent Updates
            </label>
            <div
              className={classNames(
                "p-8 border-2 bg-white hover:bg-blue-200 min-w-full",
                {
                  hidden: !openUpdates,
                }
              )}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
