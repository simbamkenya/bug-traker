import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { FaDiagramProject } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Form, Formik, Field } from "formik";
import { FaCaretLeft } from "react-icons/fa6";
import MDEditor from "@uiw/react-md-editor";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Mentions from "rc-mentions";
const { Option } = Mentions;

function AddIssue(props) {
  const searchRef = useRef(null);
  const [openIssueCategory, setOpenIssueCategory] = useState(false);

  const [openStatus, setOpenStatus] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openAssignee, setAssignee] = useState(false);

  const [startDate, setStartDate] = useState(new Date());

  const [value, setValue] = useState("**Hello world!!!**");
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
          <div>
            <Formik
              initialValues={{
                projectName: "",
                projectKey: "",
              }}
              onSubmit={async (values) => {}}
            >
              <Form>
                <div className="flex flex-col gap-2 py-2 mb-2">
                  <Field
                    className="outline-none p-2 rounded w-full border border-gray-200 rounded text-sm "
                    id="projecttName"
                    name="projectName"
                    placeholder="Subject"
                  />
                </div>

                <div className="">
                  <div className="flex flex-col flex-start">
                    <span
                      for="countries"
                      class="block mb-2 text-sm font-light text-gray-900 dark:text-gray-400"
                    >
                      Issue Type
                    </span>
                    <div className="relative">
                      <button
                        onClick={() => setOpenIssueCategory(!openIssueCategory)}
                        className="border border-gray-300 py-2 px-4 min-w-48 rounded-sm hover:bg-blue-400 bg-blue-100 hover:text-gray-200"
                      >
                        <div className="flex justify-center -rotate-90 w-8 ml-auto text-2xl">
                          <FaCaretLeft />
                        </div>
                      </button>
                      <div
                        className={`absolute bg-white min-w-48 p-2 shadow-md rounded-sm -mt-[2px] border border-gray-300 ${
                          openIssueCategory ? "block" : "hidden"
                        }`}
                      >
                        <div className="mt-[2px]">
                          <div className="hover:bg-gray-300 text-gray-800  text-sm rounded-md px-2 py-[4px]">
                            Text One
                          </div>
                          <div className="hover:bg-gray-300  text-gray-800 text-sm  rounded-md px-2 py-[4px]">
                            Text Two
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    className="px-6 py-8 bg-blue-300 py-[6px] rounded-sm font-bold text-md text-white mt-6 hover:text-black hover:bg-blue-200 transition-all"
                    type="submit"
                  >
                    Add
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
          <div className="rounded border border-gray-200 min-h-48 my-4">
            <div className="container">
              {/* <MDEditor
               
              
              value={value} onChange={setValue} /> */}
              <MDEditor
                components={{
                  textarea: (props) => {
                    console.log("ii", props.value);
                    return (
                      <Mentions
                        value={props.value}
                        onChange={(newValue) => setValue(newValue)}
                      >
                        <Option value="light">Light</Option>
                        <Option value="bamboo">Bamboo</Option>
                        <Option value="cat">Cat</Option>
                      </Mentions>
                    );
                  },
                }}
                //height={200}
                value={value}
                onChange={setValue}
              />
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex-1 flex items-center border-t-2 border-b-2 border-gray-300 py-4">
              <span className="px-2 font-sm text-md">Status</span>
              <div className="relative z-40 ml-auto">
                <button
                  onClick={() => setOpenStatus(!openStatus)}
                  className="border border-gray-300 py-2 px-4 min-w-48 rounded-sm hover:bg-blue-400 bg-blue-100 hover:text-gray-200"
                >
                  <div className="flex justify-center -rotate-90 w-8 ml-auto text-2xl">
                    <FaCaretLeft />
                  </div>
                </button>
                <div
                  className={`absolute bg-white min-w-full p-2 shadow-md rounded-sm -mt-[2px] border border-gray-300 ${
                    openStatus ? "block" : "hidden"
                  }`}
                >
                  <div className="mt-[2px]">
                    <div className="hover:bg-gray-300 text-gray-800  text-sm rounded-md px-2 py-[4px]">
                      Text One
                    </div>
                    <div className="hover:bg-gray-300  text-gray-800 text-sm  rounded-md px-2 py-[4px]">
                      Text Two
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex items-center border-t-2 border-b-2 border-gray-300 py-4">
              <span className="px-2 font-sm text-md">Category</span>
              <div className="relative z-40 ml-auto">
                <button
                  // onClick={() => setOpenIssueCategory(!openIssueCategory)}
                  onClick={() => setOpenCategory(!openCategory)}
                  className="border border-gray-300 py-2 px-4 min-w-48 rounded-sm hover:bg-blue-400 bg-blue-100 hover:text-gray-200"
                >
                  <div className="flex justify-center -rotate-90 w-8 ml-auto text-2xl">
                    <FaCaretLeft />
                  </div>
                </button>
                <div
                  className={`absolute bg-white min-w-full p-2 shadow-md rounded-sm -mt-[2px] border border-gray-300 ${
                    openCategory ? "block" : "hidden"
                  }`}
                >
                  <div className="mt-[2px]">
                    <div className="hover:bg-gray-300 text-gray-800  text-sm rounded-md px-2 py-[4px]">
                      Cat One
                    </div>
                    <div className="hover:bg-gray-300  text-gray-800 text-sm  rounded-md px-2 py-[4px]">
                      Cat Two
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-1 items-center border-t-2 border-b-2 border-gray-300 py-4">
              <span className="px-2 font-sm text-md">Assignee</span>
              <div className="relative ml-auto">
                <button
                  onClick={() => setAssignee(!openAssignee)}
                  className="border border-gray-300 py-2 px-4 min-w-48 rounded-sm hover:bg-blue-400 bg-blue-100 hover:text-gray-200"
                >
                  <div className="flex justify-center -rotate-90 w-8 ml-auto text-2xl">
                    <FaCaretLeft />
                  </div>
                </button>
                <div
                  className={`absolute z-999 bg-white min-w-full p-2 shadow-md rounded-sm -mt-[2px] border border-gray-300 ${
                    openAssignee ? "block" : "hidden"
                  }`}
                >
                  <div className="mt-[2px]">
                    <div className="hover:bg-gray-300 text-gray-800  text-sm rounded-md px-2 py-[4px]">
                      Text One
                    </div>
                    <div className="hover:bg-gray-300  text-gray-800 text-sm  rounded-md px-2 py-[4px]">
                      Text Two
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 items-center border-t-2 border-b-2 border-gray-300 py-4">
              <span className="px-2 font-sm text-md">Due Date</span>
              <div className="relative ml-auto z-40">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
          </div>
          <button
            className="px-6 py-8 bg-blue-300 py-[6px] rounded-sm font-bold text-md text-white mt-6 hover:text-black hover:bg-blue-200 transition-all"
            type="submit"
          >
            Add
          </button>
        </div>
      </main>
    </div>
  );
}

export default AddIssue;
