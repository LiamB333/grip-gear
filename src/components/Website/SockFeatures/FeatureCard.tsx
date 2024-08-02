import React from 'react';

interface FeatureCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ iconSrc, title, description }) => {
  return (
    <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col max-md:mt-10">
        <img loading="lazy" src={iconSrc} alt="" className="w-12 aspect-square" />
        <h2 className="mt-6 text-2xl font-bold leading-9 text-white">{title}</h2>
        <p className="mt-6 text-sm leading-6 text-white">{description}</p>
      </div>
    </article>
  );
};

export default FeatureCard;