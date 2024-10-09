import React from "react";

const Videos = () => {
  return (
    <section className="relative py-10">
      <div className="px-4  mx-auto max-w-7xl md:py-10">
        {/* Video Containers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0 justify-center">
          {/* First Video Container */}
          <div className="text-center flex flex-col items-center transform md:translate-x-12">
            <h1 className="text-2xl font-bold tracking-normal text-center  md:leading-tight md:tracking-normal  md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#CB3A3A] via-[#E74C4C] to-[#FF5E5E]">
              NE-STUD FC.
            </h1>
            <p className="mb-8 max-w-md mx-auto pt-8 text-center text-lg text-gray-600 md:text-lg">
              Custom grip socks tailored perfectly for NE-STUD FC, featuring a
              sleek light blue base, black grips, and a bold red stripe that
              complements their branding.
            </p>

            <div className="relative w-full mx-auto">
              <div className="relative z-10 flex justify-center">
                <video
                  className="rounded-lg ring-1 ring-black ring-opacity-5 w-60 md:w-72"
                  src="/stud.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="How to customize your grip socks"
                ></video>
              </div>
            </div>
          </div>

          {/* Second Video Container */}
          <div className="text-center flex flex-col items-center transform md:-translate-x-12">
            <div className="relative w-full mx-auto">
              <div className="relative z-10 flex justify-center">
                <video
                  className="rounded-lg ring-1 ring-black ring-opacity-5 w-60 md:w-72"
                  src="/lightning.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="Grip socks in action"
                ></video>
              </div>
            </div>
            <h1 className="mt-8 text-2xl font-bold tracking-normal text-center  md:leading-tight md:tracking-normal  md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#CB3A3A] via-[#E74C4C] to-[#FF5E5E]">
              LIGHTNING FC.
            </h1>
            <p className="max-w-md mx-auto pt-8 text-center text-lg text-gray-600 md:text-lg">
              Custom grip socks tailored perfectly for LIGHTNING FC, featuring a
              dark blue base and their signature yellow lightning stripe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
