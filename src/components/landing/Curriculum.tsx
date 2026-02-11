import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, CheckCircle2, FileText, Target, Timer, Users } from "lucide-react";

const modules = [
  {
    week: "Semana 1",
    title: "Claridad y Captura",
    icon: Target,
    topics: [
      "Sistema de captura: vacía tu mente sin perder nada",
      "Clarifica tus objetivos: qué es importante de verdad",
      "Auditoría de tiempo: dónde se te va el día",
    ],
  },
  {
    week: "Semana 2",
    title: "Planificación y Priorización",
    icon: Calendar,
    topics: [
      "Planificación semanal en 15 minutos",
      "Matriz de prioridades: urgente vs importante",
      "Diseño de tu agenda ideal (realista)",
    ],
  },
  {
    week: "Semana 3",
    title: "Foco y Ejecución",
    icon: Timer,
    topics: [
      "Bloques de trabajo profundo (deep work)",
      "Gestión de interrupciones y límites",
      "Técnicas anti-procrastinación",
    ],
  },
  {
    week: "Semana 4",
    title: "Balance y Sostenibilidad",
    icon: Users,
    topics: [
      "Ritual de cierre del día",
      "Descanso productivo (sin culpa)",
      "Hábitos para mantener el sistema",
    ],
  },
];

const bonuses = [
  { icon: FileText, text: "Plantillas descargables (Notion, Google Calendar)" },
  { icon: CheckCircle2, text: "Acompañamiento semanal" },
  { icon: Users, text: "Comunidad privada de apoyo" },
];

const Curriculum = () => {
  return (
    <section className="bg-secondary/30 section-padding" id="temario">
      <div className="section-container">
        <div className="mx-auto max-w-4xl">
          {/* Header Outside */}
          <div className="mb-8 text-center">
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-primary">
              Contenido del taller
            </span>


            <Accordion type="multiple" className="w-full space-y-4">
              {/* Item -1: Instructor */}
              <AccordionItem value="instructor" className="border-none">
                <AccordionTrigger className="flex flex-1 items-center justify-between font-medium [&[data-state=open]>svg]:rotate-180 w-full rounded-xl border border-border bg-card px-6 py-8 text-center transition-all hover:border-primary/30 hover:shadow-md hover:no-underline [&[data-state=open]]:rounded-b-none [&[data-state=open]]:border-b-0">
                  <div className="mx-auto w-full">
                    <h3 className="heading-3 text-foreground">
                      Tu instructor
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="rounded-b-xl border-x border-b border-border bg-card p-6">
                  <div className="flex flex-col items-center gap-6 sm:flex-row text-left">
                    <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-primary/20 bg-muted">
                      {/* Placeholder for instructor image if needed, or just initials/icon */}
                      <div className="flex h-full w-full items-center justify-center bg-primary/10 text-2xl font-bold text-primary">
                        TI
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg text-foreground">Nombre del Instructor</h4>
                      <p className="text-muted-foreground">
                        Ingeniero civil, especialista en productividad y gestión del tiempo, ayudando a profesionales a recuperar el control de su agenda.
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          +7 años formando a alumnos
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          +5 años de capacitación constante
                        </li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Item 0: Strategies */}
              <AccordionItem value="strategies" className="border-none">
                <AccordionTrigger className="flex flex-1 items-center justify-between font-medium [&[data-state=open]>svg]:rotate-180 w-full rounded-xl border border-border bg-card px-6 py-8 text-center transition-all hover:border-primary/30 hover:shadow-md hover:no-underline [&[data-state=open]]:rounded-b-none [&[data-state=open]]:border-b-0">
                  <div className="mx-auto w-full">
                    <h3 className="heading-3 text-foreground">
                      Estrategias de aprendizaje
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="rounded-b-xl border-x border-b border-border bg-card p-8">
                  <div className="flex flex-col gap-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Metodologías basadas en evidencia científica y comprobada con estudiantes reales.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-1">
                      {[
                        "Estrategias adaptadas a tus necesidades",
                        "Micro-learning para agendas ocupadas (15 min/día)",
                        "Acciones prácticas para incorporar el conocimiento en tu día a día",
                        "Acompañamiento semanal para ajustar el sistema a tus necesidades"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                          <span className="font-medium text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Item 1: Program Content */}
              <AccordionItem value="modules" className="border-none">
                <AccordionTrigger className="flex flex-1 items-center justify-between font-medium [&[data-state=open]>svg]:rotate-180 w-full rounded-xl border border-border bg-card px-6 py-8 text-center transition-all hover:border-primary/30 hover:shadow-md hover:no-underline [&[data-state=open]]:rounded-b-none [&[data-state=open]]:border-b-0">
                  <div className="mx-auto w-full">
                    <h3 className="heading-3 text-foreground">
                      Contenido semanal del proyecto
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="rounded-b-xl border-x border-b border-border bg-card p-6 pt-0">
                  {/* Modules Grid */}
                  <div className="mt-8 grid gap-6 sm:grid-cols-2 text-left">
                    {modules.map((module, index) => (
                      <div
                        key={index}
                        className="rounded-xl border border-border bg-card/50 p-6 transition-all hover:border-primary/30"
                      >
                        <div className="mb-4 flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                            <module.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <span className="text-xs font-medium uppercase tracking-wider text-primary">
                              {module.week}
                            </span>
                            <h3 className="font-display text-lg font-semibold text-foreground">
                              {module.title}
                            </h3>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Item 2: Bonuses */}
              <AccordionItem value="bonuses" className="border-none">
                <AccordionTrigger className="flex flex-1 items-center justify-between font-medium [&[data-state=open]>svg]:rotate-180 w-full rounded-xl border border-border bg-card px-6 py-8 text-center transition-all hover:border-primary/30 hover:shadow-md hover:no-underline [&[data-state=open]]:rounded-b-none [&[data-state=open]]:border-b-0">
                  <div className="mx-auto w-full">
                    <h3 className="heading-3 text-foreground">
                      Qué incluye
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="rounded-b-xl border-x border-b border-border bg-card p-6">
                  <div className="flex flex-wrap justify-center gap-4">
                    {bonuses.map((bonus, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 rounded-full bg-secondary/50 px-4 py-2 text-sm shadow-sm"
                      >
                        <bonus.icon className="h-4 w-4 text-primary" />
                        <span className="text-foreground">{bonus.text}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
