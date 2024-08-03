import Navbar from "@/components/Website/NavBar/NavBar";
import Hero from "@/components/Website/Hero/Hero";
import Footer from "@/components/Website/Footer/Footer";
import SockFeatures from "@/components/Website/SockFeatures/SockFeatures";
import CustomiseAction from "@/components/Website/CustomiseAction/CustomiseAction";
import Testimonial from "@/components/Website/Testimonial/Testimonial";
import React from "react";
import FAQs from "@/components/Website/FAQs/FAQs";
import HowItWorks from "@/components/Website/HowItWorks.tsx/HowItWorks";

const Page = () => {
  const sampleTestimonial = {
    content:
      "I absolutely love my customised grip sock from Grip Gear! The 2D designer made it easy to design exactly what I wanted.",
    author: {
      name: "Richard Stock",
      role: "Eton Manor Colts Rugby Club",
      avatar: "/",
    },
  };

  const faqData = [
    {
      question: "How do I customise?",
      answer:
        "To customise your grip socks, simply use our 2D configuration software on our website. You can choose from a variety of colors, patterns and designs to create your unique grip socks.",
    },
    {
      question: "What are the benefits?",
      answer:
        "Our customized grip socks provide enhanced grip and traction, reducing the risk of slips and falls. They are also comfortable and stylish, making them perfect for various activities such as football, pilates and dance.",
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
        "The minimum order is 25 pairs. However, ordering 50 pairs drops the price to £5 each (over 55% off). The more you order, the more you save! ",
    },
  ];

  return (
    <div>
      <Navbar />
      <Hero />
      <SockFeatures />
      <HowItWorks />
      <Testimonial
        testimonial={sampleTestimonial}
        logo="/logo-1200x1200-2.svg"
      />
      <FAQs
        faqData={faqData}
        paragraphText="Find answers to frequently asked questions about our grip socks and customisation process."
        includeContactForm={false}
      />
      <CustomiseAction
        title="Start Customising Your Grip Socks"
        description="Create unique grip socks with our easy-to-use designer."
        buttonText="Design now"
      />
      <Footer />
    </div>
  );
};

export default Page;
