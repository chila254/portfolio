"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/blog", label: "Blog" },
    { href: "/certifications", label: "Certifications" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        theme === "dark"
          ? "bg-slate-950/80 border-slate-800/50"
          : "bg-white/80 border-slate-200/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:via-purple-500 group-hover:to-pink-400 transition-all duration-300">
              Franklin Chilango
            </span>
          </Link>

          {/* Theme Toggle & Hamburger Menu */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl transition-all duration-300 transform hover:scale-110 active:scale-95 ${
                theme === "dark"
                  ? "bg-slate-800/50 text-yellow-400 hover:bg-slate-700/50 border border-slate-700"
                  : "bg-slate-100/50 text-slate-700 hover:bg-slate-200/50 border border-slate-200"
              } backdrop-blur-sm`}
              aria-label="Toggle theme"
            >
              <div className="relative w-5 h-5 overflow-hidden">
                <svg
                  className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${
                    theme === "dark"
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 rotate-90 scale-75"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.5 1.5H9v1h1.5V1.5zm0 16v1h1.5v-1h-1.5zM1.5 10v1.5h1V10H1.5zm16 0v1.5h1V10h-1zM3.65 3.65l-.7-.7L2.24 2.95l.7.7 1.41-1.4zm11.31 11.31l.7.7 1.41-1.41-.7-.7-1.41 1.41zM3.65 16.35l-.7.7 1.41 1.41.7-.7-1.41-1.41zm11.31-11.31l.7-.7 1.41 1.41-.7.7-1.41-1.41zM10 5a5 5 0 100 10 5 5 0 000-10z" />
                </svg>
                <svg
                  className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${
                    theme === "dark"
                      ? "opacity-0 -rotate-90 scale-75"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </div>
            </button>

            {/* Hamburger Menu */}
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2.5 rounded-xl transition-all duration-300 transform active:scale-95 ${
                  theme === "dark"
                    ? "bg-slate-800/50 text-white hover:bg-slate-700/50 border border-slate-700"
                    : "bg-slate-100/50 text-slate-900 hover:bg-slate-200/50 border border-slate-200"
                } backdrop-blur-sm`}
                aria-label="Toggle menu"
              >
                <div className="relative w-5 h-5">
                  <span className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}>
                    <span className={`block w-5 h-0.5 transition-all duration-300 ${
                      theme === "dark" ? "bg-white" : "bg-slate-900"
                    } ${
                      isOpen ? "rotate-90 opacity-0" : ""
                    }`} />
                  </span>
                  <span className={`block w-5 h-0.5 mt-1 transition-all duration-300 ${
                    theme === "dark" ? "bg-white" : "bg-slate-900"
                  } ${
                    isOpen ? "opacity-0" : ""
                  }`} />
                  <span className={`block w-5 h-0.5 mt-1 transition-all duration-300 ${
                    theme === "dark" ? "bg-white" : "bg-slate-900"
                  } ${
                    isOpen ? "-rotate-45 -mt-2" : ""
                  }`} />
                </div>
              </button>

              {/* Enhanced Dropdown Menu */}
              <div
                className={`absolute right-0 mt-3 w-64 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md border transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-slate-800/95 border-slate-700/50"
                    : "bg-white/95 border-slate-200/50"
                } ${
                  isOpen
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
                }`}
              >
                <div className="p-2">
                  {navLinks.map((link, index) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-3 rounded-xl transition-all duration-200 transform hover:scale-105 ${
                        theme === "dark"
                          ? "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                          : "text-slate-700 hover:bg-slate-100/50 hover:text-slate-900"
                      }`}
                      onClick={() => setIsOpen(false)}
                      style={{
                        animationDelay: isOpen ? `${index * 50}ms` : '0ms',
                        animation: isOpen ? 'fadeInUp 0.3s ease-out forwards' : 'none'
                      }}
                    >
                      <span className="font-medium">{link.label}</span>
                    </Link>
                  ))}
                </div>

                {/* Menu Footer */}
                <div className={`px-4 py-3 border-t ${
                  theme === "dark" ? "border-slate-700/50" : "border-slate-200/50"
                }`}>
                  <p className={`text-xs ${
                    theme === "dark" ? "text-slate-400" : "text-slate-500"
                  }`}>
                    Let's build something amazing together
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
