import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const projects = [
  {
    title: "Orbital Cube Tracking",
    description: "Software-defined radio experiment monitoring CubeSat telemetry in collaboration with amateur operators.",
    category: "Space Systems",
  },
  {
    title: "Autonomous Rover Stack",
    description: "Modular robotics platform with SLAM navigation and field-ready power management.",
    category: "Robotics",
  },
  {
    title: "Bio-inspired Flight",
    description: "Lightweight flapping wing prototype modeled after migratory birds, optimized for endurance.",
    category: "Aerospace",
  },
  {
    title: "Plasma Propulsion Simulation",
    description: "Numerical models benchmarking ion thruster performance with open-source solvers.",
    category: "Research",
  },
  {
    title: "Campus Microgrid",
    description: "Energy dashboard and predictive control for renewable-powered study spaces.",
    category: "Software",
  },
  {
    title: "Tactile Robotics Toolkit",
    description: "Haptic sensors and control loops enabling delicate manipulation for lab automation.",
    category: "Robotics",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Projects"
        title="Engineering and research work"
        description="Representative initiatives from robotics, aerospace, software, and scientific computing."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} title={project.title} description={project.description} tag={project.category} />
        ))}
      </div>
    </div>
  );
}
