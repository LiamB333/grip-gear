import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ContactCardProps {
  icon: string;
  title: string;
  description: string;
  contact: string;
  link: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  description,
  contact,
  link,
}) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-base text-center text-black max-md:mt-10">
        <div className="self-center w-12 aspect-square relative">
          <Link href={link}>
            <Image src={icon} alt="" width={60} height={60} />
          </Link>
        </div>
        <h3 className="mt-6 text-3xl font-bold leading-10">{title}</h3>
        <p className="mt-4 leading-6">{description}</p>
        <a
          href={`${title.toLowerCase()}:${contact}`}
          className="mt-6 text-black leading-[150%]"
        >
          {contact}
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
