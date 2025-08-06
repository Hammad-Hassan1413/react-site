import HeroImage from "./assets/Illustration.png";
function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-flex">
          <div className="hero-heading">
            <h1>
              Lessons and insights <span className="green">from 8 years</span>
            </h1>
            <p>
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button className="request">Register</button>
          </div>
          <div className="hero-image">
            <img src={HeroImage} alt="Hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
