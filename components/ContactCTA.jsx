import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="bg-yellow-400 px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32 lg:py-36"
    >
      <div className="mx-auto max-w-[1600px]">
        <p className="section-label">03 — Let's work together</p>

        <h2 className="mt-6 max-w-5xl text-[clamp(3rem,8vw,8rem)] font-black leading-[0.9] tracking-[-0.07em]">
          HAVE A PROJECT
          <br />
          IN MIND<span className="text-white">?</span>
        </h2>

        <div className="mt-10 flex flex-col justify-between gap-8 border-t border-black/20 pt-6 md:mt-12 md:flex-row md:items-end">
          <p className="max-w-md text-base leading-relaxed sm:text-lg">
            Tell us about your landscape project and let’s explore what we can
            build together.
          </p>

          <a
            href="https://wa.me/?text=Hello%20PT.%20Mitra%20Utama%20Lansekap%2C%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-between gap-3 bg-black px-5 py-4 text-xs font-black uppercase text-white transition-colors hover:bg-white hover:text-black sm:w-fit sm:justify-center sm:px-6"
          >
            Chat on WhatsApp
            <MessageCircle size={17} />
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
