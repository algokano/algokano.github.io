import { useActiveSection } from "@/hooks/useActiveSection";
import { InteractionProvider } from "@/state/InteractionContext";
import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Phone } from "@/components/phone/Phone";
import styles from "./App.module.css";

const SECTION_IDS = ["hero", "projects", "experience", "skills", "contact"] as const;

export default function App() {
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <InteractionProvider>
      <Masthead activeSection={activeSection} />
      <div className={styles.frame} id="top">
        <main className={styles.content}>
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
          <Footer />
        </main>
        <Phone activeSection={activeSection} />
      </div>
    </InteractionProvider>
  );
}
