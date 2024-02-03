import React from "react";
import { Link, Outlet } from "react-router-dom";

function DashLayout(props) {
  return (
    <div>
      <nav className="p-2 bg-gray-200">
        <ul className="flex gap-2">
          <Link className="py-4 px-2 text-sm rounded-sm hover:bg-green-100">Dashboard</Link>
          <Link className="py-4 px-2 text-sm rounded-sm hover:bg-green-100">Projects</Link>
          <Link className="py-4 px-2 text-sm rounded-sm hover:bg-green-100">Recently Viewed</Link>
          <Link className="flex my-auto items-center justify-center text-2xl h-8 w-8 rounded-full bg-blue-300">+</Link>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default DashLayout;
