import React from "react";
import Link from "next/link";

const ContactSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-16 text-black max-md:mt-10">
      <div className="flex flex-col items-center max-md:max-w-full">
        <h1 className="text-4xl font-bold mb-4">Still have questions?</h1>
        <p className="font-medium text-gray-600">
          Contact us for further assistance.
        </p>
      </div>
      <Link href="/contact">
        <button className="bg-[#C62828] text-white font-medium text-l py-3 mt-12 px-6 rounded-3xl hover:bg-black transition mb-4">
          Message
        </button>
      </Link>
    </section>
  );
};

export default ContactSection;
