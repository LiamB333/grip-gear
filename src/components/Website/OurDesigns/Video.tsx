"use client";
import React from "react";

interface VideoData {
  title: string;
  description: string;
  videoSrc: string;
}

interface TextAndVideoProps {
  videos: VideoData[];
}

const TextAndVideo: React.FC<TextAndVideoProps> = ({ videos }) => {
  const limitedVideos = videos.slice(0, 2);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-black px-4 -mt-10 md:px-16 pb-14 z-20">
      {/* Video Containers */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-20 mt-8 z-20 md:mt-0">
        {limitedVideos.map((video, index) => (
          <div
            key={video.videoSrc}
            className={`bg-white rounded-3xl overflow-hidden w-72 h-[450px] md:w-80 md:h-[550px] p-2 md:p-3 ${
              index === 0 ? "mt-0" : "mt-8 md:-mt-[5rem]"
            }`}
          >
            <video className="w-full h-full object-contain" autoPlay muted loop>
              <source src={video.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextAndVideo;
