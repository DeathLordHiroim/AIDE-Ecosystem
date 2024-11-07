export interface HeaderProps {
    className?: string;
  }
  
  export interface NavigationItem {
    label: string;
    href: string;
  }
  
  export interface HeaderButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
  }
  
  export interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navigationItems: NavigationItem[];
    isMainPage: boolean;
    onLogin: () => void;
    onLogout: () => void;
    isAuthenticated: boolean;
  }