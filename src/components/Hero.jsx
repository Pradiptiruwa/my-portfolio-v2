import "./Hero.css";

import profile from "../assets/profile.jpg";

import {

FaGithub,

FaLinkedin,

FaFacebook

} from "react-icons/fa";

function Hero(){

return(

<section

className="hero"

id="home"

>

<img

src={profile}

alt="Pradip Tiruwa"

className="profile"

/>

<h1>

Hello, I'm Pradip Sunar 👋

</h1>

<h2>

BIT Student | Aspiring Full Stack Developer

</h2>

<p>

Passionate about Full Stack Development,

UI/UX Design and MERN Stack.

</p>

<div className="buttons">

<button className="primary-btn">

View Projects

</button>

<a

href="/resume.pdf"

download

>

<button className="secondary-btn">

Download CV

</button>

</a>

</div>

<div className="social-icons">

<a

href="https://github.com/Pradiptiruwa"

target="_blank"

rel="noreferrer"

>

<FaGithub/>

</a>

<a

href="https://linkedin.com"

target="_blank"

rel="noreferrer"

>

<FaLinkedin/>

</a>

<a

href="https://facebook.com"

target="_blank"

rel="noreferrer"

>

<FaFacebook/>

</a>

</div>

</section>

)

}

export default Hero;