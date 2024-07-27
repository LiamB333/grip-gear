import React from "react";
import Image from "next/image";
import Button from "@/components/Website/Hero/Button";

export const Hero: React.FC = () => {
  return (
    <section className="flex gap-3 max-md:flex-col px-16 py-6 max-md:px-5 items-center">
      <div className="flex flex-col w-7/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col self-start max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col text-black max-md:max-w-full">
            <h1 className="text-6xl font-bold leading-[67px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              Customise Your Own Grip Socks with Ease
            </h1>
            <p className="mt-6 text-lg leading-7 max-md:max-w-full">
              Our 2D designer makes it simple and fun to design personalised
              grip socks that reflect your style and personality. Whether
              you&apos;re an athlete looking for enhanced performance or just
              want to add a touch of flair to your game, our custom grip socks
              are the perfect choice.
            </p>
            <Button />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-5/12 items-end max-md:ml-0 max-md:w-full">
        <Image
          priority
          src="/hero-ai.webp"
          alt="Custom grip sock"
          width={500}
          height={500}
          className="w-full max-md:mt-10 max-md:max-w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
