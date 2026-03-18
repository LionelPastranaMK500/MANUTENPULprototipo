import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ThemeProvider } from "next-themes";

export function Root() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
