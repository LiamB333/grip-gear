import React from 'react';

interface ParagraphProps {
  text: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  return (
    <p className="mt-6 text-lg leading-7 max-md:max-w-full">
      {text}
    </p>
  );
};

export default Paragraph;