import "./About.css";
import {motion} from "framer-motion";

function About(){

return(

<motion.section

className="about"

id="about"

initial={{opacity:0}}

whileInView={{opacity:1}}

transition={{duration:1}}

viewport={{once:true}}

>

<h2>

About Me

</h2>

<p>

I am a Bachelor of Information Technology (BIT) student with a strong interest in Full Stack Development, UI/UX Design, and Software Engineering. I enjoy learning new technologies, solving problems, and creating clean, modern digital experiences. Currently, I am focused on React, Node.js, Express.js, MongoDB, Git, and modern development workflows. My goal is to gain practical experience through projects and grow into a professional software developer.
</p>

</motion.section>

)

}

export default About;