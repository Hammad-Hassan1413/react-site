import logo from "./assets/Logo.png";

function NavBar() {
  return (
    <header>
      <div className="container">
        <div className="flex">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="menu">
            <nav>
              <ul>
                <li>Home</li>
                <li>Feature</li>
                <li>Services</li>
                <li>Products</li>
                <li>Testimonial</li>
                <li>FAQ</li>
              </ul>
            </nav>
          </div>
          <div className="button">
            <button className="request">Register Now </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
