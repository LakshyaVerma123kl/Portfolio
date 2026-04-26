"use client";

const aspirations = [
  {
    title: "Backend Architecture",
    description: "Deepening expertise in distributed systems, microservices, and system design.",
  },
  {
    title: "Open Source",
    description: "Contributing to impactful open-source projects and building community.",
  },
  {
    title: "Cloud & DevOps",
    description: "Expanding skills in cloud-native development and infrastructure automation.",
  },
  {
    title: "AI Integration",
    description: "Exploring LLMs and ML integrations to build smarter, more intuitive applications.",
  },
];

export default function Outlook() {
  return (
    <section id="outlook" className="py-12 px-6 max-w-4xl mx-auto">
      <div className="mb-12">
        <h2 className="text-xl font-bold tracking-tight text-zinc-50 mb-2">Outlook.</h2>
        <p className="text-zinc-500 font-mono text-sm">What&apos;s next</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
        {aspirations.map((item, index) => (
          <div key={index} className="bg-[#09090b] p-6 sm:p-8">
            <h3 className="text-zinc-50 font-medium text-sm mb-2">{item.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
