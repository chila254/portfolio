"use client";

import { useTheme } from "@/context/ThemeContext";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

export default function Certifications() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"}`}
    >
      <main className="max-w-7xl mx-auto px-4 py-20 animate-fade-in-up">
        <h1
          className={`text-4xl font-bold mb-12 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
        >
          {"Certifications & Achievements"}
        </h1>
        <div className="flex flex-col gap-6">
          <ScrollAnimationWrapper animation="slide-up">
          <div
            className={`p-6 rounded-lg transition-colors duration-200 ${
              theme === "dark"
                ? "bg-gray-900 hover:bg-gray-800"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <h3 className={`text-2xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              BBIT Degree
            </h3>
            <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
              {"The Co-operative University of Kenya | 2021 - 2025"}
            </p>
            <p className={`mt-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
              Second Class Lower Honours - Comprehensive training in IT support, cybersecurity
              fundamentals, and software development.
            </p>
          </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animation="slide-up" delay={100}>
          <div
            className={`p-6 rounded-lg transition-colors duration-200 ${
              theme === "dark"
                ? "bg-gray-900 hover:bg-gray-800"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <h3 className={`text-2xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              Open Source Contribution
            </h3>
            <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
              {"MaxStream Project | 2025 - Present"}
            </p>
            <p className={`mt-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
              Designed and deployed a cross-platform streaming application with modern
              architecture, secure coding practices, and 1000+ lines of production code.
            </p>
          </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animation="slide-up" delay={200}>
          <div
            className={`p-6 rounded-lg transition-colors duration-200 ${
              theme === "dark"
                ? "bg-gray-900 hover:bg-gray-800"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <h3 className={`text-2xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              Final Year Project
            </h3>
            <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
              {"MyAfya - Telemedicine Platform | 2024 - 2025"}
            </p>
            <p className={`mt-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
              Developed a comprehensive healthcare platform with role-based access control,
              RESTful APIs, and secure health data management principles.
            </p>
          </div>
          </ScrollAnimationWrapper>
        </div>
      </main>
    </div>
  );
}
