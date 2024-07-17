"use client";
import React, { useState, useEffect } from "react";
import ColorPickerComponent from "@/components/ColorPicker";
import LogoAdditionComponent from "@/components/LogoPicker";
import SockOutline from "@/components/SockOutline";
import Link from "next/link";
import { useSearchParams, useRouter } from 'next/navigation';
import { getLogo } from "../utils/indexedDB";

const SockSelectionPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const getParam = (param: string) => {
    const value = searchParams.get(param);
    console.log(`Fetched param ${param}: ${value}`);
    return value !== null ? value : undefined;
  };

  const [backgroundColor, setBackgroundColor] = useState(getParam("backgroundColor") || "#E4E4E4");
  const [stripeColor, setStripeColor] = useState(getParam("stripeColor") || "#FFFFFF");
  const [selectedTemplate, setSelectedTemplate] = useState<number>(parseInt(getParam("selectedTemplate") || "1", 10));
  const [leftSockLogoId, setLeftSockLogoId] = useState<string | undefined>(getParam("leftSockLogo"));
  const [rightSockLogoId, setRightSockLogoId] = useState<string | undefined>(getParam("rightSockLogo"));
  const [fullLogoId, setFullLogoId] = useState<string | undefined>(getParam("fullLogo"));

  const [leftSockLogo, setLeftSockLogo] = useState<string | undefined>();
  const [rightSockLogo, setRightSockLogo] = useState<string | undefined>();
  const [logosUploaded, setLogosUploaded] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const templatePrices: { [key: number]: number } = {
    1: 48,
    2: 50,
    3: 49,
    4: 50,
  };

  useEffect(() => {
    const fetchLogos = async () => {
      console.log("Fetching logos with IDs:", leftSockLogoId, rightSockLogoId);
      if (leftSockLogoId) {
        const storedLeftSockLogo = await getLogo(leftSockLogoId);
        setLeftSockLogo(storedLeftSockLogo || undefined);
        console.log("Fetched left logo:", storedLeftSockLogo);
      }
      if (rightSockLogoId) {
        const storedRightSockLogo = await getLogo(rightSockLogoId);
        setRightSockLogo(storedRightSockLogo || undefined);
        console.log("Fetched right logo:", storedRightSockLogo);
      }
      setLogosUploaded(!!(leftSockLogoId && rightSockLogoId));
    };
    fetchLogos();
  }, [leftSockLogoId, rightSockLogoId]);

  const handleBackgroundColorSelect = (color: string) => {
    setBackgroundColor(color);
    updateSearchParams("backgroundColor", color);
  };

  const handleStripeColorSelect = (color: string) => {
    setStripeColor(color);
    updateSearchParams("stripeColor", color);
  };

  const handleLogoSelect = (leftLogoId: string, rightLogoId: string, fullLogoId: string) => {
    setLeftSockLogoId(leftLogoId);
    setRightSockLogoId(rightLogoId);
    setFullLogoId(fullLogoId);
    updateSearchParams("leftSockLogo", leftLogoId);
    updateSearchParams("rightSockLogo", rightLogoId);
    updateSearchParams("fullLogo", fullLogoId);
    setLogosUploaded(true); // Set logos uploaded to true when logos are selected
    setShowErrorMessage(false); // Reset error message when logos are uploaded
  };

  const handleTemplateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(e.target.value, 10);
    setSelectedTemplate(selectedValue);
    if (selectedValue === 1) {
      setStripeColor("#FFFFFF");
      updateSearchParams("stripeColor", "#FFFFFF");
    }
    updateSearchParams("selectedTemplate", selectedValue.toString());
  };

  const calculatePrice = () => {
    const price = templatePrices[selectedTemplate];
    return price !== undefined
      ? `£${price.toFixed(2)} for 10 socks`
      : "Price information not available";
  };

  const updateSearchParams = (key: string, value: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set(key, value);

    // Replace the search params in the URL without full page reload
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);
  };

  const handleContinue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!logosUploaded) {
      e.preventDefault();
      setShowErrorMessage(true);
    } else {
      setShowErrorMessage(false);
      router.push(`/details${window.location.search}`);
    }
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
            {showErrorMessage && (
              <p className="text-red-500 mt-2">Please upload a logo.</p>
            )}
          </div>
          <div className="mt-4">
            <button
              className="bg-blue-500 text-white hover:bg-blue-700 hover:text-white font-semibold mt-5 py-2 px-8 rounded-lg transition-colors duration-300 ease-in-out"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
          <div className="mt-4 text-xl font-semibold">{calculatePrice()}</div>
        </div>
      </div>
    </div>
  );
};

export default SockSelectionPage;
