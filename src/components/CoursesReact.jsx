import React from 'react';
import Navbar from './ui/Navbar';
import coursesReact from './images/Courses_React.png';
import profileImg1 from './images/Profile_img_1.png';
import profileImg2 from './images/Profile_img_2.png';
import profileImg3 from './images/Profile_img_3.png';
import './Courses.css';
import './CoursesReact.css';

// Functional component
const CourseReact = () => {
  return (
    <div className="container-fluid p-0 m-0">
      <Navbar className="active text-white" />
      <img className="img-fluid" src={coursesReact} alt="Frontend course cover image" />
      <div className="frame">
        <h1 className="mt-3 mb-2 ms-5">Front-end development</h1>
        <div className="box mb-5">
          <div className="lines">
            <div className="overlap-group">
              <div className="rectangle" />
              <div className="rectangle-2" />
            </div>
          </div>
        </div>
        <h3 className="mb-5 ms-5">
          Elevate Your Skills with Our Cutting-Edge Front-End Development Course!
        </h3>
        <p className="pt-5 ms-5">
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
      <div className="frame">
        <h1 className="mt-3 mb-2">Our instructors</h1>
        <div className="box mb-5">
          <div className="lines">
            <div className="overlap-group">
              <div className="rectangle" />
              <div className="rectangle-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row mt-5 mb-3">
        <div className="d-flex flex-column col-md-3 col-sm-12 justify-content-end align-self-start">
          <img className="img-thumbnail" src={profileImg1} alt="Project Image" />
        </div>
        <div className="d-flex flex-column col-md-8 col-sm-12 ms-5 align-self-start mt-2">
          <h1 className="mt-3">Full Name</h1>
          <p className="pt-5">
            Meet our seasoned Front-End Development instructor, a dynamic industry professional with
            a passion for cultivating the next generation of web developers. With a wealth of
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
            Join us, and let our experienced instructor guide you on a transformative journey toward
            front-end mastery!
            <br />
            <br />
            🚀 💻 #CodeWithConfidence #FrontEndInstructor
          </p>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between mt-4 mb-5">
        <div className="d-flex flex-column col-md-8 col-sm-12 ms-5 align-self-start mt-2">
          <h1 className="mt-3">Full Name</h1>
          <p className="pt-5">
            Meet our seasoned Front-End Development instructor, a dynamic industry professional with
            a passion for cultivating the next generation of web developers. With a wealth of
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
            Join us, and let our experienced instructor guide you on a transformative journey toward
            front-end mastery!
            <br />
            <br />
            🚀 💻 #CodeWithConfidence #FrontEndInstructor
          </p>
        </div>
        <div className="d-flex flex-column col-md-3 col-sm-12 justify-content-end align-self-start">
          <img className="img-thumbnail" src={profileImg2} alt="Project Image" />
        </div>
      </div>
      <div className="d-flex flex-row mt-5 mb-3">
        <div className="d-flex flex-column col-md-3 col-sm-12 justify-content-end align-self-start">
          <img className="img-thumbnail" src={profileImg3} alt="Project Image" />
        </div>
        <div className="d-flex flex-column col-md-8 col-sm-12 ms-5 align-self-start mt-2">
          <h1 className="mt-3">Full Name</h1>
          <p className="pt-5">
            Meet our seasoned Front-End Development instructor, a dynamic industry professional with
            a passion for cultivating the next generation of web developers. With a wealth of
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
            Join us, and let our experienced instructor guide you on a transformative journey toward
            front-end mastery!
            <br />
            <br />
            🚀 💻 #CodeWithConfidence #FrontEndInstructor
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseReact;
