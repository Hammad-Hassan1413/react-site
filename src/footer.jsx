import logoWhite from "./assets/Logowhite.png";
import socialicon1 from "./assets/Social Icons1.png";
import socialicon2 from "./assets/Social Icons2.png";
import socialicon3 from "./assets/Social Icons3.png";
import socialicon4 from "./assets/Social Icons4.png";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="ftr-flex">
          <div className="ftr-logo">
            <img src={logoWhite} alt="Logo" />
            <p>
              Copyright © 2020 Nexcent ltd.
              <br />
              All rights reserved
            </p>
            <div className="ftr-icons">
              <img src={socialicon1} alt="insta" />
              <img src={socialicon2} alt="" />
              <img src={socialicon3} alt="twitter" />
              <img src={socialicon4} alt="youtube" />
            </div>
          </div>
          <div className="ftr-company ftr-menu">
            <h5>Company</h5>
            <ul>
              <li>About us</li>
              <li>Blog</li>
              <li>Contact us</li>
              <li>Pricing</li>
              <li>Testimonial</li>
            </ul>
          </div>
          <div className="ftr-support ftr-menu">
            <h5>Support</h5>
            <ul>
              <li>Help Center</li>
              <li>Terms of Services</li>
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>Status</li>
            </ul>
          </div>
          <div className="ftr-newsletter ftr-menu">
            <h5>Stay up to date</h5>
            <input type="text" />
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
