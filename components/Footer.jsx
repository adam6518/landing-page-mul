export default function Footer() {
  return (
    <footer className="bg-[#111111] px-5 py-8 text-white sm:px-6 md:px-10">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6 text-xs text-white/50 sm:gap-5 md:flex-row md:items-center md:justify-between">
        <div className="text-lg font-black text-white">
          MUL<span className="text-yellow-400">.</span>
        </div>

        <p className="leading-relaxed">
          PT. Mitra Utama Lansekap
          <span className="mx-2 hidden sm:inline">·</span>
          <br className="sm:hidden" />
          Jakarta Barat, Indonesia
        </p>

        <a
          href="mailto:mitrautama.landscape@gmail.com"
          className="break-all transition-colors hover:text-yellow-400 sm:break-normal"
        >
          mitrautama.landscape@gmail.com
        </a>
      </div>
    </footer>
  );
}
