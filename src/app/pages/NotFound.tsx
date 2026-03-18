import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#F8F9FA] to-white dark:from-[#0A192F] dark:to-[#0d1f35]">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-[#00B4D8] mb-4">404</h1>
        <h2 className="text-3xl font-bold text-[#0A192F] dark:text-white mb-4">
          Página no encontrada
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-md">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#00B4D8] text-white font-semibold rounded-xl hover:bg-[#0096C7] transition-all shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5 mr-2" />
            Ir al Inicio
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#00B4D8] text-[#00B4D8] font-semibold rounded-xl hover:bg-[#00B4D8] hover:text-white transition-all"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver Atrás
          </button>
        </div>
      </div>
    </div>
  );
}
