import { Clock, Globe, MapPin } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: Clock,
      value: "30+ Años",
      label: "de Trayectoria",
      description: "Experiencia consolidada desde 1993",
    },
    {
      icon: Clock,
      value: "24/7/365",
      label: "Servicio",
      description: "Disponibilidad total cuando nos necesites",
    },
    {
      icon: MapPin,
      value: "Cobertura Total",
      label: "Italia & Perú",
      description: "Lombardía, Véneto y operaciones en Lima",
    },
  ];

  return (
    <section className="py-20 bg-[#0A192F] dark:bg-[#0A192F] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #00B4D8 1px, transparent 1px), linear-gradient(to bottom, #00B4D8 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-4 group"
            >
              {/* Icon */}
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-[#00B4D8]/10 flex items-center justify-center group-hover:bg-[#00B4D8]/20 transition-colors duration-300">
                  <stat.icon className="w-10 h-10 text-[#00B4D8]" />
                </div>
              </div>

              {/* Value */}
              <div>
                <p className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xl font-semibold text-[#00B4D8] mb-2">
                  {stat.label}
                </p>
                <p className="text-sm text-gray-400">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
