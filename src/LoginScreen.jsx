import screen from "./assets/groupLogin.png";

function LoginScreen() {
  return (
    <section className="login">
      <div className="container">
        <div className="login-flex">
          <div className="login-image">
            <img src={screen} alt="loginScreen" />
          </div>
          <div className="login-text">
            <h2>How to design your site footer like we did</h2>
            <p>
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default LoginScreen;
