import React from 'react'
import { motion } from 'framer-motion'
import { FaBook, FaHeart, FaStar } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="islamic-pattern"></div>
      
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="arabic-calligraphy"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Nurturing Faith, Knowledge & Character
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Empower your children with authentic Islamic education alongside their regular schooling. 
            Build strong moral foundations and Quranic knowledge for a blessed future.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <a href="#courses" className="btn btn-primary">
              Enroll Your Child
            </a>
            <a href="#about" className="btn btn-outline">
              Learn More
            </a>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <div className="stat-item">
              <FaBook className="stat-icon" />
              <div className="stat-content">
                <h3>500+</h3>
                <p>Students</p>
              </div>
            </div>
            <div className="stat-item">
              <FaStar className="stat-icon" />
              <div className="stat-content">
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="image-decoration">
            <div className="hero-main-image">
              <img 
                src="https://images.pexels.com/photos/17928133/pexels-photo-17928133.jpeg?cs=srgb&dl=pexels-saad-alkot-419901137-17928133.jpg&fm=jpg" 
                alt="Islamic Architecture and Learning" 
                className="hero-img"
              />
              <div className="image-overlay"></div>
            </div>
            <div className="decoration-circle"></div>
            <div className="decoration-pattern"></div>
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ↓
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
