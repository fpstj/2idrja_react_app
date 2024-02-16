import React from 'react';
import './CourseEnrollment.css';

const CourseEnrollment = () => {
  return (
    <>
      <card className=" d-flex flex-row fluid justify-content-center align-items-center">
        <table className="table-view background-enrollment p-5 m-5 ">
          <tr className="card-row justify-content-between align-items-center text-dark">
            <td className="ps-5">React for begginers</td>

            <td className="ps-5">from 01 jan - 30 may</td>
            <td className="ps-5">399€</td>

            <td className="ps-5">2 places left</td>
            <td className="btn-enroll ps-2">
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
