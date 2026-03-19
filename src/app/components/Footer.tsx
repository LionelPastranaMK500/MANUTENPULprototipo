import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";

export function Footer() {
  const italyLocations = [
    { city: "Legnano", address: "Via Roma 123, 20025 Legnano (MI)" },
    { city: "Monza", address: "Corso Milano 45, 20900 Monza (MB)" },
    { city: "Milano", address: "Viale Fulvio Testi 56, 20126 Milano (MI)" },
  ];

  const peruLocations = [
    { city: "Lima", address: "Av. Javier Prado Este 234, San Isidro, Lima" },
  ];

  const quickLinks = [
    { label: "Servicios", path: "/servicios" },
    { label: "Nosotros", path: "/nosotros" },
    { label: "Blog", path: "/blog" },
    { label: "Contacto", path: "/contacto" },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "hover:text-[#0077B5]",
    },
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      color: "hover:text-[#1877F2]",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color: "hover:text-[#E4405F]",
    },
  ];

  return (
    <footer className="bg-[#0A192F] text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Columna 1: Marca */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-[#00B4D8] text-white px-3 py-2 rounded-lg font-extrabold text-xl">
                M
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg leading-tight">
                  Manutenpul
                </span>
                <span className="text-[10px] text-[#00B4D8] font-semibold uppercase tracking-wider">
                  S.r.l.s.
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Liderazgo en Facility Management y Mantenimiento Industrial con
              más de 30 años de trayectoria.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`w-10 h-10 rounded-full bg-[#172a45] flex items-center justify-center transition-all duration-200 hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Italia */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-[#00B4D8]" />
              <span>Sedes Italia</span>
            </h3>
            <div className="space-y-3">
              {italyLocations.map((loc) => (
                <div key={loc.city} className="text-sm">
                  <p className="font-semibold text-[#00B4D8]">{loc.city}</p>
                  <p className="text-gray-300 text-xs">{loc.address}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Columna 3: Perú */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-[#00B4D8]" />
              <span>Sedes Perú</span>
            </h3>
            <div className="space-y-3">
              {peruLocations.map((loc) => (
                <div key={loc.city} className="text-sm">
                  <p className="font-semibold text-[#00B4D8]">{loc.city}</p>
                  <p className="text-gray-300 text-xs">{loc.address}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-2">
              <a
                href="tel:+390331123456"
                className="flex items-center space-x-2 text-sm text-gray-300 hover:text-[#00B4D8] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+39 0331 123456</span>
              </a>
              <a
                href="mailto:info@manutenpul.com"
                className="flex items-center space-x-2 text-sm text-gray-300 hover:text-[#00B4D8] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@manutenpul.com</span>
              </a>
            </div>
          </div>

          {/* Columna 4: Enlaces Rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">
              Enlaces Rápidos
            </h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm text-gray-300 hover:text-[#00B4D8] hover:translate-x-1 transition-all duration-200"
                >
                  → {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="pt-8 border-t border-white/10 text-center md:flex md:justify-between md:items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Manutenpul S.r.l.s. Todos los derechos
            reservados.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <Link to="#" className="hover:text-[#00B4D8] transition-colors">
              Política de Privacidad
            </Link>
            <Link to="#" className="hover:text-[#00B4D8] transition-colors">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
