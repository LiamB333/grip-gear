import Footer from "@/components/Website/Footer/Footer";
import Header from "@/components/Website/Header";
import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />

      <div className="container mx-auto mt-10 px-4 md:mt-24 pb-10 md:pb-24">
        <h1 className="mb-10 text-2xl font-bold tracking-normal text-center text-gray-800 md:leading-tight md:tracking-normal  md:text-4xl">
          Stay up to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CB3A3A] via-[#E74C4C] to-[#FF5E5E]">
            date.
          </span>
        </h1>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {/* Blog Post 1 */}
          <div className="bg-white shadow-md flex-1 max-w-lg w-full">
            <Image
              src="/james.png"
              alt="Blog Post 1"
              width={400}
              height={300}
              className="w-full"
            />
            <h2 className="text-2xl font-bold mt-4 p-4">
              Why do footballers cut holes in their socks?
            </h2>
            <p className="text-gray-600 mt-2 p-4">
              This is a brief summary of blog post 1. It gives an overview of
              the content.
            </p>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white shadow-md flex-1 max-w-lg w-full">
            <Image
              src="/james.png"
              alt="Blog Post 2"
              width={400}
              height={300}
              className="w-full"
            />
            <h2 className="text-2xl font-bold mt-4 p-4">
              5 tips for wearing football grip socks
            </h2>
            <p className="text-gray-600 mt-2 p-4">
              This is a brief summary of blog post 2. It gives an overview of
              the content.
            </p>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white shadow-md flex-1 max-w-lg w-full">
            <Image
              src="/james.png"
              alt="Blog Post 3"
              width={400}
              height={300}
              className=" w-full"
            />
            <h2 className="text-2xl font-bold mt-4 p-4">
              Do grip socks actually work?
            </h2>
            <p className="text-gray-600 mt-2 p-4">
              This is a brief summary of blog post 3. It gives an overview of
              the content.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
