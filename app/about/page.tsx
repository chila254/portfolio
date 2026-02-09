"use client";

import { useTheme } from "@/context/ThemeContext";

export default function About() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <main className="max-w-7xl mx-auto px-4 py-20">
        <h1
          className={`text-4xl font-bold mb-12 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          About Me
        </h1>

        <div className="space-y-12">
          <div>
            <h2
              className={`text-2xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Professional Summary
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Energetic and adaptable BBIT graduate with hands-on experience in IT support, systems
              configuration, and applied software development. Proven ability to design and deploy
              real-world applications including an open-source Flutter streaming platform (MaxStream).
              Strong foundation in cybersecurity fundamentals, system troubleshooting, and API-driven
              application development. Passionate about leveraging technology to solve business
              problems and support digital transformation.
            </p>
          </div>

          <div>
            <h2
              className={`text-2xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Education
            </h2>
            <div className="space-y-4">
              <div
                className={`p-6 rounded-lg transition-colors duration-200 ${
                  theme === "dark"
                    ? "bg-gray-900 hover:bg-gray-800"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <h3
                  className={`text-xl font-bold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Bachelor of Business Information Technology (BBIT)
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  The Co-operative University of Kenya | 2021 – 2025
                </p>
                <p
                  className={`${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Second Class Lower Honours
                </p>
              </div>
              <div
                className={`p-6 rounded-lg transition-colors duration-200 ${
                  theme === "dark"
                    ? "bg-gray-900 hover:bg-gray-800"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <h3
                  className={`text-xl font-bold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  KCSE
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Oriwo Boys High School | 2017 – 2020
                </p>
                <p
                  className={`${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Mean Grade: B-
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2
              className={`text-2xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Experience
            </h2>
            <div
              className={`p-6 rounded-lg transition-colors duration-200 ${
                theme === "dark"
                  ? "bg-gray-900 hover:bg-gray-800"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <h3 className={`text-xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                IT Support Attache
              </h3>
              <p
                className={`font-semibold mb-3 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Alfa Solutions Ltd | May 6 – July 27, 2024
              </p>
              <ul
                className={`space-y-2 list-disc list-inside ${
                  theme === "dark" ? "text-gray-400" : "text-gray-700"
                }`}
              >
                <li>Troubleshot and repaired laptops, desktops, and printers for end users</li>
                <li>Installed and configured Windows operating systems in networked environments</li>
                <li>Set up structured cabling, UPS systems, and network hardware for client offices</li>
                <li>Installed and configured CCTV and PABX systems</li>
                <li>Performed data recovery and hardware diagnostics</li>
                <li>Assisted with software installations, patching, and system updates</li>
              </ul>
            </div>
          </div>

          <div>
            <h2
              className={`text-2xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Interests
            </h2>
            <p
              className={`leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Exploring emerging IT tools and digital technologies - Learning cybersecurity and
              software engineering best practices - Tech and innovation documentaries - Travel and
              cultural exploration
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
