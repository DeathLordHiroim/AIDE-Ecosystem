import React from 'react';
import { FooterSection } from '../shared/FooterSection';
import { footerSections } from '../../constants/footerSections';

const DesktopFooter: React.FC = () => (
  <footer className="bg-gray-900 bg-opacity-50 py-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        {footerSections.map((section, index) => (
          <FooterSection key={index} {...section} />
        ))}
      </div>
      <div className="border-t border-gray-800 pt-8 text-center">
        <p className="text-gray-400">&copy; 2023 AIDE. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default DesktopFooter; 