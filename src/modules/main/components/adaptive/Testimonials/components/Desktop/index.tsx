"use client"

import React from 'react';
import styles from '../../styles/index.module.css';
import { testimonials } from '../../constants/testimonials';
import TestimonialCard from '../TestimonialCard';

const DesktopTestimonials: React.FC = () => (
  <section id="testimonials" className={styles.desktopSection}>
    <h2 className={styles.desktopTitle}>What Developers Say</h2>
    <div className={styles.desktopGrid}>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  </section>
);

export default DesktopTestimonials; 