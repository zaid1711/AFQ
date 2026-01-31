import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Construct WhatsApp message
    const whatsappNumber = '918511821347' // Remove + and spaces
    const messageText = `Assalamu Alaikum wa Rahmatullahi wa Barakatuh,\n\nName: ${formData.name}\n\nMessage:\n${formData.message}\n\nJazakAllah Khair`
    
    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    setFormData({
      name: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      detail: 'Hadco Colony, 100ft Road, Miraj 416410, Maharashtra, India'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      detail: '+91 8511821347'
    }
  ]

  return (
    <section id="contact" className="section contact">
      <div className="pattern-bg"></div>
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Get In Touch</h2>
          <p>
            Questions? Reach out - we're happy to help.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Contact Us</h3>
            <p className="contact-intro">
              Feel free to reach out for any inquiries.
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onClick={() => info.link && window.open(info.link, '_blank')}
                  style={{ cursor: info.link ? 'pointer' : 'default' }}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    <p>{info.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>

              <div className="visit-note">
              <h4>Visit Us</h4>
              <p>
                You're welcome to visit our Madarsa during office hours. We recommend 
                calling ahead to schedule a tour and meet with our staff.
              </p>
            </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
