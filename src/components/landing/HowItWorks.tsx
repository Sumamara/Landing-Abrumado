import { BookOpen, MessageCircle, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: BookOpen,
    title: "Aprende el sistema",
    description:
      "Cada semana recibes una sesión en vivo con conceptos claros basados en evidencia científica, ejercicios prácticos y plantillas listas para usar.",
  },
  {
    number: "02",
    icon: Rocket,
    title: "Aplica en tu día real",
    description:
      "No es teoría abstracta. Trabajas con tus propias tareas, tu calendario real y tus desafíos específicos.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Recibe apoyo continuo",
    description:
      "Acceso a grupo privado para resolver dudas, compartir avances y mantener la motivación.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-background section-padding" id="program-details">
      <div className="section-container">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-primary">
              Metodología probada
            </span>
            <h2 className="heading-2 text-foreground">
              ¿Cómo funciona el taller?
            </h2>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent lg:left-1/2 lg:-translate-x-1/2 lg:block" />

            <div className="space-y-8 lg:space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col gap-6 lg:flex-row lg:items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                >
                  {/* Number bubble */}
                  <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-primary text-2xl font-bold text-primary-foreground lg:left-1/2 lg:-translate-x-1/2">
                    {step.number}
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-20 rounded-xl border border-border bg-card p-6 shadow-sm lg:ml-0 lg:w-[calc(50%-3rem)] ${index % 2 === 1 ? "lg:mr-auto" : "lg:ml-auto"
                      }`}
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="heading-3 mb-2 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
