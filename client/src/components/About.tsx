import { motion } from "framer-motion";
import { Code, Cpu, Database, Globe } from "lucide-react";

export function About() {
  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Delivered", value: "50+" },
    { label: "Data Processed", value: "10PB+" },
    { label: "Models Deployed", value: "24" },
  ];

  return (
    <section className="py-24 bg-white/2 relative overflow-hidden" id="about">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Engineering the <br/>
              <span className="text-primary">Future of Data</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am a specialized AI Engineer focusing on the intersection of data infrastructure, 
              machine learning, and user experience. My work bridges the gap between complex 
              algorithmic backend systems and intuitive, actionable frontend visualizations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              From building autonomous trading bots to architecting enterprise-scale analytics 
              dashboards, I treat every project as an opportunity to simplify complexity 
              through code and design.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/20 text-primary">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="font-medium text-white">Machine Learning</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/20 text-accent">
                  <Database className="w-6 h-6" />
                </div>
                <span className="font-medium text-white">Big Data Infra</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-500">
                  <Code className="w-6 h-6" />
                </div>
                <span className="font-medium text-white">Full Stack Dev</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-500/20 text-green-500">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="font-medium text-white">Visualization</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors"
              >
                <span className="text-4xl md:text-5xl font-bold text-white mb-2 font-display">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
