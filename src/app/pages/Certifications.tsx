import React from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import * as Icons from "lucide-react";
import isoData from "../../data/iso.json";

export const Certifications: React.FC = () => {
  const { isoId } = useParams();
  const { lang } = useLanguage();

  const selectedIso = (isoData as any)[lang]?.[isoId || ""];
  const Icon = selectedIso ? (Icons as any)[selectedIso.icon] : Icons.Award;

  if (!selectedIso) {
    return (
      <div className="pt-40 text-center dark:text-white px-8 h-screen">
        <h2 className="text-2xl font-bold">Certificación no encontrada</h2>
        <Link
          to="/"
          className="text-blue-500 underline mt-4 inline-block font-bold"
        >
          Volver a Inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
      <section className="py-20 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-in fade-in zoom-in duration-700">
            <div className="w-32 h-32 bg-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-600/30 mb-8">
              <Icon className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none mb-4">
              {selectedIso.title}
            </h1>
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-8">
              {selectedIso.subtitle}
            </h2>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 p-12 rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-sm transition-all">
            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed mb-10">
              {selectedIso.description}
            </p>
            <div className="space-y-4">
              <h3 className="font-black text-slate-900 dark:text-white uppercase tracking-wider text-sm">
                {lang === "ES"
                  ? "Beneficios Clave"
                  : lang === "IT"
                    ? "Vantaggi"
                    : "Key Benefits"}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {selectedIso.benefits.map((benefit: string, i: number) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-300"
                  >
                    <Icons.Check className="text-blue-600 w-5 h-5" />
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
