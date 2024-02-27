import React from "react";

function Header(props) {
  return (
    <div className="fixed w-full">
      <nav className="w-full bg-[#e9ecef] py-2 px-8 flex flex-col md:flex-row items-center justify-between">
        <span className="font-bold text-2xl font-mont">BugFix</span>
        <div className="md:flex my-4 flex-col hidden md:flex-row w-full md:w-96 gap-4">
          <button
            type="button"
            className="flex-1 py-2 px-12 inline-flex font-inco tracking-wide items-center justify-center gap-x-2 text-lg font-semibold rounded-full border border-black bg-[#e9ecef] hover:text-white hover:bg-gray-600 transition ease-in-out"
          >
            Register
          </button>
          <button
              type="button"
              className="flex-1 py-2 px-12 inline-flex font-inco tracking-wide items-center justify-center gap-x-2 text-lg font-semibold rounded-full border border-transparent bg-gray-600 text-white hover:bg-gray-700"
            >
              Sign In
            </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
