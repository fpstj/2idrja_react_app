/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ProjectsCoding from './components/ProjectsCoding';
import ProjectsResearch from './components/ProjectsReasearch';
import CoursesFrontend from './components/CoursesFrontend';
import CoursesReact from './components/CoursesReact';
import CoursesUIUX from './components/CoursesUIUX';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projectscoding" element={<ProjectsCoding />} />
        <Route path="/projectsresearch" element={<ProjectsResearch />} />
        <Route path="/coursesfrontend" element={<CoursesFrontend />} />
        <Route path="/coursesreact" element={<CoursesReact />} />
        <Route path="/coursesuiux" element={<CoursesUIUX />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
