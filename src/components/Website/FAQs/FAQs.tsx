import React from "react";
import FAQItem from "@/components/Website/FAQs/FAQItem";
import ContactSection from "@/components/Website/FAQs/ContactSection";

interface FAQData {
  question: string;
  answer: string;
}

interface FAQsProps {
  faqData: FAQData[];
  paragraphText?: string;
  includeContactForm?: boolean;
}

const FAQs: React.FC<FAQsProps> = ({
  faqData,
  paragraphText = "Find answers to frequently asked questions about our grip socks and customisation process.",
  includeContactForm = true,
}) => {
  return (
    <main className="flex flex-col items-start px-16 py-20 bg-white max-md:px-5">
      <header className="flex flex-col mt-8 text-black max-md:max-w-full">
        <h1 className="text-4xl font-bold leading-[57.6px] max-md:max-w-full max-md:text-4xl">
          FAQs
        </h1>
        <p className="mt-6 text-lg leading-7 max-md:max-w-full">
          {paragraphText}
        </p>
      </header>
      <section className="flex flex-col self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </section>
      {includeContactForm && <ContactSection />}
    </main>
  );
};

export default FAQs;
