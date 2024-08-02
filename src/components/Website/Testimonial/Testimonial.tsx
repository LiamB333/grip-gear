import React from 'react';
import Image from 'next/image';
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

export const Testimonial: React.FC<TestimonialProps> = ({ testimonial, logo }) => {
  return (
    <section className="flex justify-center items-center px-16 py-20 text-center bg-white max-md:px-5">
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
  );
};

export default Testimonial;
