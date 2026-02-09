"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/certifications", label: "Certifications" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`${
        theme === "dark"
          ? "bg-black border-gray-800"
          : "bg-white border-gray-200"
      } border-b sticky top-0 z-50 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Franklin
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul
            className={`hidden md:flex gap-8 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition-colors duration-200 ${
                    theme === "dark" ? "hover:text-blue-400" : "hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme Toggle & Hamburger */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-gray-800 text-yellow-400"
                  : "bg-gray-200 text-gray-800"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.5 1.5H9v1h1.5V1.5zm0 16v1h1.5v-1h-1.5zM1.5 10v1.5h1V10H1.5zm16 0v1.5h1V10h-1zM3.65 3.65l-.7-.7L2.24 2.95l.7.7 1.41-1.4zm11.31 11.31l.7.7 1.41-1.41-.7-.7-1.41 1.41zM3.65 16.35l-.7.7 1.41 1.41.7-.7-1.41-1.41zm11.31-11.31l.7-.7 1.41 1.41-.7.7-1.41-1.41zM10 5a5 5 0 100 10 5 5 0 000-10z" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-900"
              }`}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`md:hidden pb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-2 rounded-lg transition-colors duration-200 ${
                      theme === "dark"
                        ? "hover:bg-gray-800"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
