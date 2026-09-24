"use client";

import { motion, type Variants } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { ExternalLink, Github, ArrowRight, Star, Smartphone, Monitor, Globe } from "lucide-react";

const featuredProjects = [
  {
    id: 2,
    title: "MaxStream",
    subtitle: "Cross-Platform Streaming App",
    description:
      "Full-featured movie & TV streaming app with per-profile isolation, kids profiles, Chromecast, download management, custom ExoPlayer, and Firebase cloud sync. Built with Flutter (mobile) and Kotlin/Jetpack Compose (TV).",
    tags: ["Flutter", "Kotlin", "Firebase", "ExoPlayer", "Chromecast", "Multi-Profile"],
    github: "https://github.com/chila254/maxstream",
    image: "/images/maxstream-hero.jpg",
    icon: Smartphone,
    color: "from-red-500 to-pink-600",
    stats: { stars: "10+", forks: "5+", platforms: "2" },
  },
  {
    id: 5,
    title: "AuraMusic",
    subtitle: "Android Music Player v3.1.0",
    description:
      "Feature-rich Android music player with YouTube Music integration, 6+ lyrics providers, offline voice control via VOSK, Google Cast, Android TV, Discord Rich Presence, Shazam recognition, and SponsorBlock.",
    tags: ["Kotlin", "Jetpack Compose", "Media3", "VOSK", "Google Cast", "Android TV"],
    github: "https://github.com/TeamAuraMusic/AuraMusic",
    live: "https://www.auramusic.site/",
    image: "/images/auramusic-hero.jpg",
    icon: Globe,
    color: "from-purple-500 to-indigo-600",
    stats: { stars: "50+", downloads: "10K+", features: "30+" },
  },
  {
    id: 1,
    title: "Cybersecurity Dashboard",
    subtitle: "Enterprise Security Platform",
    description:
      "Production-grade incident tracking & vulnerability management with network monitoring, real-time analytics, and multi-tenant isolation. Built with FastAPI, React, and PostgreSQL.",
    tags: ["FastAPI", "React", "PostgreSQL", "Supabase", "Security", "Real-time"],
    github: "https://github.com/chila254/cybersecurity-tracker",
    image: "/images/cybersecurity-hero.jpg",
    icon: Monitor,
    color: "from-green-500 to-emerald-600",
    stats: { features: "50+", modules: "8", status: "Production" },
  },
];

export default function FeaturedProjects() {
  const { theme } = useTheme();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      className={`py-24 px-4 relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-b from-slate-950 to-slate-900"
          : "bg-gradient-to-b from-slate-50 to-white"
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]"
            : "bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)]"
        } bg-[size:30px_30px]`} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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
            <Star className={`w-4 h-4 ${
              theme === "dark" ? "text-yellow-400" : "text-yellow-500"
            }`} />
            <span className={`text-sm font-medium ${
              theme === "dark" ? "text-blue-300" : "text-blue-700"
            }`}>
              Featured Work
            </span>
          </div>
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            Projects I&apos;ve Built
          </h2>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>
            Open-source applications solving real problems with modern tech
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className={`rounded-2xl overflow-hidden backdrop-blur-sm border transition-all duration-300 h-full flex flex-col ${
                  theme === "dark"
                    ? "bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 hover:border-slate-600"
                    : "bg-white/50 border-slate-200 hover:bg-white/70 hover:border-slate-300"
                }`}>
                  {/* Project Image / Gradient Header */}
                  <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent className="w-16 h-16 text-white/80" />
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
                        {project.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className={`text-2xl font-bold mb-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}>
                      {project.title}
                    </h3>

                    <p className={`text-sm leading-relaxed mb-4 flex-1 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}>
                      {project.description}
                    </p>

                    {/* Stats Row */}
                    <div className="flex gap-4 mb-4">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className={`text-lg font-bold ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}>
                            {value}
                          </div>
                          <div className={`text-xs capitalize ${
                            theme === "dark" ? "text-gray-500" : "text-gray-400"
                          }`}>
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            theme === "dark"
                              ? "bg-slate-700/50 text-slate-300"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          theme === "dark"
                            ? "bg-slate-700/50 text-slate-400"
                            : "bg-slate-100 text-slate-500"
                        }`}>
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          theme === "dark"
                            ? "bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                        }`}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                            theme === "dark"
                              ? "bg-blue-600/20 text-blue-400 hover:bg-blue-600/30"
                              : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                          }`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              theme === "dark"
                ? "bg-slate-800/50 text-slate-300 border border-slate-700 hover:bg-slate-700/50 hover:border-slate-600"
                : "bg-white/50 text-slate-700 border border-slate-200 hover:bg-white/70 hover:border-slate-300"
            }`}
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
