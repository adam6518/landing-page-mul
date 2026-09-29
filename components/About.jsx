const organization = {
  director: {
    name: "Endang Julianti",
    role: "Direktur Utama",
  },

  directorTwo: {
    name: "Agung Gunawan",
    role: "Direktur",
  },

  teams: [
    {
      name: "Syifa Tamara Putri",
      role: "ADM / Keuangan",
    },
    {
      name: "Haeppy",
      role: "Manager",
    },
    {
      name: "Edward Coki Adam",
      role: "Logistik",
    },
  ],
};

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#f4f3ef] px-5 py-24 sm:px-6 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="section-label text-black/50">01 — Tentang Kami</p>
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
              Kembangkan
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
            border-black/15
            md:grid-cols-2
          "
        >
          {/* LOCATION */}
          <div
            className="
              border-b
              border-black/15
              py-8
              md:border-r
              md:pr-12
            "
          >
            <p className="section-label text-black/45">Lokasi Kantor</p>

            <p
              className="
                mt-4
                text-xl
                font-bold
                tracking-tight
                md:text-2xl
              "
            >
              Jakarta Barat
            </p>

            <p className="mt-1 text-black/55">Jakarta, Indonesia</p>
          </div>

          {/* CONTACT */}
          <div
            className="
              border-b
              border-black/15
              py-8
              md:pl-12
            "
          >
            <p className="section-label text-black/45">Kontak</p>

            <div className="mt-4 space-y-2">
              {/* GANTI NOMOR TELEPON DI SINI */}
              <a
                href="tel:+62XXXXXXXXXX"
                className="
                  block
                  text-xl
                  font-bold
                  tracking-tight
                  transition-colors
                  hover:text-yellow-500
                  md:text-2xl
                "
              >
                +62 XXX XXXX XXXX
              </a>

              <a
                href="mailto:mitrautama.landscape@gmail.com"
                className="
                  block
                  break-all
                  text-black/55
                  transition-colors
                  hover:text-yellow-500
                "
              >
                mitrautama.landscape@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            ORGANIZATION STRUCTURE
        ====================================================== */}
        <div className="mt-24">
          {/* HEADER */}
          <div
            className="
              mb-10
              flex
              flex-col
              justify-between
              gap-6
              border-t
              border-black/15
              pt-8
              md:flex-row
              md:items-end
            "
          >
            <div>
              <p className="section-label text-black/50">Struktur Organisasi</p>

              <h3
                className="
                  mt-4
                  max-w-3xl
                  text-4xl
                  font-black
                  leading-[0.9]
                  tracking-[-0.055em]
                  md:text-6xl
                "
              >
                Tim di balik
                <br />
                Mitra Utama Lansekap.
              </h3>
            </div>

            <p
              className="
                max-w-sm
                text-sm
                leading-relaxed
                text-black/50
              "
            >
              Struktur organisasi yang mendukung pelaksanaan pekerjaan
              konstruksi landscape secara terkoordinasi.
            </p>
          </div>

          {/* =================================================
              ORGANIZATION CHART
          ================================================== */}
          <div className="border-t border-black/15 pt-10">
            {/* =================================================
                LEVEL 1 — DIREKTUR UTAMA
            ================================================== */}
            <div className="flex justify-center">
              <OrganizationCard
                name={organization.director.name}
                role={organization.director.role}
                featured
              />
            </div>

            {/* CONNECTOR */}
            <div className="flex justify-center">
              <div className="h-8 w-px bg-[#8FA68F]/60" />
            </div>

            {/* =================================================
                LEVEL 2 — DIREKTUR
            ================================================== */}
            <div className="flex justify-center">
              <OrganizationCard
                name={organization.directorTwo.name}
                role={organization.directorTwo.role}
                featured
              />
            </div>

            {/* =================================================
                CONNECTOR TO TEAM
            ================================================== */}
            <div className="relative mx-auto h-10 w-full max-w-[900px]">
              {/* Vertical center line */}
              <div
                className="
                  absolute
                  left-1/2
                  top-0
                  h-full
                  w-px
                  -translate-x-1/2
                  bg-[#8FA68F]/60
                "
              />

              {/* Horizontal team connector */}
              <div
                className="
                  absolute
                  bottom-0
                  left-[16.666%]
                  right-[16.666%]
                  h-px
                  bg-[#8FA68F]/60
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
                max-w-[900px]
                grid-cols-3
                gap-2
                sm:gap-4
                md:gap-6
              "
            >
              {organization.teams.map((member) => (
                <div
                  key={member.name}
                  className="
                    relative
                    flex
                    min-w-0
                    justify-center
                  "
                >
                  {/* Individual connector */}
                  <div
                    className="
                      absolute
                      left-1/2
                      top-0
                      h-5
                      w-px
                      -translate-y-full
                      bg-[#8FA68F]/60
                    "
                  />

                  <OrganizationCard name={member.name} role={member.role} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            COMPANY STATS
        ====================================================== */}
        <div className="mt-24 border-t border-black/15 pt-8">
          <div
            className="
              grid
              grid-cols-3
              gap-3
              sm:gap-6
            "
          >
            <Stat value="2021" label="Established" />

            <Stat value="05" label="Project Areas" />

            <Stat value="01" label="Dedicated Partner" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ORGANIZATION CARD
============================================================ */

function OrganizationCard({ name, role, featured = false }) {
  return (
    <div
      className={`
        w-[280px]
        max-w-full
        border
        bg-[#111111]
        px-4
        py-5
        text-center
        text-white
        transition-colors
        ${
          featured
            ? "border-[#8FA68F]"
            : "border-yellow-400/30 hover:border-yellow-400"
        }
      `}
    >
      <p
        className={`
          font-bold
          leading-tight
          tracking-tight
          ${
            featured
              ? "text-xl md:text-2xl"
              : "text-[11px] sm:text-base md:text-xl"
          }
        `}
      >
        {name}
      </p>

      <p
        className="
          mt-2
          text-[8px]
          font-bold
          uppercase
          tracking-[0.12em]
          text-[#2F6F6D]
          sm:text-[9px]
          md:text-[10px]
          md:tracking-[0.18em]
        "
      >
        {role}
      </p>
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
          text-3xl
          font-black
          tracking-[-0.05em]
          sm:text-5xl
          md:text-6xl
        "
      >
        {value}
      </p>

      <p
        className="
          section-label
          mt-2
          text-[8px]
          text-black/50
          sm:text-[10px]
        "
      >
        {label}
      </p>
    </div>
  );
}
