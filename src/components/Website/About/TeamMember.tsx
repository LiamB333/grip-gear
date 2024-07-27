import React from "react";
import Image from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageSrc }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-48 h-48">
        <Image
          src={imageSrc}
          alt={`${name}'s picture`}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <h3 className="mt-4 text-xl font-semibold">{name}</h3>
      <p className="mt-2 text-lg text-gray-600">{role}</p>
    </div>
  );
};

export default TeamMember;
