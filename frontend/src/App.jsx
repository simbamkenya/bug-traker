import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="min-h-screen px-8 bg-yellow-100">
        <h1 className="text-3xl font-bold underline">Bug Tracker</h1>
      </div>
    </div>
  );
}

export default App;
