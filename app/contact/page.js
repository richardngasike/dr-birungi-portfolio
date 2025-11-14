'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaTwitter, FaLinkedin, FaWhatsapp, FaMapMarkerAlt, FaFacebook } from 'react-icons/fa';
import './Contact.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending your message...');

    try {
      const res = await fetch('https://formspree.io/f/xblrykwj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Oops! Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('Failed to send. Please email directly: c.birungi@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Get in Touch</h1>
            <p className="lead">
              Let’s discuss health financing strategies, research collaboration, speaking engagements, or advisory roles.
            </p>
            <p className="sub-lead">
              Dr. Charles Birungi is available for consultations worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Left: Contact Info & Socials */}
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2>Connect Directly</h2>
              <p>Prefer to reach out instantly?</p>

              <div className="contact-methods">
                <a href="mailto:c.birungi@gmail.com" className="contact-item email">
                  <FaEnvelope /> <span>c.birungi@gmail.com</span>
                </a>
                <a href="https://wa.me/256772342377" target="_blank" rel="noopener" className="contact-item whatsapp">
                  <FaWhatsapp /> <span>+256 772 342 377</span>
                </a>
                <a href="https://twitter.com/C_Birungi" target="_blank" rel="noopener" className="contact-item twitter">
                  <FaTwitter /> <span>@C_Birungi</span>
                </a>
                <a href="https://linkedin.com/in/charles-birungi" target="_blank" rel="noopener" className="contact-item linkedin">
                  <FaLinkedin /> <span>charles-birungi</span>
                </a>
                <a href="https://facebook.com/drcharlesbirungi" target="_blank" rel="noopener" className="contact-item facebook">
                  <FaFacebook /> <span>Dr. Charles Birungi</span>
                </a>
                <div className="contact-item location">
                  <FaMapMarkerAlt /> <span>Geneva, Switzerland<br />(Open to remote collaboration)</span>
                </div>
              </div>

              <div className="response-time">
                <strong>Typical response time:</strong> Within 24 hours
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="contact-form">
                <h3>Send a Message</h3>
                <div className="form-grid">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject (e.g. Research Collaboration, Speaking Request)"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  rows="7"
                  placeholder="Your message... (Please include your availability if requesting a call)"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                <motion.button
                  type="submit"
                  className="btn submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {status && <p className={`status ${status.includes('Thank') ? 'success' : 'error'}`}>{status}</p>}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}