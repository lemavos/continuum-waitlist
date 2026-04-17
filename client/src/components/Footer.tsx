/*
 * CONTINUUM — Footer
 * Design: Void Cartography — minimal, dark, clean grid
 * Logo + links + copyright. No clutter.
 */
import AppLogo from "./AppLogo";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#000000]">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 100% at 50% 0%, rgba(255,255,255,0.02) 0%, transparent 60%)",
        }}
      />

      <div className="container relative z-10 py-14 lg:py-16">
        <div className="max-w-2xl">
          <a href="#" className="flex items-center gap-2.5 mb-5">
            <AppLogo />
            <span
              className="text-white font-semibold tracking-tight text-[1.05rem]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Continuum
            </span>
          </a>

          <p className="font-body text-sm leading-[1.75] text-[#888888] max-w-lg">
            Continuum is still in development. Everyone who joins the waitlist will be
            notified by email when the beta is ready to open.
          </p>

          <div className="pt-8 mt-8 border-t border-white/[0.05]">
            <p className="font-body text-xs text-[#888888]">
              © {new Date().getFullYear()} Continuum.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
