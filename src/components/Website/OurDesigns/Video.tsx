"use client";
import React, { useState, useRef } from "react";

interface VideoData {
  title: string;
  description: string;
  videoSrc: string;
}

interface TextAndVideoProps {
  videos: VideoData[];
}

const TextAndVideo: React.FC<TextAndVideoProps> = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const videoRefs = useRef([
    React.createRef<HTMLVideoElement>(),
    React.createRef<HTMLVideoElement>(),
  ]);

  const navigate = (direction: number) => {
    const nextIndex =
      (currentVideoIndex + direction + videos.length) % videos.length;
    setIsVisible(false); // Start opacity transition

    const nextVideoRef = videoRefs.current[nextIndex % 2].current;
    if (nextVideoRef) {
      nextVideoRef.src = videos[nextIndex].videoSrc;
      nextVideoRef.load();
      nextVideoRef.onloadeddata = () => {
        setCurrentVideoIndex(nextIndex);
        setTimeout(() => setIsVisible(true), 10); // Delay to ensure smooth transition
      };
    }
  };

  const { title, description } = videos[currentVideoIndex];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-gray-100 px-16 py-2 pb-12">
      {/* Text Section */}
      <div className="w-full md:w-1/2 px-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
        <p className="text-base md:text-lg leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex justify-center md:justify-start">
          <button
            onClick={() => navigate(-1)}
            className="text-lg p-2 mr-2 border border-[#cb3f3f] bg-white text-[#cb3f3f] hover:bg-gray-200"
            style={{ minWidth: "40px", minHeight: "40px" }}
          >
            {"<"}
          </button>
          <button
            onClick={() => navigate(1)}
            className="text-lg p-2 border border-[#cb3f3f] bg-white text-[#cb3f3f] hover:bg-gray-200"
            style={{ minWidth: "40px", minHeight: "40px" }}
          >
            {">"}
          </button>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative w-full md:w-1/4" style={{ height: "500px" }}>
        {videos.map((video, index) => (
          <video
            ref={videoRefs.current[index % 2]}
            key={video.videoSrc}
            style={{
              opacity: index === currentVideoIndex && isVisible ? 1 : 0,
              transition: "opacity 0.5s ease",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain", // Ensure the entire video fits within the container
            }}
            autoPlay
            muted
            loop
            className="object-contain"
          >
            <source src={video.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
    </div>
  );
};

export default TextAndVideo;
