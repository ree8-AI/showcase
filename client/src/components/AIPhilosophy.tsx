import { motion } from "framer-motion";
import { Brain, Database, Zap } from "lucide-react";

export function AIPhilosophy() {
  const steps = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Ingestion",
      desc: "Raw signals are collected from diverse sources, cleaned, and normalized for processing."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Neural Processing",
      desc: "Deep learning models analyze patterns, predict outcomes, and optimize decisions in real-time."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Actionable Insight",
      desc: "Complex outputs are translated into clear, visual intelligence for human decision making."
    },
  ];

  return (
    <section className="py-24 container mx-auto px-4" id="ai-philosophy">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          How AI <span className="text-accent">Works</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          My approach to Artificial Intelligence is not just about algorithms, but about the 
          end-to-end pipeline of value creation.
        </p>
      </div>

      <div className="relative">
        {/* Connecting Line */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card border border-white/10 rounded-xl p-8 flex flex-col items-center text-center relative group hover:border-accent/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300 ring-1 ring-accent/20 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
