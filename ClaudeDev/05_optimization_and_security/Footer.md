import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 bg-opacity-50 py-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Product</h3>
          <ul className="space-y-2">
            <li><Link href="#features" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Features</Link></li>
            <li><Link href="#pricing" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Pricing</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Roadmap</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">About</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Careers</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Documentation</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Tutorials</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Support</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Privacy Policy</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Terms of Service</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center">
        <p className="text-gray-400">&copy; 2023 AIDE. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;