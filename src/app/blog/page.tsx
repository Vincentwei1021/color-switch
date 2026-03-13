import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — Color Guides for Designers & Developers | ColorSwitch",
  description: "Practical guides on color formats, CSS colors, and design system color management.",
  alternates: { canonical: "/blog" },
};

const posts = [
  { slug: "hex-rgb-hsl-guide", title: "HEX vs RGB vs HSL: A Complete Guide to CSS Color Formats", excerpt: "Understand the differences between HEX, RGB, and HSL color formats. When to use each one, with practical CSS examples.", date: "2026-03-10" },
  { slug: "oklch-css-colors", title: "OKLCH: The Future of CSS Colors (and How to Use It Today)", excerpt: "Why OKLCH is the recommended color format for modern CSS, how it works, browser support, and migration guide.", date: "2026-03-08" },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Blog</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Guides on CSS colors, design systems, and color theory for the web.</p>
          <div className="mt-10 space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                <time className="text-xs font-medium text-gray-400">{post.date}</time>
                <h2 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
                  <Link href={`/blog/${post.slug}`} className="hover:text-pink-600 dark:hover:text-pink-400">{post.title}</Link>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-3 inline-block text-sm font-semibold text-pink-600 hover:text-pink-700 dark:text-pink-400">Read more →</Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
