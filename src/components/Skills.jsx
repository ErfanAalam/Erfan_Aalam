import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import Uppertime from "./Uppertime";
import Lowertime from "./Lowertime";
import "./Skills.css";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

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
          one="React JS"
          two="React is a free and open-source front-end JavaScript library for building user interfaces based on components."
        />

        <Uppertime
          one="Node Js"
          two="Node.js is a free, open-source, cross-platform JavaScript runtime environment. "
        />

        <Uppertime
          one="Git & Github"
          two="Git is a distributed version control system that tracks the history of changes in projects."
        />

        <Uppertime
          one="MySql"
          two="SQL stands for Structured Query Language."
        />


        <Lowertime
          one="MongoDB"
          two="MongoDB is a document-oriented, non-relational database."
        />

        <div className="  my-10 border-2 border-[#284381] rounded-lg gap-4 flex p-10 items-center overflow-x-scroll scrollbar-hide">

        <SkillCard heading={"Figma"} title={"Figma is a web-based design tool that allows users to collaborate on the creation of user interfaces (UIs)."} color={"#ec19f6"} />

         <SkillCard heading={"Express js"} title={"Express js is a tool for the making REST api and for the backend development"} color={"#ef4444"} />

         <SkillCard heading={"Python"} title={"Python is a popular, general-purpose programming language that's used for a variety of taskst"} color={"#3ecd5e"} />

         <SkillCard heading={"Firebase"} title={"Firebase is Google's cloud-based platform that helps developers build and run mobile and web apps."} color={"#e44002"} />

         <SkillCard heading={"Flask"} title={"Flask is a Python-based web framework that helps developers build web applications."} color={"#952aff"} />

         <SkillCard heading={"React Native"} title={"React Native is a free, open-source JavaScript framework for building apps for iOS and Android"} color={"#cd3e94"} />

         <SkillCard heading={"C/C++"} title={"These are general-purpose programming language that is used to create and maintain applications and technologies."} color={"#4c49ea"} />

         <SkillCard heading={"Vercel"} title={"Vercel is a cloud platform that helps developers build, scale, and secure websites and web services"} color={"#65ab21"} />

        </div>


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
