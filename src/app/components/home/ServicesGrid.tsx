import React from 'react';
import * as Icons from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export const ServicesGrid: React.FC = () => {
  const { data } = useLanguage();
  const services = data?.services || [];

  return (
    <section id="servizi" className="bg-white py-32">
      <div className="mx-auto px-8 max-w-7xl">
        <div className="mb-20 max-w-2xl">
          <h2 className="mb-4 font-black text-blue-600 text-xs uppercase tracking-[0.3em]">
            Expertise
          </h2>
          <h3 className="font-black text-slate-900 text-4xl md:text-6xl uppercase leading-none tracking-tighter">
            Servizi di <br /> Manutenzione
          </h3>
        </div>

        <div className="gap-px grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-slate-200 border border-slate-200">
          {services.map((service: any) => {
            const IconComponent = (Icons as any)[service.icon] || Icons.ShieldCheck;
            return (
              <div
                key={service.id}
                className="group flex flex-col items-center bg-white hover:bg-slate-950 p-10 text-center transition-all duration-500"
              >
                <div className="bg-slate-50 group-hover:bg-blue-600 mb-6 p-4 transition-colors">
                  <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white group-hover:scale-110 transition-transform duration-500" />
                </div>

                <h4 className="mb-3 font-black text-slate-900 group-hover:text-white text-lg uppercase tracking-tighter transition-colors">
                  {service.title}
                </h4>

                <p className="text-slate-500 group-hover:text-slate-400 text-sm leading-relaxed transition-colors">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};