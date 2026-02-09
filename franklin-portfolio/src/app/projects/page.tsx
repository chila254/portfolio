"use client";

import { useTheme } from "@/context/ThemeContext";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"}`}
    >
      <main className="max-w-7xl mx-auto px-4 py-20">
        <h1
          className={`text-4xl font-bold mb-12 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
        >
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              github={project.github}
              live={project.live}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
