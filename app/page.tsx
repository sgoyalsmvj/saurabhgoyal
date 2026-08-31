import Hero from "@/components/main/Hero";
import Experience from "@/components/main/Experience";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import ContactMe from "@/components/main/ContactMe";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <ContactMe />
    </main>
  );
}
