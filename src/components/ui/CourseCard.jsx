import React from 'react';
import './CourseCard.css';

const CourseCard = (props) => {
  return (
    <>
      <div className=" c-card d-flex flex-column justify-content-center align-items-center m-3 shadow-lg rounded">
        <img
          className="image-fluid rounded-top course-image shadow-lg"
          src={props.image}
          alt="image of course"
        />
        {/* <div className="card-body rounded bg-gray-100 pt-3 shadow-lg"> */}
        <div className="d-flex flex-row p-3 m-3 rounded justify-content-center align-items-center w-100">
          <p className="fs-2">{props.title}</p>
        </div>
        <div className="d-flex flex-row  rounded justify-content-center align-items-center w-100">
          <p className="fs-6">{props.duration}</p>
        </div>
        <div className="d-flex flex-row  rounded justify-content-center align-items-center w-100">
          <p className="fs-2 text-danger fw-bold">{props.price}</p>
        </div>
        <div className="d-flex flex-row  rounded justify-content-center align-items-center w-100">
          <p className="fs-4 text-info">{props.places}</p>
        </div>

        <div className="d-flex flex-row p-3 m-3 rounded w-100">
          <button type="button" className="btn text-dark btn-custom w-100">
            Enroll now
          </button>
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
};
export default CourseCard;
