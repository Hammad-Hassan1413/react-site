import person from "./assets/person.png";
import building from "./assets/building.png";
import group from "./assets/group.png";

const cardData = [
  {
    heading: "Membership Organizations",
    text: "Our membership management software provides full automation of membership renewals and payments.",
    image: person,
  },
  {
    heading: "National Associations",
    text: "Our national associations software helps you manage memberships, events, and payments.",
    image: building,
  },
  {
    heading: "Clubs & Groups",
    text: "Easily manage club activities, members, and communication using our tools.",
    image: group,
  },
];
function Cards() {
  const Card = ({ heading, text, image }) => (
    <div className="card">
      <img src={image} alt={heading} />
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  );
  return (
    <section className="cards">
      <div className="container">
        <div className="card-section-flex">
          <div className="cards-heading">
            <h2>
              Manage your entire community
              <br /> in a single system
            </h2>
            <p>Who is Nextcent suitable for?</p>
          </div>
          <div className="cards-flex">
            {cardData.map((card, index) => (
              <Card
                key={index}
                heading={card.heading}
                text={card.text}
                image={card.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Cards;
