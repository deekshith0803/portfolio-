import React from 'react'
import { motion } from 'framer-motion'

interface Project {
    title: string;
    desc: string;
    link: string;
    tags: string[];
}

const projects: Project[] = [
    {
        title: 'E-Commerce Platform',
        desc: 'A full-scale e-commerce solution with real-time inventory management, payment gateway integration, and a comprehensive admin dashboard.',
        link: '#',
        tags: ['React', 'Node.js', 'MongoDB']
    },
    {
        title: 'Social Media App',
        desc: 'Interactive social networking platform featuring real-time messaging, feed algorithms, and robust user authentication systems.',
        link: '#',
        tags: ['React', 'Firebase', 'Tailwind']
    },
    {
        title: 'Task Management System',
        desc: 'Collaborative project management tool allowing teams to track progress, assign tasks, and visualize workflows effectively.',
        link: '#',
        tags: ['React', 'Redux', 'Express']
    }
]

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20 lg:py-32 bg-bg-secondary/30 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <span className="block text-sm text-accent-gold font-semibold tracking-[0.3em] uppercase mb-4">02</span>
                    <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-normal text-text-primary uppercase tracking-[0.05em] leading-none">
                        Projects
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="project-card group bg-bg-card border border-white/10 flex flex-col h-full relative"
                        >
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-accent-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            <div className="p-10 flex-1 flex flex-col">
                                <h3 className="font-display text-3xl font-bold mb-4 tracking-[0.05em] uppercase leading-tight text-white group-hover:text-accent-gold transition-colors italic">
                                    {project.title}
                                </h3>
                                <p className="text-base text-text-secondary mb-8 leading-relaxed flex-1 font-medium">
                                    {project.desc}
                                </p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:gap-4 hover:text-accent-gold"
                                >
                                    View Project <span className="text-lg">→</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
