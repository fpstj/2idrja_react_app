/* eslint-disable react/no-unescaped-entities */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './components/Home';
import ProjectsCoding from './components/ProjectsCoding';
import ProjectsResearch from './components/ProjectsResearch';
import CoursesFrontend from './components/CoursesFrontend';
import CoursesReact from './components/CoursesReact';
import CoursesUIUX from './components/CoursesUIUX';
import About from './components/About';
import RegistrationForm from './components/RegistrationForm';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseEnrollment from './components/CourseEnrollment';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/projectscoding" element={<ProjectsCoding />} />
        <Route path="/projectsresearch" element={<ProjectsResearch />} />
        <Route path="/coursesfrontend" element={<CoursesFrontend />} />
        <Route path="/coursesreact" element={<CoursesReact />} />
        <Route path="/coursesuiux" element={<CoursesUIUX />} />
        <Route path="/about" element={<About />} />
        <Route path="/enrollment" element={<CourseEnrollment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
