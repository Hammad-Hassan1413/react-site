import One from "./assets/1.png";
import Two from "./assets/2.png";
import Three from "./assets/3.png";
import Four from "./assets/4.png";
import Five from "./assets/5.png";
import Six from "./assets/6.png";
import Seven from "./assets/7.png";

function Client() {
  return (
    <section className="clients">
      <div className="container">
        <div className="client-heading">
          <h2>Our Clients</h2>
          <p>We have been working with some Fortune 500+ clients</p>
        </div>
        <div className="client-logos">
          <img src={One} alt="brand1" />
          <img src={Two} alt="brand2" />
          <img src={Three} alt="brand3" />
          <img src={Four} alt="brand4" />
          <img src={Five} alt="brand5" />
          <img src={Six} alt="brand6" />
          <img src={Seven} alt="brand7" />
        </div>
      </div>
    </section>
  );
}
export default Client;
