// pages/about.tsx
import React from "react";
import Navbar from "@/components/Website/NavBar/NavBar";
import Footer from "@/components/Website/Footer/Footer";
import TeamSection from "@/components/Website/About/TeamSection";
import CustomiseAction from "@/components/Website/CustomiseAction/CustomiseAction";
import Testimonial from "@/components/Website/Testimonial/Testimonial";
import AboutGripGear from "@/components/Website/About/AboutGripGear";

const sampleTestimonial = {
  content:
    "I absolutely love my customised grip sock from Grip Gear! The 2D designer made it easy to design exactly what I wanted.",
  author: {
    name: "Richard Stock",
    role: "Eton Manor Colts Rugby Club",
    avatar: "/",
  },
};

const About: React.FC = () => {
  return (
    <div>
      <Navbar />
      <TeamSection />
      <Testimonial
        testimonial={sampleTestimonial}
        logo="/logo-1200x1200-2.svg"
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

export default About;
