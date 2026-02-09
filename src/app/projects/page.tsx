"use client";

import { useTheme } from "@/context/ThemeContext";
import ProjectCard from "@/components/ProjectCard";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import { projects } from "@/data/projects";

export default function Projects() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"}`}
    >
      <main className="max-w-7xl mx-auto px-4 py-20 animate-fade-in-up">
        <h1
          className={`text-4xl font-bold mb-12 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
        >
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimationWrapper key={project.id} animation="slide-up" delay={index * 100}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                github={project.github}
                live={project.live}
              />
            </ScrollAnimationWrapper>
          ))}
        </div>
      </main>
    </div>
  );
}
