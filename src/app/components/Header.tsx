import React, { useState, useEffect } from 'react';
import { Building2, Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Header: React.FC = () => {
  const { lang, setLang, data } = useLanguage();
  const { navigation } = data;

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ${isScrolled ? "h-20 bg-slate-950/95 backdrop-blur-md shadow-2xl" : "h-28 bg-transparent"
      }`}>
      <div className="flex justify-between items-center mx-auto px-8 max-w-7xl h-full">
        <div className="group flex items-center gap-4">
          <div className="flex flex-col leading-none">
            <span className="font-black text-white text-2xl italic uppercase tracking-tighter">
              {navigation.logo}
            </span>
            <span className="mt-1 font-bold text-[9px] text-blue-400 uppercase tracking-[0.45em]">
              {navigation.tagline}
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex gap-8 h-full">
            {navigation.links.map((link) => (
              <li
                key={link.id}
                className="group/item relative flex items-center"
                onMouseEnter={() => link.subLinks && setActiveDropdown(link.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a href={link.href || "#"} className="flex items-center gap-1 font-black text-[11px] text-white/40 hover:text-white uppercase tracking-[0.25em] transition-all">
                  {link.label}
                  {link.subLinks && <ChevronDown size={12} />}
                </a>

                {link.subLinks && activeDropdown === link.id && (
                  <div className="top-full left-0 absolute bg-slate-900 slide-in-from-top-2 shadow-2xl py-4 border border-white/5 w-64 animate-in fade-in">
                    {link.subLinks.map((sub) => (
                      <a key={sub.label} href={sub.href} className="block hover:bg-blue-600 px-6 py-3 font-bold text-[10px] text-white/40 hover:text-white uppercase tracking-widest transition-all">
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="bg-white/10 mx-2 w-px h-8" />

  
          <div className="flex items-center gap-3 text-white">
            <Globe size={14} className="text-blue-600" />
            <div className="flex gap-2 font-black text-[10px] uppercase tracking-widest">
              {(['IT', 'ES'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`transition-colors ${lang === l ? 'text-white' : 'text-white/20'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <button className="bg-blue-600 hover:bg-white px-8 py-4 font-black text-[10px] text-white hover:text-slate-950 uppercase tracking-[0.2em] transition-all">
            {navigation.cta}
          </button>
        </div>
      </div>
    </nav>
  );
};