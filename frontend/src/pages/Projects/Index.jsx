import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaChartGantt, FaDiagramProject } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { CiViewList } from "react-icons/ci";
import { CiViewBoard } from "react-icons/ci";
import { MdBarChart } from "react-icons/md";

import Sidebar from "../../components/Sidebar";
function Index(props) {

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
            <div className="flex ml-auto mr-2">
              <img
                className="w-8 h-8 rounded-full"
                src="https://i.pravatar.cc/100"
                alt=""
                srcset=""
              />
               <img
                className="w-8 h-8 rounded-full"
                src="https://i.pravatar.cc/100"
                alt=""
                srcset=""
              />
              <span className="w-8 h-8 rounded-full text-xs bg-pink-500 flex items-center justify-center font-light">+0</span>
            </div>
            <button className="bg-blue-400 px-4 text-white py-2 rounded-sm text-lg mr-2 hover:bg-gray-100 hover:text-black">Invite users</button>
          </div>
          <div></div>
        </div>
        <div className="flex p-4 gap-4">
          <div className="flex flex-col w-1/2 h-96">
            <div className="font-bold py-3">Project Home</div>
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
          <div className="flex flex-col w-1/2 h-96">
          <div className="flex  flex-col h-96">
            <div className="font-bold py-3">Status</div>
            <div className="border py-4">
              <div className="mx-2 items-center px-4 bg-red-600 h-4"></div>
              <div className="text-sm text-right mr-4">90% closed</div>
              <div className="flex flex-wrap items-center p-4 justify-between rounded-sm">
                <div className="flex items-center flex-col">
                  <p className="text-sm py-2">Open</p>
                  <div className="rounded-full text-center w-24 bg-red-400">
                    1
                  </div>
                </div>
                <div className="flex items-center flex-col">
                  <p className="text-sm py-2">In Progress</p>
                  <div className="rounded-full text-center w-24 bg-blue-400">
                    1
                  </div>
                </div>
                <div className="flex items-center flex-col">
                  <p className="text-sm py-2">Closed</p>
                  <div className="rounded-full text-center w-24 bg-green-400">
                    1
                  </div>
                </div>

                <div className="flex items-center flex-col">
                  <p className="text-sm py-2">Resolved</p>
                  <div className="rounded-full text-center w-24 bg-yellow-400">
                    1
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-96">
            <div className="font-bold py-3">Categories</div>
            <div className="border py-4">
              <div className="mx-2 items-center px-4 bg-red-600 h-4"></div>
              <div className="text-sm text-right mr-4">90% closed</div>
              <div className="flex flex-wrap items-center p-4 justify-between rounded-sm">
                <div className="flex items-center flex-col">
                  <p className="text-sm py-2">Open</p>
                  <div className="rounded-full text-center w-24 bg-red-400">
                    1
                  </div>
                </div>
                <div className="flex items-center flex-col">
                  <p className="text-sm py-2">In Progress</p>
                  <div className="rounded-full text-center w-24 bg-blue-400">
                    1
                  </div>
                </div>
                <div className="flex items-center flex-col">
                  <p className="text-sm py-2">Closed</p>
                  <div className="rounded-full text-center w-24 bg-green-400">
                    1
                  </div>
                </div>

                <div className="flex items-center flex-col">
                  <p className="text-sm py-2">Resolved</p>
                  <div className="rounded-full text-center w-24 bg-yellow-400">
                    1
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
    
        </div>
      </main>
    </div>
  );
}

export default Index;
