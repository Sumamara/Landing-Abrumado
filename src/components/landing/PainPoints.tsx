import { AlertCircle, Brain, Clock, Coffee, Frown, Moon, Zap } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    text: "\"No me alcanza el día\" — terminas agotada y con tareas pendientes.",
  },
  {
    icon: Brain,
    text: "\"Tengo mil cosas en la mente\" — no sabes por dónde empezar ni qué priorizar.",
  },
  /*{
    icon: Zap,
    text: "Interrupciones constantes que fragmentan tu concentración.",
  },*/
  {
    icon: Frown,
    text: "Te sientes culpable si descansas o tomas un respiro.",
  },
];

const PainPoints = () => {
  return (
    <section className="bg-background section-padding" id="problemas">
      <div className="section-container">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-primary">
              ¿Te suena familiar?
            </span>
            <h2 className="heading-2 text-foreground">
              Si esto te pasa, no estás sola
            </h2>
          </div>

          {/* Pain Points Grid */}
          <div className="flex flex-col gap-4">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl bg-destructive/5 p-5 transition-colors hover:bg-destructive/10"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                  <point.icon className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight">{point.text.split(" — ")[0].replace(/"/g, '')}</h3>
                  <p className="text-sm text-muted-foreground">{point.text.split(" — ")[1]}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Empathy statement */}
          {/* Empathy statement */}
          <div className="mt-10 rounded-xl bg-secondary/50 p-6 flex items-start gap-4 text-left">
            <div className="shrink-0 rounded-lg bg-primary/10 p-3">
              <AlertCircle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">
                El problema no eres tú.
              </h3>
              <p className="text-muted-foreground">
                Es que nadie te enseñó un sistema que funcione con tu realidad — sin fórmulas mágicas ni "levántate a las 5am".
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
