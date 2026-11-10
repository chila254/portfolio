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
    title: "MaxStream - Cross-Platform Movie & TV Streaming Application",
    description: "Open-source streaming app (v1.8.0) for Android, Android TV and desktop with per-profile data isolation, kids profiles with content filtering, Chromecast casting, download manager with quality/storage limits, subtitle settings synced via Firebase RTDB, and an ExoPlayer-based player with HLS buffer tuning. Ships with a TMDb-powered release calendar, a TikTok-style trailers feed and a self-hosted extractor API. Flutter/Dart on mobile, Kotlin/Jetpack Compose on TV and Compose Desktop for Windows.",
    tags: ["Flutter", "Dart", "Kotlin", "Jetpack Compose", "Compose Desktop", "Firebase", "SQLite", "ExoPlayer", "Chromecast", "TMDb", "Cloudflare Workers", "HLS Streaming"],
    github: "https://github.com/TeamMaxStream/MaxStream",
    live: "https://maxstreamweb.vercel.app",
  },
  {
    id: 2,
    title: "Calyth - Multi-Model AI Assistant",
    description: "AI assistant with a Kotlin/Ktor backend streaming from Groq and Gemini, plus a browser workspace and Android client. The workspace streams answers token-by-token, keeps conversations in folders, renders safe markdown with code copy, shares chats via public links, searches the web, reads uploaded images and generates images.",
    tags: ["Kotlin", "Ktor", "Groq", "Gemini", "SSE Streaming", "Android", "JavaScript", "Docker"],
    github: "https://github.com/chila254/Calyth",
    live: "https://chila254.github.io/Calyth/",
  },
  {
    id: 3,
    title: "Forex Predictor - Real-Time Market Prediction System",
    description: "Market prediction dashboard that polls live forex and commodity prices (Gold, EUR/USD, GBP/USD, USD/JPY) and forecasts them with linear regression, exponential regression, ARIMA and a weighted ensemble. Signals are regime-aware, ATR-based, and filtered when the expected move is smaller than volatility noise. Includes RSI, MACD, Bollinger, ATR and stochastic indicators, a correlation matrix and a 3D candlestick/forecast view.",
    tags: ["Node.js", "Express", "JavaScript", "ARIMA", "Technical Analysis", "Three.js", "Vercel"],
    github: "https://github.com/chila254/forex-predictor",
    live: "https://forex-predictor-five.vercel.app",
  },
  {
    id: 4,
    title: "AuraMusic - Full-Featured Android Music Player",
    description: "Feature-rich Android music player with YouTube Music integration, 6+ lyrics providers with word-by-word highlighting, offline voice control via VOSK wake word (\"Hey Aura\"), Google Cast, Android TV/Google TV support, Discord Rich Presence, Shazam recognition, SponsorBlock, parametric equalizer, dynamic video backdrops, Listen Together collaborative playback, and PO Token attestation for reliable streaming. Supports phones, TV and Android Auto.",
    tags: ["Kotlin", "Jetpack Compose", "Material 3", "Media3 ExoPlayer", "YouTube Music", "VOSK", "Google Cast", "Android TV", "Shazam", "Hilt", "Room", "Ktor"],
    github: "https://github.com/TeamAuraMusic/AuraMusic",
    live: "https://www.auramusic.site/",
    images: ["/images/auramusic-1.jpg", "/images/auramusic-2.jpg"],
  },
  {
    id: 5,
    title: "Cybersecurity Incident Tracker + Vulnerability Dashboard",
    description: "Incident and vulnerability management platform with network monitoring. Features real-time statistics, incident CRUD, CVE tracking, WiFi device tracking, DNS query logging, email/Slack notifications, audit logs and role-based access control.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Supabase", "Tailwind CSS", "React", "Python", "JWT Authentication", "Network Monitoring"],
    github: "https://github.com/chila254/cybersecurity-tracker",
    live: "https://cybersecurity-tracker.vercel.app/",
  },
  {
    id: 6,
    title: "MyAfya - Digital Healthcare & Telemedicine System",
    description: "Telemedicine platform with a Django backend supporting multiple user roles (patients, doctors, labs, pharmacies). Covers appointments, virtual consultations, electronic health records, prescriptions and payment integration, with security and compliance awareness throughout.",
    tags: ["Python", "Django", "Django REST Framework", "SQLite", "REST APIs"],
  },
  {
    id: 7,
    title: "Chilatech Company - Digital Transformation Agency",
    description: "Founded and ran a full-service digital agency delivering 100+ web and Android applications to 50+ clients with a 99% satisfaction rate. Specialised in custom website development and enterprise Android applications for businesses moving into the digital space.",
    tags: ["React", "Next.js", "Android", "Supabase", "PostgreSQL", "Tailwind", "CSS", "JavaScript", "Web Development", "Leadership"],
    live: "https://chilatech-company.vercel.app/",
  },
];
