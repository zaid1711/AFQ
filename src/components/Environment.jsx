import React from 'react'
import { motion } from 'framer-motion'
import { FaClock, FaSun, FaMoon, FaUsers } from 'react-icons/fa'
import './Environment.css'

const Environment = () => {
  const schedule = [
    {
      icon: <FaSun />,
      time: 'Morning Shift',
      title: '6:00 AM - 8:00 AM',
      activities: ['Fajr prayer & Quran recitation', 'Tajweed & memorization', 'Perfect before school hours']
    },
    {
      icon: <FaClock />,
      time: 'After School',
      title: '4:00 PM - 6:00 PM',
      activities: ['Islamic studies & Fiqh', 'Arabic language basics', 'Hadith & character building']
    },
    {
      icon: <FaMoon />,
      time: 'Evening Classes',
      title: '6:30 PM - 8:00 PM',
      activities: ['Advanced Quran studies', 'Islamic history & Seerah', 'Weekend intensive programs']
    },
    {
      icon: <FaUsers />,
      time: 'Weekend Program',
      title: 'Saturday & Sunday',
      activities: ['Full-day Islamic education', 'Community activities', 'Parent-child workshops']
    }
  ]

  return (
    <section id="environment" className="section environment">
      <div className="islamic-pattern"></div>
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Flexible Class Schedule</h2>
          <p>
            Convenient timings designed for working families. Give your children authentic Islamic 
            education alongside their regular schooling, building strong moral foundations for life.
          </p>
        </motion.div>

        <div className="environment-content">
          <motion.div
            className="schedule-section schedule-full-width"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Class Timings for Your Child</h3>
            <div className="schedule-timeline">
              {schedule.map((item, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="timeline-icon">{item.icon}</div>
                  <div className="timeline-content">
                    <div className="timeline-time">{item.time}</div>
                    <h4>{item.title}</h4>
                    <ul className="timeline-activities">
                      {item.activities.map((activity, idx) => (
                        <li key={idx}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Environment
