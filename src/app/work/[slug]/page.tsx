// app/work/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.title} | twodevly`,
    description: p.summary,
    openGraph: {
      title: p.title,
      description: p.summary,
      images: p.cover ? [{ url: p.cover }] : [],
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[#E4EEF0] text-[#16232A]">
      <section className="border-b border-[#D5E1E4] bg-white/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/#realisations"
              className="text-sm underline underline-offset-4 decoration-[#FF5B04] hover:opacity-80"
            >
              ← Retour aux réalisations
            </Link>
            {project.siteUrl && (
              <a
                href={project.siteUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-2xl border border-[#16232A] px-4 py-2 text-sm font-medium hover:bg-[#16232A] hover:text-white transition-colors"
              >
                Voir le site
              </a>
            )}
          </div>

          <div className="mt-8">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="mt-2 text-[#3F5560]">{project.subtitle}</p>
            )}
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-[#3F5560]">
              {project.date && (
                <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#D5E1E4] px-3 py-1">
                  📅 {project.date}
                </span>
              )}
              {project.role && (
                <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#D5E1E4] px-3 py-1">
                  👤 {project.role}
                </span>
              )}
              <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#D5E1E4] px-3 py-1">
                🛠 {project.techs.join(" • ")}
              </span>
            </div>
          </div>

          {/* Cover */}
          {project.cover && (
            <div className="mt-8 rounded-3xl overflow-hidden border border-[#D5E1E4]">
              <Image
                src={project.cover}
                alt={project.title}
                width={1600}
                height={900}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          )}
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Résumé */}
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold">Contexte & objectifs</h2>
              <p className="mt-3 text-[#3F5560]">{project.summary}</p>

              {/* Galerie */}
              {project.screenshots?.length > 0 && (
                <>
                  <h3 className="mt-8 text-lg font-semibold">
                    Captures d’écran
                  </h3>
                  <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.screenshots.map((src, i) => (
                      <figure
                        key={src + i}
                        className="relative rounded-2xl overflow-hidden border border-[#D5E1E4] bg-white"
                      >
                        <Image
                          src={src}
                          alt={`${project.title} — capture ${i + 1}`}
                          width={800}
                          height={500}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                        />
                      </figure>
                    ))}
                  </div>
                </>
              )}

              {/* Résultats */}
              {project.results && project.results.length > 0 && (
                <>
                  <h3 className="mt-10 text-lg font-semibold">Résultats</h3>
                  <ul className="mt-3 space-y-2 text-[#3F5560]">
                    {project.results.map((r) => (
                      <li key={r} className="flex gap-2">
                        <span className="mt-1 inline-block size-1.5 rounded-full bg-[#075065]" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Encadré latéral */}
            <aside className="lg:col-span-1">
              <div className="rounded-3xl border border-[#D5E1E4] bg-white p-6 shadow-sm">
                <h3 className="font-semibold">Infos projet</h3>
                <ul className="mt-4 space-y-2 text-sm text-[#3F5560]">
                  {project.siteUrl && (
                    <li>
                      🔗 Site :{" "}
                      <a
                        href={project.siteUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-4 decoration-[#FF5B04] hover:opacity-80"
                      >
                        {project.siteUrl.replace(/^https?:\/\//, "")}
                      </a>
                    </li>
                  )}
                  {project.techs?.length > 0 && (
                    <li>🛠 Tech : {project.techs.join(" • ")}</li>
                  )}
                  {project.role && <li>👤 Rôle : {project.role}</li>}
                  {project.date && <li>📅 Année : {project.date}</li>}
                </ul>

                {project.features && project.features.length > 0 && (
                  <>
                    <h4 className="mt-6 font-semibold">Fonctionnalités</h4>
                    <ul className="mt-3 space-y-2 text-sm text-[#3F5560]">
                      {project.features.map((f) => (
                        <li key={f} className="flex gap-2">
                          <span className="mt-1 inline-block size-1.5 rounded-full bg-[#16232A]" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <div className="mt-6 flex gap-3">
                  {project.siteUrl && (
                    <a
                      href={project.siteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl bg-[#FF5B04] px-4 py-2 text-white text-sm font-medium hover:opacity-90"
                    >
                      Visiter le site
                    </a>
                  )}
                  <Link
                    href="/#contact"
                    className="rounded-2xl border border-[#D5E1E4] bg-white px-4 py-2 text-sm font-medium hover:bg-[#f7fbfc]"
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
