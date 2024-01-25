import React from 'react';
import Navbar from './ui/Navbar';
import Project from './ui/Project';

// Functional component
const Research = () => {
  return (
    <div>
      <Navbar className="active text-white" />
      <Project />
    </div>
  );
};

export default Research;
