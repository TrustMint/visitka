import React, { useEffect, useState } from 'react';
import { AvatarHero } from './components/AvatarHero';
import { ServiceGrid } from './components/ServiceGrid';
import { PaymentSection } from './components/PaymentSection';
import { ServiceWithColor } from './types';

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceWithColor | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`min-h-screen bg-black text-white selection:bg-ios-blue selection:text-white relative ${mounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
      
      {/* Content Area - Clean Fullscreen Layout without Dock */}
      <div className="pb-safe-bottom">
        <div className="max-w-[480px] mx-auto relative z-10 flex flex-col gap-6 pb-3">
          
          <AvatarHero />
          
          <ServiceGrid 
            selectedService={selectedService}
            onSelectService={setSelectedService}
          />
          
          <PaymentSection />
        </div>
      </div>
    </div>
  );
}