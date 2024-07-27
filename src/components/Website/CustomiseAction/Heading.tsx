import React from 'react';

interface HeadingProps {
  text: string;
}

export const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <h1 className="text-4xl font-bold leading-10 max-md:max-w-full">
      {text}
    </h1>
  );
};

export default Heading;

