import React from "react";
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      
      <nav>
        <div className="logo">
            <h2>Erfan Aalam</h2>
        </div>
       <div className="list">
           <a href=""> <li>Home</li></a>
            <a href="#about"><li>About</li></a>
            <a href="#skill"><li>Skills</li></a>
            <a href="#projects"><li>Projects</li></a>
            <a href="#footer"><li>Contact</li></a>
       </div>

      {/* </motion.nav> */}
      </nav>
    </>
  );
};

export default Navbar;
