import React from 'react';
import { FooterSection } from '../shared/FooterSection';
import { footerSections } from '../../constants/footerSections';

const MobileFooter: React.FC = () => (
  <footer className="bg-gray-900 bg-opacity-50 py-8 px-4">
    <div className="mb-6">
      {footerSections.map((section, index) => (
        <FooterSection 
          key={index} 
          {...section} 
          isCollapsible={true}
        />
      ))}
    </div>
    <div className="text-center">
      <p className="text-gray-400">&copy; 2023 AIDE. All rights reserved.</p>
    </div>
  </footer>
);

export default MobileFooter; 