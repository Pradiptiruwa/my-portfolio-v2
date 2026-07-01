import { motion } from "framer-motion";
import "./Hero.css";

import profile from "../assets/profile.jpg";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

function Hero() {
  return (
    <motion.section
  className="hero"
  id="home"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>

      <img
        src={profile}
        alt="Pradip Tiruwa"
        className="profile"
      />

      <h1>
        Hello, I'm Pradip Tiruwa 👋
      </h1>

      <h2>
        BIT Student | Full Stack Developer
      </h2>

      <p>
        I am a BIT student passionate about
        Full Stack Development, Web Technologies,
        Software Engineering and MERN Stack.
        I enjoy building modern, responsive
        and user-friendly web applications.
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
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.facebook.com/pts wd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>

      </div>

</motion.section>  );
}

export default Hero;