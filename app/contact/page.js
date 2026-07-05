'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Check } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { profile } from '@/lib/data';

const glass = 'rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return; setSent(true); };
  const field = 'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-fuchsia-400';

  return (
    <main>
      <PageHeader kicker="Contact" title="Let’s work" accent="together." subtitle="Open for freelance & collaboration. Tell me about your project." />
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-5">
            <Info icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <Info icon={Phone} label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, '')}`} />
            <Info icon={MapPin} label="Location" value={profile.location} />
            <div className={`${glass} p-5`}>
              <span className="flex items-center gap-2 text-sm font-semibold text-white">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" /> Available for new projects
              </span>
              <p className="mt-2 text-sm text-white/60">Currently booking projects for the next quarter.</p>
            </div>
            <div className="flex flex-wrap gap-5 pt-1">
              {profile.socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white/50 transition hover:text-white">{s.label}</a>)}
            </div>
          </div>
          <div>
            {sent ? (
              <div className={`${glass} p-10 text-center`}>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white"><Check size={28} /></div>
                <h2 className="mt-4 text-2xl font-bold text-white">Message sent!</h2>
                <p className="mt-1 text-white/60">Thanks, {form.name}. I’ll reply to {form.email} soon.</p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }} className="mt-6 rounded-full border border-white/15 px-6 py-2.5 text-sm font-semibold text-white/80 transition hover:bg-white/5">Send another</button>
              </div>
            ) : (
              <form onSubmit={submit} className={`${glass} space-y-4 p-6 md:p-8`}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input name="name" value={form.name} onChange={handle} placeholder="Your name" required className={field} />
                  <input type="email" name="email" value={form.email} onChange={handle} placeholder="Your email" required className={field} />
                </div>
                <textarea name="message" value={form.message} onChange={handle} placeholder="Tell me about your project…" rows={6} required className={`${field} resize-none`} />
                <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 py-3.5 font-semibold text-white transition hover:opacity-90">Send message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({ icon: Icon, label, value, href }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:bg-white/10">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500/30 to-fuchsia-500/30 text-white"><Icon size={20} /></span>
      <div>
        <p className="text-xs uppercase tracking-wide text-white/40">{label}</p>
        <p className="mt-0.5 font-semibold text-white">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
