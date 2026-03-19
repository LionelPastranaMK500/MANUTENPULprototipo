import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export const HeroSection: React.FC = () => {
  const { data } = useLanguage();
  const { hero } = data;

  return (
    <section className="relative flex items-center bg-slate-950 h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1974')] bg-cover bg-center opacity-40" />

      <div className="z-20 relative mx-auto px-8 w-full max-w-7xl">
        <span className="block mb-4 font-black text-amber-500 text-xs uppercase tracking-[0.4em]">
          {hero.badge}
        </span>
        {/* <h1 className="mb-8 font-black text-white md:text-[120px] text-6xl uppercase leading-[0.85] tracking-tighter">
          {hero.titleMain} <br />
          <span className="text-blue-600">{hero.titleDivider}</span> {hero.titleSecondary}
        </h1> */}
        <p className="mb-12 max-w-2xl font-light text-slate-400 text-lg md:text-2xl leading-relaxed">
          {hero.description}
        </p>
        <button className="group flex items-center gap-4 bg-blue-600 hover:bg-white shadow-2xl px-10 py-5 font-black text-[10px] text-white hover:text-slate-950 uppercase tracking-[0.2em] transition-all duration-500">
          {hero.cta}
          <ArrowRight className="transition-transform group-hover:translate-x-2" />
        </button>
      </div>
    </section>
  );
};