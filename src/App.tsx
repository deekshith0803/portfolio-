import React, { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
        })

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <main className="bg-bg-primary min-h-screen text-text-primary selection:bg-accent-gold selection:text-black overflow-hidden font-body">
            <div className="fixed inset-0 z-0 pointer-events-none bg-glow"></div>

            <div className="relative z-10">
                <Navbar />
                <Hero />
                <About />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </main>
    )
}

export default App
