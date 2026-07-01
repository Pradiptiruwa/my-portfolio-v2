import "./Footer.css";
import { motion } from "framer-motion";

function Footer() {
  return (

    <motion.footer
      className="footer"

      initial={{ opacity: 0, y: 50 }}

      whileInView={{
        opacity: 1,
        y: 0
      }}

      transition={{
        duration: 1
      }}

      viewport={{
        once: true
      }}
    >

      <h3>
        Pradip Tiruwa
      </h3>

      <p>
        BIT Student | Full Stack Developer
      </p>

      <p>
        © 2026 All Rights Reserved.
      </p>

    </motion.footer>

  );
}

export default Footer;