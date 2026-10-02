import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <main className="flex min-h-[75vh] items-center justify-center px-6 pb-20 pt-36">
      <div className="max-w-lg rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Error 404</p>
        <h1 className="mt-4 text-5xl font-bold text-white">
          Lost in the <span className="text-gradient">glow</span>.
        </h1>
        <p className="mt-4 leading-relaxed text-white/70">
          This page doesn&apos;t exist, or it has moved. The work and the writing are still where you left them.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
            <ArrowLeft size={16} aria-hidden="true" /> Back home
          </Link>
          <Link href="/work" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            See the work
          </Link>
        </div>
      </div>
    </main>
  );
}
