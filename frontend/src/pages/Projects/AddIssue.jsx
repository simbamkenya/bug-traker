import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { FaDiagramProject } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { useRef } from "react";
import { Form, Formik, Field } from "formik";
import { FaCaretLeft } from "react-icons/fa6";
import MDEditor from "@uiw/react-md-editor";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { addIssue, fetchIssues } from "../../store/features/issuesSlice";
import { fetchIssueTypes } from "../../store/features/issueTypesSlice";
import { fetchCategories } from "../../store/features/categoriesSlice";
import { fetchUsers } from "../../store/features/usersSlice";
import { fetchProjectById } from "../../store/features/projectSlice";

import { useSelector, useDispatch } from "react-redux";

import { STATUSES } from "../../constants";

import Mentions from "rc-mentions";
import useComponentVisible from "../../hooks/useComponentVisible";
const { Option } = Mentions;

function AddIssue(props) {
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

  const [openIssueCategory, setOpenIssueCategory] = useState(false);
  const [openIssueType, setOpenIssueType] = useState(false);

  const [category, setCategory] = useState("");
  const [issueType, setIssueType] = useState("");
  const [status, setStatus] = useState("");

  const categories = useSelector((state) => state.categories.data);
  const users = useSelector((state) => state.users.data);
  const types = useSelector((state) => state.types.data);

  console.log("userss", users);

  const [openStatus, setOpenStatus] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openAssignee, setOpenAssignee] = useState(false);
  const [assignee, setAssignee] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  const [value, setValue] = useState("Issue description..");
  const { id } = useParams();

  const project = useSelector((state) => state.project.data);

  useEffect(() => {
    dispatch(fetchIssueTypes());
    dispatch(fetchCategories());
    dispatch(fetchUsers());
    dispatch(fetchProjectById(id));
  }, []);

  const handleNewIssueSubmission = (values, { setSubmitting }) => {
    console.log("oo", values);
    console.log("assignee", assignee);
    let content = {
      ...values,
      description: value,
      type: issueType.id,
      status: status,
      assignee: assignee.id,
      category: category.id,
    };
    console.log("nee", content);

    dispatch(addIssue(content)).then((res) => console.log(res));
  };
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
        <div className="m-h-48 mx-4 my-2">
          <div>
            <Formik
              initialValues={{
                subject: "subject one",
                due: startDate,
                description: value,
              }}
              validate={(values) => {
                const errors = {};
                if (!values.subject) {
                  errors.subject = "Subject is required";
                }
                return errors;
              }}
              onSubmit={handleNewIssueSubmission}
            >
              {({
                values,
                errors,
                handleChange,
                handleSubmit,
                setFieldValue,
              }) => (
                <Form onSubmit={handleSubmit}>
                  {console.log("form values", values)}
                  <div className="flex flex-col gap-2 py-2 mb-2">
                    <span
                      for="subject"
                      className="block mt-2 font-medium text-md text-gray-900"
                    >
                      Subject *
                    </span>
                    <Field
                      className="outline-none p-2 rounded w-full border border-gray-200 rounded text-sm "
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      value={values.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="">
                    <div className="flex flex-col flex-start">
                      <span
                        for="countries"
                        class="block mb-2 font-medium text-md text-gray-900"
                      >
                        Type
                      </span>
                      <div className="relative z-40">
                        <button
                          ref={ref}
                          onClick={() => {
                            // setOpenIssueCategory(!openIssueCategory)
                            setIsComponentVisible(true);
                          }}
                          className="flex border borde r-2 border-gray-300 py-2 px-4 min-w-48 rounded-sm bg-white focus:shadow focus:shadow-zomp focus:bg-z omp bg-bl ue-100 hover:text-metallicblue"
                        >
                          {issueType.name}
                          <div className="flex justify-center -rotate-90 w-8 ml-auto text-2xl">
                            <FaCaretLeft />
                          </div>
                        </button>
                        <div
                          className={`absolute bg-white min-w-48 p-2 shadow-md rounded-sm -mt-[2px] border border-gray-300 ${
                            isComponentVisible ? "block" : "hidden"
                          }`}
                        >
                          <div className="mt-[2px]">
                            {types.map((type) => (
                              <div
                                onClick={() => {
                                  setIssueType(type);
                                  setOpenIssueCategory(false);
                                }}
                                className="hover:bg-gray-300 text-gray-800  text-sm rounded-md px-2 py-[4px]"
                              >
                                {type.name}
                              </div>
                            ))}
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
                  <div className="rounded border border-gray-200 min-h-48 my-4">
                    <div className="container">
                      <MDEditor
                        components={{
                          textarea: (props) => {
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
                          ref={spaceRef}
                          onClick={() => {
                            // setOpenStatus(!openStatus)
                            setIsSpaceComponentVisible(true);
                          }}
                          className="flex items-center gap-2 border border-gray-300 py-2 px-4 min-w-48 rounded-sm hover:bg-blue-400 bg-blue-100 hover:text-gray-200"
                        >
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{
                              backgroundColor: STATUSES.find(
                                (item) => item?.status == status
                              )?.color,
                            }}
                          ></div>

                          {status}
                          <div className="flex justify-center -rotate-90 w-8 ml-auto text-2xl">
                            <FaCaretLeft />
                          </div>
                        </button>
                        <div
                          className={`absolute bg-white min-w-full p-2 shadow-md rounded-sm -mt-[2px] border border-gray-300 ${
                            isSpaceComponentVisible ? "block" : "hidden"
                          }`}
                        >
                          <div className="mt-[2px]">
                            {STATUSES.map(({ status, color }) => (
                              <div
                                onClick={() => {
                                  setStatus(status);
                                  setOpenStatus(false);
                                }}
                                className="flex items-center gap-2 hover:bg-gray-300 text-gray-800  text-sm rounded-md px-2 py-[4px]"
                              >
                                <div
                                  className="w-3 h-3 rounded-full"
                                  style={{ backgroundColor: color }}
                                ></div>
                                {status}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center border-t-2 border-b-2 border-gray-300 py-4">
                      <span className="px-2 font-sm text-md">Category</span>
                      <div className="relative z-40 ml-auto">
                        <button
                          ref={notificationRef}
                          // onClick={() => setOpenIssueCategory(!openIssueCategory)}
                          onClick={() => {
                            // setOpenCategory(!openCategory)
                            setIsNotificationComponentVisible(true);
                          }}
                          className="flex gap-2 border border-gray-300 py-2 px-4 min-w-48 rounded-sm hover:bg-blue-400 bg-blue-100 hover:text-gray-200"
                        >
                          {category.name}
                          <div className="flex justify-center -rotate-90 w-8 ml-auto text-2xl">
                            <FaCaretLeft />
                          </div>
                        </button>
                        <div
                          className={`absolute bg-white min-w-full p-2 shadow-md rounded-sm -mt-[2px] border border-gray-300 ${
                            isNotificationComponentVisible ? "block" : "hidden"
                          }`}
                        >
                          {category.name}
                          <div className="mt-[2px]">
                            {categories.map((category) => (
                              <div
                                onClick={() => {
                                  setCategory(category);
                                  setOpenCategory(false);
                                }}
                                className="hover:bg-gray-300 text-gray-800  text-sm rounded-md px-2 py-[4px]"
                              >
                                {category.name}
                              </div>
                            ))}
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
                          ref={profileRef}
                          onClick={() => {
                            // setOpenAssignee(!openAssignee)
                            setIsProfileComponentVisible(true)
                          }}
                          className="flex gap-2 border border-gray-300 py-2 px-4 min-w-48 rounded-sm hover:bg-blue-400 bg-blue-100 hover:text-gray-200"
                        >
                          {assignee.name}
                          <div className="flex justify-center -rotate-90 w-8 ml-auto text-2xl">
                            <FaCaretLeft />
                          </div>
                        </button>
                        <div
                          className={`absolute z-999 bg-white min-w-full p-2 shadow-md rounded-sm -mt-[2px] border border-gray-300 ${
                            isProfileComponentVisible ? "block" : "hidden"
                          }`}
                        >
                          <div className="mt-[2px]">
                            {users.map((user) => (
                              <div
                                onClick={() => {
                                  setAssignee(user);
                                  setOpenAssignee(false);
                                }}
                                className="hover:bg-gray-300 text-gray-800  text-sm rounded-md px-2 py-[4px]"
                              >
                                {user.name}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 items-center border-t-2 border-b-2 border-gray-300 py-4">
                      <span className="px-2 font-sm text-md">Due Date</span>
                      <div className="relative ml-auto hover:z-50">
                        <DatePicker
                          name="date"
                          value={values.due}
                          onChange={(date) => setFieldValue("due", date)}
                          selected={values.due}
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
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AddIssue;
