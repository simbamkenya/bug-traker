import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaChartGantt, FaDiagramProject } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { CiViewList } from "react-icons/ci";
import { CiViewBoard } from "react-icons/ci";
import { MdBarChart } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { useParams } from "react-router-dom";

function Sidebar(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {id} = useParams();
  console.log("pgg", id);

  return (
    <aside className="bg-zomp min-h-screen">
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
          to={`/projects/${id}`}
          className="flex gap-2 py-4 px-4 hover:bg-gray-200 hover:text-black transition-all"
        >
          <span className="text-2xl">
            <IoMdHome />
          </span>
          <div
            className={`overflow-hidden  whitespace-nowrap inline-block h-full text-md font-medium ${
              sidebarOpen ? "w-0" : "w-32"
            }`}
          >
            Home
          </div>
        </Link>
        <Link
          to={`/projects/${id}/addissue`}
          className="flex gap-2 py-4 px-4 hover:bg-gray-200 hover:text-black transition-all"
        >
          <span className="text-2xl">
            <IoMdAdd />
          </span>
          <div
            className={`overflow-hidden  whitespace-nowrap inline-block h-full text-md font-medium ${
              sidebarOpen ? "w-0" : "w-32"
            }`}
          >
            Add Issue
          </div>
        </Link>
        <Link
          to={`/projects/${id}/issues`}
          className="flex gap-2 py-4 px-4 hover:bg-gray-200 hover:text-black transition-all"
        >
          <span className="text-2xl">
            <CiViewList />
          </span>
          <div
            className={`overflow-hidden whitespace-nowrap  inline-block h-full text-md font-medium  ${
              sidebarOpen ? "w-0" : "w-32"
            }`}
          >
            Issues
          </div>
        </Link>
        <Link
          to={`/projects/${id}/board`}
          className="flex gap-2 py-4 px-4 hover:bg-gray-200 hover:text-black transition-all"
        >
          <span className="text-2xl">
            <span className="text-2xl rotate-180">
              <MdBarChart />
            </span>
          </span>
          <div
            className={`overflow-hidden  whitespace-nowrap inline-block h-full text-md font-medium ${
              sidebarOpen ? "w-0" : "w-32"
            }`}
          >
            Board
          </div>
        </Link>
        <Link
          to={`/projects/${id}/chart`}
          className="flex gap-2 py-4 px-4 hover:bg-gray-200 hover:text-black transition-all"
        >
          <span className="text-2xl">
            <FaChartGantt />
          </span>
          <div
            className={`overflow-hidden whitespace-nowrap inline-block h-full text-md font-medium ${
              sidebarOpen ? "w-0" : "w-32"
            }`}
          >
            Gantt Chart
          </div>
        </Link>
        <Link
          to={`/projects/${id}/settings`}
          className="flex gap-2 py-4 px-4 hover:bg-gray-200 hover:text-black transition-all"
        >
          <span className="text-2xl">
            <IoSettings />
          </span>
          <div
            className={`overflow-hidden whitespace-nowrap inline-block h-full text-md font-medium ${
              sidebarOpen ? "w-0" : "w-32"
            }`}
          >
            Project setting
          </div>
        </Link>
      </ul>
    </aside>
  );
}

export default Sidebar;
