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
        Hello, I'm Pradip Sunar 👋
      </h1>

      <h2>
        BIT Student | Full Stack Developer
      </h2>

      <p>
        Passionate about Full Stack Development, UI/UX Design, and modern web technologies. Currently exploring the MERN Stack and building responsive, user-friendly web applications while continuously improving my technical and problem-solving skills.
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