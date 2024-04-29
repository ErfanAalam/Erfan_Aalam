import React from "react";
import "./About.css";
import {motion} from 'framer-motion'

const About = () => {
  return (
    <>
      <motion.div className="section-2" id="about"
      initial={{opacity:0,x:-1000}}
      whileInView={{opacity:1,x:0}}
      transition={{duration:1}}
      >
        <div className="left"></div>

        <div className="right">
          <div className="about">
            <h3><span>About</span> Me</h3>
          </div>

          <p className="summary">
            I'm Erfan, a passionate and driven BCA student at Poornima
            University, with a knack for crafting captivating digital
            experiences. My journey in the realm of web development began with a
            fascination for frontend design, where I honed my skills in{" "}
            <span>HTML, CSS, and JavaScript. </span>
            <br />
            <br />
            As I delved deeper into the world of web development, I expanded my
            toolkit to include cutting-edge technologies such as{" "}
            <span>React, Node.js, Tailwind CSS, and TypeScript.</span> This
            journey has been incredibly rewarding, allowing me to blend
            creativity with technical proficiency to bring ideas to life on the
            web. <br />
            <br />
            With a stellar <span> 9 CGPA</span> in my first year, I've
            demonstrated a strong dedication to academic excellence and a thirst
            for knowledge. But beyond the classroom, my true passion lies in
            building intuitive and seamless user experiences that leave a
            lasting impression. <br /> <br />
            Whether it's crafting pixel-perfect designs or diving into the
            intricacies of <span>backend development</span>, I thrive on pushing
            the boundaries of what's possible in the digital landscape. Join me
            on my journey as I continue to evolve and innovate in the
            ever-expanding world of web development. Let's create something
            extraordinary together.
          </p>

            <button className="btn">
              <a href="/ErfanAalam2Resume (1).pdf">Download CV</a>
            </button>
            <button className="btn">
              <a href="/ErfanAalam2Resume (1).pdf">Contact me</a>
            </button>
        </div>
      </motion.div>
    </>
  );
};

export default About;
