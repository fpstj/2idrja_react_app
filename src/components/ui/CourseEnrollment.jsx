import React from 'react';
import './CourseEnrollment.css';

const CourseEnrollment = (props) => {
  return (
    <>
      <card className=" d-flex flex-row fluid justify-content-center align-items-center">
        <table className="table-view background-enrollment p-5 m-3 ">
          <tr className="card-row justify-content-between align-items-center text-white">
            <td className="ps-5 fs-5">{props.title}</td>

            <td className="ps-5">{props.duration}</td>
            <td className="ps-5">{props.price}</td>

            <td className="ps-5">{props.places}</td>
            <td className="btn-enroll ps-5">
              <button type="button" className="btn text-white btn-custom">
                Enroll
              </button>
            </td>
          </tr>
        </table>
      </card>
    </>
  );
};

export default CourseEnrollment;
