"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function Hero() {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section
      className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-900"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-0 left-0 w-96 h-96 rounded-full ${
            theme === "dark" ? "bg-blue-500/10" : "bg-blue-200/20"
          } blur-3xl animate-pulse`}
        ></div>
        <div
          className={`absolute bottom-0 right-0 w-96 h-96 rounded-full ${
            theme === "dark" ? "bg-purple-500/10" : "bg-purple-200/20"
          } blur-3xl animate-pulse delay-1000`}
        ></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 px-4 max-w-4xl"
      >
        {/* Greeting Badge */}
        <motion.div
          variants={itemVariants}
          className={`inline-block mb-6 px-4 py-2 rounded-full ${
            theme === "dark"
              ? "bg-blue-500/10 border border-blue-500/30"
              : "bg-blue-100 border border-blue-300"
          }`}
        >
          <span
            className={`text-sm font-semibold ${
              theme === "dark" ? "text-blue-300" : "text-blue-600"
            }`}
          >
            Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className={`text-6xl sm:text-7xl font-bold mb-6 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Franklin Chilango <br />
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Finyange
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className={`text-xl sm:text-2xl mb-8 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Frontend-Focused Full-Stack Developer
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className={`max-w-2xl mx-auto mb-12 text-lg ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          I build modern, responsive web applications using React, Next.js and TypeScript, and have experience
          developing mobile apps with Flutter and backend systems with Django. I'm passionate about creating
          real-world solutions and recently challenged myself to design and deploy my portfolio entirely from a
          tablet — proving that limitations shouldn't stop building. I'm always learning, building and looking for
          opportunities to grow as a developer and contribute to meaningful projects.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
        >
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              theme === "dark"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/50"
                : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-400/50"
            }`}
          >
            View My Projects
          </motion.a>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-300 ${
              theme === "dark"
                ? "border-gray-600 text-white hover:bg-gray-800"
                : "border-gray-300 text-gray-900 hover:bg-gray-100"
            }`}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Skills Preview */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {["React", "Next.js", "Flutter", "Django", "TypeScript", "Tailwind CSS"].map(
            (skill) => (
              <span
                key={skill}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {skill}
              </span>
            )
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
