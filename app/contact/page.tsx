"use client";

import { useTheme } from "@/context/ThemeContext";

export default function Contact() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"}`}
    >
      <main className="max-w-7xl mx-auto px-4 py-20">
        <h1
          className={`text-4xl font-bold mb-12 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
        >
          Get In Touch
        </h1>
        <div className="space-y-6">
          <p
            className={`text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
          >
            {"I'd love to connect! Reach out via email, phone, or my GitHub profile. Always excited to discuss new projects, opportunities, or technology."}
          </p>
          <div
            className={`max-w-2xl rounded-lg p-8 ${
              theme === "dark"
                ? "bg-gradient-to-br from-gray-900 to-gray-800"
                : "bg-gradient-to-br from-gray-50 to-gray-100"
            }`}
          >
            <div className="space-y-8">
              <div>
                <h3 className={`text-xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className={`text-sm font-semibold mb-1 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                      Email:
                    </p>
                    <a
                      href="mailto:franklinchilango@gmail.com"
                      className="text-blue-500 hover:text-blue-400 transition-colors text-lg font-medium"
                    >
                      franklinchilango@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className={`text-sm font-semibold mb-1 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                      Phone:
                    </p>
                    <a
                      href="tel:+254769609996"
                      className="text-blue-500 hover:text-blue-400 transition-colors text-lg font-medium"
                    >
                      +254 769 609 996
                    </a>
                  </div>
                  <div>
                    <p className={`text-sm font-semibold mb-1 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                      Location:
                    </p>
                    <p className="text-lg font-medium">Mombasa, Kenya</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  Connect on Social Media
                </h3>
                <div className="flex gap-4 flex-wrap">
                  <a
                    href="https://github.com/chila254"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400 transition-colors text-lg font-medium"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/franklin-chilango-481015263"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400 transition-colors text-lg font-medium"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
