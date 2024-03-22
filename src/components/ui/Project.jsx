import React from 'react';
import projectimg from '../images/passion.png';
import './Project.css';

const Project = () => {
  return (
    <div className="d-flex flex-column w-100">
      {/* 1st row */}
      <div className="d-flex flex-row w-100">
        <div className="frame d-flex flex-column col-6">
          <h1 className="mt-3 mb-3 ms-5">Name of project</h1>
          <div className="box mb-4">
            <div className="lines">
              <div className="overlap-group">
                <div className="rectangle" />
                <div className="rectangle-2" />
              </div>
            </div>
          </div>
          <h3 className="mb-2 mx-5">Key details of the project</h3>
          <p className="pt-5 mx-5">
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
        <div className="d-flex flex-column col-md-6 col-sm-12 justify-content-end align-self-start pe-5">
          <img className="img-fluid" src={projectimg} alt="Project Image" />
        </div>
      </div>

      {/* 2nd row */}
      <div className="d-flex flex-row-reverse w-100">
        <div className="frame-right d-flex flex-column col-6">
          <h1 className="d-flex flex-row-reverse mt-3 mb-3 ms-5 pe-5">Name of project</h1>
          <div className="d-flex flex-row-reverse box mb-4">
            <div className="lines-right">
              <div className="overlap-group-right">
                <div className="rectangle-right" />
                <div className="rectangle-2-right" />
              </div>
            </div>
          </div>
          <h3 className="d-flex flex-row-reverse mb-2 pe-5">Key details of the project</h3>
          <p className="d-flex flex-row-reverse pt-5 pe-5 text-end">
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
        <div className="d-flex flex-column col-md-6 col-sm-12 justify-content-end align-self-start pe-5">
          <img className="img-fluid" src={projectimg} alt="Project Image" />
        </div>
      </div>
    </div>
  );
};

export default Project;
