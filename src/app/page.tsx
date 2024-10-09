import FAQ from "@/components/Website/FAQ";
import Features from "@/components/Website/Features";
import Footer from "@/components/Website/Footer/Footer";
import Header from "@/components/Website/Header";
import Hero from "@/components/Website/Hero";
import Review from "@/components/Website/Reviews";
import Videos from "@/components/Website/Videos";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Videos />
      <Review />
      <FAQ />
      <Footer />
    </div>
  );
};

export default page;
