"use client";

import Image from "next/image";
import Link from "next/link";
import {
  cubicBezier,
  easeInOut,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  CheckCircle2,
  ChevronRight,
  Code2,
  Mail,
  Phone,
  Rocket,
  Users,
  Zap,
} from "lucide-react";
import { useRef } from "react";
import type { FormEvent } from "react";

// === ANIMATIONS GLOBALES ===
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom, duration: 0.6, ease: easeInOut },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (custom = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: custom, duration: 0.5, ease: easeInOut },
  }),
};

// === SECTION STATS ===
function StatsSection() {
  const stats = [
    { value: "5+", label: "Projets réalisés" },
    { value: "100%", label: "Clients satisfaits" },
    { value: "24h", label: "Temps de réponse" },
    { value: "2", label: "Experts dévoués" },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="py-16 bg-[#EAF3F5]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={scaleIn}
              custom={i * 0.1}
              className="text-center"
            >
              <div className="text-4xl font-bold text-[#FF5B04] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[#3F5560]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// === SECTION REALISATIONS ===
function WorkSection() {
  const projects = [
    {
      title: "Cinélabs",
      image: "/img/cinelabs/hero.png",
      desc: "Site vitrine pour studio vidéo avec mise en avant des films et pages dédiées.",
      tags: ["Next.js", "TypeScript", "TailwindCSS"],
    },
    {
      title: "Joséphine",
      image: "/img/josephine/hero.png",
      desc: "Site de restaurant avec carte, photos et parcours de réservation.",
      tags: ["Next.js", "React", "SEO"],
    },
    {
      title: "Portfolio Eliott",
      image: "/img/portfolio-eliott/presentation.png",
      desc: "Portfolio personnel présentant projets, compétences et coordonnées.",
      tags: ["Next.js", "TypeScript", "Framer Motion"],
    },
    {
      title: "Portfolio Léo",
      image: "/img/portfolio-leo/presentation.png",
      desc: "Portfolio moderne avec sections projets et contact, design minimaliste.",
      tags: ["Next.js", "TailwindCSS", "Vercel"],
    },
  ];

  return (
    <>
      <motion.section
      id="realisations"
      className="py-24 bg-gradient-to-b from-white to-[#F8FBFC]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">
            Nos <span className="text-[#FF5B04]">réalisations</span>
          </h2>
          <p className="text-[#3F5560] max-w-2xl mx-auto">
            Quelques exemples concrets de projets développés avec passion,
            alliant performance, design et simplicité d’usage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => {
            const slug = p.title
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-+|-+$/g, '');
            return (
              <Link key={p.title} href={`/work/${slug}`} className="group block">
                <motion.div
                  variants={scaleIn}
                  custom={i * 0.15}
                  className="relative rounded-3xl border border-[#D5E1E4] bg-white p-6 shadow-sm hover:shadow-md transition-transform duration-150 ease-out hover:scale-105"
                >
                  <div className="mb-4 overflow-hidden rounded-xl">
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={600}
                      height={360}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-150 ease-out"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#FF5B04] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#3F5560] mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-[#F8FBFC] text-[#16232A] text-xs rounded-md border border-[#E4EEF0]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.section>

      {/* SERVICES */}
      <section id="services" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 ">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Services
            </h2>
            <p className="text-sm text-[#3F5560] max-w-md">
              Offres simples et transparentes, adaptées aux TPE, indépendants et
              associations.
            </p>
          </div>
          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Site vitrine",
                desc: "Présentez votre activité avec un site rapide, clair et responsive.",
                points: [
                  "1 à 5 pages",
                  "Design moderne",
                  "Formulaire de contact",
                ],
                price: "dès 800€",
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
    </>
  );
}

// === SECTION PROCESS ===
function ProcessSection() {
  const steps = [
    {
      icon: Users,
      title: "1. Découverte",
      desc: "Nous échangeons sur vos besoins, objectifs et vision pour définir le projet ensemble.",
    },
    {
      icon: Code2,
      title: "2. Conception",
      desc: "Création de maquettes et développement avec des technologies modernes et performantes.",
    },
    {
      icon: Rocket,
      title: "3. Lancement",
      desc: "Mise en ligne, formation et accompagnement pour assurer votre réussite.",
    },
  ];

  return (
    <motion.section
      id="process"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="py-24 bg-gradient-to-br from-[#16232A] to-[#075065] text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF5B04] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#075065] rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">
            Notre <span className="text-[#FF5B04]">processus</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Une méthodologie claire pour transformer votre idée en un site web
            performant et professionnel.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div key={s.title} variants={fadeUp} custom={i * 0.2}>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:bg-white/10 transition-all duration-300">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#FF5B04]/20 group-hover:bg-[#FF5B04] transition-colors">
                  <s.icon className="w-8 h-8 text-[#FF5B04]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-white/70">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// === PAGE PRINCIPALE ===
export default function Home() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 300], [0, 120]);
  const opacityHero = useTransform(scrollY, [0, 200], [1, 0.8]);
  const scaleHero = useTransform(scrollY, [0, 300], [1, 0.97]);
  const ySpringHero = useSpring(yHero, { stiffness: 70, damping: 25 });

  return (
    <div className="min-h-screen bg-[#E4EEF0] text-[#16232A] scroll-smooth">
      {/* HEADER */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: cubicBezier(0.22, 1, 0.36, 1) }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#D5E1E4]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <Image
              src="/img/logos/logo_nom.png"
              alt="Twodevly"
              width={140}
              height={30}
              className="h-8 w-auto"
              priority
            />
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {["Services", "Réalisations", "Process", "À propos", "Contact"].map(
              (item) => {
                const id = item
                  .toLowerCase()
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '') // remove accents
                  .replace(/\s+/g, '');
                return (
                  <a
                    key={item}
                    href={`#${id}`}
                    className="relative hover:text-[#FF5B04] transition-colors group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF5B04] group-hover:w-full transition-all" />
                  </a>
                );
              }
            )}
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#FF5B04] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#ff7b33] transition-colors"
          >
            <Zap className="w-4 h-4" />
            Demander un devis
          </a>
        </div>
      </motion.header>

      {/* HERO */}
      <section
        ref={heroRef}
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-[#E4EEF0] via-[#F8FBFC] to-white pt-32"
      >
        <motion.div
          style={{ y: ySpringHero, opacity: opacityHero, scale: scaleHero }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold max-w-4xl leading-tight">
            Créons ensemble votre{" "}
            <span className="bg-gradient-to-r from-[#FF5B04] to-[#ff7b33] bg-clip-text text-transparent">
              présence digitale
            </span>
          </h1>
          <p className="mt-8 text-[#30424A] max-w-2xl text-lg leading-relaxed">
            Deux développeurs passionnés qui créent des sites modernes,
            performants et optimisés pour le référencement. De la conception à
            l’hébergement, nous gérons tout.
          </p>
        </motion.div>
      </section>

      <StatsSection />
      <WorkSection />
      <ProcessSection />

      {/* À PROPOS */}
      <motion.section
        id="apropos"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="py-24 bg-gradient-to-b from-[#F8FBFC] to-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUp}>
            <h2 className="text-4xl font-semibold mb-6">
              <span className="text-[#FF5B04]">Qui</span> sommes-nous ?
            </h2>
            <p className="text-[#3F5560] mb-6 leading-relaxed text-lg">
              Nous sommes deux développeurs web passionnés, complémentaires en
              front-end et back-end. Notre mission est d’aider les indépendants
              et petites entreprises à se démarquer en ligne avec des sites à la
              fois élégants et performants.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Responsive & performant",
                "Optimisé SEO",
                "Hébergement sécurisé",
                "Support réactif",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#EAF3F5] flex items-center justify-center group-hover:bg-[#FF5B04] transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-[#075065] group-hover:text-white" />
                  </div>
                  <span className="text-[#3F5560] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={scaleIn}
            className="rounded-3xl border border-[#D5E1E4] bg-gradient-to-br from-white to-[#F8FBFC] shadow-xl p-10"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF5B04] to-[#ff7b33] mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#16232A]">
              Notre philosophie
            </h3>
            <p className="text-[#3F5560] mb-6">
              Chaque projet est une collaboration. Nous privilégions la clarté,
              la transparence et la qualité pour que votre site reflète
              parfaitement votre vision et vos valeurs.
            </p>
            <ul className="space-y-2 text-sm text-[#3F5560]">
              <li>• Écoute active</li>
              <li>• Transparence totale</li>
              <li>• Qualité premium</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="py-24 bg-gradient-to-br from-[#16232A] via-[#075065] to-[#16232A] text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF5B04] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#075065] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-4">
              Parlons de <span className="text-[#FF5B04]">votre projet</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Une idée, un besoin, un projet ? Contactez-nous et recevez une
              réponse en moins de 24h.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              variants={fadeUp}
              className="flex flex-col justify-center space-y-8"
            >
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#FF5B04]" />
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <a
                    href="mailto:contact@twodevly.com"
                    className="text-white/80 hover:text-[#FF5B04] transition-colors"
                  >
                    contact@twodevly.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#FF5B04]" />
                <div>
                  <h4 className="font-semibold text-lg">Téléphone</h4>
                  <a
                    href="tel:+33646546106"
                    className="text-white/80 hover:text-[#FF5B04] transition-colors"
                  >
                    +33 6 46 54 61 06
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.form
              variants={scaleIn}
              className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 shadow-2xl"
              onSubmit={(e: FormEvent) => e.preventDefault()}
            >
              <div className="grid gap-6">
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:ring-2 focus:ring-[#FF5B04]"
                  required
                />
                <input
                  type="email"
                  placeholder="vous@exemple.fr"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:ring-2 focus:ring-[#FF5B04]"
                  required
                />
                <textarea
                  rows={4}
                  placeholder="Décrivez votre besoin..."
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:ring-2 focus:ring-[#FF5B04]"
                  required
                ></textarea>
                <motion.button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-[#FF5B04] to-[#ff7b33] py-3.5 font-semibold text-white shadow-lg shadow-[#FF5B04]/30 hover:shadow-[#FF5B04]/50"
                >
                  Envoyer le message
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#0F1A1F] text-white py-10 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/img/logos/logo_planete.png"
              alt="Twodevly planète"
              width={36}
              height={36}
              className="h-8 w-auto"
            />
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} Twodevly. Tous droits réservés.
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/60">
            {["Mentions légales", "CGU", "Confidentialité"].map((l) => (
              <a
                key={l}
                href="#"
                className="hover:text-[#FF5B04] transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FF5B04] via-[#ff7b33] to-[#FF5B04]" />
      </footer>
    </div>
  );
}
