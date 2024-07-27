// pages/about.tsx
import React from "react";
import Navbar from "@/components/Website/NavBar/NavBar";
import Footer from "@/components/Website/Footer/Footer";
import TeamSection from "@/components/Website/About/TeamSection";
import QuoteSection from "@/components/Website/About/Quote/QuoteSection";

const About: React.FC = () => {
  return (
    <div>
      <Navbar />
      <TeamSection />
      <QuoteSection
        title="Quote"
        content="Grip Gear is a website that was born out of a passion for customisation and personalisation. Our journey began with a simple idea - to allow people to create their own unique grip socks. With our innovative 2D configuration software, users can now design their own grip socks, choosing from a wide range of colors, patterns, and styles. Whether you're an athlete looking for the perfect grip socks for your sport, or just someone who wants to add a touch of personal flair to their everyday attire, Grip Gear has got you covered. Join us on this exciting journey of self-expression and create your own custom grip socks today."
      />
      <Footer />
    </div>
  );
};

export default About;
