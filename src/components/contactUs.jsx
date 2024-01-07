import image from "../components/assests/pwd_image2.jpg";

const ContactUs = () => {
  return (
    <>
      <div
        style={{ border: "1px hidden black", padding: "20px", height: "600px" }}
      >
        <div
          style={{
            border: "1px hidden blue",
            padding: "20px",
            height: "500px",
            background: "#f3f7ff",
            display: "flex",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              border: "1px hidden red",
              width: "50%",
              background: "#f3f7ff",
              padding: "20px",
            }}
          >
            <div
              style={{
                padding: "10px",
                marginLeft: "200px",
                fontFamily: "'Fjord One', serif",
                background: "#f3f7ff",
                marginTop: "10%",
              }}
            >
              <h2 style={{ background: "#f3f7ff" }} className="headerTag">
                Contact Us
              </h2>
              <p style={{ background: "#f3f7ff", fontWeight: "600" }}>
                Ampera Diversity Private Limited
              </p>

              <p style={{ background: "#f3f7ff" }}>
                Ampera House, #6, Second Street,{" "}
              </p>

              <p style={{ background: "#f3f7ff" }}>Ganesh Nagar, Adambakkam</p>

              <p style={{ background: "#f3f7ff" }}>Chennai :-088</p>

              <p style={{ background: "#f3f7ff" }}>India</p>
            </div>
          </div>
          <div
            style={{
              border: "1px hidden red",
              width: "50%",
              background: "#f3f7ff",
              padding: "20px",
            }}
          >
            <div
              style={{
                position: "absolute",
                marginLeft: "7%",
                marginTop: "2%",
              }}
            >
              <img src={image} alt="" height="400px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
