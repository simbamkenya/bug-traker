import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { fetchBugs } from "./store/features/bugsSlice";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import Bugs from "./pages/Bugs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashLayout from "./layouts/DashLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<DashLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bugs" element={<Bugs />} />
      </Route>
    </Routes>
  );
}

export default App;
