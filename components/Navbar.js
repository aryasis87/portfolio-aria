'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { nav } from '@/lib/data';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href) => (href === '/' ? pathname === '/' : !!pathname && pathname.startsWith(href));
  const links = nav.slice(0, -1);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-white">
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400" />
          Aria
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`text-sm font-medium transition ${isActive(l.href) ? 'text-white' : 'text-white/60 hover:text-white'}`}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:opacity-90">
            Contact
          </Link>
        </div>

        <button className="text-white md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu" aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c1c]/95 p-3 backdrop-blur-xl md:hidden"
          >
            {nav.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${isActive(l.href) ? 'text-white' : 'text-white/60 hover:bg-white/5'}`}>
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
