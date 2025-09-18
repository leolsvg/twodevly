import Image from "next/image";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E4EEF0] text-[#16232A]">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-[#D5E1E4]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-2">
              <Image src="/img/logos/logo_nom.png" alt="Twodevly" width={200} height={200} />
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#services" className="hover:opacity-70">
                Services
              </a>
              <a href="#work" className="hover:opacity-70">
                Réalisations
              </a>
              <a href="#process" className="hover:opacity-70">
                Process
              </a>
              <a href="#about" className="hover:opacity-70">
                À propos
              </a>
              <a href="#contact" className="hover:opacity-70">
                Contact
              </a>
            </nav>
            <a
              href="#contact"
              className="inline-flex items-center rounded-2xl border border-[#16232A] px-4 py-2 text-sm font-medium hover:bg-[#16232A] hover:text-white transition-colors"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 py-20 lg:py-28 items-center">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#D5E1E4] bg-white px-3 py-1 text-xs">
                <span className="inline-block size-2 rounded-full bg-[#075065]" />
                TPE étudiante • tarifs accessibles
              </div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
                Des sites modernes qui{" "}
                <span className="underline decoration-2 decoration-[#FF5B04] underline-offset-4">
                  convertissent
                </span>
              </h1>
              <p className="mt-4 text-[#30424A] max-w-xl">
                Nous sommes deux étudiants passionnés qui créons des sites
                vitrines, e-commerce et sur-mesure pour donner vie à votre
                activité.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="rounded-2xl bg-[#FF5B04] px-5 py-3 text-white text-sm font-medium hover:opacity-90"
                >
                  Voir nos réalisations
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-[#D5E1E4] bg-white px-5 py-3 text-sm font-medium hover:bg-[#f7fbfc]"
                >
                  Parler de votre projet
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-xs text-[#3F5560]">
                <div className="flex items-center gap-2">
                  <span className="inline-block size-2 rounded-full bg-[#075065]" />
                  Next.js & React
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block size-2 rounded-full bg-[#FF5B04]" />
                  SEO & Performance
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block size-2 rounded-full bg-[#16232A]" />
                  Accompagnement humain
                </div>
              </div>
            </div>

            {/* Bloc images en grille */}
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-3xl border border-[#D5E1E4] bg-gradient-to-br from-white to-[#E4EEF0] shadow-sm p-4">
                <img src="/img/josephine/hero.png" alt="photo accueil" />
                <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl bg-white border border-[#D5E1E4] shadow-sm p-4">
                  {" "}
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl bg-white border border-[#D5E1E4] shadow-sm p-4">
                <p className="text-xs text-[#3F5560]">⏱ Livraison rapide</p>
                <p className="text-xs font-medium">Site vitrine dès 799€</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Services
            </h2>
            <p className="text-sm text-[#3F5560] max-w-md">
              Offres simples et transparentes, adaptées aux TPE, indépendants et
              associations.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Site vitrine",
                desc: "Présentez votre activité avec un site rapide, clair et responsive.",
                points: [
                  "1 à 5 pages",
                  "Design moderne",
                  "Formulaire de contact",
                ],
                price: "dès 799€",
              },
              {
                title: "E-commerce",
                desc: "Vendez en ligne simplement avec un parcours d’achat fluide.",
                points: [
                  "Paiement sécurisé",
                  "Catalogue produit",
                  "SEO inclus",
                ],
                price: "dès 1 499€",
              },
              {
                title: "Sur-mesure",
                desc: "Fonctionnalités spécifiques pour besoins uniques.",
                points: ["Back-office", "Intégrations API", "Support dédié"],
                price: "sur devis",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-3xl border border-[#D5E1E4] bg-white p-6 shadow-sm hover:shadow transition-shadow"
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EAF3F5] px-3 py-1 text-xs text-[#16232A]">
                  <span className="inline-block size-1.5 rounded-full bg-[#16232A]" />{" "}
                  {s.price}
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-[#3F5560]">{s.desc}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="inline-block size-1.5 rounded-full bg-[#075065]" />{" "}
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <WorkSection />

      {/* PROCESS */}
      <section id="process" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Notre méthode
          </h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: "Écoute",
                text: "On définit vos objectifs et votre audience.",
              },
              {
                step: "2",
                title: "Design",
                text: "Wireframe & maquette pour valider l’UI.",
              },
              {
                step: "3",
                title: "Dev",
                text: "Intégration rapide, SEO et performance.",
              },
              {
                step: "4",
                title: "Lancement",
                text: "Mise en ligne + accompagnement.",
              },
            ].map((x) => (
              <li
                key={x.step}
                className="relative rounded-3xl border border-[#D5E1E4] bg-white p-6 shadow-sm"
              >
                <span className="absolute -top-3 left-6 inline-flex items-center justify-center rounded-full bg-[#FF5B04] px-2 py-1 text-xs font-medium text-white">
                  Étape {x.step}
                </span>
                <h3 className="mt-3 font-semibold">{x.title}</h3>
                <p className="mt-2 text-sm text-[#3F5560]">{x.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Qui sommes-nous ?
              </h2>
              <p className="mt-4 text-[#3F5560] max-w-2xl">
                Deux étudiants développeurs web, complémentaires en front-end et
                back-end. Nous maîtrisons React/Next.js, Tailwind, et les bonnes
                pratiques SEO/Accessibilité.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
                <li className="flex items-center gap-2">
                  <span className="inline-block size-1.5 rounded-full bg-[#075065]" />{" "}
                  Responsive & performant
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block size-1.5 rounded-full bg-[#075065]" />{" "}
                  Orienté résultats
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block size-1.5 rounded-full bg-[#075065]" />{" "}
                  Hébergement & domaine
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block size-1.5 rounded-full bg-[#075065]" />{" "}
                  Suivi & maintenance
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-[#D5E1E4] bg-white aspect-[4/5] grid place-items-center text-[#5B7380] text-sm">
              Vos photos / avatars
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Ils nous recommandent
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Rapidité et qualité au rendez-vous.",
              "Design propre, super communication.",
              "On a gagné en visibilité !",
            ].map((q, i) => (
              <figure
                key={i}
                className="rounded-3xl border border-[#D5E1E4] bg-white p-6 shadow-sm"
              >
                <blockquote className="text-sm">“{q}”</blockquote>
                <figcaption className="mt-4 text-xs text-[#3F5560]">
                  Client satisfait
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Parlons de votre projet
              </h2>
              <p className="mt-4 text-[#3F5560] max-w-xl">
                Dites-nous ce dont vous avez besoin. Réponse en moins de 24h
                (jours ouvrés).
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                <li>📧 contact@duoweb.studio</li>
                <li>🔗 LinkedIn / WhatsApp (au choix)</li>
                <li>📍 France • Remote</li>
              </ul>
            </div>
            <form className="rounded-3xl border border-[#D5E1E4] bg-white p-6 shadow-sm">
              <div className="grid gap-4">
                <label className="text-sm">
                  Nom
                  <input
                    className="mt-1 w-full rounded-xl border border-[#CBDADF] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#16232A]"
                    placeholder="Votre nom"
                  />
                </label>
                <label className="text-sm">
                  Email
                  <input
                    type="email"
                    className="mt-1 w-full rounded-xl border border-[#CBDADF] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#16232A]"
                    placeholder="vous@exemple.fr"
                  />
                </label>
                <label className="text-sm">
                  Message
                  <textarea
                    rows={4}
                    className="mt-1 w-full rounded-xl border border-[#CBDADF] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#16232A]"
                    placeholder="Décrivez votre besoin"
                  />
                </label>
                <button
                  type="button"
                  className="rounded-2xl bg-[#FF5B04] px-5 py-3 text-white text-sm font-medium hover:opacity-90"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#D5E1E4] py-10 bg-white/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#3F5560]">
            <p className="flex items-center"><Image src="/img/logos/logo_planete.png" alt="Twodevly" width={150} height={150} />© {new Date().getFullYear()}  </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:opacity-80">
                Mentions légales
              </a>
              <a href="#" className="hover:opacity-80">
                CGU
              </a>
              <a href="#" className="hover:opacity-80">
                Confidentialité
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
