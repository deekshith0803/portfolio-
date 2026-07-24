import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import CanvasBackground from "./components/CanvasBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTouchActive, setIsTouchActive] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      if (touch) {
        setMousePosition({ x: touch.clientX, y: touch.clientY });
      }
    };

    const handleTouchStart = (event) => {
      const touch = event.touches[0];
      if (touch) {
        setMousePosition({ x: touch.clientX, y: touch.clientY });
        setIsTouchActive(true);
      }
    };

    const handleTouchEnd = () => {
      setIsTouchActive(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchcancel", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-bg-primary text-text-primary font-body selection:bg-accent-gold selection:text-black">
      <div
        className={`cursor-glow pointer-events-none fixed inset-0 z-0 overflow-hidden ${isTouchActive ? "cursor-glow-active" : ""}`}
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="aurora-1"></div>
        <div className="aurora-2"></div>
        <div className="mesh-layer"></div>
        <div className="bg-glow"></div>
        <div className="bg-noise"></div>
      </div>
      <CanvasBackground />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
