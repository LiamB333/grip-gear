import React from "react";

interface TextAndVideoProps {
  title: string;
  description: string;
  videoSrc: string;
  reverse?: boolean; // New prop to control layout direction
}

const TextAndVideo: React.FC<TextAndVideoProps> = ({
  title,
  description,
  videoSrc,
  reverse = false, // Default value is false
}) => {
  return (
    <div className={`w-full flex flex-wrap items-center justify-between bg-gray-100 ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} px-4 py-10 md:px-16 lg:px-32`}>
      <div className="flex-1 md:pr-6 lg:pr-12 mb-6 md:mb-0 max-w-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
        <p className="text-base md:text-lg leading-7">{description}</p>
      </div>
      <div className="flex-1 w-full max-w-xs md:max-w-md lg:max-w-xs">
        <video autoPlay muted loop className="w-full h-auto">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default TextAndVideo;
