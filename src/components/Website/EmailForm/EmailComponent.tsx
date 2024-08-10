import React from "react";
import EmailForm from "./EmailForm";

const EmailComponent: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-12 px-16 py-28 bg-zinc-100 max-md:px-5 max-md:py-24">
      <div className="flex flex-col w-full max-w-md mx-auto">
        <h1 className="text-5xl font-bold leading-tight text-center max-md:text-4xl">
          Get in Touch
        </h1>
        <p className="mt-6 text-lg text-center">
          We&apos;re here to answer any questions you may have.
        </p>
        <EmailForm />
      </div>
    </div>
  );
};

export default EmailComponent;
