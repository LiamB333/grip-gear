import Designer from "@/components/Designer/Designer";
import React, { Suspense } from "react";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Designer | Grip Gear",
    description: "Use our custom grip sock designer to create what you want.",
  };
};

const Design = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Designer />
    </Suspense>
  );
};

export default Design;
