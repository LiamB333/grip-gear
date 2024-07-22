import React from 'react';

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
  const handleSlideChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(e.target.value, 10));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 50 && value <= 500) {
      onChange(value);
    }
  };

  const handleDecrement = () => {
    if (quantity > 50) {
      onChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < 500) {
      onChange(quantity + 1);
    }
  };

  const calculateSavings = () => {
    let discount = 0;
    if (quantity > 100) {
      discount = 0.4;
    } else if (quantity > 80) {
      discount = 0.1;
    }
    return discount;
  };

  const savings = calculateSavings() * 100;

  return (
    <div className="bg-white p-4 rounded-lg w-full">
      <label htmlFor="quantity" className="block text-sm font-medium text-black">
        Quantity
      </label>

      <div className="flex items-center mt-2">
        <button
          type="button"
          onClick={handleDecrement}
          className="bg-gray-300 text-black px-2 py-1 rounded-l focus:outline-none"
        >
          -
        </button>
        <input
          type="text"
          id="quantity"
          name="quantity"
          value={quantity}
          onChange={handleInputChange}
          onBlur={onBlur}
          className="w-16 text-center border border-gray-300 focus:outline-none"
        />
        <button
          type="button"
          onClick={handleIncrement}
          className="bg-gray-300 text-black px-2 py-1 rounded-r focus:outline-none"
        >
          +
        </button>
      </div>
      <input
        type="range"
        id="quantity-range"
        name="quantity-range"
        min="50"
        max="500"
        value={quantity}
        onChange={handleSlideChange}
        onBlur={onBlur}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
      />
      {savings > 0 && (
        <div className="flex justify-center items-center text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded-lg mt-2">
          <span className="text-green-700">{savings.toFixed(0)}%</span>‎ Quantity discount
        </div>
      )}
    </div>
  );
};

export default QuantitySelector;
