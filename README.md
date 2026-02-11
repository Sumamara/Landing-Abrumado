# Taller de Productividad - Landing Page

Landing page de conversión para un taller de productividad orientado a profesionales saturados.

## 🚀 Cómo correr el proyecto

```bash
# Instalar dependencias
npm install

# Correr en desarrollo
npm run dev

# Build para producción
npm run build
```

## 📁 File Tree

```
src/
├── components/
│   ├── landing/
│   │   ├── Header.tsx      # Navegación sticky
│   │   ├── Hero.tsx        # Sección hero con CTA principal
│   │   ├── PainPoints.tsx  # "¿Te pasa esto?" - puntos de dolor
│   │   ├── Outcomes.tsx    # "Lo que vas a lograr" - beneficios
│   │   ├── HowItWorks.tsx  # 3 pasos del proceso
│   │   ├── Curriculum.tsx  # Módulos del taller
│   │   ├── Testimonials.tsx # Prueba social
│   │   ├── Pricing.tsx     # Precio y garantía
│   │   ├── FAQ.tsx         # Preguntas frecuentes
│   │   ├── FinalCTA.tsx    # CTA de cierre
│   │   └── Footer.tsx      # Footer con contacto
│   └── ui/                 # Componentes shadcn/ui
├── pages/
│   └── Index.tsx           # Página principal
├── index.css               # Design system (colores, tipografía)
└── main.tsx

tailwind.config.ts          # Configuración Tailwind con tokens
index.html                  # SEO meta tags
```

## ✏️ Dónde editar copy/datos

| Qué editar | Archivo | Qué buscar |
|------------|---------|------------|
| **Precio** | `Pricing.tsx` | `[Precio]` |
| **Fecha** | `Hero.tsx` | `[Fecha por definir]` |
| **Testimonios** | `Testimonials.tsx` | array `testimonials` |
| **Módulos** | `Curriculum.tsx` | array `modules` |
| **FAQs** | `FAQ.tsx` | array `faqs` |
| **Contacto** | `Footer.tsx` | `[tudominio]` |
| **Colores** | `index.css` | `:root` |
| **SEO** | `index.html` | meta tags |

## 🎨 Notas de diseño

1. **Espaciado 8px base** - Tokens CSS `--space-*` en index.css
2. **CTA consistente** - Variante `cta` (coral) en button.tsx
3. **Tipografía** - Outfit (headings) + Inter (body)
4. **Colores semánticos** - Teal `--primary`, coral `--cta`
5. **Mobile-first** - 1 columna móvil, responsive en `sm:` y `lg:`
6. **Accesibilidad** - HTML semántico, focus-visible, alto contraste
7. **Sin animaciones pesadas** - Solo transiciones CSS 200ms
8. **Jerarquía visual** - H1 único, H2 por sección, bullets

## 📋 Asunciones (placeholders)

- Precio: `$[Precio] USD`
- Fecha: `[Fecha por definir]`
- Duración: 4 semanas, 1 sesión/semana
- Modalidad: Online vía Zoom
- Testimonios: Nombres ficticios (reemplazar)
