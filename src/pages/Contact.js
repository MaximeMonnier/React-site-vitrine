import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import ContactForm from "../components/ContactForm";
import Buttons from "../components/Buttons";
import SocialNetwork from "../components/SocialNetwork";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { motion } from "framer-motion";

const Contact = () => {
  const pageTranstion = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    },
  };
  return (
    <main>
      <Mouse />
      <motion.div
        className="contact"
        initial="out"
        animate="in"
        exit="out"
        variants={pageTranstion}
        transition={{ duration: 0.5 }}
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <Buttons left={"/projet-4"} />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adress</h4>
              <CopyToClipboard text="0693323388" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Téléphone copié !")}
                >
                  0693323388
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Téléphone</h4>
              <CopyToClipboard text="0693323388" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Téléphone copié !")}
                >
                  0693323388
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard
                text="maximemonnier39@gmail.com"
                className="hover"
              >
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Email copié !")}
                >
                  maximemonnier39@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>M&M - 2022</p>
          </div>
        </div>
        <Buttons left={"/projet-4"} />
      </motion.div>
    </main>
  );
};

export default Contact;
