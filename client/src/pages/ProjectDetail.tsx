import { useRoute, Link } from "wouter";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Code, Layers, Zap } from "lucide-react";
import NotFound from "./not-found";
import { NeuralBackground } from "@/components/NeuralBackground";

export default function ProjectDetail() {
  const [match, params] = useRoute("/project/:id");
  
  if (!match) return <NotFound />;
  
  const project = projects.find(p => p.id === params.id);
  
  if (!project) return <NotFound />;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white pb-20">
      <NeuralBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-background/50 backdrop-blur-sm border-b border-white/5">
        <Link href="/">
          <div className="text-xl font-bold font-mono tracking-tighter text-white cursor-pointer hover:opacity-80 transition-opacity">
            DEV.<span className="text-primary">AI</span>
          </div>
        </Link>
        <Link href="/">
          <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Works
          </Button>
        </Link>
      </nav>

      <main className="container mx-auto px-4 pt-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-wrap gap-2 items-center mb-4">
              <Badge className="bg-primary/20 text-primary border-primary/50 px-3 py-1 text-sm">
                {project.category}
              </Badge>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Badge variant="outline" className="text-muted-foreground hover:text-white border-white/20 gap-1 cursor-pointer">
                    Live Demo <ExternalLink className="w-3 h-3" />
                  </Badge>
                </a>
              )}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              {project.title}
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="rounded-xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl shadow-primary/10 mb-16 aspect-video relative group"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-50" />
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {project.longDescription && (
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-accent" /> Overview
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {project.longDescription}
                  </p>
                </section>
              )}

              {project.challenge && (
                <section className="bg-white/5 rounded-xl p-6 border border-white/5">
                  <h3 className="text-xl font-bold text-white mb-2">The Challenge</h3>
                  <p className="text-muted-foreground">
                    {project.challenge}
                  </p>
                </section>
              )}

              {project.solution && (
                <section className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                  <h3 className="text-xl font-bold text-primary mb-2">The Solution</h3>
                  <p className="text-muted-foreground">
                    {project.solution}
                  </p>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-card border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Code className="w-4 h-4 text-primary" /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 rounded-md bg-white/5 text-sm text-white/80 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.features && (
                <div className="bg-card border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-accent" /> Key Features
                  </h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full h-12 text-lg bg-primary hover:bg-primary/90 text-white">
                    Visit Project <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              )}
            </div>

          </div>
        </motion.div>
      </main>
    </div>
  );
}
