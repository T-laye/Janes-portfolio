import React from "react";
import Header from "./Components/Header/Header";
import HomePage from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contacts/Contact";
import Project from "./Components/Projects/Project";
import "./App.css";
import "./Queries.css";

const App = () => {
  return (
    <div className="ui container App">
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </div>
  );
};

export default App;
