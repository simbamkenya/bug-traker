import { Outlet } from "react-router-dom";
import MainNavBar from "../components/MainNavBar";


function DashLayout(props) {

  return (
    <div>
      <MainNavBar />
      <Outlet />
    </div>
  );
}

export default DashLayout;
