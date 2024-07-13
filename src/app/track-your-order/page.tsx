import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

const Track = () => {
  return (
    <div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
      <form className="flex flex-col gap-8">
        <h1 className="text-2xl font-semibold">Track Your Order</h1>
        <p>
          To check on the status of your order, please use the tracking number
          in your email. If you have any questions regarding your order or need
          to contact us with questions, please email
          support@gaintheedgeofficial.com
        </p>

        <div className="flex flex-col gap-2">
          <input
            type="text"
            name="phone"
            placeholder="Enter your tracking number"
            className="ring-2 ring-gray-300 rounded-md p-4"
            pattern="[0-9]{9,11}"
          />
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

export default Track;
