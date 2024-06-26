import React from 'react';
import projectimg from '../images/passion.png';
import './Project.css';

const Project = () => {
  return (
    <div className="d-flex flex-column w-100 py-3">
      {/* 1st row */}
      <div className="d-flex flex-column flex-lg-row h-75 ps-lg-5 w-100 w-lg-auto">
        <div className="frame d-flex flex-column col-lg-6 p-3">
          <h1 className="mt-3 mb-3 ms-5">Name of project</h1>
          {/* <---------------------lines---------------------> */}
          {/* <div className="box mb-4">
            <div className="lines">
              <div className="overlap-group">
                <div className="rectangle" />
                <div className="rectangle-2" />
              </div>
            </div>
          </div> */}
          {/* <---------------------lines---------------------> */}

          <h3 className="mb-2 mx-5">Key details of the project</h3>
          <p className="pt-5 mx-3 paragraph-justified">
            We are driven by a profound commitment to catalyzing progress through pioneering
            research and innovation.
            <br />
            <br />
            Our focal point is a versatile approach aimed at advancing knowledge, fostering
            groundbreaking discoveries, and pushing the boundaries of possibility.
            <br />
            <br />
            Through strategic initiatives in research and development, technological innovation, and
            collaborative partnerships with leading institutions and experts, we endeavor to
            spearhead transformative changes in various fields.
            <br />
            <br />
            Our dedicated team is at the forefront of scientific exploration, working tirelessly to
            unlock new solutions, technologies, and methodologies that have the potential to reshape
            industries and improve the overall human experience.
            <br />
            <br />
            Join us in our relentless pursuit of knowledge, as we strive to create a world where
            innovation thrives and groundbreaking research propels us towards a brighter future.
          </p>
        </div>
        <div className="d-flex flex-row flex-lg-col col-lg-6 pe-5 p-3">
          <img className="img-fluid" src={projectimg} alt="Project Image" />
        </div>
      </div>

      {/* 2nd row */}
      <div className="d-flex flex-column flex-lg-row  ps-lg-5 w-100 w-lg-auto py-5">
        <div className="d-flex flex-row flex-lg-col col-lg-6 pe-5 p-3 col-12 order-lg-1 order-2">
          <img className="img-fluid" src={projectimg} alt="Project Image" />
        </div>
        <div className="frame d-flex flex-column col-lg-6 p-3 col-12 order-lg-2 order-1">
          <h1 className="d-flex flex-row-reverse mt-3 mb-3 ms-5 pe-5">Name of project</h1>
          {/* <---------------------lines---------------------> */}
          {/* <div className="d-flex flex-row-reverse box mb-4">
            <div className="lines-right">
              <div className="overlap-group-right">
                <div className="rectangle-right" />
                <div className="rectangle-2-right" />
              </div>
            </div>
          </div> */}
          {/* <---------------------lines---------------------> */}

          <h3 className="d-flex flex-row-reverse mb-2 pe-5">Key details of the project</h3>
          <p className="d-flex flex-row-reverse pt-5 pe-5 text-end paragraph-justified">
            We are driven by a profound commitment to catalyzing progress through pioneering
            research and innovation.
            <br />
            <br />
            Our focal point is a versatile approach aimed at advancing knowledge, fostering
            groundbreaking discoveries, and pushing the boundaries of possibility.
            <br />
            <br />
            Through strategic initiatives in research and development, technological innovation, and
            collaborative partnerships with leading institutions and experts, we endeavor to
            spearhead transformative changes in various fields.
            <br />
            <br />
            Our dedicated team is at the forefront of scientific exploration, working tirelessly to
            unlock new solutions, technologies, and methodologies that have the potential to reshape
            industries and improve the overall human experience.
            <br />
            <br />
            Join us in our relentless pursuit of knowledge, as we strive to create a world where
            innovation thrives and groundbreaking research propels us towards a brighter future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
