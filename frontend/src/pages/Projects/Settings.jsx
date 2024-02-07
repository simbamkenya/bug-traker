import React from "react";
import Sidebar from "../../components/Sidebar";
import { FaDiagramProject } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { Formik, Field, Form } from "formik";
import Modal from "../../components/Modal";

function Settings(props) {
  const searchRef = useRef();
  const [openModal, setOpenModal] = useState(true)

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

        {/* <div className="m-4 border-2 min-h-48">
          <ul class="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
            <li class="">
              <a
                href="#"
                aria-current="page"
                class="inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg border py-4 px-4 text-sm text-start"
              >
                General
              </a>
            </li>
            <li class="">
              <a
                href="#"
                class="inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg border py-4 px-4 text-sm text-start"
              >
                Members
              </a>
            </li>
            <li class="">
              <a
                href="#"
                class="inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg border py-4 px-4 text-sm text-start"
              >
                Issue Types
              </a>
            </li>
            <li class="">
              <a
                href="#"
                class="inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg border py-4 px-4 text-sm text-start"
              >
                Categories
              </a>
            </li>
          </ul>
          
        </div> */}
        <div className="m-4">
          <Tabs>
            <TabList>
              <Tab>General</Tab>
              <Tab>Members</Tab>
              <Tab>Issue Types</Tab>
              <Tab>Categories</Tab>
            </TabList>

            <TabPanel>
              <h2 className="font-bold text-md py-2">General</h2>
              <Formik
                initialValues={{
                  projectName: "",
                  projectKey: "",
                }}
                onSubmit={async (values) => {}}
              >
                <Form>
                  <div className="flex flex-col gap-2 mb-2">
                    <label htmlFor="projectName" className="font-light">
                      Projects Name <span className="text-red-600">*</span>
                    </label>
                    <Field
                      className="outline-none p-2 rounded-sm max-w-96 border border-gray-200 rounded"
                      id="projecttName"
                      name="projectName"
                      placeholder="project name"
                    />
                  </div>

                  <flex className="flex flex-col gap-2 mb-2">
                    <label htmlFor="projectKey" className="font-light">
                      Projects Key <span className="text-red-600">*</span>
                    </label>
                    <Field
                      className="outline-none p-2 rounded-sm max-w-96 border border-gray-200"
                      id="projecttKey"
                      name="projectKey"
                      placeholder="project key"
                    />
                  </flex>

                  <button
                    className="px-4 bg-blue-300 py-2 rounded-sm font-bold text-white mt-2 hover:text-black hover:bg-blue-200 transition-all"
                    type="submit"
                  >
                    Save
                  </button>
                </Form>
              </Formik>
            </TabPanel>
            <TabPanel>
              <h2 className="font-bold text-md py-2">Edit members</h2>
              <div className="px-2 border bg-gray-100 border-gray-200 rounded-md max-w-96 min-h-24">
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
                        className="outline-none p-2 rounded max-w-96 border border-gray-200 rounded"
                        id="projecttName"
                        name="projectName"
                        placeholder="select user or team"
                      />
                    </div>

                    <button
                      className="px-4 bg-blue-300 py-[6px] rounded-sm font-bold text-sm text-white mt-2 hover:text-black hover:bg-blue-200 transition-all"
                      type="submit"
                    >
                      Add selection to project
                    </button>
                  </Form>
                </Formik>
              </div>

              <button
                className="px-4 ml-2 mt-6 bg-blue-300 py-2  rounded-sm font-bold text-sm text-white mt-2 hover:text-black hover:bg-blue-200 transition-all"
                type="submit"
              >
                Adminstrator settings
              </button>
              <div className="py-4">
                <h2 className="font-bold text-sm py-4">
                  Project Teams(1 team)
                </h2>
                <div class="w-full">
                  <div class="border-b border-gray-200 shadow">
                    <table class="divide-y divide-green-400 w-full">
                      <thead class="bg-gray-50">
                        <tr>
                          <th class="px-6 py-2 text-xs text-start text-gray-500">
                            Team Name
                          </th>

                          <th class="px-6 py-2 text-xs text-start text-gray-500">
                            Joined on
                          </th>
                          <th class="px-6 py-2 text-xs text-start text-gray-500">
                            Delete
                          </th>
                        </tr>
                      </thead>
                      <tbody class="bg-white divide-y divide-gray-300">
                        {[1, 2, 3].map((bug) => (
                          <tr key={bug.id} class="whitespace-nowrap">
                            <td class="px-6 py-4">
                              <div class="text-sm text-gray-900">simba</div>
                            </td>

                            <td class="px-6 py-4 text-sm text-gray-500">
                              4th May
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
                <h2 className="font-bold text-sm py-4">
                  Project Members(2 members)
                </h2>
                <div class="w-full">
                  <div class="border-b border-gray-200 shadow">
                    <table class="divide-y divide-green-400 w-full">
                      <thead class="bg-gray-50">
                        <tr>
                          <th class="px-6 py-2 text-xs text-start text-gray-500">
                            Name
                          </th>
                          <th class="px-6 py-2 text-xs text-start text-gray-500">
                            Email
                          </th>
                          <th class="px-6 py-2 text-xs text-start text-gray-500">
                            Role
                          </th>
                          <th class="px-6 py-2 text-xs text-start text-gray-500">
                            Joined on
                          </th>
                          <th class="px-6 py-2 text-xs text-start text-gray-500">
                            Delete
                          </th>
                        </tr>
                      </thead>
                      <tbody class="bg-white divide-y divide-gray-300">
                        {[1, 2, 3].map((bug) => (
                          <tr key={bug.id} class="whitespace-nowrap">
                            <td class="px-6 py-4">
                              <div class="text-sm text-gray-900">simba</div>
                            </td>
                            <td class="px-6 py-4">
                              <div class="text-sm text-gray-500">
                                simba@gmail.com
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
                                admin
                              </span>
                            </td>
                            <td class="px-6 py-4 text-sm text-gray-500">
                              4th May
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
            </TabPanel>
            <TabPanel>
              <h2 className="font-bold text-md py-2">Edit Issue Types</h2>
              <Modal openModal={openModal} setOpenModal={setOpenModal} />
              <button
                className="px-4  my-4 bg-blue-300 py-2  rounded-sm font-bold text-sm text-white hover:text-black hover:bg-blue-200 transition-all"
                onClick={() => setOpenModal(true)}
              >
                Add Issue Type
              </button>
              <div class="w-full">
                <div class="border-b border-gray-200 shadow">
                  <table class="divide-y divide-green-400 w-full">
                    <thead class="bg-gray-50">
                      <tr>
                        <th class="px-6 py-2 text-xs text-start text-gray-500">
                          Issues List
                        </th>

                        <th class="px-6 py-2 text-xs text-start text-gray-500">
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-300">
                      {[1, 2, 3].map((bug) => (
                        <tr key={bug.id} class="whitespace-nowrap">
                          <td class="px-6 py-4">
                            <div class="text-sm text-gray-900">Backend</div>
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
            </TabPanel>
            <TabPanel>
              <h2 className="font-bold text-md py-2 relative">
                Edit Categories
              </h2>
              <Modal openModal={openModal} setOpenModal={setOpenModal}>
                <Formik
                  initialValues={{
                    categogryName: "",
                  }}
                  onSubmit={async (values) => {}}
                >
                  <Form>
                    <div className="flex flex-col gap-2 py-2 mb-2">
                      <Field
                        className="outline-none p-2 rounded max-w-96 border border-gray-200 rounded"
                        id="categoryName"
                        name="categoryName"
                        placeholder="category"
                      />
                    </div>

                    <button
                      className="px-4 bg-blue-300 py-[6px] rounded-sm font-bold text-sm text-white mt-2 hover:text-black hover:bg-blue-200 transition-all"
                      type="submit"
                    >
                      Submit
                    </button>
                  </Form>
                </Formik>
              </Modal>
              <button  onClick={() => setOpenModal(true) } className="px-4 bg-blue-300 py-2 my-4  rounded-sm font-bold text-sm text-white hover:text-black hover:bg-blue-200 transition-all">
                Add Category
              </button>
              <div class="w-full">
                <div class="border-b border-gray-200 shadow">
                  <table class="divide-y divide-green-400 w-full">
                    <thead class="bg-gray-50">
                      <tr>
                        <th class="px-6 py-2 text-xs text-start text-gray-500">
                          Cateory List
                        </th>

                        <th class="px-6 py-2 text-xs text-start text-gray-500">
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-300">
                      {[1, 2, 3].map((bug) => (
                        <tr key={bug.id} class="whitespace-nowrap">
                          <td class="px-6 py-4">
                            <div class="text-sm text-gray-900">Backend</div>
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
            </TabPanel>
          </Tabs>
        </div>
      </main>
    </div>
  );
}

export default Settings;
