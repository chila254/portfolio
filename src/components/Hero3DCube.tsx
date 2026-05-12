"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { Code, Smartphone, Database, Server, Palette, Globe } from "lucide-react";

/**
 * A CSS 3D rotating cube. Each face shows a technology icon + label.
 * Pure CSS 3D — no extra dependencies needed.
 */
export default function Hero3DCube() {
  const { theme } = useTheme();

  const faces = [
    { label: "React",   icon: Code,       gradient: "from-blue-500 to-cyan-500" },
    { label: "Next.js", icon: Globe,      gradient: "from-gray-700 to-gray-900" },
    { label: "Flutter", icon: Smartphone, gradient: "from-sky-400 to-blue-600" },
    { label: "Kotlin",  icon: Smartphone, gradient: "from-purple-500 to-pink-500" },
    { label: "Django",  icon: Server,     gradient: "from-emerald-500 to-green-700" },
    { label: "Postgres",icon: Database,   gradient: "from-indigo-500 to-blue-700" },
  ];

  // Position transforms for the 6 cube faces (size = 160px, half = 80px).
  const transforms = [
    "translateZ(80px)",                       // front
    "rotateY(180deg) translateZ(80px)",       // back
    "rotateY(90deg) translateZ(80px)",        // right
    "rotateY(-90deg) translateZ(80px)",       // left
    "rotateX(90deg) translateZ(80px)",        // top
    "rotateX(-90deg) translateZ(80px)",       // bottom
  ];

  return (
    <div
      className="relative mx-auto flex items-center justify-center"
      style={{ perspective: "900px", width: "240px", height: "240px" }}
      aria-hidden="true"
    >
      {/* Soft glow behind cube */}
      <div
        className={`absolute inset-0 rounded-full blur-3xl ${
          theme === "dark" ? "bg-blue-500/20" : "bg-blue-400/30"
        }`}
      />

      <motion.div
        className="relative"
        style={{
          width: "160px",
          height: "160px",
          transformStyle: "preserve-3d",
        }}
        animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {faces.map((face, idx) => {
          const Icon = face.icon;
          return (
            <div
              key={face.label}
              className={`absolute inset-0 flex flex-col items-center justify-center rounded-2xl border backdrop-blur-md bg-gradient-to-br ${face.gradient} ${
                theme === "dark"
                  ? "border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.25)]"
                  : "border-white/40 shadow-[0_0_25px_rgba(59,130,246,0.25)]"
              }`}
              style={{
                transform: transforms[idx],
                backfaceVisibility: "hidden",
              }}
            >
              <Icon className="w-10 h-10 text-white drop-shadow" />
              <span className="mt-2 text-sm font-semibold text-white drop-shadow">
                {face.label}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
