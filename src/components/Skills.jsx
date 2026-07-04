import "./Skills.css"

import { motion } from "framer-motion"

function Skills(){

const skills=[

"HTML",

"CSS",

"JavaScript",

"React",

"Node.js",

"MongoDB",

"Mongoose",

"Express.js",

"Git",

"GitHub",

"Figma(UI/UX DESIGN)",

"VS code",

"Responsive Design"

]

return(

<motion.section

className="skills"

id="skills"

initial={{opacity:0}}

whileInView={{opacity:1}}

transition={{duration:1}}

viewport={{once:true}}

>

<h2>

Skills

</h2>

<p>Technologies and tools I am currently learning and using in my Full Stack Development journey.

</p>

<div className="skills-container">

{

skills.map((skill,index)=>(

<motion.div

key={index}

className="skill-card"

whileHover={{

scale:1.1,

y:-8

}}

whileTap={{

scale:0.95

}}

>

{skill}

</motion.div>

))

}

</div>

</motion.section>

)

}

export default Skills