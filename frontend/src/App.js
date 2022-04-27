import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Navbar from "./components/navBar";
import AddForm from "./pages/addForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addform" element={<AddForm />} />
      </Routes>
    </div>
  );
}


export default App;