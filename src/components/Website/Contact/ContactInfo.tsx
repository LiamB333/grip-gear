import React from "react";
import ContactCard from "./ContactCard";

interface ContactInfo {
  icon: string;
  title: string;
  contact: string;
  link: string;
}

const contactData: ContactInfo[] = [
  {
    icon: "/email-white.svg",
    title: "Email",
    contact: "gripgearsocks@gmail.com",
    link: "",
  },
  {
    icon: "/telephone-white.svg",
    title: "Phone",
    contact: "+44 7718 958135",
    link: "",
  },
  {
    icon: "/instagram-white.svg",
    title: "Instagram",
    contact: "gripgear__uk",
    link: "https://www.instagram.com/gripgear__uk/",
  },
];

const ContactInformation: React.FC = () => {
  return (
    <>
      <section className="flex flex-col px-16 py-14 bg-white max-md:px-5">
        <h1 className="mt-4 text-5xl font-bold text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
          Contact Us
        </h1>
        <p className="mt-6 px-1 text-lg leading-7 text-black max-md:max-w-full">
          For any enquiries, please feel free to reach out to us.
        </p>
        <div className="self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {contactData.map((info, index) => (
              <ContactCard key={index} {...info} />
            ))}
          </div>
        </div>
      </section>
      <div className="relative -mt-64 z-10 md:block hidden">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 555"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 118H1440V555H0V118Z" fill="#CB3A3A" />
          <path
            d="M1439 118.181C469 118.181 216.399 -19.9945 0 2.46973V118.181H1439Z"
            fill="#CB3A3A"
          />
        </svg>
      </div>
    </>
  );
};

export default ContactInformation;
