"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";

/*
|--------------------------------------------------------------------------
| PROJECT DATA
|--------------------------------------------------------------------------
| Setiap project mempunyai 5 slide.
| Setiap slide dapat berisi 1, 2, atau lebih foto.
|--------------------------------------------------------------------------
*/

const projects = [
  {
    id: 1,
    name: "Landscape Project PIK 1",
    location: "PIK 1",
    type: "Landscape Construction",

    slides: [
      [
        {
          src: "/images/pik1/WhatsApp Image 2024-12-03 at 15.53.15 (1).jpeg",
          alt: "Landscape Project PIK 1",
        },
        {
          src: "/images/pik1/WhatsApp Image 2024-12-03 at 15.54.03 (2).jpeg",
          alt: "Landscape Project PIK 1",
        },
      ],

      [
        {
          src: "/images/pik1/WhatsApp Image 2024-12-03 at 15.54.04 (1).jpeg",
          alt: "Landscape Project PIK 1",
        },
      ],

      [
        {
          src: "/images/pik1/WhatsApp Image 2024-12-03 at 15.54.04 (2).jpeg",
          alt: "Landscape Project PIK 1",
        },
      ],

      [
        {
          src: "/images/pik1/WhatsApp Image 2024-12-03 at 15.53.15 (1).jpeg",
          alt: "Landscape Project PIK 1",
        },
        {
          src: "/images/pik1/WhatsApp Image 2024-12-03 at 15.54.04 (1).jpeg",
          alt: "Landscape Project PIK 1",
        },
      ],

      [
        {
          src: "/images/pik1/WhatsApp Image 2024-12-03 at 15.54.03 (2).jpeg",
          alt: "Landscape Project PIK 1",
        },
        {
          src: "/images/pik1/WhatsApp Image 2024-12-03 at 15.54.04 (2).jpeg",
          alt: "Landscape Project PIK 1",
        },
      ],
    ],
  },

  {
    id: 2,
    name: "Landscape Project PIK 2",
    location: "PIK 2",
    type: "Landscape Construction",

    slides: [
      [
        {
          src: "/images/pik2/WhatsApp Image 2024-06-25 at 14.38.40.jpeg",
          alt: "Landscape Project PIK 2",
        },
        {
          src: "/images/pik2/WhatsApp Image 2024-07-09 at 12.39.28 (1).jpeg",
          alt: "Landscape Project PIK 2",
        },
      ],

      [
        {
          src: "/images/pik2/WhatsApp Image 2024-07-09 at 12.39.28 (2).jpeg",
          alt: "Landscape Project PIK 2",
        },
      ],

      [
        {
          src: "/images/pik2/WhatsApp Image 2024-07-10 at 16.08.17.jpeg",
          alt: "Landscape Project PIK 2",
        },
        {
          src: "/images/pik2/WhatsApp Image 2024-07-10 at 16.08.18.jpeg",
          alt: "Landscape Project PIK 2",
        },
      ],

      [
        {
          src: "/images/pik2/WhatsApp Image 2024-08-22 at 11.37.14.jpeg",
          alt: "Landscape Project PIK 2",
        },
        {
          src: "/images/pik2/WhatsApp Image 2024-08-22 at 11.37.20.jpeg",
          alt: "Landscape Project PIK 2",
        },
      ],

      [
        {
          src: "/images/pik2/WhatsApp Image 2024-09-06 at 12.48.00.jpeg",
          alt: "Landscape Project PIK 2",
        },
        {
          src: "/images/pik2/WhatsApp Image 2024-09-06 at 12.50.11 (1).jpeg",
          alt: "Landscape Project PIK 2",
        },
      ],
    ],
  },

  {
    id: 3,
    name: "Landscape Project PIK 2 Extension",
    location: "PIK 2 Extension",
    type: "Softscape Installation",

    slides: [
      [
        {
          src: "/images/pik2-ext/WhatsApp Image 2024-06-25 at 14.26.38 (3).jpeg",
          alt: "Landscape Project PIK 2 Extension",
        },
        {
          src: "/images/pik2-ext/WhatsApp Image 2024-07-11 at 14.33.32 (2).jpeg",
          alt: "Landscape Project PIK 2 Extension",
        },
      ],

      [
        {
          src: "/images/pik2-ext/WhatsApp Image 2024-07-11 at 14.33.33.jpeg",
          alt: "Landscape Project PIK 2 Extension",
        },
      ],

      [
        {
          src: "/images/pik2-ext/WhatsApp Image 2024-07-24 at 12.39.33.jpeg",
          alt: "Landscape Project PIK 2 Extension",
        },
        {
          src: "/images/pik2-ext/WhatsApp Image 2025-02-19 at 10.53.13.jpeg",
          alt: "Landscape Project PIK 2 Extension",
        },
      ],

      [
        {
          src: "/images/pik2-ext/WhatsApp Image 2025-02-19 at 10.57.55.jpeg",
          alt: "Landscape Project PIK 2 Extension",
        },
      ],

      [
        {
          src: "/images/pik2-ext/WhatsApp Image 2025-03-01 at 11.28.38 (1).jpeg",
          alt: "Landscape Project PIK 2 Extension",
        },
        {
          src: "/images/pik2-ext/WhatsApp Image 2024-07-24 at 12.39.33.jpeg",
          alt: "Landscape Project PIK 2 Extension",
        },
      ],
    ],
  },

  {
    id: 4,
    name: "Landscape Project PIK 3",
    location: "PIK 3",
    type: "Landscape Construction",

    slides: [
      [
        {
          src: "/images/pik3/WhatsApp Image 2026-07-16 at 13.43.39 (2).jpeg",
          alt: "Landscape Project PIK 3",
        },
        {
          src: "/images/pik3/WhatsApp Image 2026-07-16 at 13.43.40 (2).jpeg",
          alt: "Landscape Project PIK 3",
        },
      ],

      [
        {
          src: "/images/pik3/WhatsApp Image 2026-08-27 at 16.11.48 (3).jpeg",
          alt: "Landscape Project PIK 3",
        },
      ],

      [
        {
          src: "/images/pik3/WhatsApp Image 2026-08-27 at 16.11.49.jpeg",
          alt: "Landscape Project PIK 3",
        },
        {
          src: "/images/pik3/WhatsApp Image 2026-08-27 at 16.11.50 (1).jpeg",
          alt: "Landscape Project PIK 3",
        },
      ],

      [
        {
          src: "/images/pik3/WhatsApp Image 2026-08-27 at 16.11.50 (2).jpeg",
          alt: "Landscape Project PIK 3",
        },
      ],

      [
        {
          src: "/images/pik3/WhatsApp Image 2026-08-27 at 16.11.48 (3).jpeg",
          alt: "Landscape Project PIK 3",
        },
        {
          src: "/images/pik3/WhatsApp Image 2026-08-27 at 16.11.49.jpeg",
          alt: "Landscape Project PIK 3",
        },
      ],
    ],
  },

  {
    id: 5,
    name: "Landscape Project Sedayu City",
    location: "Kelapa Gading",
    type: "Landscape Maintenance",

    slides: [
      [
        {
          src: "/images/kelapa-gading/CAM_PO_12_22_00028.jpg",
          alt: "Landscape Project Sedayu City",
        },
      ],

      [
        {
          src: "/images/kelapa-gading/WhatsApp Image 2024-11-21 at 09.51.11.jpeg",
          alt: "Landscape Project Sedayu City",
        },
        {
          src: "/images/kelapa-gading/WhatsApp Image 2025-01-20 at 13.00.38 (2).jpeg",
          alt: "Landscape Project Sedayu City",
        },
      ],

      [
        {
          src: "/images/kelapa-gading/WhatsApp Image 2025-01-20 at 13.00.38.jpeg",
          alt: "Landscape Project Sedayu City",
        },
      ],

      [
        {
          src: "/images/kelapa-gading/WhatsApp Image 2025-01-20 at 13.00.39 (3).jpeg",
          alt: "Landscape Project Sedayu City",
        },
        {
          src: "/images/kelapa-gading/WhatsApp Image 2025-01-20 at 13.00.38.jpeg",
          alt: "Landscape Project Sedayu City",
        },
      ],

      [
        {
          src: "/images/kelapa-gading/CAM_PO_12_22_00028.jpg",
          alt: "Landscape Project Sedayu City",
        },
        {
          src: "/images/kelapa-gading/WhatsApp Image 2024-11-21 at 09.51.11.jpeg",
          alt: "Landscape Project Sedayu City",
        },
      ],
    ],
  },
];

/*
|--------------------------------------------------------------------------
| ALL PROJECTS
|--------------------------------------------------------------------------
| 10 slide campuran dari semua area project.
|--------------------------------------------------------------------------
*/

const allSlides = [
  {
    project: "PIK 1",
    images: [
      {
        src: "/images/pik1/WhatsApp Image 2024-12-03 at 15.53.15 (1).jpeg",
        alt: "Landscape Project PIK 1",
      },
      {
        src: "/images/pik1/WhatsApp Image 2024-12-03 at 15.54.03 (2).jpeg",
        alt: "Landscape Project PIK 1",
      },
    ],
  },

  {
    project: "PIK 2",
    images: [
      {
        src: "/images/pik2/WhatsApp Image 2024-06-25 at 14.38.40.jpeg",
        alt: "Landscape Project PIK 2",
      },
      {
        src: "/images/pik2/WhatsApp Image 2024-07-09 at 12.39.28 (1).jpeg",
        alt: "Landscape Project PIK 2",
      },
    ],
  },

  {
    project: "PIK 2 Extension",
    images: [
      {
        src: "/images/pik2-ext/WhatsApp Image 2024-06-25 at 14.26.38 (3).jpeg",
        alt: "Landscape Project PIK 2 Extension",
      },
      {
        src: "/images/pik2-ext/WhatsApp Image 2024-07-11 at 14.33.32 (2).jpeg",
        alt: "Landscape Project PIK 2 Extension",
      },
    ],
  },

  {
    project: "PIK 3",
    images: [
      {
        src: "/images/pik3/WhatsApp Image 2026-07-16 at 13.43.39 (2).jpeg",
        alt: "Landscape Project PIK 3",
      },
      {
        src: "/images/pik3/WhatsApp Image 2026-07-16 at 13.43.40 (2).jpeg",
        alt: "Landscape Project PIK 3",
      },
    ],
  },

  {
    project: "Kelapa Gading",
    images: [
      {
        src: "/images/kelapa-gading/CAM_PO_12_22_00028.jpg",
        alt: "Landscape Project Sedayu City",
      },
      {
        src: "/images/kelapa-gading/WhatsApp Image 2024-11-21 at 09.51.11.jpeg",
        alt: "Landscape Project Sedayu City",
      },
    ],
  },

  {
    project: "PIK 2",
    images: [
      {
        src: "/images/pik2/WhatsApp Image 2024-07-09 at 12.39.28 (2).jpeg",
        alt: "Landscape Project PIK 2",
      },
      {
        src: "/images/pik2/WhatsApp Image 2024-07-10 at 16.08.17.jpeg",
        alt: "Landscape Project PIK 2",
      },
      {
        src: "/images/pik2/WhatsApp Image 2024-07-10 at 16.08.18.jpeg",
        alt: "Landscape Project PIK 2",
      },
    ],
  },

  {
    project: "PIK 2 Extension",
    images: [
      {
        src: "/images/pik2-ext/WhatsApp Image 2024-07-11 at 14.33.33.jpeg",
        alt: "Landscape Project PIK 2 Extension",
      },
      {
        src: "/images/pik2-ext/WhatsApp Image 2024-07-24 at 12.39.33.jpeg",
        alt: "Landscape Project PIK 2 Extension",
      },
    ],
  },

  {
    project: "PIK 3",
    images: [
      {
        src: "/images/pik3/WhatsApp Image 2026-08-27 at 16.11.48 (3).jpeg",
        alt: "Landscape Project PIK 3",
      },
      {
        src: "/images/pik3/WhatsApp Image 2026-08-27 at 16.11.49.jpeg",
        alt: "Landscape Project PIK 3",
      },
    ],
  },

  {
    project: "Kelapa Gading",
    images: [
      {
        src: "/images/kelapa-gading/WhatsApp Image 2025-01-20 at 13.00.38 (2).jpeg",
        alt: "Landscape Project Sedayu City",
      },
      {
        src: "/images/kelapa-gading/WhatsApp Image 2025-01-20 at 13.00.38.jpeg",
        alt: "Landscape Project Sedayu City",
      },
      {
        src: "/images/kelapa-gading/WhatsApp Image 2025-01-20 at 13.00.39 (3).jpeg",
        alt: "Landscape Project Sedayu City",
      },
    ],
  },

  {
    project: "PIK 3",
    images: [
      {
        src: "/images/pik3/WhatsApp Image 2026-08-27 at 16.11.50 (1).jpeg",
        alt: "Landscape Project PIK 3",
      },
      {
        src: "/images/pik3/WhatsApp Image 2026-08-27 at 16.11.50 (2).jpeg",
        alt: "Landscape Project PIK 3",
      },
    ],
  },
];

const locations = [
  "All",
  "PIK 1",
  "PIK 2",
  "PIK 2 Extension",
  "PIK 3",
  "Kelapa Gading",
];

export default function Projects() {
  const [activeLocation, setActiveLocation] = useState("All");
  const [activeMedia, setActiveMedia] = useState(0);

  const sliderRef = useRef(null);

  /*
  |--------------------------------------------------------------------------
  | CURRENT PROJECT
  |--------------------------------------------------------------------------
  */

  const currentProject =
    activeLocation === "All"
      ? {
          id: "all",
          name: "Selected Landscape Projects",
          location: "Multiple Areas",
          type: "Landscape Portfolio",
          slides: allSlides.map((slide) => slide.images),
        }
      : projects.find((project) => project.location === activeLocation);

  /*
  |--------------------------------------------------------------------------
  | HANDLE SCROLL
  |--------------------------------------------------------------------------
  */

  const handleScroll = () => {
    if (!sliderRef.current) return;

    const container = sliderRef.current;
    const slides = Array.from(container.children);

    if (!slides.length) return;

    const scrollLeft = container.scrollLeft;

    let closestIndex = 0;
    let closestDistance = Infinity;

    slides.forEach((slide, index) => {
      const distance = Math.abs(slide.offsetLeft - scrollLeft);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveMedia(closestIndex);
  };

  /*
  |--------------------------------------------------------------------------
  | GO TO SLIDE
  |--------------------------------------------------------------------------
  */

  const goToSlide = (index) => {
    if (!sliderRef.current) return;

    const slides = sliderRef.current.children;

    if (!slides[index]) return;

    slides[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });

    setActiveMedia(index);
  };

  /*
  |--------------------------------------------------------------------------
  | NEXT SLIDE
  |--------------------------------------------------------------------------
  */

  const nextSlide = () => {
    if (!currentProject) return;

    const nextIndex = Math.min(
      activeMedia + 1,
      currentProject.slides.length - 1,
    );

    goToSlide(nextIndex);
  };

  /*
  |--------------------------------------------------------------------------
  | PREVIOUS SLIDE
  |--------------------------------------------------------------------------
  */

  const previousSlide = () => {
    const previousIndex = Math.max(activeMedia - 1, 0);

    goToSlide(previousIndex);
  };

  /*
  |--------------------------------------------------------------------------
  | CHANGE LOCATION
  |--------------------------------------------------------------------------
  */

  const changeLocation = (location) => {
    setActiveLocation(location);
    setActiveMedia(0);

    requestAnimationFrame(() => {
      sliderRef.current?.scrollTo({
        left: 0,
        behavior: "auto",
      });
    });
  };

  /*
  |--------------------------------------------------------------------------
  | RESET SLIDER
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    setActiveMedia(0);

    requestAnimationFrame(() => {
      sliderRef.current?.scrollTo({
        left: 0,
        behavior: "auto",
      });
    });
  }, [activeLocation]);

  if (!currentProject) return null;

  return (
    <section
      id="projects"
      className="
        overflow-hidden
        bg-[#f4f3ef]
        px-5
        py-24
        sm:px-6
        md:px-10
        md:py-36
      "
    >
      <div className="mx-auto max-w-[1600px]">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div
          className="
            flex
            flex-col
            justify-between
            gap-10
            lg:flex-row
            lg:items-end
          "
        >
          <div>
            <p className="section-label text-[#173331]/50">04 — Projects</p>

            <h2
              className="
                mt-5
                text-[clamp(3.5rem,8vw,8rem)]
                font-black
                leading-[0.85]
                tracking-[-0.07em]
                text-[#173331]
              "
            >
              Hasil Kerja
              <br />
              <span className="text-[#8FA68F]">Kami.</span>
            </h2>
          </div>

          <p
            className="
              max-w-md
              text-base
              leading-relaxed
              text-[#173331]/55
            "
          >
            Berikut adalah hasil nyata dari pekerjaan kami di beberapa lokasi
            project.
          </p>
        </div>

        {/* =========================================================
            LOCATION FILTER
        ========================================================= */}

        <div
          className="
            mt-14
            overflow-x-auto
            border-y
            border-[#2F6F6D]/15
            py-4
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          <div className="flex min-w-max gap-2">
            {locations.map((location) => {
              const isActive = activeLocation === location;

              return (
                <button
                  key={location}
                  type="button"
                  onClick={() => changeLocation(location)}
                  className={`
                    whitespace-nowrap
                    px-5
                    py-3
                    text-xs
                    font-black
                    uppercase
                    tracking-[0.08em]
                    transition-all
                    ${
                      isActive
                        ? "bg-[#2F6F6D] text-white"
                        : "text-[#173331]/45 hover:bg-[#8FA68F]/25 hover:text-[#173331]"
                    }
                  `}
                >
                  {location}
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            PROJECT MEDIA
        ========================================================= */}

        <div className="mt-10">
          {/* =======================================================
              SLIDER
          ======================================================= */}

          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="
              flex
              snap-x
              snap-mandatory
              gap-8
              overflow-x-auto
              overscroll-x-contain
              scroll-smooth
              pb-2
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {currentProject.slides.map((slide, slideIndex) => {
              const imageCount = slide.length;

              /*
              |--------------------------------------------------------------------------
              | WIDTH BERDASARKAN JUMLAH FOTO
              |--------------------------------------------------------------------------
              | 1 foto  = lebih besar
              | 2 foto  = masing-masing hampir setengah
              | 3 foto  = masing-masing sepertiga
              |--------------------------------------------------------------------------
              */

              const imageWidthClass =
                imageCount === 1
                  ? "max-w-full"
                  : imageCount === 2
                    ? "max-w-[calc(50%-6px)]"
                    : "max-w-[calc(33.333%-8px)]";

              return (
                <article
                  key={`${currentProject.id}-slide-${slideIndex}`}
                  className="
                    relative
                    flex
                    min-w-[92%]
                    shrink-0
                    snap-start
                    items-center
                    justify-center
                    sm:min-w-[86%]
                    md:min-w-[78%]
                    lg:min-w-[72%]
                    xl:min-w-[68%]
                  "
                >
                  {/* =================================================
                      PHOTO COMPOSITION
                  ================================================= */}

                  <div
                    className="
                      flex
                      h-[52vh]
                      max-h-[680px]
                      min-h-[300px]
                      w-full
                      items-center
                      justify-center
                      gap-3
                      sm:h-[56vh]
                      md:h-[60vh]
                      lg:h-[62vh]
                    "
                  >
                    {slide.map((image, imageIndex) => (
                      <div
                        key={`${slideIndex}-${imageIndex}`}
                        className={`
                          relative
                          flex
                          h-full
                          min-w-0
                          flex-1
                          items-center
                          justify-center
                          ${imageWidthClass}
                        `}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          draggable="false"
                          loading={
                            slideIndex === 0 && imageIndex === 0
                              ? "eager"
                              : "lazy"
                          }
                          className="
                            block
                            h-auto
                            max-h-full
                            max-w-full
                            select-none
                            object-contain
                          "
                        />

                        {/* PHOTO LABEL */}

                        <div
                          className="
                            pointer-events-none
                            absolute
                            left-3
                            top-3
                            bg-[#2F6F6D]
                            px-3
                            py-2
                            text-[9px]
                            font-black
                            uppercase
                            tracking-[0.14em]
                            text-white
                            sm:left-4
                            sm:top-4
                          "
                        >
                          Photo
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          {/* =========================================================
              SLIDER CONTROLS
          ========================================================= */}

          <div
            className="
              mt-6
              flex
              items-center
              justify-between
              border-t
              border-[#2F6F6D]/10
              pt-5
            "
          >
            {/* =====================================================
                LEFT — DOTS
            ===================================================== */}

            <div className="flex items-center gap-2">
              {currentProject.slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`
                    h-2
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      activeMedia === index
                        ? "w-8 bg-[#2F6F6D]"
                        : "w-2 bg-[#2F6F6D]/20 hover:bg-[#2F6F6D]/40"
                    }
                  `}
                />
              ))}
            </div>

            {/* =====================================================
                RIGHT — COUNTER + ARROWS
            ===================================================== */}

            <div className="flex items-center gap-3">
              {/* COUNTER */}

              <div
                className="
                  hidden
                  min-w-[58px]
                  items-center
                  justify-center
                  bg-[#173331]
                  px-3
                  py-2.5
                  text-[10px]
                  font-black
                  tracking-[0.08em]
                  text-white
                  sm:flex
                "
              >
                {String(activeMedia + 1).padStart(2, "0")}
                {" / "}
                {String(currentProject.slides.length).padStart(2, "0")}
              </div>

              {/* PREVIOUS */}

              <button
                type="button"
                onClick={previousSlide}
                disabled={activeMedia === 0}
                aria-label="Previous slide"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  border
                  border-[#2F6F6D]/20
                  text-[#173331]
                  transition-all
                  duration-200
                  hover:bg-[#2F6F6D]
                  hover:text-white
                  disabled:cursor-not-allowed
                  disabled:opacity-25
                "
              >
                <ArrowLeft size={18} strokeWidth={1.8} />
              </button>

              {/* NEXT */}

              <button
                type="button"
                onClick={nextSlide}
                disabled={activeMedia === currentProject.slides.length - 1}
                aria-label="Next slide"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  border
                  border-[#2F6F6D]/20
                  text-[#173331]
                  transition-all
                  duration-200
                  hover:bg-[#8FA68F]
                  disabled:cursor-not-allowed
                  disabled:opacity-25
                "
              >
                <ArrowRight size={18} strokeWidth={1.8} />
              </button>
            </div>
          </div>

          {/* MOBILE COUNTER */}

          <div className="mt-3 flex justify-end sm:hidden">
            <div
              className="
                bg-[#173331]
                px-3
                py-2
                text-[10px]
                font-black
                tracking-[0.08em]
                text-white
              "
            >
              {String(activeMedia + 1).padStart(2, "0")}
              {" / "}
              {String(currentProject.slides.length).padStart(2, "0")}
            </div>
          </div>

          {/* =========================================================
              PROJECT INFORMATION
          ========================================================= */}

          <div
            className="
              mt-10
              grid
              gap-8
              border-t
              border-[#2F6F6D]/15
              pt-6
              md:grid-cols-[1fr_auto]
              md:items-end
            "
          >
            <div>
              <p className="section-label text-[#173331]/40">Project</p>

              <h3
                className="
                  mt-3
                  text-3xl
                  font-black
                  tracking-[-0.04em]
                  text-[#173331]
                  sm:text-4xl
                  md:text-5xl
                "
              >
                {currentProject.name}
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  uppercase
                  tracking-[0.12em]
                  text-[#173331]/50
                "
              >
                {currentProject.type}
              </p>
            </div>

            <div className="flex items-center gap-3 md:text-right">
              <MapPin size={18} className="shrink-0 text-[#2F6F6D]" />

              <div>
                <p
                  className="
                    text-[10px]
                    font-black
                    uppercase
                    tracking-widest
                    text-[#173331]/40
                  "
                >
                  Location
                </p>

                <p className="mt-1 font-bold text-[#173331]">
                  {currentProject.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
