import { Button } from "@/components/ui/button";
import { ArrowRight, Ban, Clock, Quote, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background">
      <div className="section-container relative z-10 pt-8 pb-12">
        <div className="mx-auto max-w-md bg-card rounded-xl shadow-2xl overflow-hidden border border-border/50">

          {/* Card Content */}
          <div className="px-6 pt-10 pb-8 flex flex-col items-center text-center">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700 uppercase tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
              </span>
              Próxima edición: Cupos limitados
            </div>

            {/* Headline */}
            <h1 className="heading-1 mb-6 text-slate-900 font-bold tracking-tight text-3xl sm:text-4xl leading-[1.15]">
              Recupera el control de tu tiempo{" "}
              <span className="text-primary block mt-1">sin sacrificar tu vida personal</span>
            </h1>

            {/* Divider */}
            <div className="w-full px-8 mb-6">
              <hr className="border-slate-100" />
            </div>

            {/* Info Stack (Vertical) */}
            <div className="flex flex-col items-center gap-3 w-full">
              {/* Satisfaction */}
              <div className="flex items-center justify-center gap-3">
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium text-slate-600">4.9/5 satisfacción</span>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-2 text-slate-600 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <span>4 semanas de práctica real</span>
              </div>

              {/* No Toxic Productivity */}
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Ban className="h-4 w-4 text-primary" />
                <span>Sin productividad tóxica</span>
              </div>

              {/* Spots */}
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Users className="h-4 w-4 text-primary" />
                <span>Cupos limitados</span>
              </div>
            </div>
          </div>

          {/* CTA Footer Bar */}
          <div className="px-6 py-6 w-full flex justify-center">
            <Button
              variant="default" // Using default to override 'cta' variant styles just for this specific look if needed, but keeping 'cta' logic with manual overrides
              size="lg"
              className="w-full bg-[#E85D36] hover:bg-[#D44C27] text-white h-14 px-8 text-lg font-semibold rounded-xl shadow-lg border-b-4 border-[#C03E1C] active:border-b-0 active:translate-y-1 transition-all"
              asChild
            >
              <a href="#precio" className="group flex items-center justify-center gap-2">
                Reservar mi cupo
                <ArrowRight className="h-5 w-5 opacity-90" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute -top-40 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
    </section>
  );
};

export default Hero;
