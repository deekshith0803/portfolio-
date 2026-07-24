import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPalette,
} from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  { name: "Frontend / React", icon: FaReact },
  { name: "Backend / Node.js", icon: FaNodeJs },
  { name: "Database / Mongo", icon: FaDatabase },
  { name: "Language / JS", icon: FaJs },
  { name: "Markup / HTML5", icon: FaHtml5 },
  { name: "Style / Tailwind", icon: FaCss3Alt },
  { name: "Version / Git", icon: FaGitAlt },
  { name: "Design / PS", icon: FaPalette },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section id="about" className="relative py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.3em] text-accent-gold">
            01
          </span>
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-normal uppercase leading-none tracking-[0.05em] text-text-primary">
            About
          </h2>
        </motion.div>

        <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="glass-card flex-1 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 text-left shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl lg:p-10"
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-accent-gold">
              What I bring
            </p>
            <p className="mb-5 text-xl leading-relaxed text-text-secondary">
              I’m <strong className="font-bold text-white">Deekshith M</strong>,
              a developer focused on crafting polished, intuitive experiences
              that feel both premium and purposeful.
            </p>
            <p className="text-xl leading-relaxed text-text-secondary">
              My work blends clean architecture, motion-rich storytelling, and a
              strong product mindset to turn concepts into memorable digital
              products.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-text-secondary">
                MERN Stack
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-text-secondary">
                UI Engineering
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-text-secondary">
                Motion Design
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <div className="glass-card rounded-[2rem] border border-white/10 bg-black/35 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-gold">
                  Core Stack
                </p>
                <span className="text-sm text-text-secondary">
                  Always evolving
                </span>
              </div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 md:grid-cols-4"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -6, scale: 1.02, borderColor: "#DFB852" }}
                    className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/5 p-4 text-center transition-all duration-300"
                  >
                    <div className="absolute right-0 top-0 h-8 w-8 rotate-45 bg-accent-gold/10 transition-all duration-300 group-hover:bg-accent-gold/20" />
                    <skill.icon className="relative z-10 text-3xl text-white transition-transform duration-300 group-hover:scale-110 group-hover:text-accent-gold" />
                    <span className="relative z-10 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
