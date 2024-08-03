import React from "react";

interface AboutContentProps {
  title: string;
  content: string;
}

const AboutContent: React.FC<AboutContentProps> = ({ title, content }) => {
  return (
    <article className="flex flex-col flex-1 shrink self-stretch  basis-0 min-w-[240px] max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-col mt-4 w-full max-md:max-w-full">
          <h1 className="text-5xl font-bold leading-tight max-md:max-w-full max-md:text-4xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-7 max-md:max-w-full">{content}</p>
        </div>
      </div>
    </article>
  );
};

export default AboutContent;
