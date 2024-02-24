import React from "react";
import { Form, Formik, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../store/features/authSlice";

function Register(props) {
  const dispatch = useDispatch();

  const handleRegister = (values) => {
    console.log('register values', values)
    dispatch(registerUser(values));
  };

  return (
    <div className="bg-[#e9ecef] min-h-screen font-mont">
      <div class="flex mx -auto  px-4 py-16 sm:px-6 lg:px-8 ">
        <div class="mx -auto w-full flex-1 bg-white   rounded">
          <span className="inline-block w-full font-semibold text-xl text-center px-2 mx-auto mt-4 mb-0">
            Register at BugFix
          </span>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "email is required";
              }
              return errors;
            }}
            onSubmit={handleRegister}
          >
            {({
              values,
              errors,
              handleChange,
              handleSubmit,
              setFieldValue,
            }) => (
              <Form
                action="#"
                onSubmit={handleSubmit}
                class="mb-0 mt-2 space-y-6 max-w-md mx-auto rounded-lg px-4 sm:p-6 lg:p-8"
              >
                {console.log("register", values)}
                <p class="text-center text-lg font-medium">
                  Sign in to your account
                </p>

                <div>
                  <label for="name" class="sr-only">
                    Name
                  </label>

                  <div class="relative">
                    <Field
                      type="text"
                      name="name"
                      value={values.name}
                      onchange={handleChange}
                      class="w-full rounded-lg border-gray-200 p-4 pe -12 text-sm border"
                      placeholder="Enter name"
                    />

                    <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div>
                  <label for="email" class="sr-only">
                    Email
                  </label>

                  <div class="relative">
                    <Field
                      type="email"
                      name="email"
                      value={values.email}
                      onchange={handleChange}
                      class="w-full rounded-lg border-gray-200 p-4 pe -12 text-sm border"
                      placeholder="Enter email"
                    />

                    <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div>
                  <label for="password" class="sr-only">
                    Password
                  </label>

                  <div class="relative">
                    <Field
                      type="password"
                      name="password"
                      onchange={handleChange}
                      value={values.password}
                      class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm border"
                      placeholder="Enter password"
                    />

                    <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  class="block w-full rounded-lg bg-indigo-600 px-5 py-3 mt-4 text-sm font-medium text-white"
                >
                  Create an account on BugFix
                </button>

                {/* <p class="text-center text-sm text-gray-500">
                  No account?
                  <a class="underline" href="#">
                    Sign up
                  </a>
                </p> */}
              </Form>
            )}
          </Formik>
        </div>
        <div className="flex-1 hidden rounded bg-white pr-2 py-2 md:block">
          <div className="relative flex max-h-full object-fill">
            <img
              src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded"
              alt=""
            />
            <div className="p-4 absolute bottom-0 opacity-90">
              <p className="text-md text-white leading-8">
                "Bug trackers are not just tools for finding and fixing defects;
                they are indispensable platforms for fostering collaboration,
                ensuring accountability, and ultimately delivering higher
                quality software."
              </p>
              <p className="text-sm text-white mt-2">~ BugFix creator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
