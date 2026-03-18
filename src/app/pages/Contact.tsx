import { ContactForm } from "../components/home/ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-[#0A192F] dark:text-white mb-4 tracking-tight">
            <span className="text-[#00B4D8]">Contacto</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos en cualquier momento.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-[#172a45] p-6 rounded-xl shadow-lg text-center">
            <MapPin className="w-12 h-12 text-[#00B4D8] mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Ubicaciones</h3>
            <p className="text-sm text-muted-foreground">
              Italia: Legnano, Monza, Milano<br />
              Perú: Lima
            </p>
          </div>

          <div className="bg-white dark:bg-[#172a45] p-6 rounded-xl shadow-lg text-center">
            <Phone className="w-12 h-12 text-[#00B4D8] mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Teléfono</h3>
            <p className="text-sm text-muted-foreground">
              IT: +39 0331 123456<br />
              PE: +51 1 234 5678
            </p>
          </div>

          <div className="bg-white dark:bg-[#172a45] p-6 rounded-xl shadow-lg text-center">
            <Mail className="w-12 h-12 text-[#00B4D8] mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-sm text-muted-foreground">
              info@manutenpul.com<br />
              contacto@manutenpul.com
            </p>
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
