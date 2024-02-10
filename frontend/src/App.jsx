import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { fetchIssues } from "./store/features/issuesSlice";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import Bugs from "./pages/Bugs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashLayout from "./layouts/DashLayout";
import Projects from './pages/Projects/Index'

import AddIssue from './pages/Projects/AddIssue';
import GnattChart from "./pages/Projects/GnattChart";
import Issues from "./pages/Projects/Issues";
import Board from "./pages/Board";
import Settings from "./pages/Projects/Settings";
import SpaceLayout from "./layouts/SpaceLayout";
import SpaceSetting from "./pages/spaces/Settings";

import ProjectSetting from "./pages/spaces/ProjectSetting";
import TeamSetting from "./pages/spaces/TeamSetting";
import UserSetting from "./pages/spaces/UserSetting";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<DashLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bugs" element={<Bugs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/addissue" element={<AddIssue />} />
        <Route path="/projects/issues" element={<Issues />} />
        <Route path="/projects/chart" element={<GnattChart />} />
        <Route path="/projects/board" element={<Board />} />
        <Route path="/projects/settings" element={<Settings />} />
      </Route>
      <Route element={<SpaceLayout/>}>
        <Route path="/space/settings" element={<SpaceSetting />}/>
        <Route path="/space/project" element={<ProjectSetting />}/>
        <Route path="/space/team" element={<TeamSetting />}/>
        <Route path="/space/user" element={<UserSetting />}/>
      </Route>
    </Routes>
  );
}

export default App;
