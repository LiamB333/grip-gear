import React from "react";
import Image from "next/image";
import {
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoFacebook,
} from "react-icons/bi";
import Link from "next/link";

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  description,
  imageSrc,
}) => {
  const socialMediaLinks: { [key: string]: { [key: string]: string } } = {
    "James Bromley": {
      instagram: "https://www.instagram.com/gripgear__uk/",
    },
    "Liam Black": {
      instagram: "https://www.instagram.com/liamblackkk",
    },
  };

  const memberLinks = socialMediaLinks[name] || {};

  return (
    <article className="flex flex-col w-[calc(50%-10px)] max-md:w-full">
      <div className="relative w-full aspect-[1.54]">
        <Image
          src={imageSrc}
          alt={`${name}, ${role}`}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-col mt-4 text-center text-black leading-[150%] max-md:max-w-full">
        <h2 className="text-xl font-semibold max-md:max-w-full">{name}</h2>
        <p className="text-lg max-md:max-w-full">{role}</p>
        <p className="mt-2 text-base max-md:max-w-full">{description}</p>
      </div>
      <div className="flex gap-3.5 self-center mt-4">
        {memberLinks.instagram && (
          <Link
            href={memberLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoInstagram className="size-6 hover:text-red-800 cursor-pointer" />
          </Link>
        )}
        {memberLinks.facebook && (
          <Link
            href={memberLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoFacebook className="size-6 hover:text-red-800 cursor-pointer" />
          </Link>
        )}
        {memberLinks.linkedin && (
          <Link
            href={memberLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoLinkedin className="size-6 hover:text-red-800 cursor-pointer" />
          </Link>
        )}
      </div>
    </article>
  );
};

export default TeamMember;
