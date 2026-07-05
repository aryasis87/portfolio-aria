'use client';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import { projects } from '@/lib/data';

const CATS = ['All', 'Web', 'App', 'Branding'];
const glass = 'rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl';

export default function WorkPage() {
  const [cat, setCat] = useState('All');
  const list = useMemo(() => (cat === 'All' ? projects : projects.filter((p) => p.category === cat)), [cat]);

  return (
    <main>
      <PageHeader kicker="Work" title="Selected" accent="projects." subtitle="Immersive web, app, and branding experiences I’ve crafted." />
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`rounded-full px-4 py-2 text-sm font-medium transition ${cat === c ? 'bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white' : 'border border-white/15 text-white/60 hover:text-white'}`}>
                {c}
              </button>
            ))}
          </div>
          <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((p) => (
                <motion.a key={p.title} href="#" layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.3 }} className={`${glass} group block overflow-hidden`}>
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image src={p.image} alt={p.title} fill sizes="(max-width:640px) 100vw, 33vw" className="object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
                    <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur">{p.category}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                      <span className="text-xs text-white/40">{p.year}</span>
                    </div>
                    <p className="mt-1 text-sm text-white/60">{p.desc}</p>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
