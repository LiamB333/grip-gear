import React from "react";
import Link from "next/link";

const ContactSection: React.FC = () => {
  return (
    <section className="flex flex-col mt-20 text-black max-md:mt-10">
      <div className="flex flex-col max-md:max-w-full">
        <h2 className="text-3xl font-bold leading-10 max-md:max-w-full">
          Still have questions?
        </h2>
        <p className="mt-4 text-lg leading-7 max-md:max-w-full">
          Contact us for further assistance.
        </p>
      </div>
      <Link href="/contact">
        <div className="self-start text-center px-3 py-2 mt-6 text-base leading-5 whitespace-nowrap border border-black border-solid rounded-[30px] hover:text-red-600 hover:border-red-600 max-md:px-3 max-md:py-1 w-1/2">
          Contact
        </div>
      </Link>
    </section>
  );
};

export default ContactSection;
