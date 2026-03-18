import { Award, Shield, CheckCircle } from "lucide-react";

export function TrustBar() {
  const certifications = [
    {
      name: "ISO 9001",
      description: "Gestión de Calidad",
      icon: Award,
    },
    {
      name: "ISO 14001",
      description: "Gestión Ambiental",
      icon: Shield,
    },
    {
      name: "ISO 45001",
      description: "Seguridad y Salud",
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-12 bg-[#F8F9FA] dark:bg-[#0d1f35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-[#64748b] dark:text-gray-400 uppercase tracking-wide">
            Nuestras Certificaciones Internacionales
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="group flex flex-col items-center space-y-3 p-6 rounded-xl bg-white dark:bg-[#172a45] hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-[#00B4D8]/10 flex items-center justify-center group-hover:bg-[#00B4D8]/20 transition-colors">
                <cert.icon className="w-8 h-8 text-[#0A192F] dark:text-[#00B4D8] group-hover:text-[#00B4D8] transition-colors" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-xl text-[#0A192F] dark:text-white">{cert.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
