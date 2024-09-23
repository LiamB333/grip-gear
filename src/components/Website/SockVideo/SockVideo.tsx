import React from "react";

const SockVideo = () => {
  return (
    <div className="flex flex-col items-center py-16 px-4 bg-[#F4F4F4]">
      {/* Headings */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Some of our designs.</h1>
        <h2 className="font-medium text-gray-600">
          It only takes four simple steps.
        </h2>
      </div>

      {/* Video Container */}
      <div className="flex flex-col md:flex-row justify-center md:gap-20">
        <div className="flex flex-col items-center mb-8 md:mb-0">
          {/* Container for the first video */}
          <video
            className="w-full max-w-[350px] h-auto object-contain p-4"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/lightning.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="flex flex-col items-center">
          {/* Container for the second video */}
          <video
            className="w-full max-w-[350px] h-auto object-contain p-4"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/stud.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default SockVideo;
