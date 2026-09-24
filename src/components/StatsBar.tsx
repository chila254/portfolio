"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Users, FolderOpen, GitCommit, Award } from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: StatItem[] = [
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "Clients Served",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FolderOpen,
    value: 100,
    suffix: "+",
    label: "Projects Delivered",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: GitCommit,
    value: 1000,
    suffix: "+",
    label: "GitHub Contributions",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Award,
    value: 99,
    suffix: "%",
    label: "Client Satisfaction",
    color: "from-orange-500 to-red-500",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold">
      {count}
      {suffix}
    </div>
  );
}

export default function StatsBar() {
  const { theme } = useTheme();

  return (
    <section
      className={`py-20 px-4 relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-r from-slate-950 via-blue-950/20 to-slate-950"
          : "bg-gradient-to-r from-slate-50 via-blue-50/30 to-slate-50"
      }`}
    >
      {/* Animated Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl ${
            theme === "dark" ? "bg-blue-500/10" : "bg-blue-300/20"
          }`}
        />
        <motion.div
          animate={{
            x: ["100%", "-100%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl ${
            theme === "dark" ? "bg-purple-500/10" : "bg-purple-300/20"
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 rounded-2xl backdrop-blur-sm border ${
            theme === "dark"
              ? "bg-slate-800/30 border-slate-700"
              : "bg-white/50 border-slate-200"
          }`}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white mb-4`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className={`text-sm mt-2 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}>
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
