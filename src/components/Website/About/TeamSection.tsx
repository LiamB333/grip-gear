import React from "react";
import TeamMember from "@/components/Website/About/TeamMember";

interface TeamMemberData {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
}

const teamMembers: TeamMemberData[] = [
  {
    name: "James Bromley",
    role: "Founder",
    description:
      "John is a leader with a passion for innovation and customer satisfaction.",
    imageSrc: "/hero-ai-2.webp",
  },
  {
    name: "Liam Black",
    role: "Director",
    description:
      "Jane is a technical expert with a strong focus on product development and quality assurance.",
    imageSrc: "/hero-ai-2.webp",
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="flex flex-col px-16 py-5 bg-white max-md:px-5">
      <header className="flex flex-col self-center mt-8 max-w-full text-center text-black w-[768px]">
        <h1 className="text-5xl font-bold leading-[57.6px] mt-4 max-md:max-w-full max-md:text-4xl">
          Meet Our Team
        </h1>
        <p className="mt-6 text-lg leading-7 max-md:max-w-full">
          Get to know the key members behind Grip Gear.
        </p>
      </header>
      <div className="flex flex-col mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 max-md:flex-col">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
