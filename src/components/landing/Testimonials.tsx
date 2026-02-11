import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Por fin entendí que trabajar más no es la solución. Ahora planifico mi semana en 15 minutos y me sobra tiempo para mí.",
    name: "María González",
    role: "Gerente de Marketing",
    avatar: "MG",
  },
  {
    quote:
      "Probé mil métodos y nada funcionaba. Este taller me dio un sistema simple que puedo mantener incluso en semanas caóticas.",
    name: "Carolina Ruiz",
    role: "Consultora independiente",
    avatar: "CR",
  },
  {
    quote:
      "Lo mejor fue aprender a descansar sin culpa. Mi productividad subió y mi estrés bajó. No sabía que era posible.",
    name: "Ana Martínez",
    role: "Diseñadora UX",
    avatar: "AM",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-primary section-padding" id="testimonios">
      <div className="section-container">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-blue-200">
              Resultados reales
            </span>
            <h2 className="heading-2 text-white">
              Lo que dicen quienes ya lo vivieron
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative flex flex-col justify-between rounded-xl bg-card p-8 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  {/* Stars */}
                  <div className="mb-6 flex text-amber-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="mb-6 text-lg text-card-foreground leading-relaxed font-medium">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border/50">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
