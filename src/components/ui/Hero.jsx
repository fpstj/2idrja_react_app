import './Hero.css';

const Hero = () => {
  return (
    <>
      <div className="hero-content d-flex flex-column justify-content-center align-items-start h-75 ps-5">
        {/* header */}
        <div className="title">
          <h1 className="ps-5 m-0 text-white display-2">WE TAKE INOVATION</h1>
        </div>
        <div className="title text-white">
          <h1 className="ps-5 m-0 text-white display-2">& RESEARCH</h1>
        </div>
        <div className="title">
          <h1 className="ps-5 m-0 text-white display-2">SERIOUSLY!</h1>
        </div>
        {/* paragraph */}
        <div className="pt-5 paragraph">
          <h5 className="d-flex ps-5 m-0 text-white">
            We invite you to embark on a journey into the realms of cutting-edge research,
          </h5>
        </div>
        <div>
          <h5 className="d-flex text-white ps-5 m-0">
            pioneering initiatives, and transformative solutions.
          </h5>
        </div>
      </div>
    </>
  );
};

export default Hero;
