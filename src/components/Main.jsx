import React from "react";
import "./Main.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import MailIcon from "@mui/icons-material/Mail";
import { motion } from 'framer-motion'
import { useState, useEffect } from "react";



const Main = () => {

  const phrases = ["Web Developer", "MERN Stack  Developer", "JavaScript Developer"];
  const [currentPhrase, setCurrentPhrase] = useState([]);
  const [visible, setVisible] = useState(true);
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isBuilding, setIsBuilding] = useState(true);

  useEffect(() => {
    const words = phrases[index].split(" ").map(word => word.split(""));

    const interval = setInterval(() => {
      if (isBuilding) {
        if (charIndex < words.flat().length) {
          setCurrentPhrase((prev) => [...prev, words.flat()[charIndex]]);
          setCharIndex(charIndex + 1);
        } else {
          setIsBuilding(false);
          setTimeout(() => setVisible(false), 10000000); // wait a bit before disappearing
        }
      } else {
        if (currentPhrase.length > 0) {
          setCurrentPhrase((prev) => prev.slice(0, -1));
        } else {
          setVisible(true);
          setIsBuilding(true);
          setCharIndex(0);
          setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentPhrase, index, isBuilding, charIndex]);

  return (
    <>
      <section>
        <motion.div className="details"
          animate={{ x: 0 }}
          initial={{ x: -1000 }}
          transition={{ duration: 0.6 }}
        >

          <div className="name">
            Hello ......
          </div>
          <div className="name">
            I am Erfan Aalam

          </div>

          <div className="detail" style={{ visibility: visible ? 'visible' : 'hidden' }}>
            {currentPhrase.join("")}
          </div>

          <div className="icons">
            <div className="icon">
              <a href="https://www.linkedin.com/in/erfan-aalam-1957b9271" target="_blank">
                <LinkedInIcon />
              </a>
            </div>

            <div className="icon">
              <a href="https://github.com/ErfanAalam" target="_blank">
                <GitHubIcon />
              </a>
            </div>

            <div className="icon">
              <a href="https://x.com/ErfanAalam03?t=Rg9Pk0LDYEaar-MAFf9Mfw&s=09" target="_blank">
                <XIcon />
              </a>
            </div>

            <div className="icon">
              <a href="mailto:erfankhansiwani@gmail.com" target="_blank">
                <MailIcon />
              </a>
            </div>
          </div>
        </motion.div>

       <motion.div className="image"
          animate={{ x: 0 }}
          initial={{ x: 1000 }}
          transition={{ duration: 0.6 }}
        ></motion.div>
      </section>
    </>
  );
};

export default Main;
