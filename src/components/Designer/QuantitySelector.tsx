import React, { useState, useEffect } from "react";

interface QuantitySelectorProps {
  quantity: number;
  onChange: (value: number) => void;
  onBlur: () => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onChange,
  onBlur,
}) => {
  const [inputValue, setInputValue] = useState<string>(quantity.toString());
  const [showError, setShowError] = useState<boolean>(false);

  useEffect(() => {
    setInputValue(quantity.toString());
  }, [quantity]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value === "") {
      setShowError(true);
    } else {
      const numericValue = parseInt(value, 10);
      if (!isNaN(numericValue) && numericValue >= 25 && numericValue <= 500) {
        onChange(numericValue);
        setShowError(false);
      } else {
        setShowError(true);
      }
    }
  };

  const handleInputBlur = () => {
    const value = parseInt(inputValue, 10);
    if (isNaN(value) || value < 25) {
      setInputValue("");
      setShowError(true);
      onChange(NaN); // Keep NaN to trigger error state
    } else if (value > 500) {
      setInputValue("500");
      onChange(500);
      setShowError(false);
    } else {
      onChange(value);
      setShowError(false);
    }
    onBlur();
  };

  const handleDecrement = () => {
    if (quantity > 25) {
      onChange(quantity - 1);
      setShowError(false);
    }
  };

  const handleIncrement = () => {
    if (quantity < 500) {
      onChange(quantity + 1);
      setShowError(false);
    }
  };

  const calculatePricePerQuantity = () => {
    if (quantity >= 150) {
      return 4.60;
    } else if (quantity >= 100) {
      return 4.90;
    } else if (quantity >= 50) {
      return 5.00;
    } else if (quantity >= 25) {
      return 9.20;
    }
    return 0;
  };

  const pricePerQuantity = calculatePricePerQuantity();
  const totalPrice = pricePerQuantity * quantity;
  const basePrice = 9.20 * quantity;
  const savings = ((basePrice - totalPrice) / basePrice) * 100;

  return (
    <div className="bg-white p-4 rounded-lg w-full">
      <div className="flex items-center mt-2">
        <button
          type="button"
          onClick={handleDecrement}
          className="bg-gray-300 text-black px-4 py-2 rounded-l text-sm focus:outline-none"
        >
          -
        </button>
        <input
          type="text"
          id="quantity"
          name="quantity"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className="w-20 text-center border border-gray-300 focus:outline-none text-lg"
        />
        <button
          type="button"
          onClick={handleIncrement}
          className="bg-gray-300 text-black px-4 py-2 rounded-r text-sm focus:outline-none"
        >
          +
        </button>
      </div>
      {showError && (
        <div className="text-red-500 text-xs mt-1">
          Enter quantity between 25 to 500
        </div>
      )}
      {savings > 0 && (
        <div className="flex justify-center items-center text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded-lg mt-2">
          <span className="text-green-700">{savings.toFixed(0)}%</span>‎ Quantity discount
        </div>
      )}
    </div>
  );
};

export default QuantitySelector;
