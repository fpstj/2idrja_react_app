import React from 'react';
import Navbar from './ui/Navbar';
import Project from './ui/Project';
import Footer from './ui/Footer';

// Functional component
const Research = () => {
  return (
    <div>
      <Navbar className="active text-white" />
      <Project />
      <Footer />
    </div>
  );
};

export default Research;
