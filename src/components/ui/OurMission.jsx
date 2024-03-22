import React from 'react';
import './OurMission.css';
import projectimg from '../images/passion.png';

const OurMisiion = () => {
  return (
    <div className="d-flex flex-column w-100 pt-5">
      {/* 1st row */}
      <div className="d-flex flex-row w-100">
        <div className="frame d-flex flex-column col-6">
          <h1 className="mt-3 mb-2 ms-5">WHAT WE DO</h1>
          <div className="box mb-5">
            <div className="lines">
              <div className="overlap-group">
                <div className="rectangle" />
                <div className="rectangle-2" />
              </div>
            </div>
          </div>
          <p className="fw-bold fs-5 text-start ps-5">
            "Unleashing Innovation, Igniting Change: Where
            <br />
            Boundless Research Shapes a Limitless Future!"
          </p>
        </div>
        <div className="d-flex flex-column col-6 w-100">
          <div className="d-flex flex-column col-6 p-3 pe-5 paragraph lh-lg">
            We are driven by a profound commitment to catalyzing progress through pioneering
            research and innovation.Our focal point is a versatile approach aimed at advancing
            knowledge, fostering groundbreaking discoveries, and pushing the boundaries of
            possibility. Through strategic initiatives in research and development, technological
            innovation, and collaborative partnerships with leading institutions and experts, we
            endeavor to spearhead transformative changes in various fields.Our dedicated team is at
            the forefront of scientific exploration, working tirelessly to unlock new solutions,
            technologies, and methodologies that have the potential to reshape industries and
            improve the overall human experience.Join us in our relentless pursuit of knowledge, as
            we strive to create a world where innovation thrives and groundbreaking research propels
            us towards a brighter
          </div>
        </div>
      </div>

      {/* 2nd row */}
      <div className="d-flex flex-row h-75 ps-5">
        <div className="d-flex flex-column col-6 p-3">
          <h2 className="ps-5">Our mission</h2>
          <hr />
          <p className="ps-5 paragraph lh-lg">
            At the core of our organization lies a bold and unwavering mission: to pioneer
            transformative change through relentless innovation and purpose-driven research. We are
            on a quest to redefine possibilities, pushing the frontiers of knowledge to address
            complex challenges and shape a future marked by progress. Guided by a commitment to
            excellence, collaboration, and societal benefit, our mission is to be a catalyst for
            positive impact. We aspire to lead the way in pioneering breakthroughs, fostering a
            culture of curiosity, and driving meaningful advancements that resonate globally. Join
            us on this journey as we strive to make an indelible mark on the world, driven by a
            mission that transcends boundaries and inspires a legacy of innovation.
          </p>
        </div>
        <div className="d-flex flex-column col-6 p-3 pe-5 paragraph">
          <img className="image-fluid" src={projectimg} alt="image of us" />
        </div>
      </div>

      {/* 3rd row */}
      <div className="d-flex flex-row w-100">
        <div className="frame d-flex flex-column mt-5 background-info w-100">
          <div className="d-flex flex-row w-100">
            <div className="d-flex flex-column col-6">
              <h2 className="mt-3 my-4 ms-5">Our core beliefs</h2>
              <div className="box mb-4">
                <div className="lines">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="rectangle-2" />
                  </div>
                </div>
              </div>
              <p className="text-start fs-2 fw-bold  ms-5">PURPOSE</p>
              <div>
                <p className="text-start fs-4 ms-5">
                  "Meaningful work gives life purpose & connects you to something bigger than
                  yourself."
                </p>
                <p className="text-start mb-2 ms-5">
                  <small className="text-body-secondary">Germany Kent</small>
                </p>
              </div>
            </div>
            <div className="d-flex flex-column col-6 w-100">
              <div className="d-flex flex-column col-6 p-3 pe-5 paragraph lh-lg">
                <p className="ps-4 paragraph lh-lg pt-4">
                  At the core of our organization lies a bold and unwavering mission: to pioneer
                  transformative change through relentless innovation and purpose-driven research.
                  We are on a quest to redefine possibilities, pushing the frontiers of knowledge to
                  address complex challenges and shape a future marked by progress. Guided by a
                  commitment to excellence, collaboration, and societal benefit, our mission is to
                  be a catalyst for positive impact. We aspire to lead the way in pioneering
                  breakthroughs, fostering a culture of curiosity, and driving meaningful
                  advancements that resonate globally. Join us on this journey as we strive to make
                  an indelible mark on the world, driven by a mission that transcends boundaries and
                  inspires a legacy of innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMisiion;
