import './CourseEnrollmentCard.css';

const CourseEnrollmentCard = () => {
  return (
    <>
      <>
        <div className="enrollment-card  d-flex justify-content-center align-items-center ">
          <div className="card-background ">
            <div className="card-body justify-content-center align-items-center ">
              <h4 className="card-title text-center p-5">Title</h4>
              <p className="card-text">Text</p>
              <p className="card-text">Text</p>
              <p className="card-text">Text</p>
              <p className="card-text">Text</p>
              <div className="pt-5">
                <button type="button" className="btn text-white btn-custom">
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
