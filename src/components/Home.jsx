/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/ui/Navbar';
import Hero from './components/ui/Hero';
import OurMisiion from './OurMission';

function Home() {
  return (
    <div className="App">
      <div className="background">
        <Navbar />
        <Hero />
      </div>
      <OurMisiion />
    </div>
  );
}

export default Home;
