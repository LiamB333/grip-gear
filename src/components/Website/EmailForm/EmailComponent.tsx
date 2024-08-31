import React from "react";
import EmailForm from "./EmailForm";

const EmailComponent: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center -mt-96 px-4 md:px-16 py-28 bg-[#CB3A3A] w-full max-md:-mt-10">
        <div className="flex flex-col w-full max-w-md mx-auto z-20">
          <h1 className="pt-8 text-5xl font-bold leading-tight text-white text-center max-md:text-4xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg text-center text-white">
            We&apos;re here to answer any questions you may have.
          </p>
          <EmailForm />
        </div>
      </div>
      <div className="relative -mt-1 md:block hidden">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1439 119"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 -4.57764e-05C970 6.10352e-05 1222.6 138.175 1439 115.711V-4.57764e-05H0Z"
            fill="#CB3A3A"
          />
        </svg>
      </div>
    </>
  );
};

export default EmailComponent;
