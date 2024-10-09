import React from "react";

const BottomSection = () => {
  return (
    <div className="relative px-4 md:px-16 pb-24">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Copyright text on the left for desktop, centered for small screens */}
        <p className="text-white mb-6 md:mb-0">© 2024 Grip Gear.</p>

        {/* Links section */}
        <div className="flex flex-col md:flex-row gap-5 text-white items-center">
          <a href="/" className="underline hover:text-[#CB3A3A]">
            Privacy Policy
          </a>
          <a href="/" className="underline hover:text-[#CB3A3A]">
            Cookie Settings
          </a>
          <a href="/" className="underline hover:text-[#CB3A3A]">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
