import "./Hero.css"

import profile from "../assets/profile.jpg"

import {

FaGithub,

FaLinkedin,

FaFacebook

} from "react-icons/fa"

import { motion } from "framer-motion"

function Hero(){

return(

<motion.section

className="hero"

id="home"

initial={{opacity:0,y:50}}

animate={{opacity:1,y:0}}

transition={{duration:1}}

>

<motion.img

src={profile}

alt="profile"

className="profile"

initial={{scale:0}}

animate={{scale:1}}

transition={{

duration:1,

type:"spring"

}}

whileHover={{

scale:1.1

}}

 />

<motion.h1

initial={{opacity:0}}

animate={{opacity:1}}

transition={{delay:0.4}}

>

Hello, I'm Pradip Sunar 👋

</motion.h1>

<motion.h2

initial={{opacity:0}}

animate={{opacity:1}}

transition={{delay:0.6}}

>

BIT Student | Full Stack Developer

</motion.h2>

<motion.p

initial={{opacity:0}}

animate={{opacity:1}}

transition={{delay:0.8}}

>

Passionate about MERN Stack Development and UI/UX Design.

</motion.p>

<div className="buttons">

<motion.button

whileHover={{

scale:1.05

}}

whileTap={{

scale:0.95

}}

className="primary-btn"

>

View Projects

</motion.button>

<motion.button

whileHover={{

scale:1.05

}}

whileTap={{

scale:0.95

}}

className="secondary-btn"

>

Download CV

</motion.button>

</div>

<div className="social-icons">

<motion.a

whileHover={{

scale:1.3,

rotate:360

}}

href="#"

>

<FaGithub/>

</motion.a>

<motion.a

whileHover={{

scale:1.3,

rotate:360

}}

href="#"

>

<FaLinkedin/>

</motion.a>

<motion.a

whileHover={{

scale:1.3,

rotate:360

}}

href="#"

>

<FaFacebook/>

</motion.a>

</div>

</motion.section>

)

}

export default Hero