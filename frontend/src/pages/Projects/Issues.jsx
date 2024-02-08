import React from "react";
import Sidebar from "../../components/Sidebar";
import { useRef } from "react";
import { FaDiagramProject } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Issues(props) {
  const searchRef = useRef();
  const bugs = useSelector((state) => state.bugs.data)

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
              Project name
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
        <div className="border-2 m-h-48 mx-4 my-2 rounded">
          <div class="w-full">
            <div class="border-b border-gray-200 shadow">
              <table class="divide-y divide-green-400 w-full">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-2 text-xs text-gray-500">ID</th>
                    <th class="px-6 py-2 text-xs text-left text-gray-500">Bug Title</th>
                    <th class="px-6 py-2 text-xs text-gray-500">
                      Bug Severity
                    </th>
                    <th class="px-6 py-2 text-xs text-gray-500">
                      Bug Priority
                    </th>
                    <th class="px-6 py-2 text-xs text-gray-500">Status</th>
                    <th class="px-6 py-2 text-xs text-gray-500">Delete</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-300">
                  {bugs.map((bug) => (
                    <tr key={bug.id} class="whitespace-nowrap">
                      <td class="px-6 py-4 text-sm text-gray-500">{bug.id}</td>
                      <td class="px-6 py-4">
                        <div class="text-sm text-gray-900">{bug.title}</div>
                      </td>
                      <td class="px-6 py-4">
                        <div class="text-sm text-gray-500">{bug.severity}</div>
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
                      <td class="px-6 py-4">
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6 text-blue-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 
                       2 0 112.828 
                       2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </a>
                      </td>
                      <td class="px-6 py-4">
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6 text-red-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
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
