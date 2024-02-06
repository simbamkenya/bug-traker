import React from "react";
import Sidebar from "../../components/Sidebar";
import Gantt from "../../components/Gantt";
import { FaDiagramProject } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useRef } from "react";

function GnattChart(props) {
  const searchRef = useRef(null);
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
        <div className="border-2 mx-4 my-2 rounded">
          <Gantt />
        </div>
      </main>
    </div>
  );
}

export default GnattChart;
