import { Mail, MapPin } from "lucide-react";

const organization = {
  top: {
    name: "Endang Julianti",
    role: "Direktur Utama",
  },

  director: {
    name: "Agung Gunawan",
    role: "Direktur",
  },

  teams: [
    {
      type: "single",
      name: "Syifa Tamara Putri",
      role: "Finance",
    },

    {
      type: "single",
      name: "Edward Coky Adam",
      role: "IT Developer",
    },

    {
      type: "project",
      name: "Project Manager",
      role: "SPV",
      child: {
        name: "Project Manager",
        role: "",
      },
    },

    {
      type: "admin",
      name: "Haeppy Muzayyin",
      role: "Head of Admin",
      children: [
        {
          name: "Admin Staff",
          role: "",
        },
        {
          name: "Admin Staff",
          role: "",
        },
      ],
    },
  ],
};

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-white
        px-5
        py-24
        sm:px-8
        lg:px-12
        xl:px-16
      "
    >
      <div className="mx-auto max-w-[1440px]">
        {/* =====================================================
            ABOUT INTRO
        ====================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#165D9B]
              "
            >
              01 — Tentang Kami
            </p>
          </div>

          <div>
            <h2
              className="
                max-w-5xl
                text-[clamp(3rem,7vw,7rem)]
                font-black
                leading-[0.88]
                tracking-[-0.065em]
              "
            >
              Mitra Andalan
              <br />
              Landscape Anda.
            </h2>

            <div
              className="
                mt-8
                max-w-3xl
                space-y-4
                text-base
                leading-relaxed
                text-black/60
                md:text-lg
              "
            >
              <p>
                PT. Mitra Utama Lansekap merupakan perusahaan konstruksi di
                bidang pertamanan yang didirikan pada tahun 2021.
              </p>

              <p>
                Mitra Utama Lansekap berfokus pada menciptakan ruang terbuka di
                lingkungan hunian privat dan komersial menjadi area yang nyaman
                untuk beraktivitas.
              </p>

              <p>
                Sejak tahun 2021 kami telah dipercaya dalam pekerjaan konstruksi
                hardscape, instalasi softscape, dan perawatan landscape.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            COMPANY INFORMATION
        ====================================================== */}

        <div
          className="
            mt-20
            grid
            border-t
            border-slate-200
            md:grid-cols-2
          "
        >
          {/* =================================================
              LOCATION
          ================================================== */}

          <div
            className="
              border-b
              border-slate-200
              py-8
              md:border-r
              md:pr-12
            "
          >
            <div className="flex items-start gap-4">
              <div
                className="
                  grid
                  h-11
                  w-11
                  shrink-0
                  place-items-center
                  rounded-full
                  bg-[#165D9B]/10
                "
              >
                <MapPin size={18} className="text-[#165D9B]" />
              </div>

              <div>
                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-slate-400
                  "
                >
                  Lokasi Kantor
                </p>

                <p
                  className="
                    mt-3
                    text-lg
                    font-bold
                    tracking-tight
                    text-[#102F35]
                    md:text-xl
                  "
                >
                  Jakarta Barat
                </p>

                <p
                  className="
                    mt-1
                    max-w-md
                    text-sm
                    leading-relaxed
                    text-slate-500
                  "
                >
                  Ruko Permata Regency Blok A2, Jl. H. Kelik, Srengseng,
                  Kembangan, Jakarta Barat.
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <div
            className="
              border-b
              border-slate-200
              py-8
              md:pl-12
            "
          >
            <div className="flex items-start gap-4">
              <div
                className="
                  grid
                  h-11
                  w-11
                  shrink-0
                  place-items-center
                  rounded-full
                  bg-[#165D9B]/10
                "
              >
                <Mail size={18} className="text-[#165D9B]" />
              </div>

              <div className="min-w-0">
                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-slate-400
                  "
                >
                  Kontak
                </p>

                <div className="mt-3 space-y-2">
                  <a
                    href="mailto:mitrautama.landscape@gmail.com"
                    className="
                      block
                      break-all
                      text-lg
                      font-bold
                      tracking-tight
                      text-slate-500
                      transition-colors
                      hover:text-[#165D9B]
                    "
                  >
                    mitrautama.landscape@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            ORGANIZATION STRUCTURE
        ====================================================== */}

        <div className="mt-28">
          {/* =================================================
              ORGANIZATION HEADER
          ================================================== */}

          <div
            className="
              mb-12
              flex
              flex-col
              gap-6
              border-t
              border-slate-200
              pt-8
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div>
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#165D9B]
                "
              >
                Struktur Organisasi dari Perusahaan PT. Mitra Utama Lansekap
              </p>

              <h3
                className="
                  mt-4
                  font-display
                  text-[clamp(3rem,6vw,6rem)]
                  font-black
                  leading-[0.86]
                  tracking-[-0.065em]
                  text-[#102F35]
                "
              >
                Struktur
                <br />
                Organisasi
              </h3>
            </div>
          </div>

          {/* =================================================
              ORGANIZATION TREE

              IMPORTANT:
              Tidak menggunakan min-w-[1100px].
              Layout tetap 4 kolom pada mobile tetapi
              setiap card mengecil mengikuti viewport.
          ================================================== */}

          <div className="relative mt-16 w-full">
            {/* =================================================
                LEVEL 1 — DIREKTUR UTAMA
            ================================================== */}

            <div className="flex justify-center">
              <OrganizationCard
                name={organization.top.name}
                role={organization.top.role}
                level="top"
              />
            </div>

            {/* Connector */}

            <div className="flex justify-center">
              <div
                className="
                  h-8
                  w-px
                  bg-[#165D9B]/30
                  sm:h-10
                "
              />
            </div>

            {/* =================================================
                LEVEL 2 — DIREKTUR
            ================================================== */}

            <div className="flex justify-center">
              <OrganizationCard
                name={organization.director.name}
                role={organization.director.role}
                level="director"
              />
            </div>

            {/* =================================================
                CONNECTOR LEVEL 2 → LEVEL 3
            ================================================== */}

            <div
              className="
                relative
                mx-auto
                h-14
                w-full
                sm:h-16
                lg:h-20
              "
            >
              {/* Vertical */}

              <div
                className="
                  absolute
                  left-1/2
                  top-0
                  h-6
                  w-px
                  -translate-x-1/2
                  bg-[#165D9B]/30
                  sm:h-8
                "
              />

              {/* Horizontal branch */}

              <div
                className="
                  absolute
                  left-[12.5%]
                  right-[12.5%]
                  top-6
                  h-px
                  bg-[#165D9B]/30
                  sm:top-8
                "
              />

              {/* Finance */}

              <div
                className="
                  absolute
                  left-[12.5%]
                  top-6
                  h-8
                  w-px
                  -translate-x-1/2
                  bg-[#165D9B]/30
                  sm:top-8
                  sm:h-8
                "
              />

              {/* IT */}

              <div
                className="
                  absolute
                  left-[37.5%]
                  top-6
                  h-8
                  w-px
                  -translate-x-1/2
                  bg-[#165D9B]/30
                  sm:top-8
                  sm:h-8
                "
              />

              {/* Project Manager */}

              <div
                className="
                  absolute
                  left-[62.5%]
                  top-6
                  h-8
                  w-px
                  -translate-x-1/2
                  bg-[#165D9B]/30
                  sm:top-8
                  sm:h-8
                "
              />

              {/* Head Admin */}

              <div
                className="
                  absolute
                  left-[87.5%]
                  top-6
                  h-8
                  w-px
                  -translate-x-1/2
                  bg-[#165D9B]/30
                  sm:top-8
                  sm:h-8
                "
              />
            </div>

            {/* =================================================
                LEVEL 3 — TEAM
            ================================================== */}

            <div
              className="
                mx-auto
                grid
                w-full
                grid-cols-4
                gap-1
                sm:gap-2
                md:gap-3
                lg:gap-5
              "
            >
              {/* =================================================
                  SYIFA
              ================================================== */}

              <div className="flex min-w-0 justify-center">
                <OrganizationCard
                  name="Syifa Tamara Putri"
                  role="Finance"
                  level="department"
                />
              </div>

              {/* =================================================
                  EDWARD
              ================================================== */}

              <div className="flex min-w-0 justify-center">
                <OrganizationCard
                  name="Edward Coky Adam"
                  role="IT Developer"
                  level="department"
                />
              </div>

              {/* =================================================
                  PROJECT MANAGER
              ================================================== */}

              <div className="flex min-w-0 flex-col items-center">
                <OrganizationCard
                  name="Project Manager"
                  role="SPV"
                  level="department"
                />

                {/* Connector */}

                <div
                  className="
                    h-5
                    w-px
                    bg-[#165D9B]/30
                    sm:h-8
                  "
                />

                {/* Child */}

                <OrganizationCard
                  name="Project Manager"
                  role=""
                  level="child"
                />
              </div>

              {/* =================================================
                  HEAD OF ADMIN
              ================================================== */}

              <div className="flex min-w-0 flex-col items-center">
                <OrganizationCard
                  name="Haeppy Muzayyin"
                  role="Head of Admin"
                  level="department"
                />

                {/* =================================================
                    ADMIN CONNECTOR
                ================================================== */}

                <div className="relative h-7 w-full sm:h-10">
                  {/* Vertical */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-0
                      h-3
                      w-px
                      -translate-x-1/2
                      bg-[#165D9B]/30
                      sm:h-5
                    "
                  />

                  {/* Horizontal */}

                  <div
                    className="
                      absolute
                      left-[25%]
                      right-[25%]
                      top-3
                      h-px
                      bg-[#165D9B]/30
                      sm:top-5
                    "
                  />

                  {/* Left */}

                  <div
                    className="
                      absolute
                      left-[25%]
                      top-3
                      h-4
                      w-px
                      -translate-x-1/2
                      bg-[#165D9B]/30
                      sm:top-5
                      sm:h-5
                    "
                  />

                  {/* Right */}

                  <div
                    className="
                      absolute
                      left-[75%]
                      top-3
                      h-4
                      w-px
                      -translate-x-1/2
                      bg-[#165D9B]/30
                      sm:top-5
                      sm:h-5
                    "
                  />
                </div>

                {/* =================================================
                    ADMIN STAFF

                    Mobile:
                    card dibuat kecil agar tetap berada
                    di dalam kolom Haeppy.
                ================================================== */}

                <div
                  className="
                    grid
                    w-full
                    grid-cols-2
                    justify-items-center
                    gap-1
                    sm:gap-2
                  "
                >
                  <OrganizationCard name="Admin Staff" role="" level="child" />

                  <OrganizationCard name="Admin Staff" role="" level="child" />
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              MOBILE LABEL
          ================================================== */}

          <div className="mt-10 lg:hidden">
            <p
              className="
                text-center
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-slate-400
              "
            >
              Struktur Organisasi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ORGANIZATION CARD
============================================================ */

function OrganizationCard({ name, role, level = "department" }) {
  const isTop = level === "top";
  const isDirector = level === "director";
  const isDepartment = level === "department";
  const isChild = level === "child";

  return (
    <div
      className={`
        group
        relative
        flex
        shrink-0
        flex-col
        items-center
        justify-center
        text-center
        transition-all
        duration-300

        ${
          isTop
            ? `
              h-[82px]
              w-[170px]
              rounded-[16px]
              bg-[#102F35]
              px-2
              text-white
              shadow-[0_15px_45px_rgba(16,47,53,0.16)]

              sm:h-[92px]
              sm:w-[220px]
              sm:rounded-[18px]
              sm:px-4

              lg:h-[104px]
              lg:w-[280px]
              lg:rounded-[22px]
              lg:px-6
            `
            : ""
        }

        ${
          isDirector
            ? `
              h-[82px]
              w-[170px]
              rounded-[15px]
              border
              border-[#165D9B]/20
              bg-white
              px-2
              text-[#102F35]
              shadow-[0_12px_35px_rgba(16,47,53,0.07)]

              sm:h-[92px]
              sm:w-[220px]
              sm:rounded-[17px]
              sm:px-4

              lg:h-[104px]
              lg:w-[280px]
              lg:rounded-[18px]
              lg:px-6
            `
            : ""
        }

        ${
          isDepartment
            ? `
              h-[76px]
              w-full
              max-w-none
              rounded-[11px]
              border
              border-slate-200
              bg-white
              px-1
              text-[#102F35]
              shadow-[0_7px_20px_rgba(16,47,53,0.04)]
              
              sm:h-[88px]
              sm:rounded-[15px]
              sm:px-2

              md:h-[96px]
              md:rounded-[17px]
              md:px-3

              lg:h-[104px]
              lg:rounded-[18px]
              lg:px-5

              hover:-translate-y-1
              hover:border-[#165D9B]/30
              hover:shadow-[0_18px_45px_rgba(16,47,53,0.09)]
            `
            : ""
        }

        ${
          isChild
            ? `
              h-[54px]
              w-full
              max-w-[58px]
              rounded-[9px]
              border
              border-slate-200
              bg-white
              px-1
              text-[#102F35]
              shadow-[0_5px_18px_rgba(16,47,53,0.04)]

              sm:h-[62px]
              sm:max-w-[85px]
              sm:rounded-[12px]
              sm:px-2

              md:h-[65px]
              md:max-w-[100px]

              lg:h-[68px]
              lg:max-w-[110px]
              lg:rounded-[15px]
              lg:px-3
            `
            : ""
        }
      `}
    >
      {/* ========================================================
          RED ACCENT
      ========================================================= */}

      {!isTop && (
        <span
          className="
            absolute
            left-0
            top-1/2
            h-5
            w-[2px]
            -translate-y-1/2
            rounded-r-full
            bg-[#D20A18]
            opacity-80
            transition-all
            duration-300

            sm:h-7
            sm:w-1

            group-hover:h-10
          "
        />
      )}

      {/* ========================================================
          NAME
      ========================================================= */}

      <p
        className={`
          max-w-full
          break-words
          font-display
          font-bold
          leading-[1.05]
          tracking-[-0.025em]

          ${
            isTop
              ? `
                text-[12px]
                sm:text-base
                lg:text-xl
              `
              : ""
          }

          ${
            isDirector
              ? `
                text-[12px]
                sm:text-base
                lg:text-lg
              `
              : ""
          }

          ${
            isDepartment
              ? `
                text-[8px]
                sm:text-[11px]
                md:text-sm
                lg:text-lg
              `
              : ""
          }

          ${
            isChild
              ? `
                text-[7px]
                leading-[1.05]
                sm:text-[9px]
                md:text-[10px]
                lg:text-sm
              `
              : ""
          }
        `}
      >
        {name}
      </p>

      {/* ========================================================
          ROLE
      ========================================================= */}

      {role && (
        <p
          className={`
            mt-1
            max-w-full
            break-words
            text-[6px]
            font-extrabold
            uppercase
            tracking-[0.12em]

            sm:mt-1.5
            sm:text-[8px]
            sm:tracking-[0.15em]

            md:text-[9px]

            lg:mt-2
            lg:text-[9px]
            lg:tracking-[0.18em]

            ${isTop ? "text-[#8FC5ED]" : "text-[#165D9B]"}
          `}
        >
          {role}
        </p>
      )}
    </div>
  );
}

/* ============================================================
   STAT
============================================================ */

function Stat({ value, label }) {
  return (
    <div className="min-w-0">
      <p
        className="
          font-display
          text-3xl
          font-black
          tracking-[-0.05em]
          text-[#102F35]

          sm:text-5xl
          md:text-6xl
        "
      >
        {value}
      </p>

      <p
        className="
          mt-1
          text-[7px]
          font-bold
          uppercase
          tracking-[0.12em]
          text-slate-400

          sm:mt-2
          sm:text-[10px]
          sm:tracking-[0.18em]
        "
      >
        {label}
      </p>
    </div>
  );
}
