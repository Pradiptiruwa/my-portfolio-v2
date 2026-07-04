import "./Education.css"

import { motion } from "framer-motion"

function Education(){

return(

<motion.section

className="education"

id="education"

initial={{opacity:0,y:60}}

whileInView={{opacity:1,y:0}}

transition={{duration:0.8}}

viewport={{once:true}}

>

<h2>

Education

</h2>

<p className="subtitle">

My academic journey and learning path.
</p>

<motion.div

className="edu-card"

whileHover={{

scale:1.03

}}

>

<h3>

Bachelor of Information Technology

</h3>

<h4>

Texas College of Management and IT

</h4>

<span>

2025 - Present

</span>

<p>

Focused on Full Stack Development, UI/UX Design, Database Systems, Software Engineering and modern web technologies and AI.
</p>

</motion.div>

</motion.section>

)

}

export default Education