'use client';

import React, { useCallback, useMemo } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '/home/runner/AIDE/new_src/modules/shared/ui/button';
import { useAuth } from '/home/runner/AIDE/new_src/modules/shared/hooks/useAuth';
import { navigationItems, HEADER_BUTTON_CLASSES } from '../../constants/navigation';
import type { HeaderProps } from '../../types';

const Desktop: React.FC<HeaderProps> = ({ className = '' }) => {
  const { user, signOut } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const isMainPage = useMemo(() => pathname === '/', [pathname]);

  const handleLogout = useCallback(async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Failed to log out', error);
    }
  }, [signOut]);

  const handleLogin = useCallback(() => {
    router.push('/auth/login');
  }, [router]);

  return (
    <header className={`bg-gray-900 bg-opacity-50 sticky top-0 z-10 ${className}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-400">AIDE</h1>
          <div className="flex space-x-6">
            {navigationItems.map(({ label, href }) => (
              <Link 
                key={label}
                href={href}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </div>
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
        </div>
      </nav>
    </header>
  );
};

export default React.memo(Desktop);