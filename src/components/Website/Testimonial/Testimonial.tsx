import React from "react";
import Image from "next/image";
import TestimonialCard from "@/components/Website/Testimonial/TestimonialCard";

interface TestimonialProps {
  testimonial: {
    content: string;
    author: {
      name: string;
      role: string;
      avatar: string;
    };
  };
  logo: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({
  testimonial,
  logo,
}) => {
  return (
    <>
      <section className="flex justify-center items-center px-16 py-20 text-center -mt-1 bg-black max-md:px-5">
        <div className="flex flex-col items-center mt-8 max-w-full w-[768px]">
          <div className="flex justify-center items-center w-full h-[80px]">
            <Image
              src={logo}
              alt="Company Logo"
              height={120}
              width={120}
              priority={true}
            />
          </div>
          <TestimonialCard testimonial={testimonial} />
        </div>
      </section>
      <div className="-mt-1">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1439 119"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 -4.57764e-05C970 6.10352e-05 1222.6 138.175 1439 115.711V-4.57764e-05H0Z"
            fill="black"
          />
        </svg>
      </div>
    </>
  );
};

export default Testimonial;
