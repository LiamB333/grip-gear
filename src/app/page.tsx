"use client";
import React, { useState, useEffect } from "react";
import ColorPickerComponent from "@/components/ColorPicker";
import LogoAdditionComponent from "@/components/LogoPicker";
import SockOutline from "@/components/SockOutline";
import Link from "next/link";

const ColorSelectionPage = () => {
  const [backgroundColor, setBackgroundColor] = useState("#FF0000");
  const [stripeColor, setStripeColor] = useState("#FFFFFF");
  const [selectedTemplate, setSelectedTemplate] = useState<number>(1);
  const [leftSockLogo, setLeftSockLogo] = useState<string>("");
  const [rightSockLogo, setRightSockLogo] = useState<string>("");
  const [fullLogo, setFullLogo] = useState<string>("");

  const templatePrices: { [key: number]: number } = {
    1: 48,
    2: 50,
    3: 49,
    4: 50,
  };

  useEffect(() => {
    const savedState = localStorage.getItem("sockCustomization");
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      setBackgroundColor(parsedState.backgroundColor);
      setStripeColor(parsedState.stripeColor);
      setSelectedTemplate(parsedState.selectedTemplate);
      setLeftSockLogo(parsedState.leftSockLogo);
      setRightSockLogo(parsedState.rightSockLogo);
      setFullLogo(parsedState.fullLogo);
    }
  }, []);

  useEffect(() => {
    const stateToSave = JSON.stringify({
      backgroundColor,
      stripeColor,
      selectedTemplate,
      leftSockLogo,
      rightSockLogo,
      fullLogo,
    });
    localStorage.setItem("sockCustomization", stateToSave);
  }, [
    backgroundColor,
    stripeColor,
    selectedTemplate,
    leftSockLogo,
    rightSockLogo,
    fullLogo,
  ]);

  const handleBackgroundColorSelect = (color: string) => {
    setBackgroundColor(color);
  };

  const handleStripeColorSelect = (color: string) => {
    setStripeColor(color);
  };

  const handleLogoSelect = (
    leftLogoUrl: string,
    rightLogoUrl: string,
    fullLogoUrl: string
  ) => {
    setLeftSockLogo(leftLogoUrl);
    setRightSockLogo(rightLogoUrl);
    setFullLogo(fullLogoUrl);
  };

  const handleTemplateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(e.target.value, 10);
    setSelectedTemplate(selectedValue);
    if (selectedValue === 1) {
      setStripeColor("#FFFFFF");
    }
  };

  const calculatePrice = () => {
    const price = templatePrices[selectedTemplate];
    return price !== undefined
      ? `£${price.toFixed(2)} for 10 socks`
      : "Price information not available";
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="flex">
        <div className="sock-outline">
          <SockOutline
            backgroundColor={backgroundColor}
            stripeColor={stripeColor}
            selectedTemplate={selectedTemplate}
            leftLogoUrl={leftSockLogo}
            rightLogoUrl={rightSockLogo}
          />
        </div>
        <div className="controls ml-8 flex flex-col items-center space-y-6 my-10">
          <h1 className="text-3xl font-bold mb-4">Customise Your Socks</h1>
          <div className="mb-4 text-center">
            <h2 className="text-xl font-semibold mb-2">Choose Template</h2>
            <select
              className="p-2 border border-black rounded bg-white text-black cursor-pointer hover:bg-gray-100 hover:text-black transition duration-300"
              value={selectedTemplate}
              onChange={handleTemplateChange}
            >
              <option value={1}>Pattern 1</option>
              <option value={2}>Pattern 2</option>
              <option value={3}>Pattern 3</option>
              <option value={4}>Pattern 4</option>
            </select>
          </div>
          <div className="mb-4 text-center">
            <h2 className="text-xl font-semibold">Choose Background Colour</h2>
            <ColorPickerComponent onSelect={handleBackgroundColorSelect} />
          </div>
          {selectedTemplate !== 1 && (
            <div className="mb-4 text-center">
              <h2 className="text-xl font-semibold">Choose Stripe Colour</h2>
              <ColorPickerComponent onSelect={handleStripeColorSelect} />
            </div>
          )}
          <div className="mb-4 text-center">
            <LogoAdditionComponent onLogoSelect={handleLogoSelect} />
          </div>
          <div className="mt-4">
            <Link href="/details">
              <button className="bg-blue-500 text-white hover:bg-blue-700 hover:text-white font-semibold mt-5 py-2 px-8 rounded-lg transition-colors duration-300 ease-in-out">
                Continue
              </button>
            </Link>
          </div>
          <div className="mt-4 text-xl font-semibold">{calculatePrice()}</div>
        </div>
      </div>
    </div>
  );
};

export default ColorSelectionPage;
