"use client";

import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Konstruksi Softscape",
    description:
      "Pembuatan taman dengan pohon dan tanaman pilihan yang sesuai dengan karakter area untuk menciptakan ruang outdoor yang nyaman dan asri.",
    image: "/images/orang nanam.jpeg",
    imageAlt:
      "Pekerja melakukan penanaman tanaman pada proyek landscape PT. Mitra Utama Lansekap",
  },
  {
    number: "02",
    title: "Landscape Maintenance",
    description:
      "Layanan perawatan taman yang dilakukan secara berkala untuk menjaga kesehatan tanaman dan menjaga tanaman tetap rapi dan terawat.",
    image: "/images/orang nyiram.jpeg",
    imageAlt:
      "Pekerja melakukan penyiraman tanaman pada proyek landscape PT. Mitra Utama Lansekap",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="
        overflow-hidden
        bg-[#2F6F6D]
        px-5
        py-24
        text-white
        sm:px-6
        md:px-10
        md:py-36
      "
    >
      <div className="mx-auto max-w-[1600px]">
        {/* =========================================================
            SECTION HEADER
        ========================================================= */}

        <div
          className="
            mb-16
            flex
            flex-col
            justify-between
            gap-8
            lg:mb-20
            lg:flex-row
            lg:items-end
          "
        >
          <div>
            <p className="section-label text-[#8FA68F]">02 — Keahlian kami</p>

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
              <span className="text-[#8FA68F]">Layanan.</span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#8FA68F]
              "
            >
              02 Services
            </span>
          </div>
        </div>

        {/* =========================================================
            SERVICES
        ========================================================= */}

        <div className="border-t border-white/20">
          {services.map((service) => (
            <article
              key={service.title}
              className="
                group
                border-b
                border-white/20
                py-10
                md:py-14
                lg:py-20
              "
            >
              <div
                className="
                  grid
                  gap-10
                  lg:grid-cols-[0.85fr_1.15fr]
                  lg:items-center
                  lg:gap-20
                  xl:grid-cols-[0.8fr_1.2fr]
                "
              >
                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="min-w-0">
                  {/* NUMBER */}

                  <div className="mb-6 flex items-center gap-4">
                    <span
                      className="
                        text-xs
                        font-bold
                        tracking-[0.18em]
                        text-[#8FA68F]
                      "
                    >
                      {service.number}
                    </span>

                    <span
                      className="
                        h-px
                        w-10
                        bg-[#8FA68F]/50
                      "
                    />

                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-white/40
                      "
                    >
                      Service
                    </span>
                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      max-w-3xl
                      text-[clamp(2.2rem,5vw,5.5rem)]
                      font-black
                      leading-[0.9]
                      tracking-[-0.055em]
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-[#8FA68F]
                    "
                  >
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-7
                      max-w-xl
                      text-sm
                      leading-relaxed
                      text-white/65
                      md:text-base
                    "
                  >
                    {service.description}
                  </p>

                  {/* CTA */}

                  <a
                    href="#contact"
                    className="
                      mt-8
                      inline-flex
                      items-center
                      gap-3
                      text-xs
                      font-black
                      uppercase
                      tracking-[0.12em]
                      text-[#8FA68F]
                      transition-colors
                      hover:text-white
                    "
                  >
                    Discuss this service
                    <span
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        border
                        border-[#8FA68F]/40
                        transition-all
                        duration-300
                        group-hover:border-[#8FA68F]
                        group-hover:bg-[#8FA68F]
                        group-hover:text-[#173331]
                      "
                    >
                      <ArrowUpRight
                        size={16}
                        className="
                          transition-transform
                          duration-300
                          group-hover:rotate-45
                        "
                      />
                    </span>
                  </a>
                </div>

                {/* =================================================
                    IMAGE
                ================================================= */}

                <div
                  className="
                    relative
                    flex
                    w-full
                    items-center
                    justify-center
                    bg-[#173331]
                    p-2
                    sm:p-3
                    lg:p-4
                  "
                >
                  {/* IMAGE FRAME */}

                  <div className="relative w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      loading="lazy"
                      draggable="false"
                      className="
                        block
                        h-auto
                        max-h-[720px]
                        w-full
                        object-contain
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.02]
                      "
                    />

                    {/* IMAGE OVERLAY */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-[#173331]/10
                        transition-colors
                        duration-500
                        group-hover:bg-transparent
                      "
                    />

                    {/* IMAGE LABEL */}

                    <div
                      className="
                        absolute
                        bottom-4
                        left-4
                        flex
                        items-center
                        gap-3
                        bg-[#173331]/85
                        px-3
                        py-2
                        backdrop-blur-sm
                        sm:bottom-5
                        sm:left-5
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-[#8FA68F]
                        "
                      />

                      <span
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.16em]
                          text-white
                        "
                      >
                        {service.title}
                      </span>
                    </div>

                    {/* CORNER NUMBER */}

                    <div
                      className="
                        absolute
                        right-4
                        top-4
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        border
                        border-white/30
                        bg-[#2F6F6D]/80
                        text-xs
                        font-bold
                        text-white
                        backdrop-blur-sm
                        sm:right-5
                        sm:top-5
                      "
                    >
                      {service.number}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
