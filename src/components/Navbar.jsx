import { useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

function Navbar() {

const [darkMode,setDarkMode]=useState(false);

const toggleTheme=()=>{

document.body.classList.toggle("dark");

setDarkMode(!darkMode);

};

return(

<motion.nav

className="navbar"

initial={{y:-100}}

animate={{y:0}}

transition={{duration:0.7}}

>

<div className="logo">

Pradip Sunar

</div>

<ul className="nav-links">

<li><a href="#home">Home</a></li>

<li><a href="#about">About</a></li>

<li><a href="#education">Education</a></li>

<li><a href="#skills">Skills</a></li>

<li><a href="#projects">Projects</a></li>

<li><a href="#contact">Contact</a></li>

</ul>

<button

className="theme-btn"

onClick={toggleTheme}

>

{darkMode ? "☀️":"🌙"}

</button>

</motion.nav>

)

}

export default Navbar