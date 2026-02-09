"use client";

import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`transition-colors duration-300 ${
        theme === "dark"
          ? "bg-black border-t border-gray-800"
          : "bg-white border-t border-gray-200"
      } py-8 px-4`}
    >
      <div className="max-w-7xl mx-auto text-center">
        <p
          className={`mb-4 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          © 2025 Franklin Chilango Finyange. All rights reserved.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/chila254"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-200 ${
              theme === "dark"
                ? "text-gray-400 hover:text-blue-400"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/franklin-chilango-481015263"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-200 ${
              theme === "dark"
                ? "text-gray-400 hover:text-blue-400"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            LinkedIn
          </a>
          <a
            href="mailto:franklinchilango@gmail.com"
            className={`transition-colors duration-200 ${
              theme === "dark"
                ? "text-gray-400 hover:text-blue-400"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
