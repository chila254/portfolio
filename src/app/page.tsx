import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import FeaturedProjects from "@/components/FeaturedProjects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <FeaturedProjects />
      <Skills />
    </main>
  );
}
