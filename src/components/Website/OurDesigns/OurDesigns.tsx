import React from "react";
import TextAndVideo from "./Video";

const OurDesigns = () => {
  return (
    <section className="w-full">
      <div className="bg-gray-100 px-4 py-5 md:px-8 lg:px-16 md:py-5">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight md:leading-[58px] mb-5 mt-12">
          {" "}
          Some Of Our Designs
        </h1>
      </div>
      <div className="w-full">
        <TextAndVideo
          title="Tailored for Team Colors"
          description="Our personalised grip socks for Gateshead Storm, incorporating their vibrant yellow and a variety of blues to perfectly reflect their team colors and logo."
          videoSrc="/lightning.mp4"
        />
      </div>
      <div className="w-full">
        <TextAndVideo
          title="Crafted for Comfort"
          description="With soft, breathable materials and ergonomic design, our socks keep you comfortable and focused on your game."
          videoSrc="/stud.mp4"
          reverse={true}
        />
      </div>
    </section>
  );
};

export default OurDesigns;
