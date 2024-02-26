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
import Projects from "./pages/Projects/Index";

import AddIssue from "./pages/Projects/AddIssue";
import GnattChart from "./pages/Projects/GnattChart";
import Issues from "./pages/Projects/Issues";
import Board from "./pages/Projects/Board";
import Settings from "./pages/Projects/Settings";
import SpaceLayout from "./layouts/SpaceLayout";
import SpaceSetting from "./pages/spaces/Settings";

import ProjectSetting from "./pages/spaces/ProjectSetting";
import TeamSetting from "./pages/spaces/TeamSetting";
import UserSetting from "./pages/spaces/UserSetting";
import axios from "axios";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  console.log("token from localstorage", localStorage.getItem("access_token"));
  
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("access_token")}`;
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<DashLayout />}>
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/bugs" element={<ProtectedRoute><Bugs /></ProtectedRoute>} />
          <Route path="/projects/:id" element={<ProtectedRoute><Projects /></ProtectedRoute>} />
          <Route path="/projects/:id/addissue" element={<ProtectedRoute><AddIssue /></ProtectedRoute>} />
          <Route path="/projects/:id/issues" element={<ProtectedRoute><Issues /></ProtectedRoute>} />
          <Route path="/projects/:id/chart" element={<ProtectedRoute><GnattChart /></ProtectedRoute>} />
          <Route path="/projects/:id/board" element={<ProtectedRoute><Board /></ProtectedRoute>} />
          <Route path="/projects/:id/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        
      </Route>
      
      <Route element={<SpaceLayout />}>
          <Route path="/space/settings" element={<ProtectedRoute><SpaceSetting /></ProtectedRoute>} />
          <Route path="/space/project" element={<ProtectedRoute><ProjectSetting /></ProtectedRoute>} />
          <Route path="/space/team" element={<ProtectedRoute><TeamSetting /></ProtectedRoute>} />
          <Route path="/space/user" element={<ProtectedRoute><UserSetting /></ProtectedRoute>} />
      </Route>
    </Routes>
  );
}

export default App;
