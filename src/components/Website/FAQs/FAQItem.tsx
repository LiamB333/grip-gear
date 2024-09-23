"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import the icons

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col mt-4 border border-black border-1.5 rounded-xl max-md:max-w-full">
      <button
        className="flex gap-5 px-6 py-5 text-lg font-bold leading-7 text-black max-md:flex-wrap max-md:px-5"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="flex-1 my-auto max-md:max-w-full text-left">
          {question}
        </span>
        <span className="shrink-0 w-8 h-8 flex items-center justify-center text-[#C62828]">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-base leading-6 text-black w-[768px] max-md:px-5 max-md:max-w-full">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
