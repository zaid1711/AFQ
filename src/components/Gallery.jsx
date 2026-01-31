import React from 'react'
import { motion } from 'framer-motion'
import './Gallery.css'

const Gallery = () => {
  const galleryItems = [
    {
      title: 'Prayer Hall',
      description: 'Congregational prayers together',
      color: 'linear-gradient(135deg, #1a5f3f, #2d7b7b)'
    },
    {
      title: 'Quran Classes',
      description: 'Learning beautiful recitation',
      color: 'linear-gradient(135deg, #2d7b7b, #8b9d83)'
    },
    {
      title: 'Arabic Lessons',
      description: 'Interactive language learning',
      color: 'linear-gradient(135deg, #8b9d83, #1a5f3f)'
    },
    {
      title: 'Graduation',
      description: 'Celebrating our Huffaz',
      color: 'linear-gradient(135deg, #1a5f3f, #2d7b7b)'
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
            Glimpses of our learning community and daily journey.
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
            Representations showcasing the spirit of our learning environment.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
