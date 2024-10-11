import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import Image from "next/image";
import Header from "@/components/Website/Header";
import Footer from "@/components/Website/Footer/Footer";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Blog | Grip Gear",
    description: "Stay up to date with the latest sports insights and news.",
  };
};

interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

export default async function BlogList() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts: Post[] = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title,
      date: data.date,
      description: data.description || "A must-read post for all investors.",
      image: data.image || "/placeholder.webp",
    };
  });

  return (
    <>
      <Header />
      <section className="py-4 md:py-12">
        <div className="container max-w-screen-xl py-4 md:py-12 mx-auto sm:px-6">
          <h1 className="mb-10 text-2xl font-bold tracking-normal text-center text-gray-800 md:leading-tight md:text-4xl">
            Stay up to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CB3A3A] via-[#E74C4C] to-[#FF5E5E]">
              date.
            </span>
          </h1>
          <p className="max-w-md mx-auto mb-12 text-lg text-gray-600 text-center">
            Discover our insights on the effectiveness of grip socks, top-rated
            reviews, and expert tips for getting the best performance on the
            field.
          </p>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 p-3">
            {posts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white  shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:border-gray-300"
                aria-label={post.title}
              >
                <div className="relative w-full h-56">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <p className="text-sm text-[#CB3A3A] ">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
