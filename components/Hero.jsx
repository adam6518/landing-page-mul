import { ArrowDownRight, ArrowUpRight } from "lucide-react";
export default function Hero() {
 return <section className="relative min-h-screen overflow-hidden bg-[#111111] px-5 pb-8 pt-32 text-white md:px-10 md:pt-40">
  <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
   <div>
    <p className="section-label mb-7 text-yellow-400">Landscape construction · Jakarta, Indonesia</p>
    <h1 className="display max-w-5xl">WE SHAPE<br/><span className="text-yellow-400">OUTDOOR</span><br/>EXPERIENCES<span className="text-yellow-400">.</span></h1>
    <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
     <a href="#contact" className="inline-flex w-fit items-center gap-3 bg-yellow-400 px-6 py-4 text-xs font-black uppercase text-black">Discuss your project <ArrowUpRight size={17}/></a>
     <p className="max-w-xs text-sm leading-relaxed text-white/55">A landscape construction partner focused on quality planting, precise execution, and structured project management.</p>
    </div>
   </div>
   <div className="relative">
    <div className="placeholder aspect-[4/5] w-full overflow-hidden border border-white/15">
     <div className="flex h-full items-end p-5"><span className="section-label text-white/60">Hero image placeholder</span></div>
    </div>
    <div className="absolute -bottom-4 -left-4 flex h-24 w-24 items-center justify-center rounded-full bg-yellow-400 text-black"><ArrowDownRight size={30}/></div>
   </div>
  </div>
  <div className="mx-auto mt-20 flex max-w-[1600px] justify-between border-t border-white/20 pt-4 text-[10px] uppercase tracking-[.18em] text-white/45"><span>Est. 2021</span><span>Scroll to explore ↓</span><span>Jakarta · Indonesia</span></div>
 </section>
}