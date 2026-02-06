
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
  longDescription?: string;
  features?: string[];
  challenge?: string;
  solution?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Enterprise AI Analytics",
    category: "Dashboard",
    description: "Real-time predictive analytics dashboard for enterprise resource planning.",
    image: dashboardImg,
    technologies: ["React", "D3.js", "Python API", "WebSocket"],
    link: "https://example.com/demo",
    longDescription: "A comprehensive enterprise analytics platform designed to unify data streams from across the organization. This dashboard processes millions of data points daily to provide real-time insights into operational efficiency, resource allocation, and predictive maintenance needs.",
    features: [
      "Real-time data streaming via WebSockets",
      "Predictive anomaly detection models",
      "Interactive D3.js visualizations",
      "Role-based access control"
    ],
    challenge: "The client needed to visualize terabytes of fragmented data in real-time without latency issues.",
    solution: "Implemented a custom WebSocket layer for data aggregation and a WebGL-accelerated frontend to handle high-frequency updates smoothly."
  },
  {
    id: "2",
    title: "Supply Chain Neural Net",
    category: "Automation",
    description: "Automated supply chain optimization using deep reinforcement learning models.",
    image: automationImg,
    technologies: ["TensorFlow", "Node.js", "Kafka", "Docker"],
    link: "https://github.com/example/supply-chain",
    longDescription: "An autonomous supply chain management system driven by deep reinforcement learning. The system predicts demand spikes and automatically adjusts inventory orders and logistics routing to minimize costs and delivery times.",
    features: [
      "Deep Reinforcement Learning agents",
      "Automated procurement triggers",
      "Multi-echelon inventory optimization",
      "Containerized microservices architecture"
    ],
    challenge: "Traditional heuristic models failed to adapt to rapid market shifts during supply shocks.",
    solution: "Deployed a self-learning agent that continuously trains on new market data, reducing inventory waste by 30% within the first quarter."
  },
  {
    id: "3",
    title: "Global Market Heatmap",
    category: "Visualization",
    description: "Interactive 3D geospatial visualization of global market trends and liquidity flows.",
    image: vizImg,
    technologies: ["Three.js", "WebGL", "React Three Fiber"],
    link: "https://example.com/heatmap",
    longDescription: "A cinematic 3D visualization of global financial markets. This tool allows traders to visualize liquidity flows and market volatility across different geographical regions in real-time, using a high-performance WebGL rendering engine.",
    features: [
      "3D Interactive Globe",
      "Real-time market data integration",
      "GPU-accelerated particle systems",
      "Custom shader effects for data density"
    ],
    challenge: "Rendering thousands of live data points on a 3D globe in the browser without crashing low-end devices.",
    solution: "Used instanced mesh rendering and custom GLSL shaders to offload computation to the GPU, achieving 60fps on standard laptops."
  },
  {
    id: "4",
    title: "Customer Sentiment Monitor",
    category: "Dashboard",
    description: "NLP-powered dashboard tracking brand sentiment across social channels in real-time.",
    image: dashboardImg,
    technologies: ["NLP", "React", "Recharts", "FastAPI"],
    longDescription: "A sentiment analysis dashboard that aggregates social media, news, and review site data. It uses Natural Language Processing to classify public opinion and alert brand managers to potential PR crises before they escalate.",
    features: [
      "Multi-channel data aggregation",
      "Sentiment trend analysis",
      "Keyword cloud generation",
      "Automated alert system"
    ],
    challenge: "Filtering out noise and sarcasm from social media data to provide accurate sentiment scores.",
    solution: "Fine-tuned a transformer model on industry-specific datasets to improve classification accuracy by 25% over off-the-shelf models."
  },
  {
    id: "5",
    title: "Bot Orchestrator",
    category: "Automation",
    description: "Visual workflow builder for managing fleets of autonomous trading bots.",
    image: automationImg,
    technologies: ["React Flow", "Redux", "gRPC"],
    longDescription: "A visual programming interface for designing and deploying algorithmic trading strategies. Users can drag and drop logic blocks to create complex trading bots without writing code, then deploy them to a serverless cluster.",
    features: [
      "Visual drag-and-drop logic builder",
      "Backtesting simulation engine",
      "Live fleet monitoring",
      "Hot-swappable strategy modules"
    ],
    challenge: "Abstracting complex trading logic into an intuitive visual interface for non-technical traders.",
    solution: "Built a custom node-based editor using React Flow with a transpiler that converts visual graphs into executable Python code."
  },
  {
    id: "6",
    title: "Genetic Algo Visualizer",
    category: "Visualization",
    description: "Educational tool visualizing genetic algorithms evolving solutions in real-time.",
    image: vizImg,
    technologies: ["Canvas API", "TypeScript", "Math.js"],
    link: "https://example.com/genetic-algo",
    longDescription: "An interactive educational tool that demonstrates how genetic algorithms work. Users can define fitness functions and watch as a population of agents evolves over generations to solve complex pathfinding and optimization problems.",
    features: [
      "Real-time evolution simulation",
      "Adjustable mutation and crossover rates",
      "Interactive obstacles and goals",
      "Performance metrics graphing"
    ],
    challenge: "Explaining the black-box nature of evolutionary algorithms to students in a visual way.",
    solution: "Created a simplified 2D physics environment where the 'DNA' of agents directly controlled their physical attributes, making the evolution visible and intuitive."
  },
];
