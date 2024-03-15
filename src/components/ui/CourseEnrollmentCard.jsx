import React from 'react';
import './CourseEnrollmentCard.css';

const CourseEnrollmentCard = (props) => {
  return (
    <>
      <>
        <div className="enrollment-card d-flex justify-content-center align-items-center p-5">
          <div className="card-background">
            <img className="card-wallpaper h-100" src={props.image} alt="Thumbnail" />
            <div className="card-body justify-content-center align-items-center pt-3">
              <h6 className="card-title text-center text-primary fs-3 fw-bold pb-2">
                {props.title}
              </h6>
              <p className="card-text text-white">{props.duration}</p>
              <p className="card-text text-dark fs-3 fw-bold">{props.price}</p>
              <p className="card-text text-white">{props.places}</p>
              <div className="pt-4">
                <button type="button" className="btn text-dark btn-custom w-75">
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
