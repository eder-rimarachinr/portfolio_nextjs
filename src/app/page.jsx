import Experience from "@/app/components/Experience";
import HeroSection from "./components/HeroSection";
import styles from "./page.module.css";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Firsts Section */}
      <div className="container">
        <HeroSection />
      </div>
      {/* Second Section */}
      <Experience />
      {/* Portfolio */}
      <Projects />
    </main>
  );
}
