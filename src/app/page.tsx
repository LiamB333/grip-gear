"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { getLogo } from "../utils/indexedDB";
import SockOutline from "@/components/Designer/SockOutline";
import DesignerFooter from "@/components/Designer/DesignerFooter";
import Sidebar from "@/components/Designer/Sidebar";
import MobileBar from "@/components/Designer/MobileBar";
import Link from "next/link";
import Image from "next/image";

const SockSelectionPageContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const getParam = (param: string) => {
    const value = searchParams.get(param);
    console.log(`Fetched param ${param}: ${value}`);
    return value !== null ? value : undefined;
  };

  const [backgroundColor, setBackgroundColor] = useState("#8E1E1E");
  const [stripeColor, setStripeColor] = useState("#FFFFFF");
  const [selectedTemplate, setSelectedTemplate] = useState<number>(1);
  const [leftSockLogoId, setLeftSockLogoId] = useState<string | undefined>();
  const [rightSockLogoId, setRightSockLogoId] = useState<string | undefined>();
  const [fullLogoId, setFullLogoId] = useState<string | undefined>();
  const [quantity, setQuantity] = useState<number>(50);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [quantityErrorMessage, setQuantityErrorMessage] = useState<string | null>(null);
  const [activeSidebar, setActiveSidebar] = useState<string | null>("design");

  const [leftSockLogo, setLeftSockLogo] = useState<string | undefined>();
  const [rightSockLogo, setRightSockLogo] = useState<string | undefined>();
  const [logosUploaded, setLogosUploaded] = useState(false);

  const [isClient, setIsClient] = useState(false);

  const templatePrices: { [key: number]: number } = {
    1: 240,
    2: 250,
    3: 245,
    4: 250,
  };

  useEffect(() => {
    setIsClient(true); 

    const initialBackgroundColor = getParam("backgroundColor") || "#8E1E1E";
    const initialStripeColor = getParam("stripeColor") || "#FFFFFF";
    const initialSelectedTemplate = parseInt(getParam("selectedTemplate") || "1", 10);
    const initialLeftSockLogoId = getParam("leftSockLogo");
    const initialRightSockLogoId = getParam("rightSockLogo");
    const initialFullLogoId = getParam("fullLogo");
    const initialQuantity = parseInt(getParam("quantity") || "50", 10);

    setBackgroundColor(initialBackgroundColor);
    setStripeColor(initialStripeColor);
    setSelectedTemplate(initialSelectedTemplate);
    setLeftSockLogoId(initialLeftSockLogoId);
    setRightSockLogoId(initialRightSockLogoId);
    setFullLogoId(initialFullLogoId);
    setQuantity(initialQuantity);

    const fetchLogos = async () => {
      console.log("Fetching logos with IDs:", initialLeftSockLogoId, initialRightSockLogoId);
      if (initialLeftSockLogoId) {
        const storedLeftSockLogo = await getLogo(initialLeftSockLogoId);
        setLeftSockLogo(storedLeftSockLogo || undefined);
        console.log("Fetched left logo:", storedLeftSockLogo);
      }
      if (initialRightSockLogoId) {
        const storedRightSockLogo = await getLogo(initialRightSockLogoId);
        setRightSockLogo(storedRightSockLogo || undefined);
        console.log("Fetched right logo:", storedRightSockLogo);
      }
      setLogosUploaded(!!(initialLeftSockLogoId && initialRightSockLogoId));
    };
    fetchLogos();
  }, []);

  useEffect(() => {
    if (leftSockLogoId && rightSockLogoId) {
      const fetchLogos = async () => {
        const storedLeftSockLogo = await getLogo(leftSockLogoId);
        const storedRightSockLogo = await getLogo(rightSockLogoId);
        setLeftSockLogo(storedLeftSockLogo || undefined);
        setRightSockLogo(storedRightSockLogo || undefined);
      };
      fetchLogos();
    }
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
        discount = quantity * 0.4;
      } else if (quantity > 80) {
        discount = quantity * 0.1;
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

  const handleContinue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
      <div className="flex justify-center lg:justify-end p-4">
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
        <div className="hidden lg:block lg:w-64">
          <Sidebar
            activeSidebar={activeSidebar}
            toggleSidebar={toggleSidebar}
            handleLogoSelect={handleLogoSelect}
            handleBackgroundColorSelect={handleBackgroundColorSelect}
            handleStripeColorSelect={handleStripeColorSelect}
            handleTemplateChange={handleTemplateChange}
            selectedTemplate={selectedTemplate}
            quantity={quantity}
            onQuantityChange={handleQuantityChange}
            onQuantityBlur={handleQuantityBlur}
          />
        </div>
        <div className="flex flex-col justify-center items-center flex-1 space-y-2 overflow-hidden lg:ml-64">
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
          </div>
          {showErrorMessage && (
            <div className="text-red-500 text-sm mt-2">
              Please upload a logo before continuing.
            </div>
          )}
          <DesignerFooter price={price} onContinue={handleContinue} />
        </div>
      </div>
      {isClient && (
        <div className="block lg:hidden">
          <MobileBar
            handleLogoSelect={handleLogoSelect}
            handleBackgroundColorSelect={handleBackgroundColorSelect}
            handleStripeColorSelect={handleStripeColorSelect}
            handleTemplateChange={handleTemplateChange}
            selectedTemplate={selectedTemplate}
            quantity={quantity}
            onQuantityChange={handleQuantityChange}
            onQuantityBlur={handleQuantityBlur}
          />
        </div>
      )}
    </div>
  );
};

const SockSelectionPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <SockSelectionPageContent />
  </Suspense>
);

export default SockSelectionPage;
