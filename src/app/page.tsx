"use client";
import React, { useState, useEffect } from "react";
import SockOutline from "@/components/Designer/SockOutline";
import TemplateSelector from "@/components/Designer/TemplateSelector";
import QuantitySelector from "@/components/Designer/QuantitySelector";
import PriceDisplay from "@/components/Designer/PriceDisplay";
import { useSearchParams, useRouter } from "next/navigation";
import { getLogo } from "../utils/indexedDB";
import ColorPicker from "@/components/Designer/ColorPicker";
import LogoPicker from "@/components/Designer/LogoPicker";

const SockCustomiser = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const getParam = (param: string) => {
    const value = searchParams.get(param);
    console.log(`Fetched param ${param}: ${value}`);
    return value !== null ? value : undefined;
  };

  const [backgroundColor, setBackgroundColor] = useState(
    getParam("backgroundColor") || "#E4E4E4"
  );
  const [stripeColor, setStripeColor] = useState(
    getParam("stripeColor") || "#FFFFFF"
  );
  const [selectedTemplate, setSelectedTemplate] = useState<number>(
    parseInt(getParam("selectedTemplate") || "1", 10)
  );
  const [leftSockLogoId, setLeftSockLogoId] = useState<string | undefined>(
    getParam("leftSockLogo")
  );
  const [rightSockLogoId, setRightSockLogoId] = useState<string | undefined>(
    getParam("rightSockLogo")
  );
  const [fullLogoId, setFullLogoId] = useState<string | undefined>(
    getParam("fullLogo")
  );
  const [quantity, setQuantity] = useState<number>(
    parseInt(getParam("quantity") || "50", 10)
  );
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [quantityErrorMessage, setQuantityErrorMessage] = useState<
    string | null
  >(null);

  const [leftSockLogo, setLeftSockLogo] = useState<string | undefined>();
  const [rightSockLogo, setRightSockLogo] = useState<string | undefined>();
  const [logosUploaded, setLogosUploaded] = useState(false);

  const templatePrices: { [key: number]: number } = {
    1: 240,
    2: 250,
    3: 245,
    4: 250,
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

  const handleLogoSelect = (
    leftLogoId: string,
    rightLogoId: string,
    fullLogoId: string
  ) => {
    setLeftSockLogoId(leftLogoId);
    setRightSockLogoId(rightLogoId);
    setFullLogoId(fullLogoId);
    updateSearchParams("leftSockLogo", leftLogoId);
    updateSearchParams("rightSockLogo", rightLogoId);
    updateSearchParams("fullLogo", fullLogoId);
    setLogosUploaded(true);
    setShowErrorMessage(false);
  };

  const handleTemplateChange = (selectedValue: number) => {
    setSelectedTemplate(selectedValue);
    if (selectedValue === 1) {
      setStripeColor("#FFFFFF");
      updateSearchParams("stripeColor", "#FFFFFF");
    }
    updateSearchParams("selectedTemplate", selectedValue.toString());
  };

  const handleQuantityChange = (value: number) => {
    setQuantity(value);
  };

  const handleQuantityBlur = () => {
    if (quantity < 50) {
      setQuantityErrorMessage("Quantity cannot be less than 50.");
    } else {
      setQuantityErrorMessage(null);
      updateSearchParams("quantity", quantity.toString());
    }
  };

  const calculatePrice = () => {
    const pricePer50 = templatePrices[selectedTemplate];
    if (pricePer50 !== undefined) {
      const price = (pricePer50 / 50) * quantity;
      return `£${price.toFixed(2)}`;
    }
    return "Price information not available";
  };

  const updateSearchParams = (key: string, value: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set(key, value);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl);
  };

  const handleContinue = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!logosUploaded) {
      e.preventDefault();
      setShowErrorMessage(true);
    } else if (quantity < 50) {
      e.preventDefault();
      setQuantityErrorMessage("Quantity cannot be less than 50.");
    } else {
      setShowErrorMessage(false);
      setQuantityErrorMessage(null);
      router.push(`/details${window.location.search}`);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-2">
      <h1 className="text-2xl md:text-2xl font-bold mb-2 text-center">
        Customise Your Socks
      </h1>
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 items-center">
        <div className="flex justify-center w-full md:w-auto">
          <SockOutline
            backgroundColor={backgroundColor}
            stripeColor={stripeColor}
            selectedTemplate={selectedTemplate}
            leftLogoUrl={leftSockLogo}
            rightLogoUrl={rightSockLogo}
          />
        </div>
        <div className="controls flex flex-col items-center space-y-4 md:space-y-6">
          <TemplateSelector
            selectedTemplate={selectedTemplate}
            onChange={handleTemplateChange}
          />
          <ColorPicker
            title="Choose Background Colour"
            onSelect={handleBackgroundColorSelect}
          />
          {selectedTemplate !== 1 && (
            <ColorPicker
              title="Choose Stripe Colour"
              onSelect={handleStripeColorSelect}
            />
          )}
          <LogoPicker onLogoSelect={handleLogoSelect} />
          {showErrorMessage && (
            <p className="text-red-500 mt-2">Please upload a logo.</p>
          )}
          <QuantitySelector
            quantity={quantity}
            onChange={handleQuantityChange}
            onBlur={handleQuantityBlur}
          />
          {quantityErrorMessage && (
            <p className="text-red-500 mt-2">{quantityErrorMessage}</p>
          )}
          <PriceDisplay price={calculatePrice()} />
          <button
            className="bg-blue-500 text-white hover:bg-blue-700 hover:text-white font-semibold py-1 px-4 md:py-2 md:px-8 rounded-lg transition-colors duration-300 ease-in-out"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SockCustomiser;
