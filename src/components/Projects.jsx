import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Fixora Service Booking",
    desc: "A modern service-booking experience with strong conversion-focused UX, clear user flows, and a polished visual system.",
    link: "https://fixora-client.vercel.app/",
    live: "https://fixora-client.vercel.app/",
    tags: ["React", "UI Design", "Frontend"],
  },
  {
    title: "GreenCart Commerce",
    desc: "An e-commerce storefront designed for smooth browsing, product discovery, and a refined shopping experience.",
    link: "https://github.com/deekshith0803/GreenCart-E-commerce",
    live: null,
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Secure Auth System",
    desc: "A backend-driven authentication foundation built with secure session handling, protected routes, and user management logic.",
    link: "https://github.com/deekshith0803/Authentification-system",
    live: null,
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Interactive Portfolio UI",
    desc: "A visually rich personal portfolio experience focused on motion, storytelling, and premium presentation.",
    link: "https://github.com/deekshith0803/portfolio-",
    live: null,
    tags: ["React", "Framer Motion", "Tailwind"],
  },
  {
    title: "Job Board Platform",
    desc: "A structured listing experience designed to present opportunities clearly and improve the browsing experience.",
    link: "https://github.com/deekshith0803/job-board-website",
    live: null,
    tags: ["HTML", "CSS", "Frontend"],
  },
  {
    title: "Brand-inspired UI Clone",
    desc: "A polished static experience exploring typography, layout balance, and brand-led visual storytelling.",
    link: "https://github.com/deekshith0803/parle_frooti",
    live: null,
    tags: ["HTML", "CSS", "Design"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.3em] text-accent-gold">
            02
          </span>
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-normal uppercase leading-none tracking-[0.05em] text-text-primary">
            Projects
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              whileHover={{ y: -10, scale: 1.01 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(223,184,82,0.15),_transparent_48%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-transparent via-accent-gold to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              <div className="relative flex-1">
                <div className="mb-6 flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-text-secondary">
                    Featured
                  </span>
                  <span className="text-sm text-accent-gold">0{index + 1}</span>
                </div>
                <h3 className="mb-4 font-display text-2xl font-bold uppercase leading-tight tracking-[0.04em] text-white transition-colors duration-300 group-hover:text-accent-gold">
                  {project.title}
                </h3>
                <p className="mb-8 flex-1 text-base leading-relaxed text-text-secondary">
                  {project.desc}
                </p>
                <div className="mb-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:gap-4 hover:text-accent-gold"
                  >
                    View Project <span className="text-lg">→</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:gap-4 hover:text-accent-gold"
                    >
                      Live <span className="text-lg">→</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
