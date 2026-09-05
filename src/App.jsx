import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Metrics from "./components/Metrics";
import About from "./components/About";
import Skills from "./components/Skills";
import ProblemsSolved from "./components/ProblemsSolved";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import FrameworkMapping from "./components/FrameworkMapping";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-orange text-ink">
      <ScrollProgress />
      <Navbar />
      <main className="pt-32 sm:pt-36">
        <Hero />
        <Ticker />
        <Metrics />
        <About />
        <Skills />
        <ProblemsSolved />
        <Experience />
        <Projects />
        <FrameworkMapping />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
