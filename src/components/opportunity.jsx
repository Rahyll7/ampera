import image from "../components/assests/pwd_image.jpg";

const Opportunity = () => {
  return (
    <>
      <div style={{ display: "grid" }}>
        <div
          style={{
            border: "1px hidden black",
            height: "500px",
            display: "flex",
            padding: "10px",
          }}
        >
          <div style={{ border: "1px hidden red", width: "50%" }}>
            {" "}
            <div>
              <img src={image} alt="" />
            </div>
          </div>
          <div
            style={{ border: "1px hidden blue", width: "50%", padding: "10px" }}
          >
            <div
              style={{
                border: "1px hidden blue",
                padding: "10px",
              }}
            >
              <div
                style={{
                  padding: "0%",
                  Left: "20px",
                  fontFamily: "'Fjord One', serif",
                }}
              >
                <h2 className="headerTag">Oppurtunity</h2>
                <p>
                  Persons with Disabilities (PwDs) represent a large segment of
                  untapped resources for companies who are awaiting DEI
                  solutions or want to expand their DEI engagement. There are
                  millions of persons with disabilities seeking a career
                  opportunity, who can contribute significantly and integrate
                  into the mainstream across industries.
                </p>
                <h2 className="headerTag">Person With Disabilities</h2>
                <p>
                  PwDs are self-motivated and have sharper capabilities with
                  core strengths and unique creative talents. They help
                  co-create new experiences, promote people equality and act as
                  great levellers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Opportunity;
