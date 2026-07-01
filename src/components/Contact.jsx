import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "./Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {

      const response = await axios.post(
  "https://my-portfolio-backend-3-nub3.onrender.com/api/contact",
  formData
);

      setSuccess(response.data.message);

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    }
    catch (err) {

      console.log(err);

      setError(
        err.response?.data?.message ||
        err.message ||
        "Failed to send message"
      );

    }
    finally {

      setLoading(false);

    }

  };

  return (

    <motion.section
      className="contact"
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">

          {loading ? "Sending..." : "Send Message"}

        </button>

      </form>

      {success && (

        <p className="success">

          {success}

        </p>

      )}

      {error && (

        <p className="error">

          {error}

        </p>

      )}

    </motion.section>

  );

}

export default Contact;