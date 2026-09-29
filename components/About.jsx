export default function About() {
  return (
    <section
      id="about"
      className="bg-[#f4f3ef] px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32 lg:py-36"
    >
      <div className="mx-auto grid max-w-[1600px] gap-10 md:gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="section-label text-black/50">01 — Tentang Kami</p>
        </div>

        <div className="min-w-0">
          <h2 className="max-w-4xl text-[clamp(2.7rem,6vw,7rem)] font-black leading-[0.95] tracking-[-0.06em]">
            Kembangkan Landscape Anda.
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-black/60 sm:mt-8 sm:text-lg">
            PT. Mitra Utama Lansekap merupakan perusahaan konstruksi di bidang
            pertamanan yang didirikan pada tahun 2021, Mitra Utama Lansekap
            fokus pada menciptakan ruang terbuka di lingkungan hunian privat dan
            komersial menjadi area yang nyaman untuk beraktivitas.
            <br />
            Sejak tahun 2021 kami sudah dipercaya dalam pembuatan konstruksi
            hardscape, instalasi softscape, dan perawatan lansekap
          </p>

          <div className="mt-10 grid grid-cols-1 gap-7 border-t border-black/15 pt-6 min-[420px]:grid-cols-2 md:mt-12 md:grid-cols-3 md:gap-8">
            <div>
              <p className="text-4xl font-black tracking-tight sm:text-5xl">
                2021
              </p>
              <p className="section-label mt-2 text-black/50">Established</p>
            </div>

            <div>
              <p className="text-4xl font-black tracking-tight sm:text-5xl">
                05
              </p>
              <p className="section-label mt-2 text-black/50">Project Areas</p>
            </div>

            <div>
              <p className="text-4xl font-black tracking-tight sm:text-5xl">
                01
              </p>
              <p className="section-label mt-2 text-black/50">
                Dedicated partner
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
