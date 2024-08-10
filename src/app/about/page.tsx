import React from "react";
import Navbar from "@/components/Website/NavBar/NavBar";
import Footer from "@/components/Website/Footer/Footer";
import TeamSection from "@/components/Website/About/TeamSection";
import CustomiseAction from "@/components/Website/CustomiseAction/CustomiseAction";
import Testimonial from "@/components/Website/Testimonial/Testimonial";
import Hero from "@/components/Website/Contact/Hero";

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
      <Hero
        title="About us"
        subtitle="Gear Up, Stand Out"
        description="At Grip Gear, we understand that every team has its own identity. That's why we provide a platform where you can tailor your grip socks to match your team’s colours, logo and spirit. Using our intuitive online design tools, you can create gear that boosts not only performance but also team morale and unity."
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
