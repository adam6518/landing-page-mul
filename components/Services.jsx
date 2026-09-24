import { ArrowUpRight } from "lucide-react";

const services = [
  "Landscape Construction",
  "Hardscape Construction",
  "Softscape Installation",
  "Landscape Maintenance",
  "Outdoor Area Development",
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#111111] px-5 py-20 text-white sm:px-6 sm:py-24 md:px-10 md:py-32 lg:py-36"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 flex items-end justify-between gap-6 sm:mb-14">
          <div>
            <p className="section-label text-yellow-400">02 — Our expertise</p>

            <h2 className="mt-5 text-[clamp(3rem,8vw,8rem)] font-black leading-[0.9] tracking-[-0.07em]">
              WHAT WE
              <br />
              <span className="text-yellow-400">DELIVER.</span>
            </h2>
          </div>

          <span className="hidden shrink-0 text-xs text-white/40 sm:block">
            05 SERVICES
          </span>
        </div>

        <div className="border-t border-white/20">
          {services.map((service, index) => (
            <a
              href="#contact"
              key={service}
              className="group flex min-w-0 items-center justify-between gap-4 border-b border-white/20 py-5 transition-colors hover:bg-yellow-400 hover:px-3 hover:text-black sm:py-7 sm:hover:px-4"
            >
              <div className="flex min-w-0 items-start gap-4 sm:items-center sm:gap-6">
                <span className="shrink-0 pt-1 text-xs text-white/35 group-hover:text-black/50 sm:pt-0">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="min-w-0 text-[clamp(1.35rem,3.5vw,3.2rem)] font-bold leading-tight tracking-tight">
                  {service}
                </h3>
              </div>

              <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:rotate-45 sm:h-6 sm:w-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
