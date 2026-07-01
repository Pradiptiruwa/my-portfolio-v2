import { motion } from "framer-motion";
import "./Skills.css";

function Skills(){

return(
<motion.section
  className="skills"
  id="skills"
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>

<h2>Skills</h2>

<div className="skills-container">

<div className="skill-card">HTML</div>

<div className="skill-card">CSS</div>

<div className="skill-card">JavaScript</div>

<div className="skill-card">React</div>

<div className="skill-card">Node.js</div>

<div className="skill-card">MongoDB</div>

</div>

</motion.section>
)

}

export default Skills;