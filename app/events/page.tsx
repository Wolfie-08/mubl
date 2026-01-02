import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const upcoming = [
  {
    title: "MUBL Bootcamp",
    description: "Hands-on build week featuring prototyping challenges, lab tours, and research communication sessions.",
    link: "https://bootcamp.mubl.uz",
    tag: "Upcoming",
  },
];

const past = [
  {
    title: "Space Fest 2025",
    description: "Space science festival hosted with New Uzbekistan University featuring student projects and public lectures.",
    link: "https://spacefest.newuu.uz",
    tag: "Festival",
  },
  {
    title: "Systems Research Colloquium",
    description: "A gathering of teams sharing results from simulations, robotics experiments, and peer-reviewed articles.",
    tag: "Colloquium",
  },
];

export default function EventsPage() {
  return (
    <div className="space-y-10">
      <SectionHeader
        eyebrow="Events"
        title="Gatherings that connect labs and learners"
        description="Upcoming opportunities and highlights from recent collaborations."
      />

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Upcoming Events</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {upcoming.map((event) => (
            <Card key={event.title} title={event.title} description={event.description} tag={event.tag}>
              <a href={event.link} className="text-sm font-semibold text-aurora underline-offset-4 hover:underline">
                {event.link}
              </a>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Past Events</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {past.map((event) => (
            <Card key={event.title} title={event.title} description={event.description} tag={event.tag}>
              {event.link ? (
                <a href={event.link} className="text-sm font-semibold text-aurora underline-offset-4 hover:underline">
                  {event.link}
                </a>
              ) : (
                <p className="text-sm text-slate-300">Documentation in progress</p>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
