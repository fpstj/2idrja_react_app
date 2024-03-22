import React from 'react';
import Navbar from './ui/Navbar';
import library from './images/Library.png';
import './About.css';
import Footer from './ui/Footer';

const About = () => {
  return (
    <div>
      <Navbar className="active text-white" />
      {/* title frame */}
      <div className="frame py-5 my-3">
        <h1 className="ps-5 mt-3 mb-3 py-2 aboutus">About us</h1>
        <div className="lines">
          <div className="overlap-group">
            <div className="rectangle"></div>
            <div className="rectangle-2"></div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row pb-5 pt-5 w-100 justify-content-around">
        <div className="d-flex flex-column col-6 pt-3">
          <p className="fw-bold fs-4 text-info ps-5">How we started</p>

          <h1 className="ps-5 mt-3 mb-3 about--title">
            Our Goal Is
            <br /> Global Learning
            <br />
            Transformation
          </h1>
          <div>
            <p className="paragraph ps-5 pe-5 pt-5">
              Welcome to [Platform Name] – Where Innovation Meets Expertise in Programming Education
              Since 2004! At [Platform Name], we have been at the forefront of empowering aspiring
              developers and designers to unleash their full potential in the dynamic world of
              programming and web development. Established in 2004, our commitment to excellence has
              driven us to continually evolve and offer cutting-edge courses that reflect the latest
              industry trends. Our comprehensive programming curriculum encompasses a range of
              courses designed to equip you with the skills demanded by today's tech landscape. Dive
              into the fundamentals with our Front-End Development course, covering HTML, CSS, and
              JavaScript, laying the groundwork for your programming journey. Elevate your expertise
              further with our React.js course, exploring the intricacies of one of the most popular
              JavaScript libraries used in modern web development. For those passionate about
              crafting seamless user experiences, our UI/UX Design course provides a deep dive into
              the principles, processes, and tools essential for creating captivating digital
              interfaces.
            </p>
          </div>
        </div>
        <div className="d-flex flex-column col-6 pb-5">
          <img className="image-fluid library-image" src={library} alt="image of library" />
          <div className="boxes d-flex flex-column mx-3 rounded bg-gray-200 p-3 shadow-lg">
            <div className="inside--boxes d-flex flex-row justify-content-around">
              <div className="box d-flex flex-column p-3 m-3 rounded bg-gray-100 w-100 shadow">
                <h1>100+</h1>
                <p>Satisfied students</p>
              </div>
              <div className="box d-flex flex-column p-3 m-3 rounded bg-gray-100 w-100 shadow">
                <h1>12</h1>
                <p>Projects completed</p>
              </div>
            </div>
            <div className="inside--boxes d-flex flex-row justify-content-around">
              <div className="box d-flex flex-column p-3 m-3 rounded bg-gray-100 w-100 shadow">
                <h1>9+</h1>
                <p>years of experience</p>
              </div>
              <div className="box d-flex flex-column p-3 m-3 rounded bg-gray-100 w-100 shadow">
                <h1>50</h1>
                <p>Successful courses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="fs-5 ps-5 ms-4 pt-2 pb-3">Explore Our Showcase of Completed Projects:</p>
        <ul className="ps-5 ms-5">
          <li>
            <p className="paragraph ps-5 pe-5 pt-2">
              "CodeCraft Pro" - A Front-End Development Project: Students demonstrate their mastery
              of HTML, CSS, and JavaScript by crafting a responsive and visually engaging website.
            </p>
          </li>
          <li>
            <p className="paragraph ps-5 pe-5 pt-2">
              "ReactRise" - Mastering React.js: This project showcases the application of React.js
              in building a dynamic and interactive web application, highlighting the power and
              versatility of this cutting-edge technology.
            </p>
          </li>
          <li>
            <p className="paragraph ps-5 pe-5 pt-2">
              "PixelPerfect Designs" - UI/UX Design Showcase: Students unveil their creativity and
              user-centric design skills with a series of captivating UI/UX projects, crafted using
              industry-standard tools such as Figma.
            </p>
          </li>
          <li>
            <p className="paragraph ps-5 pe-5 pt-2">
              "InnoCode Academy" - Education-Driven Project: This collaborative endeavor highlights
              the impact of effective programming education, demonstrating the transformative power
              of knowledge in shaping innovative solutions.
            </p>
          </li>
          <li>
            <p className="paragraph ps-5 pe-5 pt-5">
              At [Platform Name], our mission is to foster a collaborative learning environment
              where passion meets expertise. Join us on this educational journey, where each course
              is a step toward realizing your programming aspirations. Enroll today, and let's code
              the future together!
            </p>
          </li>
          <p>💻 💡 #CodeWithPassion #ProgrammingExcellence</p>
        </ul>
        <p className="paragraph ps-5 pe-5 pt-5"></p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
