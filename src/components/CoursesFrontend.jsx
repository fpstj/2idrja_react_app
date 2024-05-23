import React from 'react';
import Navbar from './ui/Navbar';
import coursesFrontEndImg from './images/Courses_Front_End.png';
import profileImg1 from './images/Profile_img_1.png';
import profileImg2 from './images/Profile_img_2.png';
import profileImg3 from './images/Profile_img_3.png';
import './Courses.css';
import './CoursesFrontend.css';
import Footer from './ui/Footer';

// Functional component
const Frontend = () => {
  return (
    <div className="container-fluid p-0 m-0">
      <Navbar className="active text-white" />
      <img
        className="img-fluid w-100 cover-img"
        src={coursesFrontEndImg}
        alt="Frontend course cover image"
      />
      <div className="d-flex flex-column my-5 frame">
        <h1 className="mt-3 mb-2 ms-5">Front-end development</h1>
        {/* <div className="box mb-5">
          <div className="lines">
            <div className="overlap-group">
              <div className="rectangle" />
              <div className="rectangle-2" />
            </div>
          </div>
        </div> */}
        <h3 className="mb-5 ms-5">
          Elevate Your Skills with Our Cutting-Edge Front-End Development Course!
        </h3>
        <p className="pt-5 mx-5 paragraph-justified">
          Embark on a transformative journey in the dynamic realm of web development with our
          comprehensive Front-End Development course. This meticulously crafted program is designed
          for aspiring developers eager to master the art of creating visually stunning and
          seamlessly interactive user interfaces. Dive into the essentials of HTML, CSS/CSS/Saas,
          JavaScript, Bootstrap, and Git version control, honing a skill set that forms the backbone
          of modern web development.
          <br />
          <br />
          Throughout the course, our expert instructors will guide you through the intricacies of
          these foundational technologies, ensuring you gain a deep understanding of their
          capabilities and nuances. From crafting pixel-perfect layouts with HTML and CSS to
          implementing dynamic functionality with JavaScript, you'll acquire the proficiency to
          bring your creative vision to life.
          <br />
          <br />
          Navigate the intricacies of CSS/CSS (Saas) for efficient styling, harness the power of
          Bootstrap for responsive design, and master version control with Git to streamline
          collaborative projects. Our hands-on approach and real-world projects will empower you to
          build a robust portfolio showcasing your mastery of these essential front-end
          technologies.
          <br />
          <br />
          Join us and unlock the door to a world of limitless possibilities in front-end
          development. Enroll today and empower yourself with the knowledge and skills to thrive in
          the digital landscape!
          <br />
          <br />
          💡 🖥️ #CodeToCreate #FrontEndMastery
        </p>
      </div>
      <div className="d-flex flex-column my-5 frame ">
        <h1 className="d-flex mt-3 mb-2 justify-content-center">Our instructors</h1>
        {/* <div className="box mb-5">
          <div className="lines">
            <div className="overlap-group">
              <div className="rectangle" />
              <div className="rectangle-2" />
            </div>
          </div>
        </div> */}
      </div>
      <div className="container">
        {/* instructor 1 */}
        <div className="d-flex flex-column flex-lg-row mt-4 mb-3">
          {/* image */}
          <div className="d-flex flex-column col-lg-4 col-12 ">
            <img className="img-fluid" src={profileImg1} alt="Project Image" />
          </div>
          {/* text */}
          <div className="d-flex flex-column col-lg-7 col-12 ms-5 mt-2 align-self-start ">
            <h1 className="mt-3 mx-5">Full Name 1</h1>
            <p className="pt-5 mx-5 paragraph-justified">
              Meet our seasoned Front-End Development instructor, a dynamic industry professional
              with a passion for cultivating the next generation of web developers. With a wealth of
              hands-on experience and a proven track record in the field, our instructor brings a
              unique blend of expertise and enthusiasm to the classroom.
              <br />
              <br />
              Their engaging teaching style seamlessly demystifies complex concepts, making HTML,
              CSS/CSS (Saas), JavaScript, Bootstrap, and Git version control accessible and exciting
              for learners of all levels.
              <br />
              <br />
              Their engaging teaching style seamlessly demystifies complex concepts, making HTML,
              CSS/CSS (Saas), JavaScript, Bootstrap, and Git version control accessible and exciting
              for learners of all levels.
              <br />
              <br />
              Join us, and let our experienced instructor guide you on a transformative journey
              toward front-end mastery!
              <br />
              <br />
              🚀 💻 #CodeWithConfidence #FrontEndInstructor
            </p>
          </div>
        </div>

        {/* instructor 2 */}
        <div className="d-flex flex-column flex-lg-row mt-4 mb-3">
          {/* text */}
          <div className="d-flex flex-column col-lg-7 col-12 ms-5 mt-2 align-self-start ">
            <h1 className="mt-3 mx-5">Full Name 2</h1>
            <p className="pt-5 mx-5 paragraph-justified">
              Meet our seasoned Front-End Development instructor, a dynamic industry professional
              with a passion for cultivating the next generation of web developers. With a wealth of
              hands-on experience and a proven track record in the field, our instructor brings a
              unique blend of expertise and enthusiasm to the classroom.
              <br />
              <br />
              Their engaging teaching style seamlessly demystifies complex concepts, making HTML,
              CSS/CSS (Saas), JavaScript, Bootstrap, and Git version control accessible and exciting
              for learners of all levels.
              <br />
              <br />
              Their engaging teaching style seamlessly demystifies complex concepts, making HTML,
              CSS/CSS (Saas), JavaScript, Bootstrap, and Git version control accessible and exciting
              for learners of all levels.
              <br />
              <br />
              Join us, and let our experienced instructor guide you on a transformative journey
              toward front-end mastery!
              <br />
              <br />
              🚀 💻 #CodeWithConfidence #FrontEndInstructor
            </p>
          </div>
          {/* image */}
          <div className="d-flex flex-column col-lg-4 col-12 align-self-start">
            <img className="img-fluid" src={profileImg2} alt="Project Image" />
          </div>
        </div>

        {/* instructor 3 */}
        <div className="d-flex flex-column flex-lg-row mt-4 mb-3">
          {/* image */}
          <div className="d-flex flex-column col-lg-4 col-12 ">
            <img className="img-fluid" src={profileImg3} alt="Project Image" />
          </div>
          {/* text */}
          <div className="d-flex flex-column  col-lg-7 col-12 ms-5 mt-2 align-self-start ">
            <h1 className="mt-3 mx-5">Full Name 3</h1>
            <p className="pt-5 mx-5 paragraph-justified">
              Meet our seasoned Front-End Development instructor, a dynamic industry professional
              with a passion for cultivating the next generation of web developers. With a wealth of
              hands-on experience and a proven track record in the field, our instructor brings a
              unique blend of expertise and enthusiasm to the classroom.
              <br />
              <br />
              Their engaging teaching style seamlessly demystifies complex concepts, making HTML,
              CSS/CSS (Saas), JavaScript, Bootstrap, and Git version control accessible and exciting
              for learners of all levels.
              <br />
              <br />
              Their engaging teaching style seamlessly demystifies complex concepts, making HTML,
              CSS/CSS (Saas), JavaScript, Bootstrap, and Git version control accessible and exciting
              for learners of all levels.
              <br />
              <br />
              Join us, and let our experienced instructor guide you on a transformative journey
              toward front-end mastery!
              <br />
              <br />
            </p>
            🚀 💻 #CodeWithConfidence #FrontEndInstructor
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Frontend;
