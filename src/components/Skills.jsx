import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import Uppertime from "./Uppertime";
import Lowertime from "./Lowertime";
import "./Skills.css";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div
      id="skill"
    >

      <Timeline position="alternate">


        {/* </div> */}

        <h2 className="edu">Skills</h2>

        <Uppertime
          one="HTML"
          two="HTML (HyperText Markup Language) is the most basic building block of the Web"
        />

        <Uppertime
          one="CSS"
          two="CSS is the language we use to style an HTML document"
        />

        <Uppertime
          one="TAILWIND CSS"
          two="Tailwind CSS lets you build modern websites with classes like flex, pt-4, text-center and rotate-90 directly in your markup."
        />

        <Uppertime
          one="JavaScript"
          two="JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions"
        />

        <Uppertime
          one="TypeScript"
          two="TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale"
        />

        <Uppertime
          one="React"
          two="React is a free and open-source front-end JavaScript library for building user interfaces based on components."
        />

        <Uppertime
          one="Node Js"
          two="Node.js is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts. "
        />

        <Uppertime
          one="Git & Github"
          two="Git is a distributed version control system that tracks the history of changes in projects."
        />

        <Lowertime
          one="MySql"
          two="MySQL offers a range of products and services for transactions, analytics, machine learning, and embedded databases"
        />


        <h2 className="edu">Education</h2>

        <Uppertime
          one="Graduation Degree"
          two="Bachelor's of computer application"
          three="Poornima University 2022-2025"
        />

        {/* <div > */}
        <Lowertime
          one="High School"
          two="Science Stream with 85%"
          three="Adarsh Sr. sec. school 2021-2022"
        ></Lowertime>
      </Timeline>
    </div>
  );
};

export default Skills;
