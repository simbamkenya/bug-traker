import React, { useRef, useState } from "react";
import { IoIosSettings } from "react-icons/io";
import { RxCaretRight } from "react-icons/rx";
import classNames from "classnames";
import { Link } from "react-router-dom";

function Dashboard(props) {
  const [openProjects, setOpenProjects] = useState(false);
  const [openIssues, setOpenIssues] = useState(false);
  const [openUpdates, setOpenUpdates] = useState(false);

  let searchFocus = useRef(null);

  const focus = () => {
    searchFocus.current.focus
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-center py-4">
        <span className="font-bold text-2xl mr-2">Simba</span>
        <div className="text-3xl h-8 w-8 p-[0.5] rounded-full border-2 flex items-center justify-center">
          <IoIosSettings />
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-2 py-8 px-4 bg-green-100">
        <div
          className={`transition-all duration-1000 border-4 bg-green-200 ${
            openIssues || openProjects ? "md:w-3/4" : "md:w-1/4"
          }`}
        >
          <input
            id="expandCollapse"
            className="hidden"
            type="checkbox"
            checked={openProjects}
            onClick={() => setOpenProjects(!openProjects)}
          />

          <label
            className="flex justify-between font-bold text-xl"
            htmlFor="expandCollapse"
          >
            <div className="flex">
              <span
                className={`font-extrabold text-3xl ease-out duration-300 ${
                  openProjects ? "rotate-90" : ""
                }`}
              >
                <RxCaretRight />
              </span>
              Projects
            </div>
            
            <div className="flex gap-2 bg-yellow-100">
              <div className="">
              <Link className="flex my-auto items-center justify-center text-2xl h-8 w-8 rounded-full bg-blue-300">
                +
              </Link>
              </div>
              <div class="relative ">
                <input
                  class="text-sm appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-full w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Search..."
                />
                <div class="absolute right-0 inset-y-0 flex items-center">
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
          </label>
          <div
            className={classNames(" p-8 border-2 bg-white min-w-full", {
              hidden: !openProjects,
            })}
          >
        
          </div>
         
          <div className="bg-red-100">
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

              <p
                className={classNames("text-black inline-block h-fit", {
                  hidden: !openIssues,
                })}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                iusto quis reiciendis quod voluptatem rem?
              </p>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 border-4 bg-yellow-200 ${
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
            <p
              className={classNames("text-black inline-block h-fit", {
                hidden: !openUpdates,
              })}
            >
              <div className="border-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis, tempora. Praesentium eveniet quia animi qui
                distinctio similique? Tempora, odio libero! porro non distinctio
                incidunt eius perspiciatis sint repellat quia, ipsum sit?
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
