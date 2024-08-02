import React from "react";

interface TestimonialCardProps {
  testimonial: {
    content: string;
    author: {
      name: string;
      role: string;
      avatar: string;
    };
  };
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
}) => {
  return (
    <>
      <blockquote className="self-stretch mt-8 text-4xl font-bold leading-10 text-[#C62828] max-md:max-w-full">
        {testimonial.content}
      </blockquote>
      <div className="flex flex-col mt-8 max-w-full text-base leading-6 text-black w-[300px]">
        <div className="flex flex-col mt-4 text-center">
          <div className="font-semibold">{testimonial.author.name}</div>
          <div>{testimonial.author.role}</div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
