// app/page.js
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { profile, stats, services, projects, clients, process, testimonials } from '@/lib/data';

const glass = 'rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl';

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="px-6 pt-36 pb-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <Reveal>
            <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/70 backdrop-blur">
              {profile.role}
            </span>
            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl">
              Immersive <span className="text-gradient">digital</span> experiences.
            </h1>
            <p className="mt-6 max-w-md text-lg text-white/60">{profile.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/work" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:opacity-90 active:scale-[0.97]">
                View Work <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white/80 transition hover:bg-white/5">
                Contact
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className={`${glass} relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden p-2`}>
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image src={profile.avatar} alt={profile.name} fill priority sizes="(max-width:768px) 100vw, 40vw" className="object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className={`${glass} p-6 text-center`}>
                <p className="text-3xl font-bold text-gradient md:text-4xl">{s.value}</p>
                <p className="mt-1 text-sm text-white/50">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <Reveal><h2 className="text-3xl font-bold text-white md:text-4xl">What I <span className="text-gradient">do</span>.</h2></Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className={`${glass} h-full p-7 transition hover:bg-white/10`}>
                  <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-3 text-white/60">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Work preview */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <Reveal><h2 className="text-3xl font-bold text-white md:text-4xl">Selected <span className="text-gradient">work</span>.</h2></Reveal>
            <Link href="/work" className="inline-flex items-center gap-1 text-sm font-semibold text-white/70 transition hover:text-white">View all <ArrowUpRight size={16} /></Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <Link href="/work" className={`${glass} group block overflow-hidden`}>
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image src={p.image} alt={p.title} fill sizes="(max-width:640px) 100vw, 33vw" className="object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-white">{p.title}</h3>
                    <p className="mt-1 text-sm text-white/50">{p.category} · {p.year}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/40">Trusted by teams at</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {clients.map((c) => <span key={c} className="text-lg font-semibold text-white/40 transition hover:text-white/70">{c}</span>)}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <Reveal><h2 className="text-3xl font-bold text-white md:text-4xl">How I <span className="text-gradient">work</span>.</h2></Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.08}>
                <div className={`${glass} h-full p-6`}>
                  <span className="text-2xl font-bold text-gradient">{p.step}</span>
                  <h3 className="mt-3 font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <Reveal><h2 className="text-3xl font-bold text-white md:text-4xl">Kind <span className="text-gradient">words</span>.</h2></Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className={`${glass} h-full p-7`}>
                  <p className="leading-relaxed text-white/80">“{t.quote}”</p>
                  <p className="mt-5 font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-white/50">{t.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
