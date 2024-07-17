import React from "react";

interface PriceDisplayProps {
  price: string;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ price }) => {
  return (
    <div className="text-lg md:text-xl font-semibold text-green-600">
      {price}
    </div>
  );
};

export default PriceDisplay;
