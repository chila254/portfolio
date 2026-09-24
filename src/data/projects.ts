export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Chilatech Company - Digital Transformation Agency",
    description: "Founded and built a full-service digital agency delivering 100+ web and Android applications to 50+ clients with 99% satisfaction rate. Specializes in custom website development and enterprise Android applications, helping businesses thrive in the technology-driven world.",
    tags: ["React", "Next.js", "Android", "Supabase", "PostgreSQL", "Tailwind", "CSS", "JavaScript", "Web Development", "Leadership"],
    github: undefined,
    live: "https://chilatech-company.vercel.app/",
  },
  {
    id: 2,
    title: "MaxStream - Cross-Platform Movie & TV Streaming Application",
    description: "A full-featured, open-source streaming app for Android mobile and TV with per-profile data isolation, kids profiles with content filtering and theming, Chromecast casting, download management with adjustable quality/storage limits, subtitle settings synced via Firebase RTDB, and a custom ExoPlayer-based video player with HLS buffer tuning. Built with Flutter/Dart on mobile and Kotlin/Jetpack Compose on TV.",
    tags: ["Flutter", "Dart", "Kotlin", "Jetpack Compose", "Firebase", "SQLite", "ExoPlayer", "Chromecast", "REST APIs", "HLS Streaming", "Multi-Profile"],
    github: "https://github.com/chila254/maxstream",
    live: "https://github.com/chila254/maxstream",
  },
  {
    id: 3,
    title: "MyAfya - Digital Healthcare & Telemedicine System",
    description: "A comprehensive telemedicine platform with Django backend supporting multiple user roles (patients, doctors, labs, pharmacies). Features include appointments, virtual consultations, EHR, prescriptions, and payment integration with security and compliance awareness.",
    tags: ["Python", "Django", "Django REST Framework", "SQLite", "REST APIs"],
    github: "https://github.com",
    live: "https://github.com",
  },
  {
    id: 4,
    title: "Cybersecurity Incident Tracker + Vulnerability Dashboard",
    description: "Enterprise-grade incident and vulnerability management platform with network monitoring capabilities. Features real-time statistics, incident management with CRUD operations, CVE tracking, WiFi device tracking, DNS query logging, email/Slack notifications, comprehensive audit logs, and role-based access control.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Supabase", "Tailwind CSS", "React", "Python", "JWT Authentication", "Network Monitoring"],
    github: "https://github.com/chila254/cybersecurity-tracker",
    live: "https://cybersecurity-tracker.vercel.app/",
  },
  {
    id: 5,
    title: "AuraMusic - Full-Featured Android Music Player",
    description: "A feature-rich Android music player (v3.1.0) with YouTube Music integration, 6+ lyrics providers with word-by-word highlighting, offline voice control via VOSK wake word (\"Hey Aura\"), Google Cast, Android TV/Google TV support, Discord Rich Presence, Shazam music recognition, SponsorBlock, parametric equalizer, AuraCanvas dynamic video backdrops, Listen Together collaborative playback, and PO Token attestation for reliable YouTube streaming. Supports phones, TV, and Android Auto.",
    tags: ["Kotlin", "Jetpack Compose", "Material 3", "Media3 ExoPlayer", "YouTube Music", "VOSK", "Google Cast", "Android TV", "Discord RPC", "Shazam", "Hilt", "Room", "Ktor"],
    github: "https://github.com/TeamAuraMusic/AuraMusic",
    live: "https://www.auramusic.site/",
    images: ["/images/auramusic-1.jpg", "/images/auramusic-2.jpg"],
  },
];
