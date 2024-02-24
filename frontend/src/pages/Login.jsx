import React from "react";
import { Form, Formik, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "../store/features/authSlice";


function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const issues = useSelector((state) => state.issues.data);

  console.log('issues', issues)

  const handleLogin = (values) => {
    console.log('login', values)
    dispatch(login(values))
    
      navigate('/dashboard')

  }
  return (
    // @tailwindcss/forms
    <div className="bg-[#e9ecef] min-h-screen font-mont">
      <div className="mx-auto  px-4 py-16 sm:px-6 lg:px-8 ">
        <div className="mx-auto bg-white max-w-96 rounded">
          <span className="inline-block w-full font-semibold text-xl text-center p-2 mx-auto mt-4">Login at BugFix</span>
          <Formik
            initialValues={{
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
            onSubmit={handleLogin}
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
                className="mb-0 mt-2 space-y-4 rounded-lg px-4 shadow-lg sm:p-6 lg:p-8"
              >
                {console.log('kim', values)}
                <p className="text-center text-lg font-medium">
                  Sign in to your account
                </p>

                <div>
                  <label for="email" className="sr-only">
                    Email
                  </label>

                  <div class="relative">
                    <Field
                      type="email"
                      name="email"
                      value={values.email}
                      onchange={handleChange}
                      className="w-full rounded-lg border-gray-200 p-4 pe -12 text-sm border"
                      placeholder="Enter email"
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
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
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm border"
                      placeholder="Enter password"
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                >
                  Sign in
                </button>

                <p class="text-center text-sm text-gray-500">
                  No account?
                  <a className="underline" href="#">
                    Sign up
                  </a>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;
