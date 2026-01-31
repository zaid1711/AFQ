import React from 'react'
import { motion } from 'framer-motion'
import { FaClock, FaSun, FaMoon, FaUsers } from 'react-icons/fa'
import './Environment.css'

const Environment = () => {
  const schedule = [
    {
      icon: <FaSun />,
      time: 'Morning',
      title: '6:00 AM - 8:00 AM',
      activities: ['Fajr prayer & Quran', 'Tajweed & memorization']
    },
    {
      icon: <FaClock />,
      time: 'After School',
      title: '4:00 PM - 6:00 PM',
      activities: ['Islamic studies', 'Arabic basics']
    },
    {
      icon: <FaMoon />,
      time: 'Evening',
      title: '6:30 PM - 8:00 PM',
      activities: ['Advanced Quran', 'Islamic history']
    },
    {
      icon: <FaUsers />,
      time: 'Weekend',
      title: 'Sat & Sun',
      activities: ['Full-day programs', 'Community activities']
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
          <h2>Class Schedule</h2>
          <p>
            Flexible timings for working families. Choose what works best for you.
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
            <h3>Available Timings</h3>
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
