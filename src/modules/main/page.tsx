'use client';

import React from 'react';
import { withMemoization } from '/home/runner/AIDE/new_src/modules/shared/hoc/withMemoization';
import dynamic from 'next/dynamic';

// Динамический импорт компонентов с мемоизацией
const Header = dynamic(() => import('./components/adaptive/Header'), { 
 
});

const Hero = dynamic(() => import('./components/adaptive/Hero'), { 
 
});

const FeaturesSection = dynamic(() => import('./components/adaptive/FeaturesSection'), { 

});

const HowItWorks = dynamic(() => import('./components/adaptive/HowItWorks'), { 
  
});

const PricingPlans = dynamic(() => import('./components/adaptive/PricingPlans'), { 
 
});

const Testimonials = dynamic(() => import('./components/adaptive/Testimonials'), { 
  
});

const CallToAction = dynamic(() => import('./components/adaptive/CallToAction'), { 
 
});

const Footer = dynamic(() => import('./components/adaptive/Footer'), { 
 
});

const ScrollToTopButton = dynamic(() => import('/home/runner/AIDE/new_src/modules/main/components/ui/ScrollToTopButton'), { 
  
});

const Divider = dynamic(() => import('/home/runner/AIDE/new_src/modules/shared/ui/divider'), {

});

// Мемоизируем все компоненты
const MemoizedHeader = withMemoization(Header);
const MemoizedHero = withMemoization(Hero);
const MemoizedFeaturesSection = withMemoization(FeaturesSection);
const MemoizedHowItWorks = withMemoization(HowItWorks);
const MemoizedPricingPlans = withMemoization(PricingPlans);
const MemoizedTestimonials = withMemoization(Testimonials);
const MemoizedCallToAction = withMemoization(CallToAction);
const MemoizedFooter = withMemoization(Footer);
const MemoizedScrollToTopButton = withMemoization(ScrollToTopButton);
const MemoizedDivider = withMemoization(Divider);

const MainPage = () => {
  return (
    <div className="min-h-screen bg-gradient-custom text-white">
      <MemoizedHeader />
      <main>
        <MemoizedHero />
        <MemoizedDivider />
        <MemoizedFeaturesSection />
        <MemoizedDivider />
        <MemoizedHowItWorks />
        <MemoizedDivider />
        <MemoizedPricingPlans />
        <MemoizedDivider />
        <MemoizedTestimonials />
        <MemoizedDivider />
        <MemoizedCallToAction />
      </main>
      <MemoizedFooter />
      <MemoizedScrollToTopButton/>
    </div>
  );
};

export default withMemoization(MainPage); 