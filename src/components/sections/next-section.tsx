import { ArrowUpRight, Network, Fingerprint } from 'lucide-react';

export function NextSection() {
  return (
    <section id="work" className="container-editorial scroll-mt-10 py-24 md:py-32" aria-labelledby="work-title">
      <div className="mb-12 flex items-end justify-between gap-6">
        <div>
          <p className="editorial-label mb-5 text-[#777067]">02 / Things I’ve built</p>
          <h2 id="work-title" className="text-[clamp(3rem,6.5vw,6.3rem)] font-semibold tracking-[-.075em] leading-none">Selected <span className="display-serif italic font-normal text-terracotta">work.</span></h2>
        </div>
        <span className="editorial-label hidden text-[#777067] md:block">2024 — Now</span>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <article className="group relative overflow-hidden rounded-[4px] bg-sand p-7 md:col-span-2 md:p-10">
          <div className="flex items-center justify-between"><span className="editorial-label text-[#5f554a]">001 / Featured case study</span><ArrowUpRight size={20} /></div>
          <div className="flex h-56 items-center justify-center md:h-72" aria-hidden="true"><div className="flex h-40 w-72 flex-col gap-3 rounded-xl bg-ink p-5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]"><div className="h-4 w-32 rounded-sm bg-[#4e544d]"/><div className="flex flex-1 gap-3"><div className="flex-1 rounded bg-paper/90"/><div className="flex-1 space-y-3 pt-3"><div className="h-3 w-full rounded bg-sage"/><div className="h-3 w-2/3 rounded bg-[#555a54]"/><div className="h-3 w-4/5 rounded bg-[#555a54]"/></div></div></div></div>
          <h3 className="text-2xl font-semibold tracking-[-.045em] md:text-4xl">Engineering payment experiences</h3>
          <p className="editorial-label mt-3 text-[#655c52]">Fintech / Backend systems / Integrations</p>
          <p className="mt-4 text-sm text-[#655c52]">Case study coming soon — content will be reviewed for confidentiality.</p>
        </article>
        <article className="rounded-[4px] bg-[#c9cec4] p-7 md:p-9"><div className="flex items-center justify-between"><span className="editorial-label text-[#4c574b]">002 / System design</span><Network size={21}/></div><div className="h-36"/><h3 className="text-2xl font-semibold tracking-[-.04em]">Building for scale.</h3><p className="editorial-label mt-3 text-[#4c574b]">Infrastructure / Performance</p></article>
        <article className="rounded-[4px] bg-[#e6c7b8] p-7 md:p-9"><div className="flex items-center justify-between"><span className="editorial-label text-[#695043]">003 / Engineering</span><Fingerprint size={21}/></div><div className="h-36"/><h3 className="text-2xl font-semibold tracking-[-.04em]">Identity, intelligently.</h3><p className="editorial-label mt-3 text-[#695043]">Algorithms / Name matching</p></article>
      </div>
    </section>
  );
}
