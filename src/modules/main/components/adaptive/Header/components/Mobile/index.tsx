'use client';

import React, { useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '/home/runner/AIDE/new_src/modules/shared/ui/button';
import { useAuth } from '/home/runner/AIDE/new_src/modules/shared/hooks/useAuth';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { navigationItems, HEADER_BUTTON_CLASSES, MOBILE_MENU_ANIMATION } from '../../constants/navigation';
import type { HeaderProps } from '../../types';

const Mobile: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const isMainPage = useMemo(() => pathname === '/', [pathname]);

  const handleLogout = useCallback(async () => {
    try {
      await signOut();
      setIsOpen(false);
    } catch (error) {
      console.error('Failed to log out', error);
    }
  }, [signOut]);

  const handleLogin = useCallback(() => {
    router.push('/auth/login');
    setIsOpen(false);
  }, [router]);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <header className={`bg-gray-900 bg-opacity-50 sticky top-0 z-10 ${className}`}>
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">AIDE</h1>
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        {isOpen && (
          <motion.div 
            className="mt-4 flex flex-col space-y-4"
            {...MOBILE_MENU_ANIMATION}
          >
            {navigationItems.map(({ label, href }) => (
              <Link 
                key={label}
                href={href} 
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            {isMainPage ? (
              <Button 
                className={HEADER_BUTTON_CLASSES}
                onClick={handleLogin}
              >
                Login
              </Button>
            ) : user ? (
              <Button 
                className={HEADER_BUTTON_CLASSES}
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : null}
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default React.memo(Mobile);
