// Main Module Configuration
export const MAIN_MODULE_CONFIG = {
  META: {
    TITLE: 'AIDE - AI-Powered Development Ecosystem',
    DESCRIPTION: 'Accelerate your development process with AI assistance',
    KEYWORDS: 'AI development, coding assistance, automated testing, development tools'
  },
  HERO: {
    TITLE: 'AIDE: AI-Powered Development Ecosystem',
    DESCRIPTION: 'Revolutionize your coding experience with AI-driven development. From smart code suggestions to automated testing, AIDE empowers developers to code faster and smarter.',
    CTA: {
      PRIMARY: {
        TEXT: 'Start AI-Powered Coding',
        HREF: '/get-started'
      },
      SECONDARY: {
        TEXT: 'Explore AI Features',
        HREF: '/features'
      }
    }
  },
  PERFORMANCE: {
    TARGETS: {
      LCP: 2500, // Largest Contentful Paint < 2.5s
      CLS: 0.1,  // Cumulative Layout Shift < 0.1
      FID: 100   // First Input Delay < 100ms
    }
  },
  BREAKPOINTS: {
    MOBILE: 640,
    TABLET: 768,
    DESKTOP: 1024,
    WIDE: 1280
  }
};

// Animation Configuration
export const ANIMATION_CONFIG = {
  BASE_TRANSITION: {
    TYPE: 'spring',
    STIFFNESS: 100,
    DAMPING: 15
  },
  DURATION: {
    FAST: 0.3,
    NORMAL: 0.6,
    SLOW: 0.8
  },
  DELAY: {
    SHORT: 0.3,
    MEDIUM: 0.4,
    LONG: 0.8
  }
};

// Monitoring Configuration
export const MONITORING_CONFIG = {
  METRICS: {
    PERFORMANCE: ['LCP', 'CLS', 'FID'],
    ENGAGEMENT: ['CTR', 'TimeOnPage', 'ScrollDepth'],
    ERRORS: ['LoadFailures', 'AnimationErrors', 'InteractionErrors']
  },
  LOGGING: {
    LEVEL: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
    EVENTS: ['error', 'warning', 'info']
  }
};

// Test IDs Configuration
export const TEST_IDS = {
  HERO: {
    CONTAINER: 'hero-container',
    TITLE: 'hero-title',
    DESCRIPTION: 'hero-description',
    CTA_PRIMARY: 'hero-cta-primary',
    CTA_SECONDARY: 'hero-cta-secondary'
  }
};

// Development Phase Configuration
export const DEVELOPMENT_CONFIG = {
  PHASE: "Component Development", // Phase 3
  REQUIREMENTS: {
    RESPONSIVE: true,
    STATE_MANAGEMENT: true,
    ASYNC_OPERATIONS: false,
    SUB_COMPONENTS: true
  },
  SECURITY: {
    REQUIRES_AUTH: false,
    DATA_PROTECTION: true,
    API_SECURITY: false
  }
};


// Component Quality Metrics
export const QUALITY_METRICS = {
  FUNCTIONAL: {
    COMPLETENESS: 0.8,
    CORRECTNESS: 0.9,
    ERROR_HANDLING: 0.7,
    PERFORMANCE: 0.85
  },
  NON_FUNCTIONAL: {
    SCALABILITY: 0.8,
    SECURITY: 0.75,
    MAINTAINABILITY: 0.85,
    TESTABILITY: 0.8
  }
}; 