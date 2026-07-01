import { motion } from "framer-motion";
import "./Projects.css";

function Projects(){

return(

<motion.section
  className="projects"
  id="projects"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
<h2>Projects</h2>

<div className="project-container">

<div className="project-card">

Portfolio Website

</div>

<div className="project-card">

Student Management System

</div>

</div>

</motion.section>
)

}

export default Projects;