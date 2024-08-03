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
      <AboutGripGear
        title="About Grip Gear"
        content="Grip Gear started as a small idea conceived by two passionate individuals who wanted to revolutionise how people customise their own socks. We envisioned a platform where anyone could easily design unique grip socks tailored to their style and needs. Our goal is to provide an intuitive and seamless customisation experience, empowering you to create socks that are not only functional but also a true reflection of your personality."
        imageSrc="/sock-diagram.png"
      />
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
