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
      "James is a leader with a passion for innovation and customer satisfaction.",
    imageSrc: "/james.png",
  },
  {
    name: "Liam Black",
    role: "Director",
    description:
      "Liam is dedicated to product development, ensuring our products meet the highest standards.",
    imageSrc: "/liam.png",
  },
];

const TeamSection: React.FC = () => {
  return (
    <>
      <section className="flex flex-col relative justify-center items-center bg-[#CB3A3A] pt-20 md:px-16 pb-24 md:-mt-[23.9rem]">
        <header className="flex flex-col self-center max-w-full text-center text-white z-20 w-[768px]">
          <h1 className="text-5xl font-bold leading-[57.6px] mt-4 max-md:max-w-full max-md:text-4xl">
            Meet Our Team
          </h1>
          <p className="mt-6 text-lg leading-7 max-md:max-w-full">
            Get to know the key members behind Grip Gear.
          </p>
        </header>
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-20 mt-8 z-20 md:mt-36">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl overflow-hidden w-72 h-[450px] md:w-80 md:h-[550px] p-2 md:p-3 ${
                index === 0 ? "mt-8 md:-mt-[5rem]" : "mt-0"
              }`}
            >
              <TeamMember {...member} />
            </div>
          ))}
        </div>
      </section>
      <div className="relative z-0 md:block hidden">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1414 119"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H1439V118.18H0V0Z" fill="black" />
          <path
            d="M0 0C970 0.000106812 1222.6 138.175 1439 115.711V0H0Z"
            fill="#CB3A3A"
          />
        </svg>
      </div>
    </>
  );
};

export default TeamSection;
