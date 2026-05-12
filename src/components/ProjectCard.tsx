"use client";

import { useTheme } from "@/context/ThemeContext";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function ProjectCard({ title, description, tags, github, live, images }: {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  images?: string[];
}) {
  const { theme } = useTheme();

  return (
    <div
      className={`p-6 rounded-lg transition-all duration-300 relative overflow-hidden ${
        theme === "dark"
          ? "bg-gray-900 hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-900 hover:shadow-xl hover:shadow-blue-500/20"
          : "bg-gray-100 hover:bg-gradient-to-br hover:from-gray-200 hover:to-gray-100 hover:shadow-xl hover:shadow-blue-400/20"
      }`}
    >
      <h3
        className={`text-xl font-bold mb-2 ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h3>
      {images && images.length > 0 && (
        <div className="mb-4 grid grid-cols-2 gap-2">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`${title} screenshot ${index + 1}`}
              width={200}
              height={400}
              className="rounded-md object-cover w-full h-32"
            />
          ))}
        </div>
      )}
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
            className={`flex items-center gap-2 font-medium transition-colors ${
              theme === "dark"
                ? "text-blue-400 hover:text-blue-300"
                : "text-blue-600 hover:text-blue-500"
            }`}
          >
            <Github size={16} />
            GitHub
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 font-medium transition-colors ${
              theme === "dark"
                ? "text-blue-400 hover:text-blue-300"
                : "text-blue-600 hover:text-blue-500"
            }`}
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
