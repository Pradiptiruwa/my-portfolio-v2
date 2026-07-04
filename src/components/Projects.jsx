import "./Projects.css"

import { motion } from "framer-motion"

function Projects(){

return(

<motion.section

className="projects"

id="projects"

initial={{opacity:0}}

whileInView={{opacity:1}}

transition={{duration:1}}

viewport={{once:true}}

>

<h2>

Projects

</h2>

<div className="project-container">

<motion.div

className="project-card"

whileHover={{

y:-10,

scale:1.04

}}

>

Portfolio Website

</motion.div>

<motion.div

className="project-card"

whileHover={{

y:-10,

scale:1.04

}}

>

Student Management System

</motion.div>


<motion.div

className="project-card"

whileHover={{

y:-10,

scale:1.04

}}

>

One Way Church Website
</motion.div>


</div>

</motion.section>

)

}

export default Projects