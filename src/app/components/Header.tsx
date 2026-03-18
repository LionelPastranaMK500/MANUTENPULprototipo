import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Globe, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"es" | "it" | "en">("es");
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/servicios", label: { es: "Servicios", it: "Servizi", en: "Services" } },
    { path: "/nosotros", label: { es: "Nosotros", it: "Chi Siamo", en: "About" } },
    { path: "/blog", label: { es: "Blog", it: "Blog", en: "Blog" } },
    { path: "/contacto", label: { es: "Contacto", it: "Contatti", en: "Contact" } },
  ];

  const languages = [
    { code: "it" as const, flag: "🇮🇹" },
    { code: "es" as const, flag: "🇵🇪" },
    { code: "en" as const, flag: "🇬🇧" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-[#0A192F]/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00B4D8] to-[#0077B6] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-[#00B4D8] text-white px-3 py-2 rounded-lg">
                <span className="font-extrabold text-xl tracking-tight">M</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg text-[#0A192F] dark:text-white leading-tight tracking-tight">
                Manutenpul
              </span>
              <span className="text-[10px] text-[#00B4D8] font-semibold uppercase tracking-wider">
                S.r.l.s.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-4 py-2 text-[#0A192F] dark:text-white font-medium transition-colors group"
                >
                  {link.label[currentLang]}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#00B4D8] transform origin-left transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </nav>

          {/* Right Side - Language, Theme, CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="flex items-center space-x-1 bg-secondary rounded-lg p-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setCurrentLang(lang.code)}
                  className={`px-2 py-1 rounded text-sm transition-all duration-200 ${
                    currentLang === lang.code
                      ? "bg-white dark:bg-[#172a45] shadow-sm"
                      : "hover:bg-white/50 dark:hover:bg-[#172a45]/50"
                  }`}
                  title={lang.code.toUpperCase()}
                >
                  {lang.flag}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* CTA Button */}
            <Link
              to="/contacto"
              className="px-6 py-2.5 bg-[#00B4D8] text-white font-semibold rounded-xl hover:bg-[#0096C7] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              {currentLang === "es" && "Solicitar Presupuesto"}
              {currentLang === "it" && "Richiedi Preventivo"}
              {currentLang === "en" && "Request Quote"}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-secondary"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0A192F] border-t border-border">
          <nav className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg hover:bg-secondary transition-colors"
              >
                {link.label[currentLang]}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <Link
                to="/contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center px-4 py-3 bg-[#00B4D8] text-white font-semibold rounded-lg"
              >
                {currentLang === "es" && "Solicitar Presupuesto"}
                {currentLang === "it" && "Richiedi Preventivo"}
                {currentLang === "en" && "Request Quote"}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
