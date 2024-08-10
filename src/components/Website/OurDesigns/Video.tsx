import React from "react";

interface TextAndVideoProps {
  title: string;
  description: string;
  videoSrc: string;
  reverse?: boolean;
}

const TextAndVideo: React.FC<TextAndVideoProps> = ({
  title,
  description,
  videoSrc,
  reverse = false,
}) => {
  return (
    <div
      className={`w-full flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-center bg-gray-100 px-4 py-10 md:px-16 lg:px-32`}
    >
      <div className="w-full md:max-w-md lg:max-w-lg xl:max-w-xl mb-4 md:mb-0 md:pr-8 lg:pr-12 xl:pr-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
        <p className="text-base md:text-lg leading-7">{description}</p>
      </div>
      <div className="w-full flex justify-center md:max-w-md lg:max-w-lg xl:max-w-md">
        <video
          autoPlay
          muted
          loop
          className="w-full h-auto md:max-w-md lg:max-w-md"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default TextAndVideo;
