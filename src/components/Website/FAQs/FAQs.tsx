import React from "react";
import FAQItem from "@/components/Website/FAQs/FAQItem";
import ContactSection from "@/components/Website/FAQs/ContactSection";

interface FAQData {
  question: string;
  answer: string;
}

const faqData: FAQData[] = [
  {
    question: "How do I customise?",
    answer:
      "To customise your grip socks, simply use our 2D configuration software on our website. You can choose from a variety of colors, patterns, and designs to create your unique grip socks.",
  },
  {
    question: "What are the benefits?",
    answer:
      "Our customized grip socks provide enhanced grip and traction, reducing the risk of slips and falls. They are also comfortable and stylish, making them perfect for various activities such as football, pilates, and dance.",
  },
  {
    question: "How long does customisation take?",
    answer:
      "The customisation process usually takes 2 weeks. Once your design is finalised, we will start producing your customised grip socks and ship them to you as soon as possible.",
  },
  {
    question: "Can I return customised grip socks?",
    answer:
      "Unfortunately, we do not accept returns for customised grip socks as they are made specifically for each customer. However, if there is an issue with the quality or size, please contact our customer support for assistance.",
  },
  {
    question: "What is the minimum order quantity?",
    answer:
      "The minimum order is 25 pairs. However, ordering 50 pairs drops the price to £5 each (67% off). The more you order, the more you save! ",
  },
];

const FAQs: React.FC = () => {
  return (
    <main className="flex flex-col items-start px-16 py-20 bg-white max-md:px-5">
      <header className="flex flex-col mt-8 text-black max-md:max-w-full">
        <h1 className="text-4xl font-bold leading-[57.6px] max-md:max-w-full max-md:text-4xl">
          FAQs
        </h1>
        <p className="mt-6 text-lg leading-7 max-md:max-w-full">
          Find answers to frequently asked questions about our grip socks and
          customisation process.
        </p>
      </header>
      <section className="flex flex-col self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </section>
      <ContactSection />
    </main>
  );
};

export default FAQs;
