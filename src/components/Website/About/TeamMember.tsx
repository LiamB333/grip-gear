import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, description, imageSrc }) => {
  return (
    <article className="flex flex-col w-[calc(50%-10px)] max-md:w-full">
      <img src={imageSrc} alt={`${name}, ${role}`} className="w-full aspect-[1.54] max-md:max-w-full" />
      <div className="flex flex-col mt-6 text-center text-black leading-[150%] max-md:max-w-full">
        <h2 className="text-xl font-semibold max-md:max-w-full">{name}</h2>
        <p className="text-lg max-md:max-w-full">{role}</p>
        <p className="mt-4 text-base max-md:max-w-full">{description}</p>
      </div>
      <div className="flex gap-3.5 self-center mt-6">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a14338625ba6320d0be99808dd432b650a1701e4dc25bcf4c5338f8e94e1cd4?apiKey=539899181cdc423d8ab13174b3d94053&&apiKey=539899181cdc423d8ab13174b3d94053" alt="" className="shrink-0 w-6 aspect-square" />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/170dc987d17400dbe1cc2a55b2ee9949fcd45e8f457681ecdc7c3d959a5c21fb?apiKey=539899181cdc423d8ab13174b3d94053&&apiKey=539899181cdc423d8ab13174b3d94053" alt="" className="shrink-0 w-6 aspect-square" />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5840195dec73427610c27759a33d1c01cbc90a35e83753771309327eae08f402?apiKey=539899181cdc423d8ab13174b3d94053&&apiKey=539899181cdc423d8ab13174b3d94053" alt="" className="shrink-0 w-6 aspect-square" />
      </div>
    </article>
  );
};

export default TeamMember;