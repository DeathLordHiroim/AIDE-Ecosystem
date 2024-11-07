import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import styles from '../../styles/index.module.css';
import type { TestimonialCardProps } from '../../types';

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, quote }) => (
  <motion.div 
    className={styles.testimonialCard}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <p className={styles.quote}>"{quote}"</p>
    <div className={styles.author}>
      <div>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.role}>{role}</p>
      </div>
      <div className={styles.stars}>
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
      </div>
    </div>
  </motion.div>
);

export default TestimonialCard; 