import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ContactCardProps {
  icon: string;
  title: string;
  contact: string;
  link: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  contact,
  link,
}) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full p-4 z-20">
      <div className="flex flex-col grow text-base text-center text-white bg-black rounded-lg p-6">
        <div className="self-center w-12 aspect-square relative">
          <Link href={link}>
            <Image src={icon} alt={contact} width={60} height={60} priority />
          </Link>
        </div>
        <h3 className="mt-6 text-3xl font-bold leading-10">{title}</h3>
        <p className="mt-6 text-white leading-[150%]">{contact}</p>
      </div>
    </div>
  );
};

export default ContactCard;
