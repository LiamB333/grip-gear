"use client";
import React, { useState, useEffect } from "react";
import SockOutline from "@/components/Designer/SockOutline";
import FooterComponent from "@/components/Designer/DesignerFooter";
import Sidebar from "@/components/Designer/Sidebar";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { getLogo } from "../utils/indexedDB";

const SockSelectionPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const getParam = (param: string) => {
    const value = searchParams.get(param);
    console.log(`Fetched param ${param}: ${value}`);
    return value !== null ? value : undefined;
  };

  const [backgroundColor, setBackgroundColor] = useState(
    getParam("backgroundColor") || "#8E1E1E"
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
  const [quantityErrorMessage, setQuantityErrorMessage] = useState<string | null>(null);
  const [activeSidebar, setActiveSidebar] = useState<string | null>("design");

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
    updateSearchParams("quantity", value.toString());
  };

  const handleQuantityBlur = () => {
    if (quantity < 50) {
      setQuantityErrorMessage("Quantity cannot be less than 50.");
    } else {
      setQuantityErrorMessage(null);
    }
  };

  const calculatePriceAndSavings = () => {
    const pricePer50 = templatePrices[selectedTemplate];
    let savings = 0;
    if (pricePer50 !== undefined) {
      let price = (pricePer50 / 50) * quantity;
      let discount = 0;
      if (quantity > 100) {
        discount = quantity * 0.40;
      } else if (quantity > 80) {
        discount = quantity * 0.10;
      }
      price -= discount;
      savings = (discount / (price + discount)) * 100;
      return { price: `£${price.toFixed(0)}`, savings: savings.toFixed(0) };
    }
    return { price: "Price information not available", savings: "0" };
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
    e.preventDefault();
    if (!logosUploaded) {
      setShowErrorMessage(true);
    } else if (quantity < 50) {
      setQuantityErrorMessage("Quantity cannot be less than 50.");
    } else {
      setShowErrorMessage(false);
      setQuantityErrorMessage(null);
      router.push(`/details${window.location.search}`);
    }
  };

  const toggleSidebar = (sidebar: string) => {
    if (activeSidebar === sidebar) {
      setActiveSidebar(null);
    } else {
      setActiveSidebar(sidebar);
    }
  };

  const { price, savings } = calculatePriceAndSavings();

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-[#F5F7FA]">
      <div className="flex justify-end p-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-removed-bg.svg"
            alt="Grip Gear logo"
            width={160}
            height={60}
          />
        </Link>
      </div>
      <div className="flex flex-row flex-1 overflow-hidden">
        <Sidebar
          activeSidebar={activeSidebar}
          toggleSidebar={toggleSidebar}
          handleLogoSelect={handleLogoSelect}
          handleBackgroundColorSelect={handleBackgroundColorSelect}
          handleStripeColorSelect={handleStripeColorSelect}
          handleTemplateChange={handleTemplateChange}
          selectedTemplate={selectedTemplate}
        />
        <div className="flex flex-col justify-center items-center flex-1 space-y-2 ml-48 overflow-hidden">
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
              {showErrorMessage && (
                <p className="text-red-500 mt-2">Please upload a logo.</p>
              )}
              {quantityErrorMessage && (
                <p className="text-red-500 mt-3">{quantityErrorMessage}</p>
              )}
            </div>
          </div>
          <FooterComponent
            price={price}
            savings={savings}
            quantity={quantity}
            onQuantityChange={handleQuantityChange}
            onQuantityBlur={handleQuantityBlur}
            onContinue={handleContinue}
          />
        </div>
      </div>
    </div>
  );
};

export default SockSelectionPage;
