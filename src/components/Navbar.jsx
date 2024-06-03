import React, { useState } from "react";
import "./Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Home, Info } from "@mui/icons-material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BuildIcon from '@mui/icons-material/Build';

const Navbar = () => {

  const [open, setOpen] = useState(false)


  return (
    <>

      <nav>
        <div className="logo">
          <h2>Erfan Aalam</h2>
        </div>
        <div className="list">
          <a href="" >  <li>Home</li> </a>
          <a href="#about"><li>About</li></a>
          <a href="#skill"><li>Skills</li></a>
          <a href="#projects"><li>Projects</li></a>
          <a href="#footer"><li>Contact</li></a>
        </div>

        <div onClick={()=>setOpen(true)} className="menuicon"><MenuIcon /></div>
       
        <div className="openlist"  onClick={()=> setOpen(false)} style={open ? {right:"0"} : {right:"-1000px"}} >
          <div onClick={()=> setOpen(false)}><CloseIcon /></div>
          <a href="#"><Home /> <li>Home</li></a>
          <a href="#about"> <Info /> <li>About</li></a>
          <a href="#skill"> <AutoStoriesIcon /> <li>Skills</li></a>
          <a href="#projects"> <BuildIcon /> <li>Projects</li></a>
          <a href="#footer"> <AccountCircleIcon /> <li>Contact</li></a>
        </div>
       


      </nav>
    </>
  );
};

export default Navbar;
