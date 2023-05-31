import React from "react";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import SocialNetwork from "../components/SocialNetwork";
import DynamicText from "../components/DynamicText";
import Buttons from "../components/Buttons";
import { useRef } from "react";
import { motion, transform } from "framer-motion";

const Home = () => {
  const constraintsRef = useRef(null);
  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 1 },
      x: 1000,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 1 },
      x: -1000,
    },
  };

  return (
    <div>
      <Mouse />
      <motion.div
        className="home"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
      >
        <Navigation />
        <SocialNetwork />
        <div className="home-main" ref={constraintsRef}>
          <motion.div className="main-content">
            <motion.h1 drag dragConstraints={constraintsRef}>
              M&M AGENCE
            </motion.h1>
            <motion.h2 drag dragConstraints={constraintsRef}>
              <DynamicText />
            </motion.h2>
          </motion.div>
        </div>
        <Buttons right={"/projet-1"} />
      </motion.div>
    </div>
  );
};

export default Home;
