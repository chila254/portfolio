"use client";

import { skills } from "@/data/skills";
import { useTheme } from "@/context/ThemeContext";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { motion, type Variants } from "framer-motion";
import {
  Code,
  Smartphone,
  Database,
  Server,
  Wrench,
  Users,
  Lightbulb,
  Target,
  CheckCircle
} from "lucide-react";

export default function Skills() {
  const { theme } = useTheme();

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
      description: "Building responsive, interactive user interfaces"
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      skills: ["Flutter & Dart", "Kotlin & Android Development"],
      description: "Cross-platform and native mobile applications"
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: ["Django & Django REST Framework", "FastAPI", "Python"],
      description: "Scalable APIs and server-side applications"
    },
    {
      title: "Database & Tools",
      icon: Database,
      color: "from-orange-500 to-red-500",
      skills: ["Firebase Authentication & Firestore", "REST API Integration", "SQL & SQLite Database Design", "Git & GitHub"],
      description: "Data management and development workflow"
    },
    {
      title: "IT Support",
      icon: Wrench,
      color: "from-gray-500 to-slate-500",
      skills: ["Hardware Troubleshooting", "Data Analysis (Excel, SPSS)", "WordPress"],
      description: "Technical support and system maintenance"
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "from-indigo-500 to-purple-500",
      skills: skills.soft,
      description: "Collaboration and communication expertise"
    }
  ];

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
            <Target className={`w-4 h-4 ${
              theme === "dark" ? "text-blue-400" : "text-blue-600"
            }`} />
            <span className={`text-sm font-medium ${
              theme === "dark" ? "text-blue-300" : "text-blue-700"
            }`}>
              My Expertise
            </span>
          </div>
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            Skills & Technologies
          </h2>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 h-full ${
                  theme === "dark"
                    ? "bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 hover:border-slate-600"
                    : "bg-white/50 border-slate-200 hover:bg-white/70 hover:border-slate-300"
                }`}>
                  {/* Category Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <Lightbulb className={`w-5 h-5 transition-colors ${
                      theme === "dark"
                        ? "text-slate-500 group-hover:text-yellow-400"
                        : "text-slate-400 group-hover:text-yellow-500"
                    }`} />
                  </div>

                  <h3 className={`text-xl font-bold mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}>
                    {category.title}
                  </h3>

                  <p className={`text-sm mb-4 leading-relaxed ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}>
                    {category.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className={`w-4 h-4 flex-shrink-0 ${
                          theme === "dark" ? "text-green-400" : "text-green-500"
                        }`} />
                        <span className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}>
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className={`text-lg mb-6 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>
            Interested in working together? Let's discuss your project.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300`}
          >
            Get In Touch
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
