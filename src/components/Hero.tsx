import React from 'react'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
    return (
        <section id="home" className="min-h-screen flex items-center relative z-10 py-20 lg:py-32 overflow-hidden">
            <div className="container flex flex-col items-center justify-center min-h-[70vh] lg:min-h-[80vh] relative">
                {/* Visual Background (Centered & Subtle) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-20 lg:opacity-30 z-0">
                    <div className="absolute inset-0 border border-accent-gold/20 rounded-full animate-spin-slow"></div>
                    <div className="absolute inset-[15%] border border-accent-gold/10 rounded-full"></div>
                </div>

                {/* Content */}
                <div className="hero-content relative z-30 flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="hero-content-group w-full flex flex-col items-center"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="hero-subtitle block text-xs sm:text-sm text-accent-gold font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-4 sm:mb-6"
                        >
                            Full Stack Developer
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                            className="hero-title font-display text-[clamp(2.5rem,10vw,8rem)] font-bold tracking-tight leading-[0.9] mb-6 sm:mb-8 text-white uppercase italic drop-shadow-lg p-2 whitespace-nowrap"
                        >
                            Deekshith <span className="text-accent-gold">M .</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="hero-desc text-base sm:text-lg text-text-secondary mb-8 sm:mb-12 leading-relaxed max-w-[600px] font-medium tracking-wide mx-auto px-4 sm:px-0"
                        >
                            Precision. Power. Performance. Building high-end digital experiences.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="flex gap-4 sm:gap-6 flex-col sm:flex-row justify-center w-full sm:w-auto px-6 sm:px-0"
                        >
                            <div className="hero-btn-wrapper w-full sm:w-auto">
                                <a href="#projects" className="btn bg-white text-black hover:bg-accent-gold hover:text-black border-none rounded-none px-8 py-4 uppercase font-bold tracking-[0.2em] w-full sm:w-auto text-center transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] block text-sm sm:text-base">Latest Work</a>
                            </div>
                            <div className="hero-btn-wrapper w-full sm:w-auto">
                                <a href="#contact" className="btn border border-white/20 text-white hover:border-accent-gold hover:text-accent-gold rounded-none px-8 py-4 uppercase font-bold tracking-[0.2em] w-full sm:w-auto text-center transition-all duration-300 block text-sm sm:text-base">Contact Me</a>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
