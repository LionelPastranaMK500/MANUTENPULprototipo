import React from "react";
import * as Icons from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

export const ServicesGrid: React.FC = () => {
  const { data } = useLanguage();
  const services = data?.services || [];

  // Calculamos cuántos espacios vacíos quedan para completar la fila de 4
  const emptySlots = services.length % 4 !== 0 ? 4 - (services.length % 4) : 0;

  return (
    <section
      id="servizi"
      className="bg-slate-50 dark:bg-slate-950 py-32 transition-colors duration-500"
    >
      <div className="mx-auto px-8 max-w-7xl">
        <div className="mb-20 max-w-2xl">
          <h2 className="mb-4 font-black text-blue-600 dark:text-blue-500 text-xs uppercase tracking-[0.3em]">
            Expertise
          </h2>
          <h3 className="font-black text-slate-800 dark:text-slate-100 text-4xl md:text-6xl uppercase leading-none tracking-tighter transition-colors">
            Servizi di <br /> Manutenzione
          </h3>
        </div>

        {/* El grid con gap-px crea los bordes exteriores */}
        <div className="gap-px grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
          {/* Tarjetas de servicios con contenido y animaciones */}
          {services.map((service: any) => {
            const IconComponent =
              (Icons as any)[service.icon] || Icons.ShieldCheck;
            return (
              <div
                key={service.id}
                className="group flex flex-col items-center bg-white dark:bg-slate-900 hover:bg-blue-600 dark:hover:bg-blue-700 p-10 text-center transition-all duration-500 cursor-pointer"
              >
                <div className="bg-slate-100 dark:bg-slate-800 group-hover:bg-white/20 mb-6 p-4 transition-all duration-500">
                  <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                </div>

                <h4 className="mb-3 font-black text-slate-900 dark:text-white group-hover:text-white text-lg uppercase tracking-tighter transition-colors">
                  {service.title}
                </h4>

                <p className="text-slate-500 dark:text-slate-400 group-hover:text-blue-50 text-sm leading-relaxed transition-colors">
                  {service.description}
                </p>
              </div>
            );
          })}

          {/* MARCOS ESTRUCTURALES PARA EL ESPACIO VACÍO */}
          {Array.from({ length: emptySlots }).map((_, idx) => (
            <div
              key={`empty-frame-${idx}`}
              className="hidden lg:block bg-white dark:bg-slate-900 relative min-h-[350px]"
            >
              {/* Este es el marco interno solicitado: limpio y geométrico */}
              <div className="absolute inset-8 border border-slate-100 dark:border-slate-800" />

              {/* Un detalle de esquina opcional para reforzar que es un marco diseñado */}
              <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-slate-200 dark:border-slate-700" />
              <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-slate-200 dark:border-slate-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
