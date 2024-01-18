import './Hero.css';

const Hero = () => {
  return (
    <>
      <div className="hero-content d-flex flex-column justify-content-center align-items-start h-75 ps-5">
        {/* header */}
        <div>
          <p className=" d-flex  fs-1 fw-bold ps-5 m-0  text-white">WE TAKE INOVATION</p>
        </div>
        <div>
          <p className=" d-flex  fs-1 fw-bold ps-5 m-0 text-white text-white">& RESEARCH</p>
        </div>
        <div>
          <p className=" d-flex  fs-1 fw-bold ps-5 m-0  text-white">SERIOUSLY!</p>
        </div>
        {/* paragraph */}
        <div c1 lassName="pt-5 paragraph">
          <p className=" d-flex fs-5  ps-5 m-0  text-white">
            We invite you to embark on a journey into the realms of cutting-edge research,
          </p>
        </div>
        <div>
          <p className="d-flex fs-5 text-white ps-5 m-0 ">
            pioneering initiatives, and transformative solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
