import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import About from "./components/About";
import Outlook from "./components/Outlook";
import Footer from "./components/Footer";

function Divider() {
  return <div className="section-divider my-16 max-w-4xl mx-auto" />;
}

export default function Home() {
  return (
    <div className="bg-[#09090b] min-h-screen text-zinc-50 font-sans selection:bg-zinc-800 selection:text-white">
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Experience />
      <Divider />
      <Outlook />
      <Divider />
      <Contact />
      <Footer />
    </div>
  );
}
