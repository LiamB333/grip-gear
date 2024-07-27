import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section className="flex flex-col mt-20 max-w-full text-black w-[560px] max-md:mt-10">
      <div className="flex flex-col max-md:max-w-full">
        <h2 className="text-3xl font-bold leading-10 max-md:max-w-full">
          Still have questions?
        </h2>
        <p className="mt-4 text-lg leading-7 max-md:max-w-full">
          Contact us for further assistance.
        </p>
      </div>
      <a
        href="#contact"
        className="self-start px-6 py-3 mt-6 text-base leading-6 whitespace-nowrap border border-black border-solid max-md:px-5"
      >
        Contact
      </a>
    </section>
  );
};

export default ContactSection;
