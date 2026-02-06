import { Hero } from "@/components/Hero";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { About } from "@/components/About";
import { AIPhilosophy } from "@/components/AIPhilosophy";
import { NeuralBackground } from "@/components/NeuralBackground";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white">
      {/* Animated Background */}
      <NeuralBackground />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent origin-left z-50"
        style={{ scaleX }}
      />
      
      {/* Navigation (Simple Absolute) */}
      <nav className="absolute top-0 w-full z-50 px-6 py-6 flex justify-between items-center">
        <div className="text-xl font-bold font-mono tracking-tighter text-white">
          DEV.<span className="text-primary">AI</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-white/70">
          <a href="#projects" className="hover:text-primary transition-colors">Work</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#ai-philosophy" className="hover:text-primary transition-colors">Philosophy</a>
        </div>
      </nav>

      <main className="relative z-10">
        <Hero />
        <PortfolioGrid />
        <About />
        <AIPhilosophy />
      </main>

      <footer className="relative z-10 py-8 text-center text-white/40 text-sm border-t border-white/5">
        <p>© 2024 AI Portfolio. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}
