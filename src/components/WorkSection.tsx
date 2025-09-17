import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function WorkSection() {
  return (
    <section id="work" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Réalisations
          </h2>
          <a
            href="#contact"
            className="text-sm underline underline-offset-4 decoration-[#FF5B04] hover:opacity-80"
          >
            Devenir notre prochain projet
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard
              key={p.slug}
              slug={p.slug}
              title={p.title}
              description={p.summary}
              image={p.cover}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
