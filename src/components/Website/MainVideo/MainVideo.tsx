import React from "react";

const MainVideo = () => {
  return (
    <div className="flex flex-col items-center py-16 px-4 min-h-screen bg-white">
      {/* Headings */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Create what you want.</h1>
        <h2 className="font-medium text-gray-600">
          It only takes four simple steps.
        </h2>
      </div>

      {/* Video */}
      <div className="w-[900px] mx-auto"> {/* Set width in pixels here */}
        <video
          className="w-full h-auto object-contain"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video-2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default MainVideo;
