import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "../../context/LanguageContext";

// Root ha'e pe envoltorio principal omoañetéva opaite mba'e
export function Root() {
  return (
    <LanguageProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
          <Header />
          <main className="flex-1">
            {/* Ko'ápe oñembohasáta umi página ambue */}
            <Outlet />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}
