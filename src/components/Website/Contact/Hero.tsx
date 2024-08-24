import * as React from "react";
import Link from "next/link";

interface HeroProps {
  title: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ title, description }) => {
  return (
    <>
      <section className="flex flex-col px-16 py-14 bg-white max-md:px-5">
        <h1 className="mt-4 text-5xl font-bold text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
          {title}
        </h1>
        <p className="mt-6 px-1 text-lg leading-7 text-black max-md:max-w-full">
          {description}
        </p>
        <div className="flex justify-end w-full mt-8">
          <div className="flex flex-col w-[50%] max-md:w-full p-4 z-20">
            <div className="flex flex-col text-base text-center text-white bg-black rounded-lg p-6">
              <h3 className="mt-6 text-3xl font-bold leading-10">
                Small Business, Big Impact
              </h3>
              <p className="mt-6 text-white leading-[150%]">
                Grip Gear was founded by two football enthusiasts who wanted to
                give players the freedom to customise their grip socks and
                express their unique style on and off the pitch.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="relative -mt-56 z-0 md:block hidden">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 555"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 118H1440V555H0V118Z" fill="#CB3A3A" />
          <path
            d="M1439 118.181C469 118.181 216.399 -19.9945 0 2.46973V118.181H1439Z"
            fill="#CB3A3A"
          />
        </svg>
      </div>
    </>
  );
};

export default Hero;
