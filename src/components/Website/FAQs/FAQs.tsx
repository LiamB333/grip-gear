import React from "react";
import FAQItem from "@/components/Website/FAQs/FAQItem";

interface FAQData {
  question: string;
  answer: string;
}

interface FAQsProps {
  faqData: FAQData[];
  paragraphText?: string;
}

const FAQs: React.FC<FAQsProps> = ({
  faqData,
  paragraphText = "Find answers to frequently asked questions.",
}) => {
  return (
    <main className="flex flex-col px-16 py-24 pb-20 bg-white max-md:px-5">
      <header className="flex flex-col items-center text-black max-md:max-w-full max-md:pt-8">
        <h1 className="text-4xl font-bold mb-4">FAQs</h1>
        <h2 className="font-medium text-gray-600">{paragraphText}</h2>
      </header>
      <section className="flex flex-col self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </section>
    </main>
  );
};

export default FAQs;
