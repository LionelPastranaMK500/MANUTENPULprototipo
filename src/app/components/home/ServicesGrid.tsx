import { Link } from "react-router";
import { 
  Factory, 
  Building2, 
  Shield, 
  Hammer, 
  Truck, 
  Trees,
  ArrowRight 
} from "lucide-react";

export function ServicesGrid() {
  const services = [
    {
      icon: Factory,
      title: "Limpieza Industrial",
      description: "Soluciones especializadas para plantas industriales con equipos de última generación.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Building2,
      title: "Desinfección de Oficinas",
      description: "Protocolos certificados para espacios corporativos seguros y saludables.",
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      icon: Shield,
      title: "Bioseguridad",
      description: "Desinfección con Peróxido de Hidrógeno y tecnología de vanguardia.",
      gradient: "from-teal-500 to-green-500",
    },
    {
      icon: Hammer,
      title: "Reformas Integrales",
      description: "Ristrutturazioni completas para renovar y modernizar sus instalaciones.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Truck,
      title: "Logística y Mudanzas",
      description: "Servicios de traslado y almacenamiento con seguridad garantizada.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Trees,
      title: "Mantenimiento de Áreas Verdes",
      description: "Jardinería profesional y cuidado de espacios exteriores.",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#0A192F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A192F] dark:text-white mb-4 tracking-tight">
            Servicios <span className="text-[#00B4D8]">Integrales</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones completas de Facility Management adaptadas a las necesidades de su empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-[#172a45] rounded-xl p-8 border border-border hover:border-[#00B4D8] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.gradient} p-0.5`}>
                  <div className="w-full h-full bg-white dark:bg-[#172a45] rounded-lg flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-[#00B4D8]" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-bold text-xl text-[#0A192F] dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Link */}
              <Link
                to="/servicios"
                className="inline-flex items-center text-[#00B4D8] font-semibold group-hover:gap-2 transition-all duration-300"
              >
                Saber más
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00B4D8] to-[#0077B6] opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
