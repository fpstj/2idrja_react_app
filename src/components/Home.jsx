/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import './Home.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './ui/Navbar';
import Hero from './ui/Hero';
import OurMisiion from './ui/OurMission';
import Footer from './ui/Footer';

function Home() {
  return (
    <div className="App">
      <div className="background">
        <Navbar />
        <Hero />
      </div>
      <div>
        <OurMisiion />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
