import Navbar from "@/components/Website/NavBar";
import Hero from "@/components/Website/Hero/Hero";
import Footer from "@/components/Website/Footer/Footer";
import SockFeatures from "@/components/Website/SockFeatures/SockFeatures";
import CustomiseAction from "@/components/Website/CustomiseAction/CustomiseAction";
import Testimonial from "@/components/Website/Testimonial/Testimonial";
import React from "react";
import FAQs from "@/components/Website/FAQs/FAQs";

const Page = () => {
  const sampleTestimonial = {
    content:
      "I absolutely love my customised grip sock from Grip Gear! The 2D designer made it easy to design exactly what I wanted.",
    author: {
      name: "Nigel Black",
      role: "Local football club organiser",
      avatar: "/",
    },
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <SockFeatures />
      <CustomiseAction
        title="Start Customising Your Grip Socks"
        description="Create unique grip socks with our easy-to-use designer."
        buttonText="Design now"
      />
      <Testimonial
        testimonial={sampleTestimonial}
        logo="/logo-1200x1200-2.svg"
      />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Page;
