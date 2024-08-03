import React from 'react';
import HeroSection from './HeroSection';

const GetInTouch: React.FC = () => {
  return (
    <main className="min-h-[369px]">
      <HeroSection
        title="Get in Touch"
        description="We'd love to hear from you. Contact us for any inquiries or feedback."
        backgroundImage="/contact-bg.png"
      />
    </main>
  );
};

export default GetInTouch;