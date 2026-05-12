"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { Code, Smartphone, Database, Palette, ChevronDown } from "lucide-react";

export default function Hero() {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const skills = [
    { name: "React", icon: Code, color: "from-blue-500 to-cyan-500" },
    { name: "Next.js", icon: Code, color: "from-gray-600 to-gray-800" },
    { name: "Flutter", icon: Smartphone, color: "from-blue-400 to-blue-600" },
    { name: "Kotlin", icon: Smartphone, color: "from-purple-500 to-pink-500" },
    { name: "Django", icon: Database, color: "from-green-500 to-emerald-600" },
    { name: "TypeScript", icon: Code, color: "from-blue-600 to-indigo-600" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Gradient Mesh Background */}
        <div className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950"
            : "bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50"
        }`} />

        {/* Floating Geometric Shapes */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className={`absolute top-20 left-20 w-32 h-32 rounded-full ${
            theme === "dark" ? "bg-blue-500/5" : "bg-blue-200/20"
          } blur-xl`}
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className={`absolute top-40 right-32 w-24 h-24 rounded-lg ${
            theme === "dark" ? "bg-purple-500/5" : "bg-purple-200/20"
          } blur-xl`}
          style={{ animationDelay: "2s" }}
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className={`absolute bottom-32 left-40 w-40 h-40 rounded-full ${
            theme === "dark" ? "bg-pink-500/5" : "bg-pink-200/20"
          } blur-xl`}
          style={{ animationDelay: "4s" }}
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className={`absolute bottom-20 right-20 w-28 h-28 rounded-lg ${
            theme === "dark" ? "bg-green-500/5" : "bg-green-200/20"
          } blur-xl`}
          style={{ animationDelay: "1s" }}
        />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className={`absolute inset-0 ${
            theme === "dark"
              ? "bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]"
              : "bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)]"
          } bg-[size:50px_50px]`} />
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 px-4 max-w-6xl mx-auto"
      >
        <div className="text-center">
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full backdrop-blur-sm border transition-all duration-300 hover:scale-105"
            style={{
              background: theme === "dark"
                ? "rgba(59, 130, 246, 0.1)"
                : "rgba(59, 130, 246, 0.05)",
              borderColor: theme === "dark"
                ? "rgba(59, 130, 246, 0.3)"
                : "rgba(59, 130, 246, 0.2)",
            }}
          >
            <div className={`w-2 h-2 rounded-full ${
              theme === "dark" ? "bg-green-400" : "bg-green-500"
            } animate-pulse`} />
            <span className={`text-sm font-medium ${
              theme === "dark" ? "text-blue-300" : "text-blue-700"
            }`}>
              Available for new opportunities
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
              Hi, I'm{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Franklin
                </span>
                {/* Animated underline */}
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </span>
            </h1>
            <p className={`text-xl sm:text-2xl lg:text-3xl font-light ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}>
              Building digital experiences that matter
            </p>
          </motion.div>

          {/* Role Tags */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {[
              "Full-Stack Developer",
              "Android Engineer",
              "UI/UX Enthusiast",
              "Open Source Contributor"
            ].map((role, index) => (
              <motion.span
                key={role}
                className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-slate-800/50 text-slate-300 border-slate-700 hover:bg-slate-700/50"
                    : "bg-white/50 text-slate-700 border-slate-200 hover:bg-white/70"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.1 }}
              >
                {role}
              </motion.span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto mb-12"
          >
            <p className={`text-lg sm:text-xl leading-relaxed ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}>
              I craft beautiful, functional applications using modern technologies.
              From responsive web apps with{" "}
              <span className="font-semibold text-blue-500">React & Next.js</span>{" "}
              to native mobile experiences with{" "}
              <span className="font-semibold text-purple-500">Flutter & Kotlin</span>
              , I bring ideas to life through code.
            </p>
            <p className={`text-lg sm:text-xl leading-relaxed mt-4 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}>
              Currently contributing to{" "}
              <a
                href="https://www.auramusic.site/"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold transition-all duration-300 ${
                  theme === "dark"
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-600 hover:text-blue-500"
                } hover:underline`}
              >
                AuraMusic
              </a>
              , an open-source Android music player with YouTube Music integration.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.a
              href="/projects"
              className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-all duration-300 group-hover:scale-105" />
              <span className="relative z-10 flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Explore My Work
              </span>
            </motion.a>
            <motion.a
              href="/contact"
              className={`px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 ${
                theme === "dark"
                  ? "border-slate-600 text-white hover:bg-slate-800 hover:border-slate-500"
                  : "border-slate-300 text-slate-900 hover:bg-slate-50 hover:border-slate-400"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>

          {/* Interactive Skills Grid */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <h3 className={`text-lg font-semibold mb-6 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}>
              Technologies I work with
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    className="group relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className={`p-4 rounded-2xl backdrop-blur-sm border transition-all duration-300 cursor-pointer ${
                      theme === "dark"
                        ? "bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 hover:border-slate-600"
                        : "bg-white/50 border-slate-200 hover:bg-white/70 hover:border-slate-300"
                    }`}>
                      <IconComponent className={`w-8 h-8 mb-2 transition-colors ${
                        theme === "dark" ? "text-slate-400 group-hover:text-white" : "text-slate-600 group-hover:text-slate-900"
                      }`} />
                      <span className={`text-sm font-medium ${
                        theme === "dark" ? "text-slate-300" : "text-slate-700"
                      }`}>
                        {skill.name}
                      </span>
                    </div>
                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`} />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`p-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                theme === "dark"
                  ? "bg-slate-800/50 border-slate-700 hover:bg-slate-700/50"
                  : "bg-white/50 border-slate-200 hover:bg-white/70"
              }`}
            >
              <ChevronDown className={`w-6 h-6 ${
                theme === "dark" ? "text-slate-400" : "text-slate-600"
              }`} />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
