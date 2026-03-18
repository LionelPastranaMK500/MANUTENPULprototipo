import { Link } from "react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8F9FA] to-white dark:from-[#0A192F] dark:via-[#0d1f35] dark:to-[#0A192F]"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #00B4D8 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-[#00B4D8]/10 text-[#00B4D8] px-4 py-2 rounded-full text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Certificados ISO 9001 • 14001 • 45001</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#0A192F] dark:text-white leading-[1.1] tracking-tight">
                Tres décadas de{" "}
                <span className="text-[#00B4D8]">experiencia</span>,{" "}
                calidad sin fronteras
              </h1>
              <p className="text-xl text-[#64748b] dark:text-gray-300 leading-relaxed max-w-2xl">
                Líder en Facility Management y Limpieza Industrial con operaciones 
                binacionales en Italia (Lombardía, Véneto) y Perú. Soluciones integrales 
                con tecnología de vanguardia y compromiso total.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/servicios"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-[#00B4D8] text-[#00B4D8] font-semibold rounded-xl hover:bg-[#00B4D8] hover:text-white transition-all duration-300 hover:scale-105 transform"
              >
                Ver Servicios
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#00B4D8] text-white font-semibold rounded-xl hover:bg-[#0096C7] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                Presupuesto Gratis
              </Link>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-[#00B4D8]">30+</p>
                <p className="text-sm text-muted-foreground mt-1">Años experiencia</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#00B4D8]">24/7</p>
                <p className="text-sm text-muted-foreground mt-1">Disponibilidad</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#00B4D8]">2</p>
                <p className="text-sm text-muted-foreground mt-1">Países</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative lg:block hidden">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00B4D8] to-[#0077B6] rounded-3xl opacity-20 blur-2xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWNobmljaWFuJTIwaW5kdXN0cmlhbCUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3NzM4NDY5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Técnico profesional operando maquinaria industrial"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
