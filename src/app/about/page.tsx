"use client";

import { useTheme } from "@/context/ThemeContext";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

export default function About() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <main className="max-w-7xl mx-auto px-4 py-20 animate-fade-in-up">
        <h1
          className={`text-4xl font-bold mb-12 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          About Me
        </h1>

        <div className="flex flex-col gap-12">
          <ScrollAnimationWrapper animation="slide-up">
          <div>
            <h2
              className={`text-2xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Professional Summary
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I'm a BBIT graduate and software developer with a strong foundation in IT support, systems
              configuration and applied software development. I enjoy working across both the technical and creative
              sides of technology — from troubleshooting systems and configuring environments to building modern,
              user-focused applications.
            </p>
            <p
              className={`text-lg leading-relaxed mt-4 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I've had the opportunity to design and deploy real-world projects including MaxStream, an
              open-source android movie and TV series streaming platform built with Flutter, Firebase and REST APIs.
              Through this and other projects, I've gained hands-on experience in API integration, authentication
              systems, local databases and modern UI/UX patterns while applying clean architecture and secure coding practices.
            </p>
            <p
              className={`text-lg leading-relaxed mt-4 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              My background in IT support and networking has given me practical experience with system setup,
              troubleshooting, hardware diagnostics and endpoint configuration. This helps me approach development
              with a broader understanding of how software runs in real environments, not just in code editors.
            </p>
            <p
              className={`text-lg leading-relaxed mt-4 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I'm particularly interested in frontend and full-stack development using technologies like React,
              Next.js, TypeScript and modern UI frameworks. I enjoy building applications that solve real problems
              and continuously challenge myself to learn new tools and improve my skills — whether it's developing
              full applications, experimenting with new technologies or deploying projects from unconventional setups.
            </p>
            <p
              className={`text-lg leading-relaxed mt-4 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Currently, I'm looking for opportunities where I can grow as a developer, contribute to meaningful
              products and collaborate with teams that value learning, innovation and practical problem-solving.
            </p>
          </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="slide-up" delay={100}>
          <div>
            <h2
              className={`text-2xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Education
            </h2>
            <div className="flex flex-col gap-4">
              <div
                className={`p-6 rounded-lg transition-colors duration-200 ${
                  theme === "dark"
                    ? "bg-gray-900 hover:bg-gray-800"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <h3
                  className={`text-xl font-bold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Bachelor of Business Information Technology (BBIT)
                </h3>
                <p
                  className={theme === "dark" ? "text-gray-400" : "text-gray-600"}
                >
                  The Co-operative University of Kenya | 2021 - 2025
                </p>
                <p
                  className={theme === "dark" ? "text-gray-400" : "text-gray-600"}
                >
                  Second Class Lower Honours
                </p>
              </div>
              <div
                className={`p-6 rounded-lg transition-colors duration-200 ${
                  theme === "dark"
                    ? "bg-gray-900 hover:bg-gray-800"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <h3
                  className={`text-xl font-bold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  KCSE
                </h3>
                <p
                  className={theme === "dark" ? "text-gray-400" : "text-gray-600"}
                >
                  Oriwo Boys High School | 2017 - 2020
                </p>
                <p
                  className={theme === "dark" ? "text-gray-400" : "text-gray-600"}
                >
                  Mean Grade: B-
                </p>
              </div>
            </div>
          </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="slide-up" delay={200}>
          <div>
            <h2
              className={`text-2xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Experience
            </h2>
            <div
              className={`p-6 rounded-lg transition-colors duration-200 ${
                theme === "dark"
                  ? "bg-gray-900 hover:bg-gray-800"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <h3 className={`text-xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                IT Support Attache
              </h3>
              <p
                className={`font-semibold mb-3 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Alfa Solutions Ltd | May 6 - July 27, 2024
              </p>
              <ul
                className={`flex flex-col gap-2 list-disc list-inside ${
                  theme === "dark" ? "text-gray-400" : "text-gray-700"
                }`}
              >
                <li>Troubleshot and repaired laptops, desktops, and printers for end users</li>
                <li>Installed and configured Windows operating systems in networked environments</li>
                <li>Set up structured cabling, UPS systems, and network hardware for client offices</li>
                <li>Installed and configured CCTV and PABX systems</li>
                <li>Performed data recovery and hardware diagnostics</li>
                <li>Assisted with software installations, patching, and system updates</li>
              </ul>
            </div>
          </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="slide-up" delay={300}>
          <div>
            <h2
              className={`text-2xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Interests
            </h2>
            <p
              className={`leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {"Exploring emerging IT tools and digital technologies \u2022 Learning cybersecurity and software engineering best practices \u2022 Tech and innovation documentaries \u2022 Travel and cultural exploration"}
            </p>
          </div>
          </ScrollAnimationWrapper>
        </div>
      </main>
    </div>
  );
}
