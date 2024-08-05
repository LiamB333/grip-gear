import React from 'react';
import AboutContent from './AboutContent';
import AboutImage from './AboutImage';

interface AboutGripGearProps {
  title: string;
  content: string;
  imageSrc: string;
}

const AboutGripGear: React.FC<AboutGripGearProps> = ({ title, content, imageSrc }) => {
  return (
    <section className="relative flex overflow-hidden flex-col justify-center px-16 pt-14 pb-14 text-black bg-white max-md:px-5">
      <div className="relative flex flex-wrap gap-5 items-start w-full max-md:max-w-full">
        <AboutContent title={title} content={content} />
        <AboutImage src={imageSrc} />
      </div>
    </section>
  );
};

export default AboutGripGear;
