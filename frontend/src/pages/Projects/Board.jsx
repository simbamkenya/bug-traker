import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";
import { FaDiagramProject } from "react-icons/fa6";
import { useRef } from "react";
import { FaCaretLeft } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchProjectById } from "../../store/features/projectSlice";
import { fetchProjects } from "../../store/features/projectsSlice";
import { fetchIssues } from "../../store/features/issuesSlice";
import * as d3 from "d3";
import useComponentVisible from "../../hooks/useComponentVisible";

function Board(props) {
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
  const dispatch = useDispatch();
  const { id } = useParams();

  //active project
  const project = useSelector((state) => state.project.data);
  const projects = useSelector((state) => state.projects.data);
  const activeProject =
    projects.find((activepro) => activepro.id !== project.id) ?? [];

  let issues = activeProject.issues ?? [];

  const issuesOrganizedByStatus = issues.reduce(
    (map, e) => ({
      ...map,
      [e.status]: [...(map[e.status] ?? []), e],
    }),
    {}
  );

  console.log("issues", issuesOrganizedByStatus);

  let openIssues = issuesOrganizedByStatus["Open"] ?? [];
  let closedIssues = issuesOrganizedByStatus["Closed"] ?? [];
  let inProgressIssues = issuesOrganizedByStatus["In Progress"] ?? [];
  let revokedIssues = issuesOrganizedByStatus["Revoked"] ?? [];
  console.log("pro", inProgressIssues);

  useEffect(() => {
    dispatch(fetchIssues());
    dispatch(fetchProjectById(id));
    dispatch(fetchProjects());
  }, []);

  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1">
        <div className="bg-pink-200">
          <div className="font-medium flex items-center">
            <div className="ml-4 text-md">
              <FaDiagramProject />
            </div>
            <Link to="" className="text-sm uppercase mr-2 py-4  ml-2">
              {project.name}
            </Link>
            <div class="relative ml-auto mr-2">
              <input
                class="text-sm appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-full w-full py-2 px-2 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                ref={searchRef}
                onClick={""}
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
                  onClick={() => {}}
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
        <div className="mx-4 my-2 rounded">
          <div className="font-bold py-3">Board</div>
          <div className="">
            <div className="flex gap-2 px-2 py-6">
              <div ref={ref} className="flex flex-col flex-start">
                <span
                  for="countries"
                  class="block mb-2 text-sm  text-gray-900 dark:text-gray-400"
                >
                  Type
                </span>
                <button
                  onClick={() => setIsComponentVisible(true)}
                  className="py-2 px-4 min-w-40 rounded-sm hover:bg-blue-400 bg-blue-100 hover:text-gray-200"
                >
                  <div className="flex justify-center -rotate-90 w-8 ml-auto text-2xl">
                    <FaCaretLeft />
                  </div>
                </button>
                <div
                  className={`${
                    isComponentVisible ? "block" : "hidden"
                  } bg-white min-h-24 p-2 shadow-md rounded-sm -mt-[2px]`}
                >
                  <input
                    type="text"
                    className="w-full border border-gray-300 py-[3px] outline-none px-2"
                  />
                  <div className="mt-2">
                    <div className="hover:bg-gray-300 text-gray-800  text-sm rounded-md text-white px-2 py-[4px]">
                      Text One
                    </div>
                    <div className="hover:bg-gray-300 rounded-md text-sm text-gray-800 px-2 py-[4px]">
                      Text One
                    </div>
                  </div>
                </div>
              </div>
              <div ref={spaceRef} className="flex flex-col flex-start">
                <span
                  for="countries"
                  class="block mb-2 text-sm font-light text-gray-900 dark:text-gray-400"
                >
                  Assignee
                </span>
                <button
                  onClick={() => setIsSpaceComponentVisible(true)}
                  className="py-2 px-4 min-w-40 rounded-sm hover:bg-blue-400 bg-blue-100 hover:text-gray-200"
                >
                  <div className="flex justify-center -rotate-90 w-8 ml-auto text-2xl">
                    <FaCaretLeft />
                  </div>
                </button>
                <div
                  className={`${
                    isSpaceComponentVisible ? "block" : "hidden"
                  } bg-white min-h-24 p-2 shadow-md rounded-sm -mt-[2px]`}
                >
                  <input
                    type="text"
                    className="w-full border border-gray-300 py-[3px] outline-none px-2"
                  />
                  <div className="mt-2">
                    <div className="hover:bg-gray-300 text-gray-800  text-sm rounded-md text-white px-2 py-[4px]">
                      Text One
                    </div>
                    <div className="hover:bg-gray-300 rounded-md text-sm text-gray-800 px-2 py-[4px]">
                      Text One
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex-1 ">
              <div className="font-bold text-md py-2 flex items-center">
                <div className="h-3 w-3 p-2  bg-red-400 rounded-full mr-2 inline-block"></div>
                Open
                <span className="px-4 bg-gray-300 inline-block rounded-full ml-2">
                  2
                </span>
              </div>
              <div className="bg-white rounded p-4 min-h-96 ">
                <a
                  href="#"
                  className="flex items-center text-sm text-green-400"
                >
                  <span className="text-sm mr-[2px]">
                    <IoMdAdd />
                  </span>
                  Add Issue...
                </a>
                {openIssues &&
                  openIssues.map((issue) => (
                    <div className="flex flex-col border border-gray-200 p-2 mt-2 hover:shadow-lg">
                      <a
                        href="#"
                        className="text-sm uppercase text-blue-800 hover:underline"
                      >
                        {issue.subject}
                      </a>
                      <span className="text-sm py-[4px]">
                        {issue.description}
                      </span>
                      <div className="flex items-center">
                        <div className="flex items-center justify-center text-xs text-white w-6 h-6 rounded-full bg-red-300 mr-2">
                          O
                        </div>
                        <span className="text-xs">Set due date</span>
                      </div>
                    </div>
                  ))}
                <div className="flex flex-col border border-gray-200 p-2 mt-2 hover:shadow-lg">
                  <a
                    href="#"
                    className="text-sm uppercase text-blue-800 hover:underline"
                  >
                    BugTracker-2
                  </a>
                  <span className="text-sm py-[4px]">
                    Lorem ipsum dolor, sit amet
                  </span>
                  <div className="flex items-center">
                    <div className="flex items-center justify-center text-xs text-white w-6 h-6 rounded-full bg-red-300 mr-2">
                      *
                    </div>
                    <span className="text-xs">Set due date</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 ">
              <div className="font-bold text-md py-2 flex items-center">
                <div className="h-3 w-3 p-2  bg-blue-400 rounded-full mr-2 inline-block"></div>
                In Progress
                <span className="px-4 bg-gray-300 inline-block rounded-full ml-2">
                  {inProgressIssues.length}
                </span>
              </div>
              <div className="bg-white rounded p-4 min-h-96">
                {inProgressIssues &&
                  inProgressIssues.map((issue) => (
                    <div className="flex flex-col border border-gray-200 p-2 mt-2 hover:shadow-lg">
                      <a
                        href="#"
                        className="text-sm uppercase text-blue-800 hover:underline"
                      >
                        {issue.subject}
                      </a>
                      <span className="text-sm py-[4px]">
                        {issue.description}
                      </span>
                      <div className="flex items-center">
                        <div className="flex items-center justify-center text-xs text-white w-6 h-6 rounded-full bg-red-300 mr-2">
                          O
                        </div>
                        <span className="text-xs">Set due date</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="flex-1 ">
              <div className="font-bold text-md py-2 flex items-center">
                <div className="h-3 w-3 p-2  bg-green-400 rounded-full mr-2 inline-block"></div>
                Closed
                <span className="px-4 bg-gray-300 inline-block rounded-full ml-2">
                  {closedIssues.length}
                </span>
              </div>
              <div className="bg-white rounded p-4 min-h-96">
                {closedIssues &&
                  closedIssues.map((issue) => (
                    <div className="flex flex-col border border-gray-200 p-2 mt-2 hover:shadow-lg">
                      <a
                        href="#"
                        className="text-sm uppercase text-blue-800 hover:underline"
                      >
                        {issue.subject}
                      </a>
                      <span className="text-sm py-[4px]">
                        {issue.description}
                      </span>
                      <div className="flex items-center">
                        <div className="flex items-center justify-center text-xs text-white w-6 h-6 rounded-full bg-red-300 mr-2">
                          O
                        </div>
                        <span className="text-xs">Set due date</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="flex-1 ">
              <div className="font-bold text-md py-2 flex items-center">
                <div className="h-3 w-3 p-2  bg-yellow-200 rounded-full mr-2 inline-block"></div>
                Revoked
                <span className="px-4 bg-gray-300 inline-block rounded-full ml-2">
                  {revokedIssues.length}
                </span>
              </div>
              <div className="bg-white rounded p-4 min-h-96">
                {revokedIssues &&
                  revokedIssues.map((issue) => (
                    <div className="flex flex-col border border-gray-200 p-2 mt-2 hover:shadow-lg">
                      <a
                        href="#"
                        className="text-sm uppercase text-blue-800 hover:underline"
                      >
                        {issue.subject}
                      </a>
                      <span className="text-sm py-[4px]">
                        {issue.description}
                      </span>
                      <div className="flex items-center">
                        <div className="flex items-center justify-center text-xs text-white w-6 h-6 rounded-full bg-red-300 mr-2">
                          O
                        </div>
                        <span className="text-xs">Set due date</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Board;
