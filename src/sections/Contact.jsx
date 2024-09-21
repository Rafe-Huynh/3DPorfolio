import React, { useRef, useState } from "react";
import { SiMinutemailer } from "react-icons/si";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
       await emailjs.send("service_cvh7hq5", "template_cgvw7a5", {
            from_name: form.name,
            to_name: "Rafe",
            from_email: form.email,
            to_email: "rafehuynh0510@gmail.com",
            message: form.message
          }, '5WahRaTFBT1U18qrn');
          setLoading(false)
          alert('Your message has been sent!')
    } catch (error) {
        setLoading(false)
        console.log(error)
        alert('something went wrong')
    }
    
  };
  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Contact Me</h3>
          <p className="text-lg text-white-600 mt-3">
          Please don't hesitate, feel free to reach out to me through this form
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Full name"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Email"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Leave me a message"
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading} onSubmit={handleSubmit}>
              {loading ? "sending..." : "Submit"}
              <SiMinutemailer size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
