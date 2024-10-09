import React from "react";
import TopSection from "./TopSection";
import { Unbounded } from "next/font/google";
import BottomSection from "./BottomSection";

// Import Unbounded for the logo
const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const Footer = () => {
  return (
    <>
      <div className="bg-black">
        <TopSection />
        <div className="flex justify-center px-4">
          <h1
            className={` text-[100px] text-center select-none font-extrabold text-[#CB3A3A] md:text-[160px] lg:text-[180px] xl:text-[300px]`}
          >
            GRIP GEAR
          </h1>
        </div>
        <BottomSection />
      </div>
    </>
  );
};

export default Footer;
