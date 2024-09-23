import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero.png"
        alt="Background image"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority={true}
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center mt-6">
          <h1 className="text-black font-bold text-4xl mb-1">DESIGN YOUR</h1>
          <h1 className="text-black font-extrabold text-6xl mb-4">MOVEMENT</h1>
          <h2 className="text-black font-medium  mb-4">
            Use our designer to create grip socks, you want.
          </h2>
          <button className="bg-[#C62828] text-white font-medium text-l py-3 px-6 rounded-3xl hover:bg-black transition mb-4">
            Design Now
          </button>

          {/* Star Rating */}
          <div className="flex items-center justify-center mt-2">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <Image
                  key={index}
                  src="/star.svg"
                  alt="Star"
                  width={20}
                  height={20}
                />
              ))}
            </div>
            <span className="ml-2 text-black font-bold">3.9</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
