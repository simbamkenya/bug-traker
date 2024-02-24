import React from "react";
import { useState } from "react";

function Modal({ children, openModal, setOpenModal, title = "" }) {
  return (
    <div
      className={`${
        openModal ? "absolute" : "hidden "
      } w-96 p-2 mx-4 bg-white border border-gray-200 rounded`}
    >
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-md">{title}</h1>
        <span
          className="font-bold hover:bg-red-100 rounded-full p-2 hover:text-gray-400"
          onClick={() => setOpenModal(false)}
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="green"
          >
            <path
              fill="gray"
              d="M12.78 4.28a.75.75 0 00-1.06-1.06L8 6.94 4.28 3.22a.75.75 0 00-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 101.06 1.06L8 9.06l3.72 3.72a.75.75 0 101.06-1.06L9.06 8l3.72-3.72z"
            />
          </svg>
        </span>
      </div>
      {children}
      {/* <div className="flex justify-end gap-2">
                <button className="bg-red-300 font-bold text-sm px-4 py-2 rounded">Cancel</button>
                <button className="bg-blue-300 font-bold text-sm   px-4 py-2 rounded">Save</button>
            </div> */}
    </div>
  );
}

export default Modal;
