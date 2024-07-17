"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getLogo } from "../../utils/indexedDB";

const DetailsPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedTemplate = searchParams.get("selectedTemplate") || "1";
  const backgroundColor = searchParams.get("backgroundColor") || "#E4E4E4"; // Default to #E4E4E4
  const stripeColor = searchParams.get("stripeColor") || "#FFFFFF"; // Default to #FFFFFF
  const fullLogoId = searchParams.get("fullLogo") || "";
  const leftLogoId = searchParams.get("leftSockLogo") || "";
  const rightLogoId = searchParams.get("rightSockLogo") || "";
  const quantity = searchParams.get("quantity") || "50"; // Default to 50

  const [fullLogo, setFullLogo] = useState<string | undefined>();
  const [leftLogo, setLeftLogo] = useState<string | undefined>();
  const [rightLogo, setRightLogo] = useState<string | undefined>();

  useEffect(() => {
    const fetchLogos = async () => {
      if (fullLogoId) {
        const storedFullLogo = await getLogo(fullLogoId);
        setFullLogo(storedFullLogo || undefined);
      }
      if (leftLogoId) {
        const storedLeftLogo = await getLogo(leftLogoId);
        setLeftLogo(storedLeftLogo || undefined);
      }
      if (rightLogoId) {
        const storedRightLogo = await getLogo(rightLogoId);
        setRightLogo(storedRightLogo || undefined);
      }
    };
    fetchLogos();
  }, [fullLogoId, leftLogoId, rightLogoId]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    telephone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", `${formData.firstName} ${formData.lastName}`);
    data.append("email", formData.email);
    data.append("telephone", formData.telephone);
    data.append("template", selectedTemplate);
    data.append("backgroundColor", backgroundColor);
    data.append("stripeColor", stripeColor);
    data.append("quantity", quantity);
    if (fullLogo) {
      const response = await fetch(fullLogo);
      const blob = await response.blob();
      const base64Logo = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
      data.append("fullLogo", base64Logo);
    }
    data.append("message", "");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server error:", errorData);
        throw new Error(
          `Response status: ${response.status}, ${errorData.message}`
        );
      }

      const responseData = await response.json();
      console.log(responseData.message);

      alert("Message successfully sent");
      router.push("/");
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      console.error("Client error:", errorMessage);
      alert("Error, please try resubmitting the form");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-xl bg-white shadow-md rounded px-8 py-6">
        <h1 className="text-2xl font-bold mb-4">Customisation Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="m-4">
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="telephone"
              >
                Telephone
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => router.back()}
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailsPage;
