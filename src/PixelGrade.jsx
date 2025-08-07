import pixelImage from "./assets/formImage.png";

function PixelGrade() {
  return (
    <section className="pixel">
      <div className="container">
        <div className="pixel-flex">
          <div className="pixel-image">
            <img src={pixelImage} alt="pixel-form" />
          </div>
          <div className="pixel-text">
            <h2>The unseen of spending three years at Pixelgrade</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PixelGrade;
