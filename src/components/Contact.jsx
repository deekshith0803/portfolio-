import React from 'react'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaInstagram, FaBehance } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <section id="contact" className="py-20 lg:py-32 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <span className="block text-sm text-accent-gold font-semibold tracking-[0.3em] uppercase mb-4">03</span>
                    <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-normal text-text-primary uppercase tracking-[0.05em] leading-none">
                        Contact
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="contact-card max-w-4xl mx-auto text-center px-4 py-16 md:py-32 bg-zinc-900/50 border-y border-white/5 backdrop-blur-sm relative overflow-hidden z-30"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent to-accent-gold/50"></div>
                    <span className="subtitle block text-sm text-accent-gold font-bold tracking-[0.4em] uppercase mb-6">Let's Connect</span>
                    <p className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-[0.02em] leading-[0.9] text-white mb-16 uppercase italic">
                        Join the <span className="text-accent-gold">Winner's Circle</span>
                    </p>

                    <div className="flex justify-center gap-8 mb-20 relative z-40">
                        <a href="https://github.com/deekshith0803" target="_blank" rel="noreferrer" className="w-16 h-16 flex items-center justify-center border border-white/10 text-xl text-white transition-all duration-300 hover:border-accent-gold hover:text-black hover:bg-accent-gold">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/deekshith-m-378bb9302/" target="_blank" rel="noreferrer" className="w-16 h-16 flex items-center justify-center border border-white/10 text-xl text-white transition-all duration-300 hover:border-accent-gold hover:text-black hover:bg-accent-gold">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://www.instagram.com/dee_kshith_._/" target="_blank" rel="noreferrer" className="w-16 h-16 flex items-center justify-center border border-white/10 text-xl text-white transition-all duration-300 hover:border-accent-gold hover:text-black hover:bg-accent-gold">
                            <FaInstagram />
                        </a>
                        <a href="https://www.behance.net/deekshithm2" target="_blank" rel="noreferrer" className="w-16 h-16 flex items-center justify-center border border-white/10 text-xl text-white transition-all duration-300 hover:border-accent-gold hover:text-black hover:bg-accent-gold">
                            <FaBehance />
                        </a>
                        <a href="mailto:deekshithm321@gmail.com" className="w-16 h-16 flex items-center justify-center border border-white/10 text-xl text-white transition-all duration-300 hover:border-accent-gold hover:text-black hover:bg-accent-gold">
                            <FaEnvelope />
                        </a>
                    </div>

                    <a href="mailto:deekshithm321@gmail.com" className="btn bg-white text-black hover:bg-accent-gold hover:text-black border-none rounded-none px-12 py-5 uppercase font-bold tracking-[0.2em] inline-block transition-all duration-300 relative z-40">
                        Get In Touch
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
