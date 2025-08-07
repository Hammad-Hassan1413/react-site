import images from "./images";

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
                <img src={images.One} alt="brand1" />
                <img src={images.Two} alt="brand2" />
                <img src={images.Three} alt="brand3" />
                <img src={images.Four} alt="brand4" />
                <img src={images.Five} alt="brand5" />
                <img src={images.Six} alt="brand6" />
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
