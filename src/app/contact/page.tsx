"use client"

{/*"use client"
import React, { useState, ChangeEvent, FormEvent } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    message: ""
  });
  const [error, setError] = useState<string | null>(null); // State variable for error message

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic validation example
    if (formData.username.trim() === "" || formData.email.trim() === "") {
      setError("Name and Email are required fields.");
      return;
    }
    // Validate phone number format using regex
    const phoneRegex = /^[0-9]{9,11}$/; // 9 to 11 digits, numeric only
    if (formData.phone.trim() !== "" && !phoneRegex.test(formData.phone.trim())) {
      setError("Please enter a valid UK phone number.");
      return;
    }
    // Reset error state if there are no validation errors
    setError(null);
    // Process form submission here (e.g., send data to backend)
    console.log("Form submitted:", formData);
    // Reset form fields
    setFormData({
      username: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold">Contact Us</h1>
        
        {error && <div className="text-red-600">{error}</div>}
        <div className="flex gap-8">
       
          <div className="flex flex-col gap-2 w-1/2">
            <label className="text-sm text-gray-700">Name *</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="John"
              className="ring-2 ring-gray-300 rounded-md p-4"
              required
            />
          </div>
          
          <div className="flex flex-col gap-2 w-1/2">
            <label className="text-sm text-gray-700">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@gmail.com"
              className="ring-2 ring-gray-300 rounded-md p-4"
              required
            />
          </div>
        </div>
       
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-700">Phone number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="ring-2 ring-gray-300 rounded-md p-4"
            pattern="[0-9]{9,11}"
          />
        </div>
  
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows={4}
            className="ring-2 ring-gray-300 rounded-md p-4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 hover:text-white transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
*/}

import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    message: ''
  });
  const [error, setError] = useState<string | null>(null); // State variable for error message

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('../../api/sendEmail', formData);
      console.log(response.data); // Log success message
      setError(null); // Clear any previous errors
      alert('Email sent successfully!'); // Optional: Show a success message
      setFormData({
        username: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error: any) {
      console.error('Error occurred while sending email:', error.response.data.error);
      setError(error.response.data.error); // Display error message from backend
    }
  };

  return (
    <div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold">Contact Us</h1>

        {error && <div className="text-red-600">{error}</div>}
        <div className="flex gap-8">

          <div className="flex flex-col gap-2 w-1/2">
            <label className="text-sm text-gray-700">Name *</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="John"
              className="ring-2 ring-gray-300 rounded-md p-4"
              required
            />
          </div>

          <div className="flex flex-col gap-2 w-1/2">
            <label className="text-sm text-gray-700">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@gmail.com"
              className="ring-2 ring-gray-300 rounded-md p-4"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-700">Phone number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="ring-2 ring-gray-300 rounded-md p-4"
            pattern="[0-9]{9,11}"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows={4}
            className="ring-2 ring-gray-300 rounded-md p-4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 hover:text-white transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
