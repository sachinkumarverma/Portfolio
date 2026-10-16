import { useEffect } from "react";
import ThemeProvider from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }

    // Redirect any invalid URL or 404 path back to the default '/' page
    const handleInvalidRoute = () => {
      if (window.location.pathname !== "/" && window.location.pathname !== "") {
        window.history.replaceState(null, "", "/");
      }
    };

    handleInvalidRoute();
    window.addEventListener("popstate", handleInvalidRoute);
    return () => window.removeEventListener("popstate", handleInvalidRoute);
  }, []);

  return (
    <ThemeProvider>
      <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-body)", transition: "background-color 0.4s ease" }}>
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
