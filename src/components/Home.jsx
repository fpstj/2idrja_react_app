/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './ui/Navbar';
import Hero from './ui/Hero';
import OurMisiion from './ui/OurMission';
import Testimonials from './ui/Testimonials';
import Footer from './ui/Footer';
import CourseCard from './ui/CourseCard';
// import CourseEnrollmentCard from './ui/CourseEnrollmentCard';

function Home() {
  return (
    <>
      <div className="background w-100">
        <Navbar />
        <Hero />
      </div>
      <div className="d-flex flex-column">
        <OurMisiion />
      </div>

      <div className="course-list-container p-5">
        <div className="course-list-wrapper">
          <CourseCard
            image="/images/html-wallpaper.jpg"
            title="HTML Course"
            duration="01 January - 01 February"
            discount="120$"
            price="75$"
            places="2 places left"
          />
        </div>
        <div className="course-list-wrapper">
          <CourseCard
            image="./images/html-css-js-wallpapers.jpg"
            title="Frontend course"
            duration="01 March - 15 April"
            discount="150$"
            price="99$"
            places="7 places left"
          />
        </div>
        <div className="course-list-wrapper">
          <CourseCard
            image="./images/c-wallpaper.webp"
            title="C#"
            duration="01 September - 31 October"
            discount="200$"
            price="150$"
            places="7 places left"
          />
        </div>
      </div>
      <div className="d-flex flex-column">
        <Testimonials />
      </div>

      <div>
        <Footer />
        {/* <Footer2 /> */}
      </div>
    </>
  );
}

export default Home;
