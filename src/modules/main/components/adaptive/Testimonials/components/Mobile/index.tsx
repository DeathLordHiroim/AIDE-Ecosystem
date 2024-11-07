"use client"

import React from 'react';
import styles from '../../styles/index.module.css';
import { testimonials } from '../../constants/testimonials';
import TestimonialCard from '../TestimonialCard';

const MobileTestimonials: React.FC = () => (
  <section id="testimonials" className={styles.mobileSection}>
    <h2 className={styles.mobileTitle}>What Developers Say</h2>
    <div className={styles.mobileList}>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  </section>
);

export default MobileTestimonials; 