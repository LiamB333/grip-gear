"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Review() {
  const reviews = [
    {
      name: "Paul Jenkin",
      quote:
        "Customising our team's grip socks with Grip Gear has been a game-changer! The quality and design options are top-notch.",
      rating: 5,
    },
    {
      name: "Sarah Green",
      quote:
        "Grip Gear made it so easy to design my own grip socks. The process was smooth, and the final product exceeded my expectations!",
      rating: 4,
    },
    {
      name: "James Roberts",
      quote:
        "Highly recommend Grip Gear for any team looking to personalise their grip socks. The customisation options are fantastic, and the service is great.",
      rating: 5,
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Image
        key={i}
        src={i < rating ? "/star.svg" : "/half-star.svg"}
        alt="Star"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    ));
  };

  return (
    <section id="reviews" className="py-10">
      <div className="max-w-xl px-4 py-10 mx-auto sm:px-6 lg:max-w-6xl lg:px-8 text-center">
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center text-black md:leading-tight md:text-4xl">
          Hear from our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CB3A3A] via-[#E74C4C] to-[#FF5E5E]">
            satisfied
          </span>{" "}
          users.
        </h1>

        <div className="mx-auto mb-10 space-y-6 max-w-lg">
          <h2 className="text-xl font-bold text-gray-800 md:text-2xl">
            {reviews[currentReviewIndex].name}
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-400 font-light italic px-4">
            {reviews[currentReviewIndex].quote}
          </p>
          <div className="flex justify-center space-x-1">
            {renderStars(reviews[currentReviewIndex].rating)}
          </div>
        </div>

        {/* Centered and Side-by-Side Arrows */}
        <div className="flex justify-center space-x-4">
          {/* Left Arrow */}
          <button
            onClick={handlePreviousReview}
            aria-label="Previous Review"
            className="p-2 text-gray-800 dark:text-gray-200"
          >
            <Image
              src="/arrow-backward.svg"
              alt="Previous"
              width={24}
              height={24}
            />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNextReview}
            aria-label="Next Review"
            className="p-2 text-gray-800 dark:text-gray-200"
          >
            <Image src="/arrow-forward.svg" alt="Next" width={24} height={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
