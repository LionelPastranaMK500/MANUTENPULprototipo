import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "../../context/LanguageContext";
export function Root() {
  return (
    <LanguageProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <div className="flex flex-col bg-slate-950 min-h-screen">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}
