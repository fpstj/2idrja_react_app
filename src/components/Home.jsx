/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './ui/Navbar';
import Hero from './ui/Hero';
import OurMisiion from './ui/OurMission';
import Footer from './ui/Footer';
import CourseEnrollment from './ui/CourseEnrollment';

function Home() {
  // const [showModal, setShowModal] = useState(false);

  // const handleEnrollClick = () => {
  //   setShowModal(true);
  // };
  // const closeModal = () => {
  //   setShowModal(false);
  // };
  return (
    <div className="App">
      <div className="background">
        <Navbar />
        <Hero />
      </div>
      <div>
        <OurMisiion />
      </div>

      {/* <div className="enrollment-homepage">
        <card>
          <button
            type="button"
            className="btn btn-danger btn-lg btn-block btn-enrollment"
            onClick={handleEnrollClick}>
            Enroll now
          </button>
        </card>
      </div> */}
      <div>
        <CourseEnrollment />
      </div>
      <div>
        <Footer />
      </div>

      {/* {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>

            <h2>Enroll in a Course</h2>
            <CourseEnrollment />
          </div>
        </div>
      )} */}
    </div>
  );
}

export default Home;
