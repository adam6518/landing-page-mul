import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-x-hidden
        bg-[#2F6F6D]
        px-5
        pb-8
        pt-32
        text-white
        md:px-10
        md:pt-36
      "
    >
      <div
        className="
          mx-auto
          grid
          min-w-0
          max-w-[1600px]
          gap-12
          lg:grid-cols-[1.05fr_.95fr]
          lg:items-center
          lg:gap-10
        "
      >
        {/* =========================================================
            LEFT CONTENT
        ========================================================= */}

        <div className="min-w-0">
          <p className="section-label mb-8 text-[#8FA68F]">
            PT. Mitra Utama Lansekap · Jakarta, Indonesia
          </p>

          <h1 className="display">
            <span className="block">PLAN</span>

            <span className="block text-[#8FA68F]">BUILD</span>

            <span className="block">
              PLANT<span className="text-[#8FA68F]">.</span>
            </span>
          </h1>

          <div
            className="
              mt-10
              flex
              flex-col
              gap-6
              sm:flex-row
              sm:items-center
              sm:gap-5
            "
          >
            <p
              className="
                max-w-md
                text-sm
                leading-relaxed
                text-white/75
                sm:max-w-xs
              "
            >
              Partner konstruksi lansekap andalan yang berfokus menciptakan
              ruang terbuka menjadi ruang yang nyaman untuk hidup dan
              beraktivitas.
            </p>
          </div>
        </div>

        {/* =========================================================
            RIGHT LOGO
        ========================================================= */}

        <div
          className="
            relative
            mx-auto
            flex
            w-full
            max-w-[500px]
            items-center
            justify-center
            lg:mx-0
            lg:max-w-none
          "
        >
          {/* LOGO */}

          <img
            src="/images/logo-mu.png"
            alt="PT. Mitra Utama Lansekap"
            draggable="false"
            className="
              block
              h-auto
              w-[72%]
              max-w-[460px]
              select-none
              object-contain
              sm:w-[68%]
              md:w-[64%]
              lg:w-[78%]
              xl:w-[72%]
            "
          />

          {/* =======================================================
              FLOATING ARROW
          ======================================================= */}

          <div
            className="
              absolute
              bottom-0
              left-[8%]
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              bg-[#8FA68F]
              text-[#173331]
              sm:h-20
              sm:w-20
              md:h-24
              md:w-24
              lg:-bottom-2
              lg:left-[6%]
            "
          >
            <ArrowDownRight size={26} className="sm:h-[30px] sm:w-[30px]" />
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM INFORMATION
      ========================================================= */}

      <div
        className="
          mx-auto
          mt-16
          flex
          max-w-[1600px]
          flex-wrap
          items-center
          justify-between
          gap-x-6
          gap-y-3
          border-t
          border-white/20
          pt-4
          text-[10px]
          uppercase
          tracking-[0.16em]
          text-white/65
          sm:mt-20
          lg:mt-16
        "
      >
        <span>Est. 2021</span>

        <span className="hidden sm:inline">Scroll to explore ↓</span>

        <span>Jakarta · Indonesia</span>
      </div>
    </section>
  );
}
