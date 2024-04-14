import React from 'react';
import './CourseEnrollmentCard.css';

const CourseEnrollmentCard = (props) => {
  return (
    <>
      <>
        <div
          className="enrollment-card d-flex justify-content-center align-items-center m-5
      rounded shadow-lg ">
          <div className="card-background">
            <img className="card-wallpaper" src={props.image} alt="image" />
            <div className="card-body justify-content-center align-items-center pt-4">
              <h6 className="card-title text-center text-secondary fs-3 fw-bold pb-2">
                {props.title}
              </h6>
              <p className="card-text text-dark text-center">{props.duration}</p>
              <p className="card-text text-dark fs-3 fw-bold text-center">{props.price}</p>
              <p className="card-text text-dark text-center">{props.places}</p>
              <div className="pt-4 d-flex justify-content-center align-items-center">
                <button type="button" className="btn text-dark btn-custom w-75 ">
                  Enroll now
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default CourseEnrollmentCard;
