import React, { useState } from "react";
import "./Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

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
        {open ? " " : <button className="btn" onClick={handleOpen} >   <MenuIcon /> </button>}

        {
          open
            ?
            <div className="openlist">
              <button className="btn" onClick={handleOpen} >   <CloseIcon /> </button>
              <a href=""> <li>Home</li></a>
              <a href="#about"><li>About</li></a>
              <a href="#skill"><li>Skills</li></a>
              <a href="#projects"><li>Projects</li></a>
              <a href="#footer"><li>Contact</li></a>
            </div>

            :
            ""
        }


      </nav>
    </>
  );
};

export default Navbar;
