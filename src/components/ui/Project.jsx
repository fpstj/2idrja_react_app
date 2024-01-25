import React from 'react';
import projectimg from '../images/passion.png';
import './Project.css';

const Project = () => {
  return (
    <>
      <div className="container-fluid p-0 m-0">
        <div className="d-flex flex-row justify-content-between mt-4 mb-5">
          <div className="d-flex flex-column col-md-5 col-sm-10 ms-5 align-self-start mt-2">
            <div className="frame">
              <h1 className="mt-3 mb-2">Name of project</h1>
              <div className="box mb-5">
                <div className="lines">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="rectangle-2" />
                  </div>
                </div>
              </div>
              <h3 className="mb-5">Key details of the project</h3>
              <p className="pt-5">
                We are driven by a profound commitment to catalyzing progress through pioneering
                research and innovation.
                <br />
                <br />
                Our focal point is a versatile approach aimed at advancing knowledge, fostering
                groundbreaking discoveries, and pushing the boundaries of possibility.
                <br />
                <br />
                Through strategic initiatives in research and development, technological innovation,
                and collaborative partnerships with leading institutions and experts, we endeavor to
                spearhead transformative changes in various fields.
                <br />
                <br />
                Our dedicated team is at the forefront of scientific exploration, working tirelessly
                to unlock new solutions, technologies, and methodologies that have the potential to
                reshape industries and improve the overall human experience.
                <br />
                <br />
                Join us in our relentless pursuit of knowledge, as we strive to create a world where
                innovation thrives and groundbreaking research propels us towards a brighter future.
              </p>
            </div>
          </div>
          <div className="d-flex flex-column col-md-6 col-sm-12 justify-content-end align-self-start">
            <img className="img-fluid" src={projectimg} alt="Project Image" />
          </div>
        </div>
        <div className="d-flex flex-row mt-5 mb-3">
          <div className="d-flex flex-column col-md-6 col-sm-12 justify-content-end align-self-start">
            <img className="img-fluid" src={projectimg} alt="Project Image" />
          </div>
          <div className="d-flex flex-column col-md-5 col-sm-10 ms-5 align-self-start mt-2">
            <div className="frame">
              <h1 className="mt-3">Name of project</h1>
              <div className="box mb-5">
                <div className="lines">
                  <div className="overlap-group">
                    <div className="rectangle"></div>
                    <div className="rectangle-2"></div>
                  </div>
                </div>
              </div>
              <h3 className="mb-5">Key details of the project</h3>
              <p className="pt-5">
                We are driven by a profound commitment to catalyzing progress through pioneering
                research and innovation.
                <br />
                <br />
                Our focal point is a versatile approach aimed at advancing knowledge, fostering
                groundbreaking discoveries, and pushing the boundaries of possibility.
                <br />
                <br />
                Through strategic initiatives in research and development, technological innovation,
                and collaborative partnerships with leading institutions and experts, we endeavor to
                spearhead transformative changes in various fields.
                <br />
                <br />
                Our dedicated team is at the forefront of scientific exploration, working tirelessly
                to unlock new solutions, technologies, and methodologies that have the potential to
                reshape industries and improve the overall human experience.
                <br />
                <br />
                Join us in our relentless pursuit of knowledge, as we strive to create a world where
                innovation thrives and groundbreaking research propels us towards a brighter future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
