/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Home.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './ui/Navbar';
import Hero from './ui/Hero';
import OurMisiion from './ui/OurMission';

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
