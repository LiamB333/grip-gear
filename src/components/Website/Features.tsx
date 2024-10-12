"use client";
import React from "react";
import Image from "next/image";

export default function Features() {
  return (
    <section id="features" className="py-10">
      <div className="max-w-xl px-4 py-10 mx-auto sm:px-6 lg:max-w-6xl lg:px-8">
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center text-gray-800 md:leading-tight md:tracking-normal  md:text-4xl">
          Customise for your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CB3A3A] via-[#E74C4C] to-[#FF5E5E]">
            team.
          </span>
        </h1>
        <p className="max-w-md mx-auto mb-10 text-center text-lg text-gray-600 md:text-lg">
          Our custom grip sock designer allows teams to craft their own unique
          socks in bulk, with endless options for colors, patterns, and logos.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-12">
          {/* Feature 1 */}
          <div className="mb-8 space-y-4 text-center flex flex-col items-center">
            <h2 className="text-xl font-bold text-gray-800 md:text-2xl">
              Easy-to-Use Designer
            </h2>
            <div className="h-auto">
              <Image
                src="/draw.svg"
                alt="Investment insights feature in GILT calculator"
                width={60}
                height={60}
                priority
              />
            </div>
            <div className="mx-2 font-normal text-gray-500 text-md">
              <ul className="list-inside">
                <li className="mb-2">
                  <span className="font-semibold">Accurate Previews</span>: see
                  exactly what your custom grip socks will look like.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">
                    Clear Design Visualisation
                  </span>
                </li>
                <li>
                  <span className="font-semibold">Best Design Selector</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="mb-8 space-y-4 text-center flex flex-col items-center">
            <h2 className="text-xl font-bold text-gray-800 md:text-2xl">
              Fully Customisable
            </h2>
            <div className="h-auto">
              <Image
                src="/tune.svg"
                alt="Dynamic updates feature in GILT calculator"
                width={60}
                height={60}
                priority
              />
            </div>
            <div className="mx-2 font-normal text-gray-500 text-md">
              <ul className="list-inside">
                <li className="mb-2">
                  <span className="font-semibold">Endless posibility</span>:
                  bold, eye-catching designs or subtle, classic styles.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Upload your logo</span>
                </li>
                <li>
                  <span className="font-semibold">
                    Match your Team&apos;s Identity
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="mb-8 space-y-4 text-center flex flex-col items-center">
            <h2 className="text-xl font-bold text-gray-800 md:text-2xl">
              Bulk Discounts
            </h2>
            <div className="h-auto">
              <Image
                src="/shopping.svg"
                alt="User-friendly interface feature in GILT calculator"
                width={60}
                height={60}
                priority
              />
            </div>
            <div className="mx-2 font-normal text-gray-500 text-md">
              <ul className="list-inside">
                <li className="mb-2">
                  <span className="font-semibold">Significant savings</span>:
                  when ordering custom grip socks in larger quantities.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">
                    Bigger Orders, Bigger Savings
                  </span>
                </li>
                <li>
                  <span className="font-semibold">
                    Accessible for All Teams
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
