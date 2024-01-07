import "../App.css";
import image from "../components/assests/imagehero.png";
const AboutUs = () => {
  const renderAboutDei = () => {
    return (
      <>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <div
            style={{
              border: "1px hidden black",
              fontFamily: "'Fjord One', serif",
              textAlign: "center",
            }}
          >
            <h3 style={{ position: "relative", color: "blue" }}>
              About DEI
              <div
                style={{
                  borderBottom: "2px solid black",
                  paddingBottom: "8px",
                  width: "60px",
                  position: "absolute",
                  left: "48%",
                  transform: "translateX(-25%)", // Center the div horizontally
                }}
              ></div>
            </h3>
            <p>
              Diversity, Equity and Inclusion (DEI) efforts across industries
              have gained more prominence with a focus on diversity and
              equality.
            </p>
          </div>
        </div>
      </>
    );
  };
  const renderAboutUs = () => {
    return (
      <>
        <div
          style={{
            display: "flex",
            border: "1px hidden black",
          }}
        >
          <div
            style={{ border: "1px hidden blue", width: "50%", padding: "10px" }}
          >
            <div
              style={{
                padding: "10%",
                Left: "20px",
                fontFamily: "'Fjord One', serif",
              }}
            >
              <h2 className="headerTag">About Ampera</h2>
              <p>
                Diversity, Equity and Inclusion (DEI) efforts across industries
                has gained more prominence with focus on diversity and equality.{" "}
              </p>
              <h2 className="headerTag">Mandate</h2>
              <p>
                The RPWD (Rights of Persons with Disabilities) Act, 2016 and
                Rights of Persons with Disabilities Rules 2017 has transformed
                policies into enforceable rights, directing and setting
                inclusivity standards for organizations. It states that “the
                People with Disabilities (PwDs) enjoy the right to equality,
                life with dignity, and respect for his or her own integrity
                equally with others.”
              </p>
              <h2 className="headerTag">About Differentiation</h2>
              <p>
                As an expert, DEI strategy and implementation leader, Ampera
                brings thought leadership in Diversity centric areas through
                customized and end to end services including DEI Data Driven
                Solutions & Diversity Scorecard among others. Ampera provide
                organizations comprehensive solutions to achieve DEI goals by
                giving access to a varied talent pool and helps create a unique
                brand differentiation.
              </p>
            </div>
          </div>
          <div
            style={{ border: "1px hidden red", width: "50%", padding: "10px" }}
          >
            <div
              style={{
                position: "absolute",
                marginLeft: "10px",
                marginTop: "120px",
              }}
            >
              <img src={image} alt="" height="360px" />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {renderAboutUs()}
      {renderAboutDei()}
    </>
  );
};

export default AboutUs;
