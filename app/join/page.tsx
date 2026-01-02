import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const reasons = [
  {
    title: "Why join MUBL?",
    description: "Access labs, mentorship, and peer-led workshops that emphasize practical engineering and research rigor.",
  },
  {
    title: "Who can join?",
    description: "Undergraduates, graduates, and early researchers who value collaboration and disciplined documentation.",
  },
];

export default function JoinPage() {
  return (
    <div className="space-y-10">
      <SectionHeader
        eyebrow="Join"
        title="Become part of the community"
        description="Collaborate on projects, publish research, and mentor the next generation of builders."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {reasons.map((reason) => (
          <Card key={reason.title} title={reason.title} description={reason.description} />
        ))}
      </div>

      <div className="section-shell flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">Ready to contribute?</h3>
          <p className="text-sm text-slate-300">
            Share your interests, recent work, and how you hope to grow with MUBL. We'll connect you with an active lab.
          </p>
        </div>
        <Link href="https://mubl.uz" className="button-primary">
          Apply to Join
        </Link>
      </div>
    </div>
  );
}
