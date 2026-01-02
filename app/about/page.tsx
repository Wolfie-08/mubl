import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const values = [
  {
    title: "Curiosity first",
    description: "We ask precise questions, test ideas quickly, and share what we learn openly.",
  },
  {
    title: "Peer mentorship",
    description: "Students lead labs, review work together, and support each other's growth.",
  },
  {
    title: "Evidence-driven",
    description: "Data, prototypes, and documentation guide decisions more than opinions.",
  },
  {
    title: "Community impact",
    description: "We build solutions for campus, local partners, and the broader research ecosystem.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <SectionHeader
        eyebrow="About"
        title="Who we are"
        description="MUBL is a student-led engineering and research community that extends Mirzo Ulugh Beg's legacy of rigorous inquiry."
      />

      <div className="section-shell space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white">Our Mission</h3>
            <p className="text-slate-300">
              We create spaces where students can explore engineering, share research, and publish meaningful work. Our goal is to
              cultivate teams that build responsibly, communicate clearly, and inspire curiosity in others.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white">Inspired by Mirzo Ulugh Beg</h3>
            <p className="text-slate-300">
              Mirzo Ulugh Beg championed astronomy and mathematics through collaborative scholarship. We embrace that spirit by
              keeping our labs transparent, measured, and grounded in peer review.
            </p>
          </div>
        </div>
      </div>

      <SectionHeader title="Core Values" description="Principles that shape every lab, workshop, and publication." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value) => (
          <Card key={value.title} title={value.title} description={value.description} />
        ))}
      </div>
    </div>
  );
}
