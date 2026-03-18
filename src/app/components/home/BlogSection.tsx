import { useState } from "react";
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

type Category = "Todos" | "Bioseguridad" | "Industria" | "Noticias";

export function BlogSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const categories: Category[] = ["Todos", "Bioseguridad", "Industria", "Noticias"];

  const allPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1748261347902-451fb437e8fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwYmlvc2FmZXR5JTIwZGlzaW5mZWN0aW9ufGVufDF8fHx8MTc3Mzg0Njk1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Bioseguridad",
      title: "Peróxido de Hidrógeno: La Nueva Era de la Desinfección Industrial",
      date: "2026-03-15",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1571769562670-f1080680566b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY2xlYW5pbmclMjBlcXVpcG1lbnQlMjBmYWNpbGl0eSUyMG1hbmFnZW1lbnR8ZW58MXx8fHwxNzczODQ2OTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Industria",
      title: "Mantenimiento Predictivo con IoT en Facility Management",
      date: "2026-03-10",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1673551798121-9d7787c41c63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjByZW5vdmF0aW9uJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc3Mzg0Njk1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Noticias",
      title: "Manutenpul Expande Operaciones en el Mercado Peruano",
      date: "2026-03-05",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1637095937545-7d8c1edf4d2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBjbGVhbmluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzM4MzQ0NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Bioseguridad",
      title: "Protocolos Post-Pandemia para Espacios Corporativos",
      date: "2026-03-01",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlJTIwbG9naXN0aWNzfGVufDF8fHx8MTc3MzcyOTkyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Industria",
      title: "Optimización de Almacenes: Casos de Éxito en Lombardía",
      date: "2026-02-28",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1728881652469-56b43240dce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBtYWludGVuYW5jZSUyMGxhbmRzY2FwaW5nfGVufDF8fHx8MTc3Mzg0Njk1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Noticias",
      title: "Jardinería Sostenible: Tendencias 2026 en Espacios Verdes",
      date: "2026-02-25",
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1748348389780-3eb3ce44ac65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjaWxpdHklMjBtYWludGVuYW5jZSUyMHdvcmtlcnxlbnwxfHx8fDE3NzM4NDY5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Industria",
      title: "Tecnologías de Ósmosis Inversa para Tratamiento de Aguas",
      date: "2026-02-20",
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWNobmljaWFuJTIwaW5kdXN0cmlhbCUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3NzM4NDY5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Bioseguridad",
      title: "Certificaciones ISO: Nuestro Compromiso con la Calidad",
      date: "2026-02-15",
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1673551798121-9d7787c41c63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjByZW5vdmF0aW9uJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc3Mzg0Njk1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Noticias",
      title: "Renovación de Oficinas: Mejores Prácticas en Ristrutturazioni",
      date: "2026-02-10",
    },
  ];

  const filteredPosts = activeCategory === "Todos" 
    ? allPosts 
    : allPosts.filter(post => post.category === activeCategory);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const displayedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="py-20 bg-[#F8F9FA] dark:bg-[#0d1f35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A192F] dark:text-white mb-4 tracking-tight">
            Innovación en <span className="text-[#00B4D8]">Facility Management</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conocimientos, tendencias y casos de éxito de la industria
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentPage(1);
              }}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-200 ${
                activeCategory === category
                  ? "bg-[#00B4D8] text-white shadow-lg"
                  : "bg-white dark:bg-[#172a45] text-[#0A192F] dark:text-white hover:bg-[#00B4D8]/10 dark:hover:bg-[#00B4D8]/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white dark:bg-[#172a45] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#00B4D8] text-white text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <time>{formatDate(post.date)}</time>
                </div>
                <h3 className="font-bold text-lg text-[#0A192F] dark:text-white mb-3 line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                <button className="inline-flex items-center text-[#00B4D8] font-semibold group-hover:gap-2 transition-all">
                  Leer más
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                currentPage === page
                  ? "bg-[#00B4D8] text-white"
                  : "bg-white dark:bg-[#172a45] text-[#0A192F] dark:text-white hover:bg-secondary"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
