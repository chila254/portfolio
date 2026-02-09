"use client";

import { skills } from "@/data/skills";
import { useTheme } from "@/context/ThemeContext";

export default function Skills() {
  const { theme } = useTheme();

  return (
    <section
      className={`py-20 px-4 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 border-t border-gray-800"
          : "bg-gray-50 border-t border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl font-bold mb-12 text-center ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3
              className={`text-2xl font-bold mb-6 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Technical Skills
            </h3>
            <ul
              className={`space-y-3 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {skills.technical.map((skill) => (
                <li
                  key={skill}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${
                    theme === "dark"
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  <span className="text-blue-500">✓</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className={`text-2xl font-bold mb-6 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Soft Skills
            </h3>
            <ul
              className={`space-y-3 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {skills.soft.map((skill) => (
                <li
                  key={skill}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${
                    theme === "dark"
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  <span className="text-purple-500">✓</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
