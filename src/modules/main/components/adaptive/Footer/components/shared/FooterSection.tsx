import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import type { FooterSectionProps } from '../../types';

export const FooterSection: React.FC<FooterSectionProps> = ({ 
  title, 
  links, 
  isCollapsible = false,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const content = (
    <motion.ul 
      className="space-y-2"
      initial={isCollapsible ? { height: 0, opacity: 0 } : false}
      animate={isCollapsible && isOpen ? { height: 'auto', opacity: 1 } : false}
      transition={{ duration: 0.3 }}
    >
      {links.map((link, index) => {
        const Icon = link.icon;
        return (
          <li key={index}>
            <Link 
              href={link.href} 
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
            >
              {Icon && <Icon size={16} />}
              {link.label}
            </Link>
          </li>
        );
      })}
    </motion.ul>
  );

  if (!isCollapsible) {
    return (
      <div className={className}>
        <h3 className="text-lg font-semibold text-blue-400 mb-4">{title}</h3>
        {content}
      </div>
    );
  }

  return (
    <div className={`border-b border-gray-800 py-4 ${className}`}>
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`footer-section-${title.toLowerCase()}`}
      >
        <h3 className="text-lg font-semibold text-blue-400">{title}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? 
            <ChevronUp className="text-gray-400" /> : 
            <ChevronDown className="text-gray-400" />
          }
        </motion.div>
      </button>
      <div id={`footer-section-${title.toLowerCase()}`}>
        {content}
      </div>
    </div>
  );
};

FooterSection.displayName = 'FooterSection';

export default React.memo(FooterSection);