"use client";
import React, { useState } from "react";
import Head from "next/head";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Explicit type for activeIndex

  const faqs = [
    {
      question: "How do I customise my grip socks?",
      answer:
        "To customise your grip socks, simply use our 2D configuration software on our website. You can choose from a variety of colors, patterns, and designs to create your unique grip socks.",
    },
    {
      question: "What are the benefits?",
      answer:
        "Our customised grip socks provide enhanced grip and traction, reducing the risk of slips and falls. They are also comfortable and stylish, making them perfect for various activities such as football, pilates, and dance.",
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
        "The minimum order is 25 pairs. However, ordering 50 pairs drops the price to £5 each (over 55% off). The more you order, the more you save!",
    },
  ];

  const toggleFAQ = (index: number) => {
    // Define 'index' type as number
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </Head>
      <section id="faq" className="py-10">
        <div className="max-w-xl px-4 py-10 mx-auto sm:px-6 lg:max-w-6xl lg:px-8">
          <h1 className="mb-8 text-2xl font-bold tracking-normal text-center text-gray-800 md:leading-tight md:tracking-normal  md:text-4xl">
            Your questions{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CB3A3A] via-[#E74C4C] to-[#FF5E5E]">
              answered.
            </span>
          </h1>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 pb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index ? "true" : "false"}
                  aria-controls={`faq-${index}`}
                  className="text-lg font-semibold text-gray-800 cursor-pointer hover:text-[#CB3A3A]"
                >
                  {faq.question}
                </button>
                {activeIndex === index && (
                  <p id={`faq-${index}`} className="mt-2 text-gray-600">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
