import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="section-container flex h-16 items-center justify-between">
        <a href="#" className="font-display text-xl font-bold text-primary">
          Taller Productividad
        </a>
        
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#beneficios" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Beneficios
          </a>
          <a href="#temario" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Temario
          </a>
          <a href="#testimonios" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Testimonios
          </a>
          <a href="#precio" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Precio
          </a>
        </nav>

        <Button variant="cta" size="sm" asChild>
          <a href="#precio">Reservar mi cupo</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
