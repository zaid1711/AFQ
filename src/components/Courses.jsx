import React from 'react'
import { motion } from 'framer-motion'
import { FaBook, FaLanguage, FaPrayingHands, FaHistory, FaChild, FaUserGraduate } from 'react-icons/fa'
import './Courses.css'

const Courses = () => {
  const courses = [
    {
      icon: <FaBook />,
      title: 'Quran Memorization (Hifz)',
      level: 'Ages 7+',
      duration: 'Flexible Pace',
      description: 'Help your child become a Hafiz/Hafiza with our proven memorization program. Builds discipline and confidence.'
    },
    {
      icon: <FaPrayingHands />,
      title: 'Tajweed & Recitation',
      level: 'All Ages',
      duration: '6-12 Months',
      description: 'Your child will learn to recite Quran beautifully with correct pronunciation, making you proud in every gathering.'
    },
    {
      icon: <FaLanguage />,
      title: 'Arabic Language Basics',
      level: 'Ages 8+',
      duration: '1 Year',
      description: 'Give your child the key to understanding Quran and Islamic texts directly - a lifelong valuable skill.'
    },
    {
      icon: <FaUserGraduate />,
      title: 'Islamic Studies',
      level: 'Ages 10+',
      duration: 'Ongoing',
      description: 'Comprehensive Islamic knowledge - prayers, fiqh, and life lessons that shape your child\'s character.'
    },
    {
      icon: <FaHistory />,
      title: 'Stories of Prophets',
      level: 'Ages 7-14',
      duration: '6 Months',
      description: 'Inspiring stories that teach moral values and strengthen your child\'s connection with Islam.'
    },
    {
      icon: <FaChild />,
      title: 'Weekend Islamic School',
      level: 'Ages 5-15',
      duration: 'Ongoing',
      description: 'Perfect for busy families - complete Islamic education in convenient weekend classes with community activities.'
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
          <h2>Programs for Your Child</h2>
          <p>
            Choose from our range of Islamic education programs, all designed to fit 
            around your child's school schedule and build a strong Islamic foundation.
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
          <h3>Ready to Begin Your Islamic Journey?</h3>
          <p>Join our community of dedicated learners seeking authentic Islamic knowledge</p>
          <a href="#contact" className="btn btn-primary">Enroll Now</a>
        </motion.div>
      </div>
    </section>
  )
}

export default Courses
