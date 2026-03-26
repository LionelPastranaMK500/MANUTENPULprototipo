import React, { useState, useEffect } from "react";
import { Menu, X, Globe, ChevronDown, Sun, Moon, Award } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "next-themes";

export const Header: React.FC = () => {
  const { lang, setLang, data } = useLanguage();
  const { theme, setTheme } = useTheme();
  const { navigation } = data;

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const certificationsLinks = [
    { label: "ISO 9001", href: "/certificaciones/iso-9001" },
    { label: "ISO 14001", href: "/certificaciones/iso-14001" },
    { label: "ISO 45001", href: "/certificaciones/iso-45001" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-700 ${
        isScrolled
          ? "h-20 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-2xl border-b border-slate-200 dark:border-white/5"
          : "h-20 bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center mx-auto px-8 max-w-7xl h-full">
        {/* Logo Section */}
        <div className="group flex items-center gap-4">
          <a href="/" className="flex flex-col leading-none">
            <span
              className={`font-black text-2xl italic uppercase tracking-tighter transition-colors duration-500 ${
                isScrolled
                  ? "text-slate-900 dark:text-white"
                  : "text-slate-900 dark:text-white"
              }`}
            >
              {navigation.logo}
            </span>
            <span className="mt-1 font-bold text-[9px] text-blue-400 uppercase tracking-[0.45em]">
              {navigation.tagline}
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex gap-8 h-full">
            {navigation.links.map((link: any) => (
              <li
                key={link.id}
                className="group/item relative flex items-center"
                onMouseEnter={() => link.subLinks && setActiveDropdown(link.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href || "#"}
                  className={`flex items-center gap-1 font-black text-[11px] uppercase tracking-[0.25em] transition-all ${
                    isScrolled
                      ? "text-slate-500 dark:text-white/40 hover:text-blue-600 dark:hover:text-white"
                      : "text-slate-600 dark:text-white/60 hover:text-blue-600 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                  {link.subLinks && <ChevronDown size={12} />}
                </a>

                {/* Dropdown dinámico para links con sublinks (si existen en navigation) */}
                {link.subLinks && activeDropdown === link.id && (
                  <div className="top-full left-0 absolute bg-white dark:bg-slate-900 slide-in-from-top-2 shadow-2xl py-4 border border-slate-200 dark:border-white/5 w-64 animate-in fade-in">
                    {link.subLinks.map((sub: any) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className="block hover:bg-blue-600 px-6 py-3 font-bold text-[10px] text-slate-600 hover:text-white dark:text-white/40 uppercase tracking-widest transition-all"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}

            {/* COMBOBOX DE CERTIFICACIONES */}
            <li
              className="group/cert relative flex items-center h-full"
              onMouseEnter={() => setActiveDropdown("certs")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 font-black text-[11px] uppercase tracking-[0.25em] transition-all ${
                  isScrolled
                    ? "text-slate-500 dark:text-white/40 hover:text-blue-600 dark:hover:text-white"
                    : "text-slate-600 dark:text-white/60 hover:text-blue-600 dark:hover:text-white"
                }`}
              >
                {lang === "ES"
                  ? "Certificaciones"
                  : lang === "IT"
                    ? "Certificazioni"
                    : "Certifications"}
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-300 ${activeDropdown === "certs" ? "rotate-180" : ""}`}
                />
              </button>

              {/* Contenido del Dropdown/Combobox */}
              {activeDropdown === "certs" && (
                <div className="top-full left-0 absolute bg-white dark:bg-slate-900 slide-in-from-top-2 shadow-2xl py-4 border border-slate-200 dark:border-white/5 w-64 transition-all animate-in duration-300 fade-in">
                  <div className="mb-2 px-6 py-2 border-slate-100 dark:border-white/5 border-b">
                    <span className="font-black text-[10px] text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                      {lang === "ES"
                        ? "Estándares ISO"
                        : lang === "IT"
                          ? "Standard ISO"
                          : "ISO Standards"}
                    </span>
                  </div>
                  {certificationsLinks.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      className="group/sub flex items-center gap-3 hover:bg-blue-600 px-6 py-4 font-bold text-[10px] text-slate-600 hover:text-white dark:text-white/40 uppercase tracking-widest transition-all"
                    >
                      <div className="flex justify-center items-center bg-blue-50 dark:bg-white/5 group-hover/sub:bg-white/20 rounded-lg w-8 h-8 transition-colors">
                        <Award
                          size={14}
                          className="text-blue-600 group-hover/sub:text-white"
                        />
                      </div>
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
          </ul>

          <div
            className={`mx-2 w-px h-8 transition-colors ${isScrolled ? "bg-slate-200 dark:bg-white/10" : "bg-slate-200 dark:bg-white/10"}`}
          />

          <div className="flex items-center gap-6">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all active:scale-90 ${
                isScrolled
                  ? "text-slate-600 dark:text-blue-400 hover:bg-slate-100 dark:hover:bg-white/5"
                  : "text-slate-600 dark:text-white/80 hover:bg-slate-100 dark:hover:bg-white/5"
              }`}
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Language Selector */}
            <div className="flex items-center gap-3">
              <Globe size={14} className="text-blue-600" />
              <div className="flex gap-2 font-black text-[10px] uppercase tracking-widest">
                {(["IT", "ES", "EN"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`transition-colors ${
                      lang === l
                        ? isScrolled
                          ? "text-blue-600 dark:text-white"
                          : "text-blue-600 dark:text-white"
                        : isScrolled
                          ? "text-slate-300 dark:text-white/20"
                          : "text-slate-300 dark:text-white/20"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* <button
            className={`px-8 py-4 font-black text-[10px] uppercase tracking-[0.2em] transition-all ${
              isScrolled
                ? "bg-blue-600 text-white hover:bg-slate-900"
                : "bg-blue-600 text-white hover:bg-slate-900 dark:hover:bg-white dark:hover:text-slate-950"
            }`}
          >
            {navigation.cta}
          </button> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden transition-colors ${isScrolled ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};
