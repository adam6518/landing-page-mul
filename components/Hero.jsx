import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-[#111111] px-5 pb-8 pt-32 text-white md:px-10 md:pt-36">
      <div className="mx-auto grid min-w-0 max-w-[1600px] gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-10">
        {/* Hero content */}
        <div className="min-w-0">
          <p className="section-label mb-8 text-yellow-400">
            Landscape construction · Jakarta, Indonesia
          </p>

          <h1 className="display">
            <span className="block">WE SHAPE</span>

            <span className="block text-yellow-400">OUTDOOR</span>

            <span className="block">
              EXPERIENCES<span className="text-yellow-400">.</span>
            </span>
          </h1>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-5">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-between gap-3 bg-yellow-400 px-5 py-4 text-xs font-black uppercase text-black transition-colors hover:bg-white sm:w-fit sm:justify-center sm:px-6"
            >
              Discuss your project
              <ArrowUpRight size={17} />
            </a>

            <p className="max-w-md text-sm leading-relaxed text-white/55 sm:max-w-xs">
              A landscape construction partner focused on quality planting,
              precise execution, and structured project management.
            </p>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative mx-auto w-full max-w-[500px] lg:mx-0 lg:max-w-none">
          <div className="placeholder aspect-[4/5] w-full overflow-hidden border border-white/15">
            <div className="flex h-full items-end p-4 sm:p-5">
              <span className="section-label text-white/60">
                Hero image placeholder
              </span>
            </div>
          </div>

          <div className="absolute -bottom-3 -left-3 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-black sm:-bottom-4 sm:-left-4 sm:h-20 sm:w-20 md:h-24 md:w-24">
            <ArrowDownRight size={26} className="sm:h-[30px] sm:w-[30px]" />
          </div>
        </div>
      </div>

      {/* Bottom metadata */}
      <div className="mx-auto mt-16 flex max-w-[1600px] flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-white/20 pt-4 text-[10px] uppercase tracking-[0.16em] text-white/45 sm:mt-20 lg:mt-16">
        <span>Est. 2021</span>

        <span className="hidden sm:inline">Scroll to explore ↓</span>

        <span>Jakarta · Indonesia</span>
      </div>
    </section>
  );
}
