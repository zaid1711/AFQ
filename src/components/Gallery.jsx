import React from 'react'
import { motion } from 'framer-motion'
import './Gallery.css'

const Gallery = () => {
  const galleryItems = [
    {
      title: 'Students in Prayer',
      description: 'Our students performing congregational prayers together',
      color: 'linear-gradient(135deg, #1a5f3f, #2d7b7b)'
    },
    {
      title: 'Quran Classes',
      description: 'Learning the beautiful recitation of the Holy Quran',
      color: 'linear-gradient(135deg, #2d7b7b, #8b9d83)'
    },
    {
      title: 'Arabic Lessons',
      description: 'Interactive Arabic language learning sessions',
      color: 'linear-gradient(135deg, #8b9d83, #1a5f3f)'
    },
    {
      title: 'Islamic Studies',
      description: 'Deep discussions on Islamic theology and jurisprudence',
      color: 'linear-gradient(135deg, #1a5f3f, #2d7b7b)'
    },
    {
      title: 'Library Time',
      description: 'Students exploring our rich collection of Islamic texts',
      color: 'linear-gradient(135deg, #2d7b7b, #1a5f3f)'
    },
    {
      title: 'Graduation Day',
      description: 'Celebrating the achievements of our Huffaz graduates',
      color: 'linear-gradient(135deg, #8b9d83, #2d7b7b)'
    }
  ]

  return (
    <section id="gallery" className="section gallery">
      <div className="islamic-pattern"></div>
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Life at Our Madarsa</h2>
          <p>
            Glimpses of our vibrant learning community, spiritual gatherings, 
            and the daily journey of seeking knowledge.
          </p>
        </motion.div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="gallery-image" style={{ background: item.color }}>
                <div className="gallery-overlay">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="gallery-note"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="note-text">
            <span className="note-icon">📸</span>
            In accordance with Islamic principles of modesty and privacy, we maintain 
            limited photography. These representations showcase the spirit of our learning environment.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
