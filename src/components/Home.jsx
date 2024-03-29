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
      <div className="d-flex flex-row w-100">
        <OurMisiion />
      </div>
      <div className="d-flex flex-row">
        <Testimonials />
      </div>
      {/* enrollment section */}

      <div className="justify-content-center align-items-center d-flex p-5">
        <CourseEnrollmentCard
          image="./images/html-wallpaper.jpg"
          title="HTML course"
          duration="01 January - 01 February"
          price="99$"
          places="2 places left"
        />
        <CourseEnrollmentCard
          image="./images/html-css-js-wallpapers.jpg"
          title="Frontend course"
          duration="01 March - 15 April"
          price="199$"
          places="7 places left"
        />

        <CourseEnrollmentCard
          image="./images/jswallpaper.jpg"
          title="JavaScript"
          duration="01 May - 30 May"
          price="89$"
          places="1 place left"
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
