import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Sparkles } from "lucide-react";

const features = [
  "4 sesiones en vivo (1 por semana) para implementación guiada",
  "Plantillas descargables (Notion/Excel) de uso inmediato",
  "Comunidad privada de apoyo para resolver dudas",
  "Ejercicios prácticos con feedback personalizado",
];

const Pricing = () => {
  return (
    <section className="bg-gradient-to-b from-secondary/30 to-background section-padding" id="precio">
      <div className="section-container">
        <div className="mx-auto max-w-lg text-center">

          {/* Main Pricing Card */}
          <div className="relative overflow-hidden rounded-[2rem] border-2 border-primary bg-white shadow-xl">
            {/* Badge */}
            <div className="absolute top-0 w-full bg-primary py-2 text-center text-sm font-medium text-white z-20">
              Oferta Especial de Lanzamiento
            </div>

            {/* Promo Header (Inside Card) */}
            <div className="bg-primary/5 pt-16 pb-8 px-8 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute top-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <p className="font-bold text-xl text-slate-900 mb-2 leading-snug">
                  ¿Estás lista para trabajar sin estrés y con paz mental?
                </p>
                <p className="text-muted-foreground text-sm">
                  Únete a las profesionales que ya recuperaron su libertad.
                </p>
              </div>
            </div>

            <div className="p-8">


              <div className="mb-8 text-center">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">Inversión Única</p>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-6xl font-bold text-slate-900 font-display">$197</span>
                </div>
                <p className="text-sm text-green-600 font-medium bg-green-50 inline-block px-3 py-1 rounded-full">
                  Aprovecha este momento para un cambio
                </p>
              </div>

              {/* CTA */}
              <Button
                variant="cta"
                size="lg"
                className="w-full h-14 text-lg shadow-cta hover:shadow-cta/80 transition-all rounded-xl"
                asChild
              >
                <a
                  href="https://wa.me/50670588196?text=Hola, me gustaría reservar mi cupo en el taller de productividad con el precio especial de $197"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Sparkles className="h-5 w-5" />
                  Reservar mi cupo ahora
                </a>
              </Button>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Pago único · 100% Seguro
              </p>

              {/* Guarantee */}
              <div className="mt-8 border-t border-border/50 pt-6">
                <div className="flex items-center justify-center gap-2 text-slate-600 mb-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Garantía de satisfacción</span>
                </div>
                <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                  Si el taller no cumple tus expectativas en la primera semana, te devolvemos el 100% de tu dinero.
                </p>
              </div>
            </div>
          </div>
          {/* Features List (Visual Ref) */}
          <div className="mt-12 max-w-sm mx-auto bg-white rounded-[2rem] p-8 shadow-2xl border border-slate-100 text-left">
            <h3 className="text-xl font-bold text-slate-900 mb-6 font-display">
              Lo que incluye tu taller
            </h3>
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                  <span className="text-slate-700 font-medium leading-tight">{feature}</span>
                </li>
              ))}
            </ul>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Pricing;
