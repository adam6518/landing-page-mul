"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Konstruksi Softscape",
    description:
      "Pembuatan taman dengan pohon dan tanaman pilihan yang sesuai dengan karakter area untuk menciptakan ruang outdoor yang nyaman dan asri",
  },
  {
    title: "Konstruksi Hardscape",
    description:
      "Pengerjaan elemen keras landscape seperti steger, batu, dan elemen pendukung area luar ruang.",
  },
  {
    title: "Landscape Maintenance",
    description:
      "Layanan perawatan taman yang dilakukan secara berkala untuk menjaga kesehatan tanaman dan menjaga tanaman tetap rapi dan terawat",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const handleToggle = (index) => {
    setActiveService((current) => (current === index ? null : index));
  };

  return (
    <section
      id="services"
      className="
        overflow-hidden
        bg-[#111111]
        px-5
        py-24
        text-white
        sm:px-6
        md:px-10
        md:py-36
      "
    >
      <div className="mx-auto max-w-[1600px]">
        {/* HEADER */}
        <div
          className="
            mb-14
            flex
            flex-col
            justify-between
            gap-8
            md:mb-16
            lg:flex-row
            lg:items-end
          "
        >
          <div>
            <p className="section-label text-yellow-400">02 — Keahlian kami</p>

            <h2
              className="
                mt-5
                max-w-4xl
                text-[clamp(3.5rem,8vw,8rem)]
                font-black
                leading-[0.85]
                tracking-[-0.07em]
              "
            >
              Produk &
              <br />
              <span className="text-yellow-400">Layanan.</span>
            </h2>
          </div>

          <span className="text-xs uppercase tracking-wider text-white/40">
            05 Services
          </span>
        </div>

        {/* SERVICES */}
        <div className="border-t border-white/20">
          {services.map((service, index) => {
            const isActive = activeService === index;

            return (
              <div
                key={service.title}
                className={`
                  group
                  border-b
                  border-white/20
                  transition-colors
                  duration-300
                  ${
                    isActive
                      ? "bg-yellow-400 text-black"
                      : "bg-transparent text-white"
                  }
                `}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => {
                  if (window.matchMedia("(min-width: 768px)").matches) {
                    setActiveService(null);
                  }
                }}
              >
                {/* SERVICE HEADER */}
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-5
                    py-7
                    text-left
                    md:py-8
                  "
                >
                  <div className="flex min-w-0 items-center gap-5 md:gap-8">
                    {/* NUMBER */}
                    <span
                      className={`
                        shrink-0
                        text-xs
                        transition-colors
                        ${isActive ? "text-black/50" : "text-white/35"}
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* TITLE */}
                    <h3
                      className="
                        min-w-0
                        text-[clamp(1.45rem,3.5vw,3.5rem)]
                        font-bold
                        leading-tight
                        tracking-[-0.035em]
                      "
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* ARROW */}
                  <span
                    className={`
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      transition-transform
                      duration-300
                      md:h-12
                      md:w-12
                      ${isActive ? "rotate-45" : "rotate-0"}
                    `}
                  >
                    <ArrowUpRight size={22} strokeWidth={1.8} />
                  </span>
                </button>

                {/* DESCRIPTION */}
                <div
                  className={`
                    grid
                    transition-[grid-template-rows,opacity]
                    duration-300
                    ease-out
                    ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div
                      className="
                        pb-7
                        pl-[2.25rem]
                        pr-8
                        md:pb-9
                        md:pl-[4.25rem]
                        md:pr-20
                      "
                    >
                      <p
                        className="
                          max-w-2xl
                          text-sm
                          leading-relaxed
                          text-current
                          opacity-70
                          md:text-base
                        "
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
