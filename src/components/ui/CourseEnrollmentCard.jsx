import React from 'react';
import './CourseEnrollmentCard.css';

const CourseEnrollmentCard = (props) => {
  return (
    <>
      <>
        <div className="enrollment-card  d-flex justify-content-center align-items-center p-3">
          <div className="card-background ">
            <div className="card-body justify-content-center align-items-center ">
              <h6 className="card-title text-center text-white p-5 fs-4">{props.title}</h6>
              <p className="card-text text-white">{props.duration}</p>
              <p className="card-text text-white">{props.price}</p>
              <p className="card-text text-white">{props.places}</p>
              <div className="pt-5">
                <button type="button" className="btn text-white btn-custom w-75">
                  Enroll
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
