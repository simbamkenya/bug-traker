import React, { useEffect, useRef, useState } from "react";
import { IoIosSettings } from "react-icons/io";
import { RxCaretRight } from "react-icons/rx";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { GoProject } from "react-icons/go";
import { IoSettingsSharp } from "react-icons/io5";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router-dom";
import AddModalProject from "../components/AddModalProject";
import AddModalUser from "../components/AddModalUser";

import { RiProjectorFill } from "react-icons/ri";

import { useSelector, useDispatch } from "react-redux";
import { fetchUserById } from "../store/features/userSlice";

import { fetchProjects } from "../store/features/projectsSlice";

function Dashboard(props) {
  const [openProjects, setOpenProjects] = useState(false);
  const [openIssues, setOpenIssues] = useState(false);
  const [openUpdates, setOpenUpdates] = useState(false);

  const [showCancelIcon, setShowCancelIcon] = useState(true);

  let searchRef = useRef(null);
  let navigate = useNavigate();

  //spaces
  const spaces = useSelector((state) => state.spaces);
  console.log("spaces", spaces);
  //issues
  const issues = useSelector((state) => state.issues);

  const auth = useSelector((state) => state.auth);

  const projects = useSelector((state) => state.projects.data);
  console.log("ro", projects);

  //fetch user
  const user = useSelector((state) => state.user);
  console.log("user", user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserById(""));
    dispatch(fetchProjects());
  }, [auth]);

  console.log("auth", auth);

  //filtering by due date all/5days/due today/overdue

  const filterByDate = function (data, par) {
    data.filter((issue) => issue);
    return data;
  };

  const filterByAssignee = function (data, rr) {
    data.filter((issue) => issue);
  };

  const filterByCreator = function (data, rr) {
    data.filter((issue) => issue);
  };

  const formatTime = function (date, notificationTime) {
    let time = Date.now() - new Date(date);

    if (time <= 5 * 1000) {
      //now
      return `now`;
    } else if (time >= 5 * 1000 && time <= 30 * 1000) {
      //10-20-30
      time / 1000;
      return time;
    } else if (time >= 60 * 1000 && time <= 60 * 60 * 1000) {
      (time / 1000) * 60;
      //minutes
      return time;
    } else if (time >= 60 * 1000 && time <= 60 * 60 * 1000) {
      //hours
      return time;
    } else if (time >= 60 * 1000 && time <= 60 * 60 * 1000) {
      //days
      return time;
    } else if (time >= 60 * 1000 && time <= 60 * 60 * 1000) {
      //months
      return;
    } else if (time >= 365 * 24 * 60 * 60 * 1000) {
      //years
      time / (365 * 24 * 60 * 60 * 1000);
      return;
    }
    return time;
  };

  const focus = () => {
    console.log("clicked", searchRef.current.focus());
    setShowCancelIcon(!showCancelIcon);

    searchRef.current.classList.toggle("w-0");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-center items-end py-4">
        <div className="relative">
          {<AddModalUser />}
          {<AddModalProject />}
        </div>

        <span className="flex items-center text-4xl text-green-800 mr-2">
          <RiProjectorFill />
        </span>
        <span className="font-bold text-2xl mr-2">Simba</span>
        <div
          onClick={() => navigate("/space/settings")}
          className="my-anchor-element text-2xl h-8 w-8 p-[0.5] rounded-full border-2 flex items-center justify-center hover:bg-blue-200 hover:text-white"
        >
          <IoIosSettings />
        </div>
        <Tooltip
          style={{
            paddingBlock: "0px",
            paddingInline: "6px",
            fontSize: "14px",
          }}
          anchorSelect=".my-anchor-element"
          place="top"
        >
          Space Setting
        </Tooltip>
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
          **
          {projects &&
            projects.map((project) => (
              <div
                onClick={() => navigate(`/projects/${project.id}`)}
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
                    <span className="font-medium px-2 mb-[2px]">
                      {project.name}
                    </span>
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
              </div>
            ))}
          **
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
                  "border-2 bg-white hover:bg-blue-200 min-w-full",
                  {
                    hidden: !openIssues,
                  }
                )}
              >
                <div className="p-2">
                  <div className="">
                    <div className="text-sm pb-2">
                      <span className="font-medium mr-2">Filter:</span>
                      <span className="px-2 py-[1.5] mr-2 bg-green-200 rounded-full">
                        Assigned to me (1)
                      </span>
                      <span className="px-2 py-[1.5] bg-green-200 rounded-full">
                        Created by me (1)
                      </span>
                    </div>
                    <div className="text-sm flex">
                      <span className="font-medium mr-2">Due Date:</span>
                      <span className="px-2 py-[1.5] mr-2 bg-green-200 rounded-full">
                        All
                      </span>
                      <span className="px-2 py-[1.5] mr-2 bg-green-200 rounded-full">
                        5 Days (0)
                      </span>
                      <span className="px-2 py-[1.5] mr-2 bg-green-200 rounded-full">
                        Due Today (0)
                      </span>
                      <span className="px-2 py-[1.5] mr-2 bg-green-200 rounded-full">
                        Overdue (0)
                      </span>
                    </div>
                  </div>
                  <div class="mt-2">
                    <div class="border-b border-gray-200 shadow">
                      <table class="divide-y divide-green-400 w-full">
                        <thead class="bg-gray-50">
                          <tr>
                            <th class="px-6 py-2 text-xs text-left text-gray-500">
                              ID
                            </th>
                            <th class="px-6 py-2 text-xs text-left text-gray-500">
                              Bug Title
                            </th>
                            <th class="px-6 py-2 text-xs text-left text-gray-500">
                              Bug Severity
                            </th>
                            <th class="px-6 py-2 text-xs text-left text-gray-500">
                              Bug Priority
                            </th>
                            <th class="px-6 py-2 text-xs text-left text-gray-500">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-300">
                          {[
                            {
                              id: 1,
                              title: "Nav unresponsive",
                              severity: "critical",
                              priority: "low",
                            },
                          ].map((bug) => (
                            <tr key={bug.id} class="whitespace-nowrap">
                              <td class="px-6 py-4 text-sm text-gray-500">
                                {bug.id}
                              </td>
                              <td class="px-6 py-4">
                                <div class="text-sm text-gray-900">
                                  {bug.title}
                                </div>
                              </td>
                              <td class="px-6 py-4">
                                <div class="text-sm text-gray-500">
                                  {bug.severity}
                                </div>
                              </td>
                              <td class="px-6 py-4 text-sm text-gray-500">
                                <span
                                  className={`${
                                    bug.priority === "high"
                                      ? "bg-red-400"
                                      : "bg-red-100"
                                  } + px-2 rounded`}
                                >
                                  {bug.priority}
                                </span>
                              </td>
                              <td class="px-6 py-4">active</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
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
              className={classNames(" min-w-full", {
                hidden: !openUpdates,
              })}
            >
              <div className="">
                <div className="border-2 rounded bg-white mb-2">
                  <div className="border-b-2 p-2 font-bold">Fri Feb. 2024</div>
                  <div className="flex p-2">
                    <div className="flex flex-start  mr-2">
                      <img
                        className="w-16 h-16 rounded-full"
                        src="https://i.pravatar.cc/100"
                        alt=""
                        srcset=""
                      />
                    </div>
                    <div className="">
                      <div className="py-2">
                        Phares edited
                        <span className="inline-block mx-[2px] px-[5.5px] text-xs bg-green-400 rounded-full">
                          members
                        </span>
                        of this project
                        <span className="ml-auto text-sm">a day ago</span>
                      </div>
                      <div className="font-medium">
                        <Link to="" className="text-sm uppercase mr-2">
                          Project name
                        </Link>{" "}
                        <span className="text-sm">issue title</span>
                      </div>
                      <span className="text-sm">comment content...</span>
                    </div>
                  </div>
                </div>
                <div className="border-2 rounded bg-white">
                  <div className="border-b-2 p-2 font-bold">
                    Fri Feb. 04, 2024
                  </div>
                  <div className="flex p-2 border-b">
                    <div className="flex flex-start  mr-2">
                      <img
                        className="w-16 h-16 rounded-full"
                        src="https://i.pravatar.cc/100"
                        alt=""
                        srcset=""
                      />
                    </div>
                    <div className="flex-1">
                      <div className="py-2">
                        <div className="flex justify-between">
                          <div className="">
                            Phares added a new
                            <span className="inline-block mx-[2px] text-xs px-[5.5px] bg-green-400 rounded-full">
                              issue
                            </span>
                            of this project
                          </div>
                          <div className="px-4 text-sm">a day ago</div>
                        </div>
                      </div>
                      <div className="font-medium">
                        <Link to="" className="text-sm uppercase mr-2">
                          Project name
                        </Link>
                        <span className="text-sm">issue title</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex p-2">
                    <div className="flex flex-start  mr-2">
                      <img
                        className="w-16 h-16 rounded-full"
                        src="https://i.pravatar.cc/100"
                        alt=""
                        srcset=""
                      />
                    </div>
                    <div className="flex-1">
                      <div className="py-2">
                        <div className="flex justify-between">
                          <div className="">
                            Phares edited
                            <span className="inline-block mx-[2px] text-xs px-[5.5px] bg-red-400 rounded-full">
                              members
                            </span>
                            of this project
                          </div>
                          <div className="px-2 text-sm">a day ago</div>
                        </div>

                        <div>
                          <p className="font-medium text-sm py-[4px]">
                            Projects name
                          </p>
                          <p className="text-sm">
                            simba has been added to the project
                          </p>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
