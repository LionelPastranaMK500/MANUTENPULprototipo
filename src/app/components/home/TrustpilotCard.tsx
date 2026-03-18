import { Star, Quote } from "lucide-react";

export function TrustpilotCard() {
  const testimonials = [
    {
      name: "Marco Rossi",
      company: "Industrie Meccaniche SPA",
      avatar: "https://images.unsplash.com/photo-1554774853-719586f82d77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG1hbGUlMjB3b3JrZXJ8ZW58MXx8fHwxNzczODQ2OTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "Servizio impeccabile! Manutenpul ha trasformato la gestione della nostra struttura industriale. Professionalità al massimo livello.",
      rating: 5,
    },
    {
      name: "Carmen López",
      company: "TechCorp Perú",
      avatar: "https://images.unsplash.com/photo-1758518729929-8210d3b0839e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGZlbWFsZSUyMHdvcmtlcnxlbnwxfHx8fDE3NzM4NDY5NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "Excelente servicio de bioseguridad. Sus protocolos nos dieron la tranquilidad que necesitábamos para nuestras oficinas en Lima.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#0A192F]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center bg-gradient-to-br from-[#00B4D8]/5 to-[#0077B6]/5 dark:from-[#00B4D8]/10 dark:to-[#0077B6]/10 rounded-2xl p-12 border border-[#00B4D8]/20">
          {/* Trustpilot Logo & Rating */}
          <div className="flex flex-col items-center space-y-4 mb-8">
            <div className="flex items-center space-x-2">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#00B4D8">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="font-bold text-2xl text-[#0A192F] dark:text-white">Trustpilot</span>
            </div>
            
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-[#00B4D8] text-[#00B4D8]" />
              ))}
            </div>
            
            <p className="text-3xl font-extrabold text-[#0A192F] dark:text-white">
              4.8/5 <span className="text-lg font-semibold text-[#00B4D8]">Excelente</span>
            </p>
            <p className="text-sm text-muted-foreground">Basado en 247 reseñas</p>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#172a45] rounded-xl p-6 shadow-lg text-left relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-[#00B4D8]/20" />
                
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-bold text-[#0A192F] dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#00B4D8] text-[#00B4D8]" />
                  ))}
                </div>

                <p className="text-[#0A192F] dark:text-gray-300 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
