"use client"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const DetailsPage = () => {
  const searchParams = useSearchParams();

  const selectedTemplate = searchParams.get("selectedTemplate") || "";
  const backgroundColor = searchParams.get("backgroundColor") || "";
  const stripeColor = searchParams.get("stripeColor") || "";
  const fullLogo = searchParams.get("fullLogo") || "";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    telephone: "",
    email: "",
  });

  useEffect(() => {
    // Update form data when query parameters change
    setFormData({
      firstName: "",
      lastName: "",
      telephone: "",
      email: "",
    });
  }, [selectedTemplate, backgroundColor, stripeColor, fullLogo]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex justify-center items-center p-8">
      <div className="max-w-xl bg-white shadow-md rounded px-8 py-6">
        <h1 className="text-3xl font-bold mb-4">Customisation Details</h1>
          <div>
            <p>
              <strong>Template:</strong> {selectedTemplate}
            </p>
            <p>
              <strong>Background Color:</strong>{" "}
              {backgroundColor}
            </p>
            {selectedTemplate !== "1" && (
              <p>
                <strong>Stripe Color:</strong> {stripeColor}
              </p>
            )}
          </div>
  
        <form>
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
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="email"
              >
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
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
              <button
                type="button"
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Back
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};


export default DetailsPage;
