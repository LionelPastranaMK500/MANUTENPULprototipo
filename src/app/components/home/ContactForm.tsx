import { useState } from "react";
import { Send, Upload, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    company: "",
    city: "",
    squareMeters: "",
    service: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "Limpieza Industrial",
    "Desinfección de Oficinas",
    "Bioseguridad",
    "Reformas Integrales",
    "Logística y Mudanzas",
    "Mantenimiento de Áreas Verdes",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#F8F9FA] to-white dark:from-[#0d1f35] dark:to-[#0A192F]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A192F] dark:text-white mb-4 tracking-tight">
            Solicita tu <span className="text-[#00B4D8]">Presupuesto</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Completa el formulario y nos pondremos en contacto en menos de 24 horas
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-[#172a45] rounded-2xl shadow-2xl p-8 md:p-12 border border-border"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Company Name */}
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-semibold text-[#0A192F] dark:text-white mb-2"
              >
                Nombre de Empresa *
              </label>
              <input
                type="text"
                id="company"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#F8F9FA] dark:bg-[#0A192F] border border-border focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 outline-none transition-all"
                placeholder="Tu empresa"
              />
            </div>

            {/* City */}
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-semibold text-[#0A192F] dark:text-white mb-2"
              >
                Ciudad *
              </label>
              <input
                type="text"
                id="city"
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#F8F9FA] dark:bg-[#0A192F] border border-border focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 outline-none transition-all"
                placeholder="Milano, Lima, etc."
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Square Meters */}
            <div>
              <label
                htmlFor="squareMeters"
                className="block text-sm font-semibold text-[#0A192F] dark:text-white mb-2"
              >
                Metros Cuadrados *
              </label>
              <input
                type="number"
                id="squareMeters"
                required
                min="1"
                value={formData.squareMeters}
                onChange={(e) => setFormData({ ...formData, squareMeters: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#F8F9FA] dark:bg-[#0A192F] border border-border focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 outline-none transition-all"
                placeholder="1000"
              />
            </div>

            {/* Service Type */}
            <div>
              <label
                htmlFor="service"
                className="block text-sm font-semibold text-[#0A192F] dark:text-white mb-2"
              >
                Tipo de Servicio *
              </label>
              <select
                id="service"
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#F8F9FA] dark:bg-[#0A192F] border border-border focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="">Selecciona un servicio</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* File Upload */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-[#0A192F] dark:text-white mb-2">
              Adjuntar fotos de la zona (opcional)
            </label>
            <div className="relative">
              <input
                type="file"
                id="fileUpload"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="fileUpload"
                className="flex items-center justify-center w-full px-4 py-6 rounded-xl bg-[#F8F9FA] dark:bg-[#0A192F] border-2 border-dashed border-border hover:border-[#00B4D8] cursor-pointer transition-all group"
              >
                <Upload className="w-6 h-6 text-muted-foreground group-hover:text-[#00B4D8] mr-2" />
                <span className="text-muted-foreground group-hover:text-[#00B4D8]">
                  {files.length > 0
                    ? `${files.length} archivo(s) seleccionado(s)`
                    : "Haz clic para subir imágenes"}
                </span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitted}
            className="w-full bg-gradient-to-r from-[#00B4D8] to-[#0096C7] text-white font-bold py-4 px-8 rounded-xl hover:from-[#0096C7] hover:to-[#0077B6] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isSubmitted ? (
              <>
                <CheckCircle2 className="w-6 h-6" />
                <span>¡Enviado con Éxito!</span>
              </>
            ) : (
              <>
                <Send className="w-6 h-6" />
                <span>Solicitar Presupuesto</span>
              </>
            )}
          </button>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Al enviar este formulario, aceptas nuestra política de privacidad
          </p>
        </form>
      </div>
    </section>
  );
}
