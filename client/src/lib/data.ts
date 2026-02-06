
import dashboardImg from "@/assets/project-dashboard.png";
import automationImg from "@/assets/project-automation.png";
import vizImg from "@/assets/project-viz.png";

export interface Project {
  id: string;
  title: string;
  category: "Dashboard" | "Automation" | "Visualization";
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Enterprise AI Analytics",
    category: "Dashboard",
    description: "Real-time predictive analytics dashboard for enterprise resource planning.",
    image: dashboardImg,
    technologies: ["React", "D3.js", "Python API", "WebSocket"],
  },
  {
    id: "2",
    title: "Supply Chain Neural Net",
    category: "Automation",
    description: "Automated supply chain optimization using deep reinforcement learning models.",
    image: automationImg,
    technologies: ["TensorFlow", "Node.js", "Kafka", "Docker"],
  },
  {
    id: "3",
    title: "Global Market Heatmap",
    category: "Visualization",
    description: "Interactive 3D geospatial visualization of global market trends and liquidity flows.",
    image: vizImg,
    technologies: ["Three.js", "WebGL", "React Three Fiber"],
  },
  {
    id: "4",
    title: "Customer Sentiment Monitor",
    category: "Dashboard",
    description: "NLP-powered dashboard tracking brand sentiment across social channels in real-time.",
    image: dashboardImg,
    technologies: ["NLP", "React", "Recharts", "FastAPI"],
  },
  {
    id: "5",
    title: "Bot Orchestrator",
    category: "Automation",
    description: "Visual workflow builder for managing fleets of autonomous trading bots.",
    image: automationImg,
    technologies: ["React Flow", "Redux", "gRPC"],
  },
  {
    id: "6",
    title: "Genetic Algo Visualizer",
    category: "Visualization",
    description: "Educational tool visualizing genetic algorithms evolving solutions in real-time.",
    image: vizImg,
    technologies: ["Canvas API", "TypeScript", "Math.js"],
  },
];
