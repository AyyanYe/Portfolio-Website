import { lazy, Suspense, useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Tech from "./Tech";
import Works from "./Works";
import Contact from "./Contact";
import Certifications from "./Certifications";
import Footer from "./Footer";

const LazyStarsCanvas = lazy(() =>
  import("./canvas").then((m) => ({ default: m.StarsCanvas }))
);

const Home = () => {
  const location = useLocation();
  const contactSectionRef = useRef(null);
  const [showStars, setShowStars] = useState(false);

  useEffect(() => {
    const hash = location.hash?.slice(1);
    if (hash) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const el = contactSectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShowStars(true);
      },
      { rootMargin: "150px", threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Certifications />
      <Tech />
      <Works />
      <div ref={contactSectionRef} className="relative z-0">
        <Contact />
        {showStars && (
          <Suspense fallback={null}>
            <LazyStarsCanvas />
          </Suspense>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
