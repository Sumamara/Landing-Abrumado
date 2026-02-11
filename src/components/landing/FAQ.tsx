import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "No tengo tiempo ni para esto, ¿cómo voy a hacer un taller?",
    answer:
      "Precisamente por eso necesitas este taller. Son solo 2 horas por semana (1 sesión en vivo + ejercicios). Si no tienes 2 horas semanales para invertir en tu productividad, ese es exactamente el problema que vamos a resolver juntas.",
  },
  {
    question: "He probado muchas cosas y nada me funciona, ¿por qué esto sería diferente?",
    answer:
      "La mayoría de métodos son genéricos y no consideran tu realidad. En este taller trabajamos con TUS tareas, TU calendario y TUS desafíos específicos. Además, tienes apoyo continuo para ajustar el sistema cuando algo no funcione.",
  },
  {
    question: "¿Esto es otro curso de 'levantarse a las 5am'?",
    answer:
      "Todo lo contrario. Nuestro enfoque es productividad sostenible: trabajar mejor, no más. Aprenderás a descansar sin culpa, poner límites sanos y diseñar una agenda que respete tu vida personal. Cero hustle culture.",
  },
  {
    question: "¿Cuándo empiezo a ver resultados?",
    answer:
      "Desde la primera semana tendrás herramientas aplicables. La mayoría de participantes reportan mejoras notables en claridad y reducción de estrés después de la segunda sesión. El sistema completo toma 4 semanas para integrarse.",
  },
  /*{
    question: "¿Es solo para mujeres o puede participar cualquier persona?",
    answer:
      "Aunque el taller está diseñado pensando en profesionales como tú, cualquier persona que se identifique con los desafíos que mencionamos es bienvenida. Lo importante es el compromiso de aplicar lo aprendido.",
  },*/
  {
    question: "¿Cuál es la modalidad del taller?",
    answer:
      "100% online y en vivo via Zoom. Las sesiones son interactivas con ejercicios en tiempo real. Si no puedes asistir en vivo, tienes acceso a las grabaciones y al grupo de apoyo.",
  },
  {
    question: "¿Y si no puedo asistir a alguna sesión en vivo?",
    answer:
      "Todas las sesiones quedan grabadas. Además, el grupo privado está disponible para resolver dudas en cualquier momento. Lo importante es que avances a tu ritmo.",
  },
];

const FAQ = () => {
  return (
    <section className="bg-background section-padding" id="faq">
      <div className="section-container">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-primary">
              Preguntas frecuentes
            </span>
            <h2 className="heading-2 text-foreground">
              ¿Tienes dudas? Te las resolvemos
            </h2>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border bg-card px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="py-5 text-left font-display text-lg font-semibold hover:no-underline [&[data-state=open]>svg]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
