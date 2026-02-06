import { useState } from "react";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

export function PortfolioGrid() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Dashboard", "Automation", "Visualization"];

  const filteredProjects = projects.filter((project) => 
    filter === "All" ? true : project.category === filter
  );

  return (
    <section className="py-24 container mx-auto px-4" id="projects">
      <div className="flex flex-col items-center mb-16 space-y-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white">Selected Works</h2>
        <div className="h-1 w-20 bg-primary rounded-full" />
        <p className="text-muted-foreground max-w-2xl">
          A curated selection of high-impact projects demonstrating expertise in data systems, 
          AI integration, and visual analytics.
        </p>
      </div>

      <Tabs defaultValue="All" className="w-full flex flex-col items-center" onValueChange={setFilter}>
        <TabsList className="mb-12 bg-white/5 border border-white/10 p-1 rounded-full">
          {categories.map((cat) => (
            <TabsTrigger 
              key={cat} 
              value={cat}
              className="rounded-full px-6 py-2 text-sm font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </Tabs>
    </section>
  );
}
