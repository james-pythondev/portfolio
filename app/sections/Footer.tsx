export default function Footer() {
  return (
    <footer className="bg-[#E6E6E6] border-t border-black px-5 sm:px-8 md:px-16 py-6 sm:py-12">
      <div className="max-w-[1340px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Social links */}
        <div className="flex items-center gap-5 sm:gap-8">
          {[
            { l: "GitHub",    h: "https://github.com/james-pythondev"       },
            { l: "LinkedIn",  h: "https://linkedin.com/in/jamessahayaraj"   },
            { l: "Instagram", h: "https://instagram.com/jamezandrew_"       },
          ].map((s) => (
            <a
              key={s.l}
              href={s.h}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${s.l} profile`}
              className="text-[10px] font-bold uppercase tracking-[0.35em] text-black/35 hover:text-accent transition-colors"
            >
              {s.l}
            </a>
          ))}
        </div>

        {/* Credit */}
        <div className="flex flex-col items-start md:items-end gap-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/50">
            © {new Date().getFullYear()} James Andrew
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/25">
            Built by James Andrew | Framextech
          </p>
        </div>
      </div>
    </footer>
  );
}
