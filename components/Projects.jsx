"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, MapPin, Play } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Landscape Project PIK 1",
    location: "PIK 1",
    type: "Landscape Construction",
    media: [
      {
        type: "image",
        src: "/images/projects/pik-1-01.jpg",
        alt: "Landscape Project PIK 1",
      },
      {
        type: "image",
        src: "/images/projects/pik-1-02.jpg",
        alt: "Landscape Project PIK 1",
      },
      {
        type: "video",
        src: "/videos/projects/pik-1.mp4",
        poster: "/images/projects/pik-1-cover.jpg",
      },
    ],
  },

  {
    id: 2,
    name: "Landscape Project PIK 2",
    location: "PIK 2",
    type: "Landscape Construction",
    media: [
      {
        type: "image",
        src: "/images/projects/pik-2-01.jpg",
        alt: "Landscape Project PIK 2",
      },
      {
        type: "image",
        src: "/images/projects/pik-2-02.jpg",
        alt: "Landscape Project PIK 2",
      },
      {
        type: "video",
        src: "/videos/projects/pik-2.mp4",
        poster: "/images/projects/pik-2-cover.jpg",
      },
    ],
  },

  {
    id: 3,
    name: "Landscape Project PIK 2 Extension",
    location: "PIK 2 Extension",
    type: "Softscape Installation",
    media: [
      {
        type: "image",
        src: "/images/projects/pik-2-ext-01.jpg",
        alt: "Landscape Project PIK 2 Extension",
      },
      {
        type: "image",
        src: "/images/projects/pik-2-ext-02.jpg",
        alt: "Landscape Project PIK 2 Extension",
      },
    ],
  },

  {
    id: 4,
    name: "Landscape Project PIK 3",
    location: "PIK 3",
    type: "Landscape Construction",
    media: [
      {
        type: "image",
        src: "/images/projects/pik-3-01.jpg",
        alt: "Landscape Project PIK 3",
      },
      {
        type: "video",
        src: "/videos/projects/pik-3.mp4",
        poster: "/images/projects/pik-3-cover.jpg",
      },
    ],
  },

  {
    id: 5,
    name: "Landscape Project Sedayu City",
    location: "Kelapa Gading",
    type: "Landscape Maintenance",
    media: [
      {
        type: "image",
        src: "/images/projects/sedayu-city-01.jpg",
        alt: "Landscape Project Sedayu City",
      },
      {
        type: "image",
        src: "/images/projects/sedayu-city-02.jpg",
        alt: "Landscape Project Sedayu City",
      },
      {
        type: "video",
        src: "/videos/projects/sedayu-city.mp4",
        poster: "/images/projects/sedayu-city-cover.jpg",
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

  const currentProject =
    activeLocation === "All"
      ? projects[0]
      : projects.find((project) => project.location === activeLocation);

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

  const nextSlide = () => {
    if (!currentProject) return;

    const nextIndex = Math.min(
      activeMedia + 1,
      currentProject.media.length - 1,
    );

    goToSlide(nextIndex);
  };

  const previousSlide = () => {
    const previousIndex = Math.max(activeMedia - 1, 0);

    goToSlide(previousIndex);
  };

  const changeLocation = (location) => {
    setActiveLocation(location);
    setActiveMedia(0);

    requestAnimationFrame(() => {
      if (!sliderRef.current) return;

      sliderRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    });
  };

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
        {/* =========================
            HEADER
        ========================= */}

        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
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

          <p className="max-w-md text-base leading-relaxed text-[#173331]/55">
            Berikut adalah hasil nyata dari pekerjaan kami di beberapa lokasi
            project.
          </p>
        </div>

        {/* =========================
            LOCATION FILTER
        ========================= */}

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

        {/* =========================
            PROJECT MEDIA
        ========================= */}

        <div className="mt-10">
          <div className="relative">
            <div
              ref={sliderRef}
              onScroll={handleScroll}
              className="
                flex
                snap-x
                snap-mandatory
                gap-4
                overflow-x-auto
                overscroll-x-contain
                scroll-smooth
                pb-3
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
              "
            >
              {currentProject.media.map((media, index) => (
                <article
                  key={`${currentProject.id}-${index}`}
                  className="
                      relative
                      min-w-[88%]
                      snap-start
                      overflow-hidden
                      bg-[#2F6F6D]
                      sm:min-w-[78%]
                      lg:min-w-[74%]
                    "
                >
                  {media.type === "video" ? (
                    <div className="relative">
                      <video
                        src={media.src}
                        poster={media.poster}
                        controls
                        playsInline
                        preload="metadata"
                        className="
                            aspect-[16/9]
                            w-full
                            object-cover
                          "
                      />

                      <div
                        className="
                            pointer-events-none
                            absolute
                            left-5
                            top-5
                            flex
                            items-center
                            gap-2
                            bg-[#8FA68F]
                            px-3
                            py-2
                            text-[10px]
                            font-black
                            uppercase
                            tracking-widest
                            text-[#173331]
                          "
                      >
                        <Play size={11} fill="currentColor" />
                        Video
                      </div>
                    </div>
                  ) : (
                    <div className="relative">
                      <img
                        src={media.src}
                        alt={media.alt}
                        draggable="false"
                        className="
                            aspect-[16/9]
                            w-full
                            select-none
                            object-cover
                          "
                      />

                      <div
                        className="
                            pointer-events-none
                            absolute
                            left-5
                            top-5
                            bg-[#2F6F6D]
                            px-3
                            py-2
                            text-[10px]
                            font-black
                            uppercase
                            tracking-widest
                            text-white
                          "
                      >
                        Photo
                      </div>
                    </div>
                  )}

                  {/* MEDIA NUMBER */}

                  <div
                    className="
                        absolute
                        bottom-4
                        right-4
                        bg-[#173331]/80
                        px-3
                        py-2
                        text-xs
                        font-bold
                        text-white
                      "
                  >
                    {String(index + 1).padStart(2, "0")}
                    {" / "}
                    {String(currentProject.media.length).padStart(2, "0")}
                  </div>
                </article>
              ))}
            </div>

            {/* =========================
                SLIDER CONTROLS
            ========================= */}

            <div className="mt-5 flex items-center justify-between">
              {/* DOTS */}

              <div className="flex items-center gap-2">
                {currentProject.media.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to media ${index + 1}`}
                    className={`
                        h-2
                        rounded-full
                        transition-all
                        ${
                          activeMedia === index
                            ? "w-8 bg-[#2F6F6D]"
                            : "w-2 bg-[#2F6F6D]/20"
                        }
                      `}
                  />
                ))}
              </div>

              {/* ARROWS */}

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={previousSlide}
                  disabled={activeMedia === 0}
                  aria-label="Previous media"
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
                    hover:bg-[#2F6F6D]
                    hover:text-white
                    disabled:cursor-not-allowed
                    disabled:opacity-25
                  "
                >
                  <ArrowLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  disabled={activeMedia === currentProject.media.length - 1}
                  aria-label="Next media"
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
                    hover:bg-[#8FA68F]
                    disabled:cursor-not-allowed
                    disabled:opacity-25
                  "
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* =========================
              PROJECT INFORMATION
          ========================= */}

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
              <MapPin size={18} className="text-[#2F6F6D]" />

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
