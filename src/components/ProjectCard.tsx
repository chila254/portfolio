"use client";

import { useTheme } from "@/context/ThemeContext";
import { Github, ExternalLink, Calendar, Tag } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative"
    >
      <div className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 h-full ${
        theme === "dark"
          ? "bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 hover:border-slate-600"
          : "bg-white/50 border-slate-200 hover:bg-white/70 hover:border-slate-300"
      }`}>
        {/* Project Images */}
        {images && images.length > 0 && (
          <div className="mb-6 -m-6 rounded-t-2xl overflow-hidden">
            <div className="grid grid-cols-2 gap-1 p-6">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-lg"
                >
                  <Image
                    src={image}
                    alt={`${title} screenshot ${index + 1}`}
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Project Header */}
        <div className="flex items-start justify-between mb-4">
          <h3 className={`text-xl font-bold leading-tight ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            {title}
          </h3>
          <div className="flex gap-2">
            {github && (
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-lg transition-colors ${
                  theme === "dark"
                    ? "text-slate-400 hover:text-white hover:bg-slate-700"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <Github size={18} />
              </motion.a>
            )}
            {live && (
              <motion.a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-lg transition-colors ${
                  theme === "dark"
                    ? "text-slate-400 hover:text-white hover:bg-slate-700"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <ExternalLink size={18} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Project Description */}
        <p className={`mb-6 leading-relaxed ${
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        }`}>
          {description}
        </p>

        {/* Project Tags */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Tag className={`w-4 h-4 ${
              theme === "dark" ? "text-slate-500" : "text-slate-400"
            }`} />
            <span className={`text-sm font-medium ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}>
              Technologies
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${
                  theme === "dark"
                    ? "bg-blue-500/10 text-blue-300 border-blue-500/20"
                    : "bg-blue-50 text-blue-700 border-blue-200"
                }`}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Project Links */}
        <div className="flex gap-3">
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                theme === "dark"
                  ? "bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              <Github size={16} />
              View Code
            </motion.a>
          )}
          {live && (
            <motion.a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              <ExternalLink size={16} />
              Live Demo
            </motion.a>
          )}
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
}
