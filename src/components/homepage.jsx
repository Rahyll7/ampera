import NavbarComponents from "./navbar";
import AboutUs from "../components/aboutUs";
import Opportunity from "./opportunity";
import Services from "./services";
import ContactUs from "./contactUs";
const HomePage = () => {
  return (
    <>
      <NavbarComponents />
      <div style={{ display: "grid" }}>
        <div>
          {" "}
          <AboutUs />
        </div>
        <div>
          <Opportunity />
        </div>
        <div>
          <Services />
        </div>
        <div>
          <ContactUs />
        </div>
      </div>
    </>
  );
};

export default HomePage;
