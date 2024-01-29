import React from 'react';
import Navbar from './ui/Navbar';
import Project from './ui/Project';
import Footer from './ui/Footer';

// Functional component
const Coding = () => {
  return (
    <div>
      <Navbar className="active text-white" />
      <Project />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Coding;
