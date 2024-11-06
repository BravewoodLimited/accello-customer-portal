import React from "react";
import About from "../components/About/About";
import Nav from "../components/About/Nav";
// import ForEveryOne from '../components/Landing/ForEveryOne'
import Compare from "../components/Landing/Compare";
import Footer from "../components/Landing/Footer";
import MobileApp from "../components/Landing/MobileApp";
import Values from "../components/About/Values";
import CompetitiveAdvantage from "../components/About/CompetitiveAdvantage";
import ContactForm from "../components/Contact/ContactForm";
import GetInTouch from "common/GetInTouch";

function AboutUs() {
  return (
    <div>
      <div className="relative bg-background">
        <Nav />
        <About />
        <Compare />
        {/* <ForEveryOne/> */}
        <Values />
        <CompetitiveAdvantage />
        <div className="mt-6"></div>
        <ContactForm />
        <GetInTouch />
        <div className="my-28"></div>
        <MobileApp />
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
