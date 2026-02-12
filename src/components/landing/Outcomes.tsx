import { CheckCircle2 } from "lucide-react";

const outcomes = [
  {
    title: "Sentirme en control de mi trabajo",
    description: "Organizar mi trabajo de forma consciente, en lugar de pasar el día apagando fuegos.",
  },
  {
    title: "Dejar de sentir que mi trabajo nunca se acaba",
    description: "Trabajar con planificación y prioridades claras.",
  },
  {
    title: "Productividad sin más estrés",
    description: "Trabajar con tranquilidad, sin ir siempre con prisas ni ansiedad.",
  },
];

const Outcomes = () => {
  return (
    <section className="bg-primary section-padding" id="beneficios">
      <div className="section-container">
        <div className="mx-auto max-w-5xl">

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left: Success Story Card */}
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <div className="relative overflow-hidden rounded-2xl bg-white p-2 shadow-2xl transition-transform hover:scale-[1.02] duration-300">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-900">
                  {/* Placeholder Logic: Use a neutral professional placeholder or generic avatar */}
                  <img
                    src={`${import.meta.env.BASE_URL}images/ana-martinez.png`}
                    alt="Ana Martínez"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                {/* Content Overlay / Bottom Section */}
                <div className="p-6 bg-white">
                  <p className="text-xs font-bold text-purple-600 uppercase tracking-wide mb-2">
                    Ingeniera Civil
                  </p>
                  <p className="text-xl font-bold text-slate-900 mb-4 leading-tight">
                    "Lo mejor fue aprender a descansar sin culpa. Mi productividad subió y mi estrés bajó. No sabía que era posible."
                  </p>
                  <p className="text-sm font-medium text-slate-500 italic">
                    — Ana Martínez
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="text-left space-y-8">
              <div className="text-center">
                <span className="mb-4 inline-block text-sm font-bold uppercase tracking-wider text-blue-200">
                  Resultados, no promesas
                </span>
                <h2 className="heading-2 text-white mb-6">
                  Lo que vas a lograr
                </h2>
                <div className="h-1 w-40 bg-orange-400 rounded-full mx-auto"></div>
              </div>

              <div className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex gap-4 rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight">
                        {outcome.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {outcome.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
