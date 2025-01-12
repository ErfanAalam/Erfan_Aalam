import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import './Footer.css'

const Footer = () => {
  return (
    <div id='footer'>
     <footer className="footer">
    {/* <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div> */}
    <ul className="social-icon">
      <li className="social-icon__item"><a className="social-icon__link" href="https://www.linkedin.com/in/erfan-aalam-1957b9271">
          <LinkedInIcon fontSize='large' />
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="https://github.com/ErfanAalam">
          <GitHubIcon fontSize='large'/>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="https://x.com/ErfanAalam03?t=Rg9Pk0LDYEaar-MAFf9Mfw&s=09">
          <XIcon fontSize='large'/>
        </a></li>
      
    </ul>
    <ul className="menu">
      <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
      <li className="menu__item"><a className="menu__link" href="#about">About</a></li>
      <li className="menu__item"><a className="menu__link" href="#skill">Skills</a></li>
      <li className="menu__item"><a className="menu__link" href="#projects">Projects</a></li>

    </ul>
    <p> <div>© Erfan Aalam</div> <div>MERN stack Developer</div></p>
  </footer>
    </div>
  )
}

export default Footer
