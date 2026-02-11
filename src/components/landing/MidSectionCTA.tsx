import { Button } from "@/components/ui/button";

const MidSectionCTA = () => {
    return (
        <section className="py-12 bg-primary">
            <div className="section-container">
                <div className="flex flex-col items-center justify-center gap-6 text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        ¿Listo para recuperar tu tiempo?
                    </h2>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Button variant="cta" size="lg" className="shadow-lg" asChild>
                            <a href="#precio">Reservar mi cupo</a>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-white text-primary bg-white hover:bg-white/90 hover:text-primary"
                            asChild
                        >
                            <a href="#program-details">Ver detalles del programa</a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MidSectionCTA;
