// src/app/page.tsx
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import About from "./components/About";
import Outlook from "./components/Outlook";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Outlook />
      <Contact />
    </main>
  );
}
