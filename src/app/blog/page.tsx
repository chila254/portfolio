"use client";

import { useTheme } from "@/context/ThemeContext";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import { blogPosts } from "@/data/blog";
import Link from "next/link";

export default function Blog() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <main className="max-w-4xl mx-auto px-4 py-20 animate-fade-in-up">
        <h1
          className={`text-4xl font-bold mb-4 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Technical Articles
        </h1>
        <p
          className={`mb-12 text-lg ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Deep dives into architecture, design patterns, and lessons learned from
          building production applications.
        </p>

        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <ScrollAnimationWrapper
              key={post.id}
              animation="slide-up"
              delay={index * 100}
            >
              <Link href={`/blog/${post.slug}`}>
                <article
                  className={`p-6 rounded-lg transition-all duration-300 cursor-pointer ${
                    theme === "dark"
                      ? "bg-gray-900 hover:bg-gray-800 hover:shadow-lg hover:shadow-blue-500/10"
                      : "bg-gray-100 hover:bg-gray-200 hover:shadow-lg hover:shadow-blue-400/10"
                  }`}
                >
                  <div className="flex flex-col gap-3">
                    <h2
                      className={`text-2xl font-bold transition-colors ${
                        theme === "dark"
                          ? "text-white hover:text-blue-400"
                          : "text-gray-900 hover:text-blue-600"
                      }`}
                    >
                      {post.title}
                    </h2>
                    <p
                      className={`${
                        theme === "dark"
                          ? "text-gray-400"
                          : "text-gray-600"
                      }`}
                    >
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span
                        className={
                          theme === "dark"
                            ? "text-gray-500"
                            : "text-gray-500"
                        }
                      >
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <span
                        className={
                          theme === "dark"
                            ? "text-gray-500"
                            : "text-gray-500"
                        }
                      >
                        •
                      </span>
                      <span
                        className={
                          theme === "dark"
                            ? "text-gray-500"
                            : "text-gray-500"
                        }
                      >
                        {post.readTime}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            theme === "dark"
                              ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                              : "bg-blue-200/50 text-blue-700 border border-blue-300"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </main>
    </div>
  );
}
