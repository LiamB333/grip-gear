import React from "react";

interface AboutContentProps {
  title: string;
  content: string;
}

const AboutContent: React.FC<AboutContentProps> = ({ title, content }) => {
  return (
    <div className="flex flex-col flex-1 min-w-[240px] max-md:max-w-full">
      <h1 className="text-5xl font-bold leading-tight mb-4 max-md:text-4xl">
        {title}
      </h1>
      <p className="text-lg leading-7">{content}</p>
    </div>
  );
};

export default AboutContent;
