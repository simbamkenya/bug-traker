import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import { useRef } from "react";
import { FaDiagramProject } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchIssues } from "../../store/features/issuesSlice";
import { deleteIssueById } from "../../store/features/issuesSlice";
import { filterIssues } from "../../store/features/issuesSlice";
import { STATUSES } from "../../constants";
import { useParams } from "react-router-dom";
import { fetchProjectById } from "../../store/features/projectSlice";
import { fetchProjects } from "../../store/features/projectsSlice";

import { filterByProject } from "../../store/features/issuesSlice";


function Issues(props) {
  const searchRef = useRef();
  const dispatch = useDispatch();
  const bugs = useSelector((state) => state.issues.data);
  const {id} = useParams();
  
  //active project
  const project = useSelector((state) => state.project.data);
  const projects = useSelector((state) => state.projects.data);
  const activeProject = projects.find((activepro) => activepro.id !== project.id) ?? [];

  console.log('active pro', activeProject)

  console.log('origin project', project)
//  console.log('projee', projects)

  useEffect(() => {
    dispatch(fetchIssues());
    dispatch(fetchProjectById(id));
    dispatch(fetchProjects())
    dispatch(filterByProject(id))
   
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
        <div className="m-h-48 mx-4 my-2 rounded">
          <div className="font-semibold text-md py-2">Search Conditions</div>
          <div className="py-2">
            <div className="flex gap-2 text-sm py-2 group">
              <span className="font-bold">Status:</span>

              <span className="px-4 inline-block rounded-full group-focus-within:text-red-500">
                All
              </span>
              {STATUSES.map(({ status }) => (
                <div
                  onClick={() => dispatch(filterIssues(status))}
                  className="px-4 inline-block rounded-full  focus:bg-blue-400 hover:text-white"
                >
                  {status}
                </div>
              ))}
            </div>
          </div>
          <div class="w-full">
            <div className="py-2">
              <p className="font-semibold">List of Issues</p>
            </div>
            <div class="border-b border-gray-200 shadow">
              <table class="divide-y divide-green-400 w-full">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-2 text-xs text-gray-500">ID</th>
                    <th class="px-6 py-2 text-xs text-left text-gray-500">
                      Bug Title
                    </th>
                    <th class="px-6 py-2 text-xs text-left text-gray-500">
                      Bug Priority
                    </th>
                    <th class="px-6 py-2 text-xs text-left text-gray-500">
                      Status
                    </th>
                    <th class="px-6 py-2 text-xs text-left text-gray-500">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-300">
                  {activeProject.issues && activeProject.issues.map((bug) => (
                    <tr key={bug.id} class="whitespace-nowrap">
                      <td class="px-6 py-2 text-xs text-gray-500">{bug.id}</td>
                      <td class="px-6 py-2">
                        <div class="text-xs text-gray-900">{bug.subject}</div>
                      </td>
                      <td class="px-6 py-2 text-xs text-gray-500">
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
                      <td class="px-6 py-2 text-xs text-gray-500">
                        {bug.status}
                      </td>
                      <td class="px-6 py-2">
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6 text-red-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            onClick={() => dispatch(deleteIssueById(bug.id))}
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 
                       4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Issues;
