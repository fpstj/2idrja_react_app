import React from 'react';
import './CourseCard.css';

const CourseCard = (props) => {
  return (
    <>
      <div className="c-card d-flex flex-column justify-content-center align-items-center m-3 shadow-lg rounded">
        <img
          className="d-flex image-fluid rounded-top course-image shadow-lg"
          src={props.image}
          alt="image of course"
        />
        <div className="d-flex flex-row p-3 mt-3 rounded justify-content-center align-items-center w-100">
          <p className="cource-paragraph fs-2">{props.title}</p>
        </div>
        <div className="d-flex flex-row  rounded justify-content-center align-items-center w-100">
          <p className="cource-paragraph-date m-0">{props.duration}</p>
        </div>
        <div className="d-flex flex-row  rounded justify-content-center align-items-center w-100">
          <p className="fs-2 text-secondary fw-bold me-4">
            <s>{props.discount}</s>
          </p>
          <p className="fs-2 text-dark fw-bold">{props.price}</p>
        </div>
        <div className="d-flex flex-row  rounded justify-content-center align-items-center w-100">
          <p className="places-left fs-4 text-danger">{props.places}</p>
        </div>

        <div className="d-flex flex-row px-5 pb-4 pt-3 mb-3 rounded w-100">
          <button type="button" className="btn text-dark btn-custom w-100">
            Enroll now
          </button>
        </div>
      </div>
    </>
  );
};
export default CourseCard;
