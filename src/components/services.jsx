const Services = () => {
  return (
    <>
      {" "}
      <div
        style={{
          border: "1px hidden black",
          fontFamily: "'Fjord One', serif",
          textAlign: "center",
        }}
      >
        <h3 style={{ position: "relative", color: "blue" }}>
          Our Services
          <div
            style={{
              borderBottom: "2px solid black",
              paddingBottom: "8px",
              width: "80px",
              position: "absolute",
              left: "48.5%",
              transform: "translateX(-25%)", // Center the div horizontally
            }}
          ></div>
        </h3>
      </div>
      <div
        style={{
          border: "1px hidden black",
          padding: "5%",
          fontFamily: "'Fjord One', serif",
        }}
      >
        <div class="grid-container">
          <div class="grid-item">Job Evaluation Studies</div>
          <div class="grid-item">Accessibility Audit</div>
          <div class="grid-item">Recruitment Services</div>
          <div class="grid-item">Contract Staffing and Staff Augmentation </div>
          <div class="grid-item">Training and Development</div>
          <div class="grid-item">Sensitization programs</div>
          <div class="grid-item">Equal Opportunity Policy (EoP) Creation and Advocacy</div>
          <div class="grid-item">DEI Outreach Services-One to one, special / group drives and events</div>
          <div class="grid-item">Premium and Corporate DEI Champion Services.</div>
        </div>
      </div>
    </>
  );
};

export default Services;
