import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-8 text-center text-white border-t border-slate-800">
      <div className="section-container">
        <div className="mx-auto max-w-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Brand & Tagline Compact */}
            <div className="text-center md:text-left">
              <a href="#" className="font-display text-xl font-bold block mb-1">
                <span className="text-white">Taller</span>
                <span className="text-primary">Productividad</span>
              </a>
              <p className="text-xs text-slate-400">
                Recupera tu tiempo y tu vida.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="rounded-full bg-slate-900 p-2 text-white hover:bg-primary hover:text-white transition-all border border-slate-800">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-slate-900 p-2 text-white hover:bg-primary hover:text-white transition-all border border-slate-800">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-slate-900 p-2 text-white hover:bg-primary hover:text-white transition-all border border-slate-800">
                <Facebook className="h-5 w-5" />
              </a>
            </div>

          </div>

          {/* Divider */}
          <div className="my-6 h-px w-full bg-slate-800" />

          {/* Bottom */}
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-500 md:flex-row">
            <p>© {new Date().getFullYear()} Taller de Productividad.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Términos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
