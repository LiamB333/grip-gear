import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative">
      <div className="px-4 pt-10 mx-auto max-w-7xl md:pt-24">
        <div className="w-full pb-5 mx-auto text-center md:w-11/12">
          <h1 className="mb-3 text-5xl font-bold tracking-tight text-gray-800 md:text-6xl">
            Grip Socks for
            <br />
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#CB3A3A] via-[#E74C4C] to-[#FF5E5E] dark:from-[#CB3A3A] dark:via-[#E74C4C] dark:to-[#FF5E5E]
"
            >
              Your Team
            </span>
          </h1>
          <p className="max-w-xl pt-5 mx-auto text-lg text-gray-600 md:text-lg">
            Designed to keep your team performing at their best. Custom colors,
            logos, and grip options with discounts on bulk orders.
          </p>
          {/* Hero Buttons */}
          <div className="mt-6 text-center">
            <br className="sm:hidden" />
            <Link
              href="/design"
              className="inline-flex items-center font-bold px-5 py-3 text-md text-white transition duration-300 bg-black rounded-md hover:bg-[#CB3A3A] focus:ring-2 focus:ring-indigo-500"
              aria-label="Design Now"
            >
              <span className="flex justify-center">Design Now</span>
            </Link>
          </div>
        </div>

        {/* Hero Video */}
        <div className="relative w-full py-10 mx-auto text-center md:py-8 md:my-6 md:w-10/12">
          <div className="relative z-10 flex justify-center">
            <video
              className="rounded-xl ring-1 ring-black ring-opacity-5"
              src="/video-2.mp4"
              width={1000}
              height={800}
              autoPlay
              loop
              muted
              playsInline
              aria-label="Demonstration of the GILT calculator interface in action"
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
