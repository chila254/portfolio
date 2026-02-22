"use client";

import { useTheme } from "@/context/ThemeContext";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import { caseStudies } from "@/data/case-studies";
import Link from "next/link";

export default function CaseStudies() {
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
          Case Studies
        </h1>
        <p
          className={`mb-12 text-lg ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Real-world projects: From problem definition to implementation and measurable results.
        </p>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <ScrollAnimationWrapper
              key={study.id}
              animation="slide-up"
              delay={index * 100}
            >
              <Link href={`/case-studies/${study.slug}`}>
                <article
                  className={`p-8 rounded-lg transition-all duration-300 cursor-pointer ${
                    theme === "dark"
                      ? "bg-gray-900 hover:bg-gray-800 hover:shadow-lg hover:shadow-blue-500/10"
                      : "bg-gray-100 hover:bg-gray-200 hover:shadow-lg hover:shadow-blue-400/10"
                  }`}
                >
                  <div className="flex flex-col gap-4">
                    <div>
                      <p
                        className={`text-sm font-semibold mb-2 ${
                          theme === "dark"
                            ? "text-blue-400"
                            : "text-blue-600"
                        }`}
                      >
                        {study.industry.toUpperCase()}
                      </p>
                      <h2
                        className={`text-2xl font-bold transition-colors ${
                          theme === "dark"
                            ? "text-white hover:text-blue-400"
                            : "text-gray-900 hover:text-blue-600"
                        }`}
                      >
                        {study.title}
                      </h2>
                      <p
                        className={`text-sm mt-2 ${
                          theme === "dark"
                            ? "text-gray-400"
                            : "text-gray-600"
                        }`}
                      >
                        {study.subtitle}
                      </p>
                    </div>

                    <p
                      className={`${
                        theme === "dark"
                          ? "text-gray-300"
                          : "text-gray-700"
                      }`}
                    >
                      {study.excerpt}
                    </p>

                    <div className="grid grid-cols-3 gap-4 mt-4">
                      {study.results.slice(0, 3).map((result, idx) => (
                        <div key={idx}>
                          <p
                            className={`text-sm font-medium ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-500"
                            }`}
                          >
                            {result.metric}
                          </p>
                          <p
                            className={`text-lg font-bold ${
                              theme === "dark"
                                ? "text-blue-400"
                                : "text-blue-600"
                            }`}
                          >
                            {result.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {study.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            theme === "dark"
                              ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                              : "bg-blue-200/50 text-blue-700 border border-blue-300"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 5 && (
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            theme === "dark"
                              ? "text-gray-400"
                              : "text-gray-600"
                          }`}
                        >
                          +{study.technologies.length - 5} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-sm mt-2">
                      <span
                        className={
                          theme === "dark"
                            ? "text-gray-500"
                            : "text-gray-500"
                        }
                      >
                        {study.duration}
                      </span>
                      <span
                        className={`font-medium transition-colors ${
                          theme === "dark"
                            ? "text-blue-400 group-hover:text-blue-300"
                            : "text-blue-600 group-hover:text-blue-500"
                        }`}
                      >
                        Read Case Study →
                      </span>
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
