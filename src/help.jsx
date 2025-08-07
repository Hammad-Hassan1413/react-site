import iconOne from "./assets/icon1.png";
import iconTwo from "./assets/Icon2.png";
import iconThree from "./assets/Icon3.png";
import iconFour from "./assets/Icon4.png";

const iconBoxData = [
  {
    heading: "2,245,341",
    text: "Members",
    image: iconOne,
  },
  {
    heading: "46,328",
    text: "Clubs",
    image: iconTwo,
  },
  {
    heading: "828,867",
    text: "Event Bookings",
    image: iconThree,
  },
  {
    heading: "1,926,436",
    text: "Payments",
    image: iconFour,
  },
];

function Help() {
  const Box = ({ heading, text, image }) => (
    <div className="statBox">
      <div className="statImage">
        <img src={image} alt={heading} />
      </div>
      <div className="statHeading">
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
    </div>
  );

  return (
    <section className="help">
      <div className="container">
        <div className="help-flex">
          <div className="help-text">
            <h2>
              Helping a local
              <br /> <span className="green"> business reinvent itself</span>
            </h2>
            <p>We reached here with our hard work and dedication</p>
          </div>
          <div className="help-icons">
            {iconBoxData.map((icon, index) => (
              <Box
                key={index}
                heading={icon.heading}
                text={icon.text}
                image={icon.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Help;
