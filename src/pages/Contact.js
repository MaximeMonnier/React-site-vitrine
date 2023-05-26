import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import ContactForm from "../components/ContactForm";
import Buttons from "../components/Buttons";

const Contact = () => {
  return (
    <main>
      <Mouse />
      <div className="contact">
        <Navigation />
        <Logo />
        <ContactForm />
        <Buttons left={"/projet-4"} />
        <div className="contact-infos">
          <div className="adress">
            <div className="content">
              <h4>adress</h4>
              <p>12 rue laplace</p>
              <p>39110 andelot-en-monatagne</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Téléphone</h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
<h1>Contact</h1>;
