/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './ui/Navbar';
import Hero from './ui/Hero';
import OurMisiion from './ui/OurMission';
import Footer from './ui/Footer';
import CourseEnrollmentCard from './ui/CourseEnrollmentCard';
import Testimonials from './ui/Testimonials';

function Home() {
  return (
    <div className="App">
      <div className="background">
        <Navbar />
        <Hero />
      </div>
      <div>
        <OurMisiion />
        <Testimonials />
      </div>
      {/* enrollment section */}

      <div className="justify-content-center align-items-center d-flex">
        <CourseEnrollmentCard
          title="React for begginers"
          duration="from 01 January - 30 May"
          price="399$"
          places="2 places left"
        />
        <CourseEnrollmentCard
          title="JS for begginers"
          duration="from 01 January - 30 May"
          price="399$"
          places="12 places left"
        />
        <CourseEnrollmentCard
          title="JS for begginers"
          duration="from 01 January - 30 May"
          price="399$"
          places="1 places left"
        />
      </div>
      {/* end of enrollment section */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
