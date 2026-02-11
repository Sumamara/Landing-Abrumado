import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2, Calendar, Target, Timer, Users } from "lucide-react";

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

const ProgramAccordion = () => {
    return (
        <section className="bg-background section-padding" id="programa">
            <div className="section-container">
                <div className="mx-auto max-w-3xl">
                    <div className="mb-12 text-center">
                        <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-primary">
                            Contenido del taller
                        </span>
                        <h2 className="heading-2 text-foreground">
                            Qué incluye el programa
                        </h2>
                        <p className="body-large mt-4 text-muted-foreground">
                            4 semanas de transformación práctica con sesiones en vivo y ejercicios aplicados.
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                        {modules.map((module, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="mb-4 rounded-xl border border-border px-6">
                                <AccordionTrigger className="hover:no-underline py-4">
                                    <div className="flex items-center gap-4 text-left">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                            <module.icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-medium uppercase tracking-wider text-primary">
                                                {module.week}
                                            </div>
                                            <div className="text-lg font-semibold text-foreground">
                                                {module.title}
                                            </div>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 pt-1">
                                    <ul className="space-y-3 pl-[3.5rem]">
                                        {module.topics.map((topic, i) => (
                                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                                <span>{topic}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default ProgramAccordion;
