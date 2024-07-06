import "./App.css";
import Header from "./ccomponents/Header";
import Footer from "./ccomponents/Footer";
import Homepage from "./ccomponents/Homepage";
import Activities from "./ccomponents/Activities";
import PresidentInfo from "./ccomponents/PresientInfo";
import VicePresidentInfo from "./ccomponents/VicePresidentInfo";
import OrganizingSecretary from "./ccomponents/OrganizingSecretary";
import PublicityEditor from "./ccomponents/PublicityEditor";
import Portfolio from "./ccomponents/Portfolio";
import MemberGallery from "./ccomponents/MemberGallery";

import AboutUs from "./ccomponents/AboutUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BackToTop from "./ccomponents/BackToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/president" element={<PresidentInfo />} />
          <Route path="/vicepresident" element={<VicePresidentInfo />} />
          <Route
            path="/organizingsecretary"
            element={<OrganizingSecretary />}
          />
          <Route path="/publicityeditor" element={<PublicityEditor />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/generalmember" element={<MemberGallery />} />
        </Routes>
        <Footer />
        <BackToTop />
      </BrowserRouter>

      {/* <MemberGallery /> */}

      {/* <MemberGallery /> */}
    </>
  );
}

export default App;
