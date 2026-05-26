import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RecruiterSnapshot from "./components/RecruiterSnapshot";
import About from "./components/About";
import ProblemsSolved from "./components/ProblemsSolved";
import GRCWorkflow from "./components/GRCWorkflow";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Metrics from "./components/Metrics";
import Projects from "./components/Projects";
import CaseStudies from "./components/CaseStudies";
import GRCLab from "./components/GRCLab";
import FrameworkMapping from "./components/FrameworkMapping";
import Artifacts from "./components/Artifacts";
import Education from "./components/Education";
import Learning from "./components/Learning";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-bg-primary text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <RecruiterSnapshot />
        <About />
        <ProblemsSolved />
        <GRCWorkflow />
        <Skills />
        <Experience />
        <Metrics />
        <Projects />
        <CaseStudies />
        <GRCLab />
        <FrameworkMapping />
        <Artifacts />
        <Education />
        <Learning />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
