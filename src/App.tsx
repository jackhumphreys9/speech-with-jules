import { NavBar } from "./components/NavBar";
import { useScrollVariable } from "./hooks/useScrollVariable";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { Pricing } from "./sections/Pricing";
import { Services } from "./sections/Services";
import { WhyNow } from "./sections/WhyNow";

export function App() {
  useScrollVariable();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <NavBar />
      <main id="main">
        <Hero />
        <About />
        <WhyNow />
        <Services />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
