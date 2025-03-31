import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Outlook from "./components/Outlook";
import Contact from "./components/Contact";
import About from "./components/About";

export const metadata = {
  title: "Lakshya Portfolio",
  description: "A modern portfolio with star wars theme.",
};

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 pt-15 max-sm:pt-20">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Outlook />
      <Contact />
    </main>
  );
}
