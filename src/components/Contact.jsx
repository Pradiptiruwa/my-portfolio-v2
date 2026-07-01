import { motion } from "framer-motion";
import "./Contact.css";

function Contact(){

return(

<motion.section
  className="contact"
  id="contact"
  initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
<h2>Contact</h2>

<form>

<input placeholder="Name"/>

<input placeholder="Email"/>

<textarea placeholder="Message"/>

<button>

Send Message

</button>

</form>

</motion.section>
)

}

export default Contact;