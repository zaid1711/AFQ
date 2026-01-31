import React from 'react'
import { motion } from 'framer-motion'
import { FaBook, FaLanguage, FaPrayingHands, FaUserGraduate } from 'react-icons/fa'
import './Courses.css'

const Courses = () => {
  const courses = [
    {
      icon: <FaBook />,
      title: 'Quran Memorization (Hifz)',
      level: 'Ages 7+',
      duration: 'Flexible Pace',
      description: 'Become a Hafiz/Hafiza with our proven memorization program.'
    },
    {
      icon: <FaPrayingHands />,
      title: 'Tajweed & Recitation',
      level: 'All Ages',
      duration: '6-12 Months',
      description: 'Learn beautiful Quran recitation with correct pronunciation.'
    },
    {
      icon: <FaLanguage />,
      title: 'Arabic Language',
      level: 'Ages 8+',
      duration: '1 Year',
      description: 'Understand Quran and Islamic texts directly.'
    },
    {
      icon: <FaUserGraduate />,
      title: 'Islamic Studies',
      level: 'Ages 10+',
      duration: 'Ongoing',
      description: 'Complete Islamic knowledge - prayers, fiqh & life lessons.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="courses" className="section courses">
      <div className="pattern-bg"></div>
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Programs</h2>
          <p>
            Islamic education programs designed around your child's school schedule.
          </p>
        </motion.div>

        <motion.div
          className="courses-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="course-card card"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="course-icon">{course.icon}</div>
              <h3 className="course-title">{course.title}</h3>
              
              <div className="course-meta">
                <span className="course-level">{course.level}</span>
                <span className="course-duration">{course.duration}</span>
              </div>

              <p className="course-description">{course.description}</p>

              <button className="course-btn">
                Learn More →
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="courses-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3>Ready to Begin?</h3>
          <p>Join our community of learners</p>
          <a href="#contact" className="btn btn-primary">Enroll Now</a>
        </motion.div>
      </div>
    </section>
  )
}

export default Courses
