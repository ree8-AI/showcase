import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import type { Project } from "@/lib/data";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Link href={`/project/${project.id}`}>
        <Card className="overflow-hidden border-white/10 bg-black/40 backdrop-blur-md transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 h-full flex flex-col cursor-pointer">
          <div className="relative aspect-video overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-60" />
            <Badge className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border-primary/50 text-primary hover:bg-black/70">
              {project.category}
            </Badge>
            
            {/* Hover Overlay with Action */}
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
              <div className="bg-background/80 backdrop-blur-md px-4 py-2 rounded-full border border-primary/50 text-primary font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                View Details <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
          
          <CardHeader className="pb-2">
            <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </CardHeader>
          
          <CardContent className="flex-grow">
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </CardContent>
          
          <CardFooter className="flex flex-col items-start gap-4 pt-0">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <span 
                  key={tech} 
                  className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/70 border border-white/10"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/70 border border-white/10">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
