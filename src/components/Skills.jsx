import { motion } from "framer-motion";
import "./Skills.css";

function Skills() {

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "Git",
  "GitHub",
  "VS Code",
  "UI/UX Design",
  "Figma",
  "Responsive Design"
];

return (

<motion.section
className="skills"
id="skills"
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
>

<h2>Skills</h2>

<p className="skills-text">

Technologies and tools I am currently learning and using in my Full Stack Development journey.

</p>

<div className="skills-container">

{skills.map((skill,index)=>(

<div
key={index}
className="skill-card"
>

{skill}

</div>

))}

</div>

</motion.section>

)

}

export default Skills;


