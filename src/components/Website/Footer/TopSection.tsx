import React from "react";

const TopSection = () => {
  return (
    <div className="relative px-4 md:px-16 pt-12 md:pt-24">
      {/* Text Section */}
      <p className="text-white mb-6 text-center md:text-left">
        Subscribe to our newsletter, for more information and deals.
      </p>
      {/* Flex Container for Input/Subscribe and Navigation Links */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Input and Subscribe Button */}
        <div className="flex flex-row space-x-4 mb-6 md:mb-0 w-full md:w-auto">
          {" "}
          {/* Changed to flex-row for all screen sizes */}
          <div className="bg-white p-2 w-full md:w-[300px] rounded-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="text-[#505050] p-2 outline-none w-full"
            />
          </div>
          <button className="text-white border-2 px-4 py-3 rounded-full hover:border-[#CB3A3A] hover:text-[#CB3A3A]">
            Subscribe
          </button>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-5">
          <a href="/design" className="text-white hover:text-[#CB3A3A]">
            Designer
          </a>
          <a href="/blog" className="text-white hover:text-[#CB3A3A]">
            Blog
          </a>
          <a href="/" className="text-white hover:text-[#CB3A3A]">
            Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
