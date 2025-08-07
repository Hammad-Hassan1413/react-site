import images from "./images";

function Client() {
  return (
    <section className="clients">
      <div className="container">
        <div className="client-heading">
          <h2>Our Clients</h2>
          <p>We have been working with some Fortune 500+ clients</p>
        </div>
        <div className="client-logos">
          <img src={images.One} alt="brand1" />
          <img src={images.Two} alt="brand2" />
          <img src={images.Three} alt="brand3" />
          <img src={images.Four} alt="brand4" />
          <img src={images.Five} alt="brand5" />
          <img src={images.Six} alt="brand6" />
          <img src={images.Seven} alt="brand7" />
        </div>
      </div>
    </section>
  );
}
export default Client;
