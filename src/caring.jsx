const caringData = [
  {
    heading: "Creating Streamlined Safeguarding Processes with OneRen",
  },
  {
    heading:
      "What are your safeguarding responsibilities and how can you manage them?",
  },
  {
    heading: "Revamping the Membership Model with Triathlon Australia",
  },
];

function Caring() {
  const Care = ({ heading }) => (
    <div className="caringCard">
      <h4 className="careHeading">{heading}</h4>
      <a href="#">Read More</a>
    </div>
  );

  return (
    <section className="caring">
      <div className="container">
        <div className="caring-flex">
          <div className="caring-text">
            <h2>Caring is the new marketing</h2>
            <p>
              The Nexcent blog is the best place to read about the latest
              membership insights,
              <br /> trends and more. See who's joining the community, read
              about how our community are increasing their membership income and
              lot's more.​
            </p>
          </div>
          <div className="caring-cards">
            {caringData.map((card, index) => (
              <Care key={index} heading={card.heading} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Caring;
