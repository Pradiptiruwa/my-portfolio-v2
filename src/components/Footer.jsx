import "./Footer.css"

import { motion } from "framer-motion"

function Footer(){

return(

<motion.footer

className="footer"

initial={{opacity:0}}

whileInView={{opacity:1}}

transition={{duration:1}}

viewport={{once:true}}

>

<h3>

Pradip Sunar

</h3>

<p>

BIT Student | MERN Developer

</p>

<p>

© 2026 All Rights Reserved

</p>

</motion.footer>

)

}

export default Footer