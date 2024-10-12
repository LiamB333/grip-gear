import React from "react";

const BottomSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div id="contact" className="relative px-4 md:px-16 pb-24">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-white mb-6 md:mb-0">© {currentYear} Grip Gear.</p>

        {/* Links section */}
        <div className="flex flex-col md:flex-row gap-5 text-white items-center">
          <a
            href="tel:+447718958135"
            className="underline hover:text-[#CB3A3A]"
          >
            +44 7718 958135
          </a>
          <a
            href="mailto:gripgearsocks@gmail.com"
            className="underline hover:text-[#CB3A3A]"
          >
            gripgearsocks@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
