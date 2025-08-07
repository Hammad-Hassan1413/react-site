import One from "./assets/1.png";
import Two from "./assets/2.png";
import Three from "./assets/3.png";
import Four from "./assets/4.png";
import Five from "./assets/5.png";
import Six from "./assets/6.png";

function Customer() {
  return (
    <section className="customer">
      <div className="container">
        <div className="customer-flex">
          <div className="customer-image"></div>
          <div className="customer-text">
            <p>
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h2>
              <span className="green">Tim Smith</span>
            </h2>
            <p>British Dragon Boat Racing Association</p>
            <div className="icon-buttons">
              <div className="icon-images">
                <img src={One} alt="brand1" />
                <img src={Two} alt="brand2" />
                <img src={Three} alt="brand3" />
                <img src={Four} alt="brand4" />
                <img src={Five} alt="brand5" />
                <img src={Six} alt="brand6" />
              </div>
              <div className="icon-button">
                <a href="#">Meet all the customers</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customer;
