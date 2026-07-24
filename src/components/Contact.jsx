import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaInstagram,
  FaBehance,
  FaCoffee,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.3em] text-accent-gold">
            03
          </span>
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-normal uppercase leading-none tracking-[0.05em] text-text-primary">
            Contact
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="contact-card relative z-30 mx-auto max-w-4xl overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-zinc-900/85 to-black/70 px-4 py-16 text-center shadow-[0_0_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:py-24"
        >
          <div className="absolute left-1/2 top-0 h-20 w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent to-accent-gold/50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(223,184,82,0.12),_transparent_60%)]"></div>
          <div className="relative z-10">
            <span className="mb-6 block text-sm font-bold uppercase tracking-[0.4em] text-accent-gold">
              Let's Connect
            </span>
            <p className="mb-8 font-display text-[clamp(2.1rem,6vw,4rem)] font-bold uppercase italic leading-[0.95] tracking-[0.02em] text-white">
              Build something{" "}
              <span className="text-accent-gold">remarkable</span>
            </p>
            <p className="mx-auto mb-10 max-w-2xl text-base text-text-secondary sm:text-lg">
              Open to collaborations, freelance opportunities, and conversations
              around thoughtful digital products.
            </p>

            <div className="mb-12 flex flex-wrap justify-center gap-4 sm:gap-6">
              <a
                href="https://github.com/deekshith0803"
                target="_blank"
                rel="noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-xl text-white transition-all duration-300 hover:-translate-y-1 hover:border-accent-gold hover:bg-accent-gold hover:text-black sm:h-16 sm:w-16"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/deekshith-m-378bb9302/"
                target="_blank"
                rel="noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-xl text-white transition-all duration-300 hover:-translate-y-1 hover:border-accent-gold hover:bg-accent-gold hover:text-black sm:h-16 sm:w-16"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/dee_kshith_._/"
                target="_blank"
                rel="noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-xl text-white transition-all duration-300 hover:-translate-y-1 hover:border-accent-gold hover:bg-accent-gold hover:text-black sm:h-16 sm:w-16"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.behance.net/deekshithm2"
                target="_blank"
                rel="noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-xl text-white transition-all duration-300 hover:-translate-y-1 hover:border-accent-gold hover:bg-accent-gold hover:text-black sm:h-16 sm:w-16"
              >
                <FaBehance />
              </a>
              <a
                href="https://buymeacoffee.com/deekshith0803"
                target="_blank"
                rel="noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-accent-gold/30 bg-accent-gold/10 text-xl text-accent-gold transition-all duration-300 hover:-translate-y-1 hover:bg-accent-gold hover:text-black sm:h-16 sm:w-16"
              >
                <FaCoffee />
              </a>
              <a
                href="mailto:deekshithm321@gmail.com"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-xl text-white transition-all duration-300 hover:-translate-y-1 hover:border-accent-gold hover:bg-accent-gold hover:text-black sm:h-16 sm:w-16"
              >
                <FaEnvelope />
              </a>
            </div>

            <a
              href="mailto:deekshithm321@gmail.com"
              className="inline-block rounded-full border border-white/10 bg-white px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:-translate-y-1 hover:bg-accent-gold"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
