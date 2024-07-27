"use client";
import React, {
  useState,
  useEffect,
  useCallback,
  Suspense,
  useMemo,
} from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { getLogo } from "../../utils/indexedDB";
import SockOutline from "@/components/Designer/SockOutline";
import DesignerFooter from "@/components/Designer/Footer";
import Sidebar from "@/components/Designer/Sidebar";
import MobileBar from "@/components/Designer/MobileBar";
import Link from "next/link";
import Image from "next/image";
import LogoPicker from "@/components/Designer/LogoPicker";

const SockSelectionPageContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const getParam = useCallback(
    (param: string) => {
      const value = searchParams.get(param);
      return value !== null ? value : undefined;
    },
    [searchParams]
  );

  const [state, setState] = useState({
    backgroundColor: "#8E1E1E",
    stripeColor: "#FFFFFF",
    selectedTemplate: 1,
    leftSockLogoId: undefined as string | undefined,
    rightSockLogoId: undefined as string | undefined,
    fullLogoId: undefined as string | undefined,
    quantity: 50,
    showErrorMessage: false,
    quantityErrorMessage: null as string | null,
    activeSidebar: "design" as string | null,
    leftSockLogo: undefined as string | undefined,
    rightSockLogo: undefined as string | undefined,
    logosUploaded: false,
    isClient: false,
  });

  const updateSearchParams = useCallback((key: string, value: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set(key, value);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl);
  }, []);

  type TemplatePrices = {
    [key: number]: [number, number]; // Price brackets based on quantity
  };

  const templatePrices: TemplatePrices = useMemo(() => {
    return {
      1: [25, 9.20],  // For quantities from 25 to 49
      2: [50, 5.00],  // For quantities from 50 to 99
      3: [100, 4.90], // For quantities from 100 to 149
      4: [150, 4.60], // For quantities 150 and above
    };
  }, []);

  useEffect(() => {
    setState((prevState) => ({ ...prevState, isClient: true }));

    const initialBackgroundColor = getParam("backgroundColor") || "#8E1E1E";
    const initialStripeColor = getParam("stripeColor") || "#FFFFFF";
    const initialSelectedTemplate = parseInt(
      getParam("selectedTemplate") || "1",
      10
    );
    const initialLeftSockLogoId = getParam("leftSockLogo");
    const initialRightSockLogoId = getParam("rightSockLogo");
    const initialFullLogoId = getParam("fullLogo");
    const initialQuantity = parseInt(getParam("quantity") || "50", 10);

    setState((prevState) => ({
      ...prevState,
      backgroundColor: initialBackgroundColor,
      stripeColor: initialStripeColor,
      selectedTemplate: initialSelectedTemplate,
      leftSockLogoId: initialLeftSockLogoId,
      rightSockLogoId: initialRightSockLogoId,
      fullLogoId: initialFullLogoId,
      quantity: initialQuantity,
    }));

    const fetchLogos = async () => {
      if (initialLeftSockLogoId) {
        const storedLeftSockLogo = await getLogo(initialLeftSockLogoId);
        setState((prevState) => ({
          ...prevState,
          leftSockLogo: storedLeftSockLogo || undefined,
        }));
      }
      if (initialRightSockLogoId) {
        const storedRightSockLogo = await getLogo(initialRightSockLogoId);
        setState((prevState) => ({
          ...prevState,
          rightSockLogo: storedRightSockLogo || undefined,
        }));
      }
      setState((prevState) => ({
        ...prevState,
        logosUploaded: !!(initialLeftSockLogoId && initialRightSockLogoId),
      }));
    };
    fetchLogos();
  }, [getParam]);

  useEffect(() => {
    if (state.leftSockLogoId && state.rightSockLogoId) {
      const fetchLogos = async () => {
        const storedLeftSockLogo = await getLogo(state.leftSockLogoId);
        const storedRightSockLogo = await getLogo(state.rightSockLogoId);
        setState((prevState) => ({
          ...prevState,
          leftSockLogo: storedLeftSockLogo || undefined,
          rightSockLogo: storedRightSockLogo || undefined,
        }));
      };
      fetchLogos();
    }
  }, [state.leftSockLogoId, state.rightSockLogoId]);

  const handleBackgroundColorSelect = useCallback(
    (color: string) => {
      setState((prevState) => ({ ...prevState, backgroundColor: color }));
      updateSearchParams("backgroundColor", color);
    },
    [updateSearchParams]
  );

  const handleStripeColorSelect = useCallback(
    (color: string) => {
      setState((prevState) => ({ ...prevState, stripeColor: color }));
      updateSearchParams("stripeColor", color);
    },
    [updateSearchParams]
  );

  const handleLogoSelect = useCallback(
    (leftLogoId: string, rightLogoId: string, fullLogoId: string) => {
      setState((prevState) => ({
        ...prevState,
        leftSockLogoId: leftLogoId,
        rightSockLogoId: rightLogoId,
        fullLogoId,
        logosUploaded: true,
        showErrorMessage: false,
      }));
      updateSearchParams("leftSockLogo", leftLogoId);
      updateSearchParams("rightSockLogo", rightLogoId);
      updateSearchParams("fullLogo", fullLogoId);
    },
    [updateSearchParams]
  );

  const handleTemplateChange = useCallback(
    (selectedValue: number) => {
      setState((prevState) => ({
        ...prevState,
        selectedTemplate: selectedValue,
        stripeColor: selectedValue === 1 ? "#FFFFFF" : prevState.stripeColor,
      }));
      updateSearchParams("selectedTemplate", selectedValue.toString());
      if (selectedValue === 1) {
        updateSearchParams("stripeColor", "#FFFFFF");
      }
    },
    [updateSearchParams]
  );

  const handleQuantityChange = useCallback(
    (value: number) => {
      setState((prevState) => ({ ...prevState, quantity: value }));
      updateSearchParams("quantity", value.toString());
    },
    [updateSearchParams]
  );

  const handleQuantityBlur = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      quantityErrorMessage:
        prevState.quantity < 25 ? "Quantity cannot be less than 25." : null,
    }));
  }, []);

  const calculatePriceAndSavings = useMemo(() => {
    const quantity = state.quantity;
    let pricePerUnit = 0;

    if (quantity >= 150) {
      pricePerUnit = templatePrices[4][1]; // £4.60 per unit
    } else if (quantity >= 100) {
      pricePerUnit = templatePrices[3][1]; // £4.90 per unit
    } else if (quantity >= 50) {
      pricePerUnit = templatePrices[2][1]; // £5.00 per unit
    } else if (quantity >= 25) {
      pricePerUnit = templatePrices[1][1]; // £9.20 per unit
    }

    const price = quantity * pricePerUnit;
    return {
      price: `£${price.toFixed(2)}`,
      savings: (0).toFixed(2) // You might want to calculate savings or set it to 0
    };
  }, [state.quantity, templatePrices]);

  const handleContinue = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      if (!state.logosUploaded) {
        setState((prevState) => ({ ...prevState, showErrorMessage: true }));
      } else if (state.quantity < 25) {
        setState((prevState) => ({
          ...prevState,
          quantityErrorMessage: "Quantity cannot be less than 25.",
        }));
      } else {
        setState((prevState) => ({
          ...prevState,
          showErrorMessage: false,
          quantityErrorMessage: null,
        }));
        router.push(`/details${window.location.search}`);
      }
    },
    [router, state.logosUploaded, state.quantity]
  );

  const toggleSidebar = useCallback((sidebar: string) => {
    setState((prevState) => ({
      ...prevState,
      activeSidebar: prevState.activeSidebar === sidebar ? null : sidebar,
    }));
  }, []);

  const { price, savings } = calculatePriceAndSavings;

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-[#F5F7FA]">
      <div className="flex justify-center lg:justify-end p-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-removed-bg.svg"
            alt="Grip Gear logo"
            width={160}
            height={60}
            priority
          />
        </Link>
      </div>

      <div className="flex flex-row flex-1 overflow-hidden">
        <div className="hidden lg:block lg:w-64">
          <Sidebar
            activeSidebar={state.activeSidebar}
            toggleSidebar={toggleSidebar}
            handleLogoSelect={handleLogoSelect}
            handleBackgroundColorSelect={handleBackgroundColorSelect}
            handleStripeColorSelect={handleStripeColorSelect}
            handleTemplateChange={handleTemplateChange}
            selectedTemplate={state.selectedTemplate}
            quantity={state.quantity}
            onQuantityChange={handleQuantityChange}
            onQuantityBlur={handleQuantityBlur}
          />
        </div>
        <div className="flex flex-col justify-center items-center flex-1 space-y-2 overflow-hidden lg:ml-64">
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 items-center">
            <div className="flex justify-center w-full md:w-auto">
              <SockOutline
                backgroundColor={state.backgroundColor}
                stripeColor={state.stripeColor}
                selectedTemplate={state.selectedTemplate}
                leftLogoUrl={state.leftSockLogo}
                rightLogoUrl={state.rightSockLogo}
              />
            </div>
          </div>
          {state.showErrorMessage && (
            <div className="text-red-500 text-sm mt-2">
              Please upload a logo before continuing.
            </div>
          )}
          <DesignerFooter price={price} onContinue={handleContinue} />
        </div>
      </div>
      {state.isClient && (
        <div className="block lg:hidden">
          <MobileBar
            handleLogoSelect={handleLogoSelect}
            handleBackgroundColorSelect={handleBackgroundColorSelect}
            handleStripeColorSelect={handleStripeColorSelect}
            handleTemplateChange={handleTemplateChange}
            selectedTemplate={state.selectedTemplate}
            quantity={state.quantity}
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
