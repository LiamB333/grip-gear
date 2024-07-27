// pages/about.tsx
import React from "react";
import Navbar from "@/components/Website/NavBar";
import TeamSection from "@/components/Website/About/TeamSection";
import Footer from "@/components/Website/Footer/Footer";

const About: React.FC = () => {
  return (
    <div>
      <Navbar />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default About;
