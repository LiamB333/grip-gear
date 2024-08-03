import React from "react";
import Image from "next/image";

interface AboutImageProps {
  src: string;
}

const AboutImage: React.FC<AboutImageProps> = ({ src }) => {
  return (
    <div className="relative flex-1 ">
      <Image
        src={src}
        alt="About Grip Gear"
        width={700}
        height={700}
      />
    </div>
  );
};

export default AboutImage;
