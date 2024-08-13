import React from 'react';
import { Button } from "@/components/Website/CustomiseAction/Button";
import { Heading } from "@/components/Website/CustomiseAction/Heading";
import { Paragraph } from "@/components/Website/CustomiseAction/Paragraph";


interface CustomiseActionProps {
  title: string;
  description: string;
  buttonText: string;
}

export const CustomiseAction: React.FC<CustomiseActionProps> = ({ title, description, buttonText }) => {
  return (
    <section className="flex flex-col justify-center px-16 py-20 bg-gray-100 max-md:px-5">
      <div className="flex gap-5 mt-8 max-md:flex-wrap max-md:mr-1 max-md:max-w-full">
        <div className="flex flex-col flex-1 justify-center text-black max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <Heading text={title} />
            <Paragraph text={description} />
          </div>
        </div>
        <Button text={buttonText} />
      </div>
    </section>
  );
};

export default CustomiseAction;