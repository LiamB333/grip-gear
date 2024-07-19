import React, { useState } from "react";
import QuantitySelector from "./QuantitySelector";

interface FooterComponentProps {
  price: string;
  savings: string | null;
  quantity: number;
  onQuantityChange: (value: number) => void;
  onQuantityBlur: () => void;
  onContinue: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const FooterComponent: React.FC<FooterComponentProps> = ({
  price,
  savings,
  quantity,
  onQuantityChange,
  onQuantityBlur,
  onContinue,
}) => {
  const [showQuantitySelector, setShowQuantitySelector] = useState(false);

  const toggleQuantitySelector = () => {
    setShowQuantitySelector(!showQuantitySelector);
  };

  const closeQuantitySelector = () => {
    setShowQuantitySelector(false);
  };

  return (
    <div className="w-full fixed bottom-0 left-0 bg-white text-sm z-50 flex justify-end items-center h-16 shadow-xl">
      <div className="flex items-center h-full">
        <div
          className="flex items-center text-lg font-semibold text-black mr-4 cursor-pointer"
          onClick={toggleQuantitySelector}
        >
          <span>Quantity: {quantity}</span>
          <img src="/icons/down.svg" alt="Down" className="ml-2 w-4 h-4" />
        </div>
        <p className="text-lg font-semibold text-black mr-4">{price}</p>
        {savings && (
          <div className="flex items-center text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded-lg mr-4">
            <span className="text-green-700">{savings}% </span> Quantity discount

          </div>
        )}
        <button
          className="bg-black text-white hover:bg-blue-500 font-semibold h-full px-10 transition-colors duration-300 ease-in-out"
          onClick={onContinue}
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)" }}
        >
          Continue
        </button>
      </div>
      {showQuantitySelector && (
        <QuantitySelector
          quantity={quantity}
          onChange={onQuantityChange}
          onBlur={onQuantityBlur}
          onClose={closeQuantitySelector}
        />
      )}
    </div>
  );
};

export default FooterComponent;
