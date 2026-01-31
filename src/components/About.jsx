import React from 'react'
import { motion } from 'framer-motion'
import { FaQuran, FaPray, FaUsers, FaGraduationCap } from 'react-icons/fa'
import './About.css'

const About = () => {
  const features = [
    {
      icon: <FaQuran />,
      title: 'Quran Mastery',
      description: 'Your child will learn proper Quran recitation, memorization, and understanding with certified teachers.'
    },
    {
      icon: <FaPray />,
      title: 'Strong Values',
      description: 'Build character and Islamic ethics that guide your child to make right choices in life.'
    },
    {
      icon: <FaUsers />,
      title: 'Safe Environment',
      description: 'A supervised, positive community where your child learns with like-minded Muslim families.'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Flexible Timings',
      description: 'Classes designed around school schedules - mornings, evenings, and weekends available.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="section about">
      <div className="islamic-pattern"></div>
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Why Choose Our Islamic Education Program</h2>
          <p>
            Give your children the gift of authentic Islamic knowledge while they excel in their regular studies. 
            We make Islamic education accessible, convenient, and impactful for modern families.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Building Your Child's Islamic Foundation</h3>
            <p>
              As parents, you want the best for your children - both in this world and the hereafter. 
              Our flexible day classes ensure your child receives authentic Islamic education without 
              compromising their regular schooling or family time.
            </p>
            <p>
              We understand modern family schedules. That's why we offer morning, after-school, and 
              weekend programs designed to fit seamlessly into your busy lives. Your children learn 
              Quran, Islamic studies, and moral values from qualified scholars in a safe, nurturing 
              environment.
            </p>
            <p>
              Watch your child grow into a confident, practicing Muslim who understands their faith, 
              respects Islamic values, and makes you proud. Our structured curriculum ensures steady 
              progress that you can see and celebrate together as a family.
            </p>

            <div className="about-quote">
              <div className="quote-icon">"</div>
              <p className="quote-text">
                "The best among you are those who learn the Quran and teach it."
              </p>
              <p className="quote-attribution">— Prophet Muhammad ﷺ (Sahih Al-Bukhari)</p>
            </div>
          </motion.div>

          <motion.div
            className="about-features"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card card"
                variants={itemVariants}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
