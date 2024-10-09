import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import Header from "@/components/Website/Header";
import Footer from "@/components/Website/Footer/Footer";
import styles from "./blog.module.css";
import { Metadata } from "next";

interface BlogPost {
  title: string;
  date: string;
  image: string;
  contentHtml: string;
}

interface Params {
  params: { slug: string };
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = params;
  const postsDirectory = path.join(process.cwd(), "posts");
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return {
    title: `${data.title} | Grip Gear`,
    description: data.description || "Explore the latest on sports topics.",
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://gripgear.co.uk/blog/${slug}`,
      images: [
        {
          url: `https://gripgear.co.uk${data.image}`,
          width: 800,
          height: 600,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [`https://gripgear.co.uk${data.image}`],
    },
  };
}

export default async function BlogPost({ params }: Params) {
  const { slug } = params;
  const postsDirectory = path.join(process.cwd(), "posts");

  // Read all filenames from the posts directory
  const filenames = fs.readdirSync(postsDirectory);

  // Get content and metadata for each post
  const allPosts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title,
      date: data.date,
      description:
        data.description || "A must-read post for sports enthusiasts.",
      image: data.image || "/placeholder.webp",
    };
  });

  // Get the current post
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  // Filter out the current post to get related posts
  const relatedPosts = allPosts
    .filter((post) => post.slug !== slug)
    .slice(0, 3);

  // Process markdown content to HTML without autolinking
  const processedContent = await remark()
    .use(remarkRehype)
    .use(rehypeSlug) // Keeps the IDs for headings but doesn't add links
    .use(rehypeStringify)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return (
    <>
      <Header />
      <div
        className={`max-w-7xl mx-auto py-2 md:py-12 px-4 sm:px-6 lg:px-8 ${styles.blogContainer}`}
      >
        <article
          className={`prose dark:prose-dark prose-lg mx-auto w-full lg:w-2/3 ${styles.article}`}
        >
          <h1 className="font-bold text-5xl mb-6">{matterResult.data.title}</h1>
          <p className="text-gray-500 text-sm mb-8">
            Published on: {matterResult.data.date}
          </p>

          {/* Render the image from the markdown */}
          {matterResult.data.image && (
            <div className="mb-8">
              <Image
                src={matterResult.data.image}
                alt={matterResult.data.title}
                width={800}
                height={600}
                priority
              />
            </div>
          )}

          {/* Render the markdown content */}
          <div
            className="leading-relaxed"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* Related Posts Section */}
          <section className="related-posts mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              More like this
            </h2>
            <div className="pt-4 grid grid-cols-1 gap-8 md:grid-cols-2">
              {relatedPosts.slice(0, 3).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block space-y-2 hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
                  aria-label={`Read more about ${post.title}`}
                >
                  <div className="relative w-full">
                    <Image
                      src={post.image}
                      alt={`Cover image for ${post.title}`}
                      width={800}
                      height={700}
                    />
                  </div>
                  <h3 className="p-4 text-lg font-bold text-gray-800 dark:text-gray-200">
                    {post.title}
                  </h3>
                  <p className="p-4 text-gray-600 dark:text-gray-400">
                    {post.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </div>
      <Footer />
    </>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}
