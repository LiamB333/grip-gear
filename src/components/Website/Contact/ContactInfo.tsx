import React from "react";
import ContactCard from "./ContactCard";

interface ContactInfo {
  icon: string;
  title: string;
  description: string;
  contact: string;
  link: string;
}

const contactData: ContactInfo[] = [
  {
    icon: "/icons/email.svg",
    title: "Email",
    description: "Email us for a quick response.",
    contact: "gripgearsocks@gmail.com",
    link: "",
  },
  {
    icon: "/icons/telephone.svg",
    title: "Phone",
    description: "Call us for assistance and enquiries.",
    contact: "+44 7885 990842",
    link: "",
  },
  {
    icon: "/icons/instagram.svg",
    title: "Instagram",
    description: "Message us to get in touch.",
    contact: "gripgear__uk",
    link: "https://www.instagram.com/gripgear__uk/",
  },
];

const ContactInformation: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-16 py-14 bg-white max-md:px-5">
      <h1 className="mt-4 text-5xl font-bold text-center text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
        Contact Information
      </h1>
      <p className="mt-6 text-lg leading-7 text-center text-black max-md:max-w-full">
        For any enquiries, please feel free to reach out to us.
      </p>
      <div className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {contactData.map((info, index) => (
            <ContactCard key={index} {...info} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
