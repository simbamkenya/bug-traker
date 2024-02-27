import React from "react";
import DashLayout from "../../layouts/DashLayout";
import Sidebar from "../../components/Sidebar";
import { Tooltip } from "react-tooltip";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Show(props) {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <main className="min-h-screen">
          <div className="bg-green-100 mx-4">
            <span className="flex py-2">
              <svg
                onClick={() => {
                  navigate(`/projects`);
                }}
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                width="10px"
                height="10px"
                viewBox="0 0 52 52"
                enable-background="new 0 0 52 52"
                xml:space="preserve"
              >
                <path
                  d="M48.6,23H15.4c-0.9,0-1.3-1.1-0.7-1.7l9.6-9.6c0.6-0.6,0.6-1.5,0-2.1l-2.2-2.2c-0.6-0.6-1.5-0.6-2.1,0
	L2.5,25c-0.6,0.6-0.6,1.5,0,2.1L20,44.6c0.6,0.6,1.5,0.6,2.1,0l2.1-2.1c0.6-0.6,0.6-1.5,0-2.1l-9.6-9.6C14,30.1,14.4,29,15.3,29
	h33.2c0.8,0,1.5-0.6,1.5-1.4v-3C50,23.8,49.4,23,48.6,23z"
                />
              </svg>
            </span>
          </div>
          <div className="flex justify-between py-4 mx-4">
            <div className="flex">
              <div className="flex items-center justify-center">
                <div className="px-3 text-xs text-white flex items-center justify-center py-[2px] bg-red-600 rounded-full">
                  TODO
                </div>
              </div>
              <span className="font-md pl-2 flex font-normal text-sm items-center justify-center text-sm">
                ISSUEKEY
              </span>
            </div>
            <div className="flex">
              <span className="font-md font-normal pl-2 flex items-center justify-center text-sm">
                Due on: Feb 24, 2026
              </span>
              <div className="flex items-center justify-center">
                <div className="px-6 ml-3 text-xs text-white flex items-center justify-center py-[6px] bg-green-600 rounded-full">
                  Resolved
                </div>
              </div>
            </div>
            {/* <div className="flex bg-green-400">
            <span className="font-md text-sm  flex items-center justify-center">
              Date Due: Feb 24, 2028
            </span>
            <div className="flex items-center justify-center">
              <div className="px-6 text-white fle x items-center justify-center py-[1px] bg-red-600 rounded-full">
                Open
              </div>
            </div>
          </div> */}
          </div>
          <div className="flex justify-between mx-4">
            <div className="flex">
              <span className="text-2xl font-medium">Issue title </span>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center rounded-full px-4 py-2 bg-gray-300 hover:fill-white hover:bg-gray-600 hover:text-white text-sm">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path d="M2.29171812,13.3600638 L6.81539686,18.1161843 L0.5,20 L2.29171812,13.3600638 Z M12.7049284,2.41181464 L17.2274301,7.16667706 L7.26550878,17.6404299 L2.74300706,12.8855675 L12.7049284,2.41181464 Z M16.1415118,0.347861156 C16.8783654,1.12259394 18.3106609,2.62843788 19.1175863,3.4768634 C19.9245902,4.32524768 19.2036068,5.09020427 19.2036068,5.09020427 L17.6827602,6.68916958 L13.1591207,1.93311092 L14.6798693,0.334186853 L14.6989777,0.315464422 C14.8180473,0.203171183 15.4749058,-0.352994255 16.1415118,0.347861156 Z" />
                </svg>
                <span className="text-md font-bold ml-2">Edit</span>
              </div>
            </div>
          </div>
          <div className="border my-2 p-4 bg-white mx-4">
            <div className="flex">
              <div className="bg-red-600 h-12 w-12  flex items-center justify-center text-white rounded-full">
                S
              </div>
              <div className="px-2">
                <span className="text-md font-md">Phares</span>
                <div className="text-xs">Due on Jan 25, 2022</div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 border-slate-400 font-md border-t border-b inline-block py-4 mt-2">
                Assignee
              </div>
              <div className="flex-1 border-slate-400 font-md border-t border-b inline-block py-4 mt-2">
                Category
              </div>
            </div>
          </div>
          <div className="border my-2 p-4 bg-white mx-4">
            <div className="flex">
              <div className="bg-red-600 h-12 w-12  flex items-center justify-center text-white rounded-full">
                S
              </div>
              <div className="px-2">
                <span className="text-md font-md">Phares</span>
                <div className="text-xs">Due on Jan 25, 2022</div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 border-slate-400 font-md border-t border-b inline-block py-4 mt-2">
                Assignee
              </div>
              <div className="flex-1 border-slate-400 font-md border-t border-b inline-block py-4 mt-2">
                Category
              </div>
            </div>
          </div>
          <div className="border my-2 p-4 bg-white mx-4">
            <div className="flex">
              <div className="bg-red-600 h-12 w-12  flex items-center justify-center text-white rounded-full">
                S
              </div>
              <div className="px-2">
                <span className="text-md font-md">Phares</span>
                <div className="text-xs">Due on Jan 25, 2022</div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 border-slate-400 font-md border-t border-b inline-block py-4 mt-2">
                Assignee
              </div>
              <div className="flex-1 border-slate-400 font-md border-t border-b inline-block py-4 mt-2">
                Category
              </div>
            </div>
          </div>
          <div className="border my-2 p-4 bg-white mx-4">
            <div className="flex">
              <div className="bg-red-600 h-12 w-12  flex items-center justify-center text-white rounded-full">
                S
              </div>
              <div className="px-2">
                <span className="text-md font-md">Phares</span>
                <div className="text-xs">Due on Jan 25, 2022</div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 border-slate-400 font-md border-t border-b inline-block py-4 mt-2">
                Assignee
              </div>
              <div className="flex-1 border-slate-400 font-md border-t border-b inline-block py-4 mt-2">
                Category
              </div>
            </div>
          </div>
          <span className="text-md font-semibold inline-block m-4 mr-2">
            Comments{" "}
          </span>
          <span className="text-gray-800">(2)</span>
          <div className="border my-2 mx-4 p-4 bg-white">
            <div className="flex">
              <div className="bg-red-600 h-12 w-12  flex items-center justify-center text-white rounded-full">
                S
              </div>
              <div className="px-2">
                <span className="text-md font-md">Phares</span>
                <div className="text-xs">Due on Jan 25, 2022</div>
              </div>
            </div>
            <div className="flex gap-2">kkkk</div>
          </div>
        </main>
        <div className="bg-gray-100 py-8 h-12 border-t-2 shadow-xl mt-8 flex items-center sticky bottom-0">
          <div className="flex px-4">
            <div className="flex justify-center px-2 rounded-sm items-center text-sm bg-green-200 hover:bg-green-400 border-2">
              <svg
                fill="#000000"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M21,20 C21.5522847,20 22,20.4477153 22,21 C22,21.5522847 21.5522847,22 21,22 L3,22 C2.44771525,22 2,21.5522847 2,21 C2,20.4477153 2.44771525,20 3,20 L21,20 Z M6.29289322,13.2928932 L17.2928932,2.29289322 C17.6533772,1.93240926 18.2206082,1.90467972 18.6128994,2.20970461 L18.7071068,2.29289322 L21.7071068,5.29289322 C22.0675907,5.65337718 22.0953203,6.22060824 21.7902954,6.61289944 L21.7071068,6.70710678 L10.7071068,17.7071068 C10.5508265,17.8633871 10.3481451,17.9625983 10.131444,17.9913276 L10,18 L7,18 C6.48716416,18 6.06449284,17.6139598 6.00672773,17.1166211 L6,17 L6,14 C6,13.7789863 6.07316447,13.565516 6.20608063,13.3919705 L6.29289322,13.2928932 L17.2928932,2.29289322 L6.29289322,13.2928932 Z M18,4.41421356 L8,14.4142136 L8,16 L9.58578644,16 L19.5857864,6 L18,4.41421356 Z"
                />
              </svg>
              <span className="text-md flex items-center justify-center px-4 py-2  whitespace-nowrap">
                Change Status
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Show;
