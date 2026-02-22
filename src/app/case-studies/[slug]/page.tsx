"use client";

import { useTheme } from "@/context/ThemeContext";
import { caseStudies } from "@/data/case-studies";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CaseStudyDetail() {
  const { theme } = useTheme();
  const params = useParams();
  const slug = params?.slug as string;

  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <p
            className={`mb-6 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            The case study you're looking for doesn't exist.
          </p>
          <Link
            href="/case-studies"
            className={`font-medium transition-colors ${
              theme === "dark"
                ? "text-blue-400 hover:text-blue-300"
                : "text-blue-600 hover:text-blue-500"
            }`}
          >
            Back to Case Studies
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
          const items = paragraph
            .split("\n")
            .filter((line) => line.startsWith("- "));
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
          href="/case-studies"
          className={`inline-block mb-8 font-medium transition-colors ${
            theme === "dark"
              ? "text-blue-400 hover:text-blue-300"
              : "text-blue-600 hover:text-blue-500"
          }`}
        >
          ← Back to Case Studies
        </Link>

        <article>
          <div className="mb-8">
            <p
              className={`text-sm font-semibold mb-2 ${
                theme === "dark" ? "text-blue-400" : "text-blue-600"
              }`}
            >
              {study.industry.toUpperCase()}
            </p>
            <h1
              className={`text-4xl font-bold mb-2 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {study.title}
            </h1>
            <p
              className={`text-lg ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {study.subtitle}
            </p>
          </div>

          {/* Results Grid */}
          <div
            className={`grid grid-cols-2 md:grid-cols-3 gap-6 p-6 rounded-lg mb-12 ${
              theme === "dark"
                ? "bg-gray-900 border border-gray-800"
                : "bg-gray-50 border border-gray-200"
            }`}
          >
            {study.results.map((result, idx) => (
              <div key={idx}>
                <p
                  className={`text-sm font-medium mb-2 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {result.metric}
                </p>
                <p
                  className={`text-2xl font-bold ${
                    theme === "dark" ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  {result.value}
                </p>
              </div>
            ))}
          </div>

          {/* Key Info */}
          <div
            className={`grid grid-cols-2 gap-6 mb-12 p-6 rounded-lg ${
              theme === "dark"
                ? "bg-gray-900 border border-gray-800"
                : "bg-gray-50 border border-gray-200"
            }`}
          >
            <div>
              <p
                className={`text-sm font-medium ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Project Duration
              </p>
              <p
                className={`text-lg font-semibold ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {study.duration}
              </p>
            </div>
            <div>
              <p
                className={`text-sm font-medium ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Technologies Used
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {study.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      theme === "dark"
                        ? "bg-blue-500/20 text-blue-300"
                        : "bg-blue-200/50 text-blue-700"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
                {study.technologies.length > 3 && (
                  <span
                    className={`px-2 py-1 text-xs font-medium ${
                      theme === "dark"
                        ? "text-gray-400"
                        : "text-gray-600"
                    }`}
                  >
                    +{study.technologies.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Challenge & Solution Summary */}
          <div className="mb-12 space-y-6">
            <div>
              <h2
                className={`text-2xl font-bold mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                The Challenge
              </h2>
              <p
                className={`leading-relaxed ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {study.challenge}
              </p>
            </div>

            <div>
              <h2
                className={`text-2xl font-bold mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                The Solution
              </h2>
              <p
                className={`leading-relaxed ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {study.solution}
              </p>
            </div>
          </div>

          {/* Full Content */}
          <div className="prose prose-invert max-w-none">
            {renderContent(study.content)}
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
              Interested in working on something similar? Let's talk about your project.{" "}
              <Link
                href="/contact"
                className={`font-medium transition-colors ${
                  theme === "dark"
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-600 hover:text-blue-500"
                }`}
              >
                Get in touch
              </Link>
              .
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
