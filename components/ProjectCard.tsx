"use client";

import { useTheme } from "@/context/ThemeContext";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
}

export default function ProjectCard({ title, description, tags, github, live }: ProjectCardProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`p-6 rounded-lg transition-all duration-300 ${
        theme === "dark"
          ? "bg-gray-900 hover:bg-gray-800 hover:shadow-lg hover:shadow-blue-500/10"
          : "bg-gray-100 hover:bg-gray-200 hover:shadow-lg hover:shadow-blue-400/10"
      }`}
    >
      <h3
        className={`text-xl font-bold mb-2 ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mb-4 ${
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag: string) => (
          <span
            key={tag}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              theme === "dark"
                ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                : "bg-blue-200/50 text-blue-700 border border-blue-300"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {github && (
          <a
            href={github}
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
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-medium transition-colors ${
              theme === "dark"
                ? "text-blue-400 hover:text-blue-300"
                : "text-blue-600 hover:text-blue-500"
            }`}
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
