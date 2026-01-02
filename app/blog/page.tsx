import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const articles = [
  {
    title: "Documenting robotics field tests",
    author: "A. Kamoliddin",
    date: "June 2025",
    abstract: "How we structure design logs, telemetry capture, and peer reviews for autonomous rovers.",
  },
  {
    title: "Open data for campus energy research",
    author: "Z. Mirzayev",
    date: "May 2025",
    abstract: "Building a reproducible pipeline for microgrid forecasting and community workshops.",
  },
  {
    title: "Lessons from student-led space payloads",
    author: "S. Mahmudov",
    date: "April 2025",
    abstract: "Coordinating multidisciplinary teams to prototype lightweight experiments for near-space flights.",
  },
];

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Blog"
        title="Research articles and updates"
        description="Highlights from ongoing work, published results, and reflections from the lab."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {articles.map((article) => (
          <Card key={article.title} title={article.title} description={article.abstract}>
            <p className="text-sm text-slate-300">
              {article.author} · {article.date}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
