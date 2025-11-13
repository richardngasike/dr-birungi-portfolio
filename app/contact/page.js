'use client';
import { useState } from 'react';
import './Contact.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // Using Formspree (free) or replace with your backend
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('Thank you! Message sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Oops! Something went wrong.');
      }
    } catch {
      setStatus('Failed to send. Please try again.');
    }
  };

  return (
    <div className="contact-page section">
      <div className="container">
        <h1>Contact Dr. Charles Birungi</h1>
        <p className="lead">Let’s discuss health financing, research collaboration, or speaking opportunities.</p>

        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Email: <a href="mailto:c.birungi@example.com">c.birungi@example.com</a></p>
            <p>X/Twitter: <a href="https://twitter.com/C_Birungi" target="_blank">@C_Birungi</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/charles-birungi" target="_blank">charles-birungi</a></p>
            <p>Location: Geneva, Switzerland (Remote collaboration welcome)</p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
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
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn">Send Message</button>
            {status && <p className="status">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}