import React from 'react';

interface StepItemProps {
  icon: string;
  title: string;
  description: string;
  isLast: boolean;
}

const StepItem: React.FC<StepItemProps> = ({ icon, title, description, isLast }) => {
  return (
    <div className="flex flex-wrap gap-5 items-start w-full max-md:max-w-full">
      <div className="flex flex-col items-center w-12">
        <img loading="lazy" src={icon} alt="" className="object-contain w-12 aspect-square" />
        {!isLast && <div className="mt-1 w-0 bg-black min-h-[100px]" />}
      </div>
      <div className="flex flex-col flex-1 shrink text-black basis-0 min-w-[240px] max-md:max-w-full">
        <h3 className="text-xl font-bold leading-snug max-md:max-w-full">{title}</h3>
        <p className="mt-4 text-base leading-6 max-md:max-w-full">{description}</p>
      </div>
    </div>
  );
};

export default StepItem;