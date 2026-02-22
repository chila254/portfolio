"use client";

import { useTheme } from "@/context/ThemeContext";
import { blogPosts } from "@/data/blog";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BlogPost() {
  const { theme } = useTheme();
  const params = useParams();
  const slug = params?.slug as string;
  
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
      }`}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className={`mb-6 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            The blog post you're looking for doesn't exist.
          </p>
          <Link href="/blog" className={`font-medium transition-colors ${
            theme === "dark"
              ? "text-blue-400 hover:text-blue-300"
              : "text-blue-600 hover:text-blue-500"
          }`}>
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Parse markdown-like content into HTML
  const renderContent = (content: string) => {
    return content
      .split("\n\n")
      .map((paragraph, index) => {
        // Headings
        if (paragraph.startsWith("##")) {
          return (
            <h2
              key={index}
              className={`text-2xl font-bold mt-8 mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {paragraph.replace(/##\s/, "")}
            </h2>
          );
        }

        // Code blocks
        if (paragraph.startsWith("```")) {
          const language = paragraph
            .split("\n")[0]
            .replace("```", "")
            .trim();
          const code = paragraph
            .split("\n")
            .slice(1, -1)
            .join("\n");

          return (
            <pre
              key={index}
              className={`p-4 rounded-lg overflow-x-auto mb-6 ${
                theme === "dark"
                  ? "bg-gray-900 border border-gray-700"
                  : "bg-gray-100 border border-gray-300"
              }`}
            >
              <code
                className={`text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {code}
              </code>
            </pre>
          );
        }

        // Bold text
        let text = paragraph.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

        // List items
        if (paragraph.startsWith("- ")) {
          const items = paragraph.split("\n").filter((line) => line.startsWith("- "));
          return (
            <ul
              key={index}
              className={`list-disc list-inside mb-6 space-y-2 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {items.map((item, itemIndex) => (
                <li key={itemIndex} className="ml-2">
                  {item.replace("- ", "")}
                </li>
              ))}
            </ul>
          );
        }

        // Regular paragraphs
        return (
          <p
            key={index}
            className={`mb-4 leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        );
      });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <main className="max-w-3xl mx-auto px-4 py-20">
        <Link
          href="/blog"
          className={`inline-block mb-8 font-medium transition-colors ${
            theme === "dark"
              ? "text-blue-400 hover:text-blue-300"
              : "text-blue-600 hover:text-blue-500"
          }`}
        >
          ← Back to Blog
        </Link>

        <article>
          <h1
            className={`text-4xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {post.title}
          </h1>

          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center gap-4 text-sm">
              <span
                className={
                  theme === "dark" ? "text-gray-500" : "text-gray-500"
                }
              >
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className={theme === "dark" ? "text-gray-500" : "text-gray-500"}>
                •
              </span>
              <span className={theme === "dark" ? "text-gray-500" : "text-gray-500"}>
                {post.readTime}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
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

          <div
            className={`prose prose-invert max-w-none ${
              theme === "dark" ? "prose-invert" : ""
            }`}
          >
            {renderContent(post.content)}
          </div>

          <div
            className={`mt-12 pt-8 border-t ${
              theme === "dark" ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <p
              className={`mb-4 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Have thoughts on this article? Share them with me on{" "}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium transition-colors ${
                  theme === "dark"
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-600 hover:text-blue-500"
                }`}
              >
                Twitter
              </a>
              {" "}or{" "}
              <a
                href="https://github.com/chila254"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium transition-colors ${
                  theme === "dark"
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-600 hover:text-blue-500"
                }`}
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
