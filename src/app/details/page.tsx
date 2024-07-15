"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Resend } from "resend"; // Import Resend library

const DetailsPage = () => {
  const [savedCustomization, setSavedCustomization] = useState<any>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    telephone: "",
    email: "",
  });

  const router = useRouter();

  useEffect(() => {
    const savedState = localStorage.getItem("sockCustomization");
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      setSavedCustomization(parsedState);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const resend = new Resend("re_haEqWJxv_5BuhXgmNCJ1UZLDE2z4rrb9K");

      const response = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "liamblack333@gmail.com",
        subject: "Customisation Details",
        html: `
          <p>Thank you for your customisation details:</p>
          <p><strong>First Name:</strong> ${formData.firstName}</p>
          <p><strong>Last Name:</strong> ${formData.lastName}</p>
          <p><strong>Telephone:</strong> ${formData.telephone}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Template:</strong> ${
            savedCustomization.selectedTemplate
          }</p>
          <p><strong>Background Color:</strong> ${
            savedCustomization.backgroundColor
          }</p>
          ${
            savedCustomization.selectedTemplate !== 1 &&
            `<p><strong>Stripe Color:</strong> ${savedCustomization.stripeColor}</p>`
          }
          ${
            savedCustomization.fullLogo &&
            `<p><strong>Logo:</strong> <img src="${savedCustomization.fullLogo}" alt="Logo" style="max-width: 100px; max-height: 100px;" /></p>`
          }
        `,
      });

      console.log("Email sent successfully:", response);

      setFormData({ firstName: "", lastName: "", telephone: "", email: "" });
      router.back();
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  return (
    <div className="flex justify-center items-center p-8">
      <div className="max-w-xl bg-white shadow-md rounded px-8 py-6">
        <h1 className="text-3xl font-bold mb-4">Customisation Details</h1>
        {savedCustomization ? (
          <div>
            <p>
              <strong>Template:</strong> {savedCustomization.selectedTemplate}
            </p>
            <p>
              <strong>Background Color:</strong>{" "}
              {savedCustomization.backgroundColor}
            </p>
            {savedCustomization.selectedTemplate !== 1 && (
              <p>
                <strong>Stripe Color:</strong> {savedCustomization.stripeColor}
              </p>
            )}
            {savedCustomization.fullLogo && (
              <p>
                <strong>Logo:</strong>{" "}
                <img
                  src={savedCustomization.fullLogo}
                  alt="Full Logo"
                  style={{ maxWidth: "100px", maxHeight: "100px" }}
                />
              </p>
            )}
          </div>
        ) : (
          <p>No customization data found.</p>
        )}
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
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => router.back()}
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
