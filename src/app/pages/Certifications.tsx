import React, { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { ChevronLeft, CheckCircle2, FileText, Award } from "lucide-react";
import isoData from "../../data/iso.json";

export const Certifications: React.FC = () => {
  const { lang } = useLanguage();
  const [isoId, setIsoId] = useState<string>("");

  useEffect(() => {
    const getIsoFromUrl = () => {
      const path = window.location.pathname;
      const parts = path.split("/");
      setIsoId(parts[parts.length - 1]);
    };
    getIsoFromUrl();
    window.addEventListener("popstate", getIsoFromUrl);
    return () => window.removeEventListener("popstate", getIsoFromUrl);
  }, []);

  const selectedIso = (isoData as any)[lang]?.[isoId || ""];
  if (!isoId || !selectedIso) return null;

  // Componente para los marcos de imagen (Certificado y Sello)
  // Se reutiliza tanto en el diseño especial como en el estándar
  const ImagePlaceholders = () => (
    <div className="mt-20 flex flex-col items-center gap-12 border-t border-slate-100 dark:border-slate-800 pt-20 pb-20">
      {/* MARCO GRANDE: Certificado Principal */}
      <div className="w-full max-w-[650px] aspect-[1/1.4] bg-slate-50 dark:bg-slate-900 border-4 border-dashed border-slate-200 dark:border-slate-800 rounded-[2.5rem] flex flex-col items-center justify-center p-12 text-center group hover:border-blue-500 transition-all shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-blue-500/5 pointer-events-none" />
        <FileText
          size={100}
          className="text-slate-200 dark:text-slate-800 group-hover:text-blue-500/50 transition-colors mb-6"
        />
        <p className="text-[12px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em] leading-loose">
          [ Espacio para Certificación Principal ]<br />
          <span className="text-[10px] opacity-60">
            Visualización de Documento Completo
          </span>
        </p>
      </div>

      {/* MARCO PEQUEÑO: Sello debajo */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-32 h-32 bg-slate-50 dark:bg-slate-900 border-4 border-dashed border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center text-center group hover:border-blue-500 transition-all shadow-lg overflow-hidden relative">
          <Award
            size={40}
            className="text-slate-300 dark:text-slate-700 group-hover:text-blue-500 transition-colors"
          />
        </div>
        <p className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest text-center">
          [ Sello de Acreditación ]
        </p>
      </div>
    </div>
  );

  // CASO ESPECIAL: ISO 45001 (Diseño de compromiso integral)
  if (selectedIso.isSpecial) {
    return (
      <div className="pt-28 min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500 flex flex-col">
        <section className="bg-[#5AB2E6] py-8 shadow-inner">
          <div className="max-w-6xl mx-auto px-8">
            <h1 className="text-white text-3xl font-bold mb-1 italic">
              Certificazioni
            </h1>
            <p className="text-white/90 text-sm font-medium">
              {selectedIso.path}
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-8 py-16 flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white text-center leading-tight mb-6">
            {selectedIso.title}
          </h2>

          <div className="flex flex-col items-center mb-10">
            <h3 className="text-blue-500 font-bold text-xl md:text-2xl text-center border-b-2 border-blue-500 pb-1 uppercase tracking-tight">
              {selectedIso.subtitle}
            </h3>
          </div>

          <p className="text-slate-700 dark:text-slate-300 text-lg mb-12 leading-relaxed">
            {selectedIso.intro}
          </p>

          {selectedIso.sections.map((section: any) => (
            <div key={section.id} className="mb-16">
              <h4 className="text-blue-500 font-bold text-2xl mb-6 border-b-2 border-blue-500 inline-block">
                {section.title}
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-lg whitespace-pre-line mb-8 leading-relaxed">
                {section.text}
              </p>

              {section.listTitle && (
                <p className="font-bold text-slate-800 dark:text-white mb-6 italic">
                  {section.listTitle}
                </p>
              )}

              <div className="space-y-4 mb-10">
                {section.items.map((item: any, idx: number) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle2
                      className="text-green-500 w-6 h-6 mt-1 flex-shrink-0"
                      fill="currentColor"
                      stroke="white"
                    />
                    <p className="text-slate-700 dark:text-slate-300 text-lg">
                      <span className="font-bold">{item.bold}</span> {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-20 text-center border-t border-slate-100 dark:border-slate-800 pt-16">
            <h4 className="text-blue-500 font-extrabold text-3xl mb-8 border-b-4 border-blue-500 inline-block px-4 pb-2">
              {selectedIso.whyTitle}
            </h4>
            <div className="max-w-4xl mx-auto">
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-loose whitespace-pre-line">
                {selectedIso.whyText}
              </p>
            </div>
          </div>

          {/* También incluimos los marcos de imagen aquí al final del texto especial */}
          <ImagePlaceholders />

          <div className="mt-20 flex justify-center">
            <a
              href="/"
              className="flex items-center gap-2 text-slate-400 hover:text-blue-50 font-bold uppercase tracking-widest text-sm transition-colors bg-slate-800 px-6 py-3 rounded-full"
            >
              <ChevronLeft size={16} /> Indietro alla Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  // CASO ESTÁNDAR: ISO 9001 / 14001 (Texto + Marcos de imagen)
  return (
    <div className="pt-28 min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500 flex flex-col">
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 py-10 shadow-inner">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2">
              {lang === "IT" ? "Certificazioni" : "Certificaciones"}
            </h1>
            <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
              <span className="opacity-80">{selectedIso.path}</span>
            </div>
          </div>
          <a
            href="/"
            className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all font-bold text-xs uppercase tracking-widest"
          >
            <ChevronLeft size={16} /> {lang === "ES" ? "Volver" : "Indietro"}
          </a>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-8 flex-1">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-3xl font-black text-blue-600 dark:text-blue-400 uppercase tracking-tighter mb-10 border-b-2 border-blue-100 dark:border-blue-900/30 pb-4">
            {selectedIso.title}
          </h2>
          <div className="space-y-6">
            {selectedIso.fullText.map((paragraph: string, idx: number) => (
              <p
                key={idx}
                className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed text-justify whitespace-pre-line"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <ImagePlaceholders />
      </section>
    </div>
  );
};
