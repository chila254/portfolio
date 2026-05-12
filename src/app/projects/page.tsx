"use client";

import { useTheme } from "@/context/ThemeContext";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { motion, type Variants } from "framer-motion";
import { FolderOpen, Code, ExternalLink } from "lucide-react";

export default function Projects() {
  const { theme } = useTheme();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    { label: "Projects Completed", value: projects.length, icon: FolderOpen },
    { label: "Technologies Used", value: new Set(projects.flatMap(p => p.tags)).size, icon: Code },
    { label: "Open Source", value: projects.filter(p => p.github).length, icon: ExternalLink },
  ];

  return (
    <div className={`min-h-screen relative overflow-hidden ${
      theme === "dark"
        ? "bg-gradient-to-b from-slate-950 to-slate-900"
        : "bg-gradient-to-b from-slate-50 to-white"
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]"
            : "bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)]"
        } bg-[size:40px_40px]`} />
      </div>

      <main className="max-w-7xl mx-auto px-4 py-24 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full backdrop-blur-sm border"
               style={{
                 background: theme === "dark"
                   ? "rgba(59, 130, 246, 0.1)"
                   : "rgba(59, 130, 246, 0.05)",
                 borderColor: theme === "dark"
                   ? "rgba(59, 130, 246, 0.3)"
                   : "rgba(59, 130, 246, 0.2)",
               }}>
            <FolderOpen className={`w-4 h-4 ${
              theme === "dark" ? "text-blue-400" : "text-blue-600"
            }`} />
            <span className={`text-sm font-medium ${
              theme === "dark" ? "text-blue-300" : "text-blue-700"
            }`}>
              Portfolio Showcase
            </span>
          </div>
          <h1 className={`text-4xl sm:text-5xl font-bold mb-6 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            Featured Projects
          </h1>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>
            A collection of applications and systems I've built, showcasing my journey
            from concept to production deployment.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-2xl backdrop-blur-sm border text-center transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-slate-800/50 border-slate-700 hover:bg-slate-800/70"
                    : "bg-white/50 border-slate-200 hover:bg-white/70"
                }`}
              >
                <IconComponent className={`w-8 h-8 mx-auto mb-3 ${
                  theme === "dark" ? "text-blue-400" : "text-blue-600"
                }`} />
                <div className={`text-2xl font-bold mb-1 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}>
                  {stat.value}
                </div>
                <div className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="h-fit"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                github={project.github}
                live={project.live}
                images={project.images}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className={`p-8 rounded-2xl backdrop-blur-sm border ${
            theme === "dark"
              ? "bg-slate-800/50 border-slate-700"
              : "bg-white/50 border-slate-200"
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
              Interested in Collaboration?
            </h3>
            <p className={`text-lg mb-6 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}>
              I'm always excited to work on new projects and explore innovative solutions.
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Start a Conversation
              </motion.a>
              <motion.a
                href="https://github.com/chila254"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300 ${
                  theme === "dark"
                    ? "border-slate-600 text-white hover:bg-slate-800"
                    : "border-slate-300 text-slate-900 hover:bg-slate-50"
                }`}
              >
                View GitHub Profile
              </motion.a>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
