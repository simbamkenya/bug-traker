import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { FaChartGantt, FaDiagramProject } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { CiViewList } from "react-icons/ci";
import { CiViewBoard } from "react-icons/ci";
import { MdBarChart } from "react-icons/md";


function Sidebar(props) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <sidebar className="bg-blue-300 min-h-screen">
        <div>
          <div
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-4 space-y-2 bg-gray-600 shadow"
          >
            <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
            <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
            <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
          </div>
        </div>
        <ul className="text-white">
          <Link
            to="/projects"
            className="flex gap-2 py-4 px-4 hover:bg-gray-200 hover:text-black"
          >
            <span className="text-2xl">
              <IoMdHome />
            </span>
            <div
              className={`overflow-hidden  whitespace-nowrap inline-block h-full text-lg font-medium transition-all ${
                sidebarOpen ? "w-0" : "w-24"
              }`}
            >
              Home
            </div>
          </Link>
          <Link
            to="/projects/addissue"
            className="flex gap-2 py-4 px-4 hover:bg-gray-200 hover:text-black"
          >
            <span className="text-2xl">
              <IoMdAdd />
            </span>
            <div
              className={`overflow-hidden  whitespace-nowrap inline-block h-full text-lg font-medium transition-all ${
                sidebarOpen ? "w-0" : "w-24"
              }`}
            >
              Add Issue
            </div>
          </Link>
          <Link
            to="/projects/issues"
            className="flex gap-2 py-4 px-4 hover:bg-gray-200 hover:text-black"
          >
            <span className="text-2xl">
              <CiViewList />
            </span>
            <div
              className={`overflow-hidden whitespace-nowrap  inline-block h-full text-lg font-medium transition-all ${
                sidebarOpen ? "w-0" : "w-24"
              }`}
            >
              Issues
            </div>
          </Link>
          <Link
            to="/projects/board"
            className="flex gap-2 py-4 px-4 hover:bg-gray-200 hover:text-black"
          >
            <span className="text-2xl">
              <span className="text-2xl rotate-180">
                <MdBarChart />
              </span>
            </span>
            <div
              className={`overflow-hidden  whitespace-nowrap inline-block h-full text-lg font-medium transition-all ${
                sidebarOpen ? "w-0" : "w-24"
              }`}
            >
              Board
            </div>
          </Link>
          <Link
            to="/projects/chart"
            className="flex gap-2 py-4 px-4 hover:bg-gray-200 hover:text-black"
          >
            <span className="text-2xl">
              <FaChartGantt />
            </span>
            <div
              className={`overflow-hidden whitespace-nowrap inline-block h-full text-lg font-medium transition-all ${
                sidebarOpen ? "w-0" : "w-24"
              }`}
            >
              Gantt Chart
            </div>
          </Link>
        </ul>
      </sidebar>
    );
}

export default Sidebar;