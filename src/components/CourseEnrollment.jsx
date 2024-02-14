import React, { useState } from 'react';
import './CourseEnrollment.css';

const CourseEnrollment = () => {
  const [courseName, setCourseName] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [places, setPlaces] = useState('');

  const handleEnroll = () => {
    // Implement your enroll logic here
    console.log('Enrolling in course:', { courseName, duration, price, places });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Course Name"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Places"
        value={places}
        onChange={(e) => setPlaces(e.target.value)}
      />
      <button onClick={handleEnroll}>Enroll</button>
    </div>
  );
};

export default CourseEnrollment;
