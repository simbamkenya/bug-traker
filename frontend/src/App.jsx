import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="py-18 px-8  bg-[#1e1e1e] text-white">
        <div className="md:flex py-4 gap-4 bborder-4 items-center">
          <div className="flex-1 mt-24 py-4 nborder-2">
            <h1 className="text-5xl py-6 font-medium font-mont">Bug Tracker</h1>
            <div className="w-96 text-2xl font-inco font-normal">
              An easy way for developers and testers to report and track bugs.
              Software development is a complex task and this tool will ease the
              pressure of handling bugs.
            </div>
            <button
              type="button"
              className="py-2 mt-6 px-12 inline-flex font-inco tracking-wide items-center gap-x-2 text-lg font-semibold rounded-full border border-transparent bg-gray-600 text-white hover:bg-gray-700"
            >
              Register
            </button>
          </div>
          <div className="flex-1 text-lg font-inco font-normal bborder-2">
            <img className="h-[95%] w-[95%]" src="./bug.png"></img>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
