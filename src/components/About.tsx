import React from 'react'
import { FaReact, FaNodeJs, FaDatabase, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaPalette } from 'react-icons/fa'
import { IconType } from 'react-icons'
import { motion } from 'framer-motion'

interface Skill {
    name: string;
    icon: IconType;
}

const skills: Skill[] = [
    { name: 'Frontend / React', icon: FaReact },
    { name: 'Backend / Node.js', icon: FaNodeJs },
    { name: 'Database / Mongo', icon: FaDatabase },
    { name: 'Language / JS', icon: FaJs },
    { name: 'Markup / HTML5', icon: FaHtml5 },
    { name: 'Style / Tailwind', icon: FaCss3Alt },
    { name: 'Version / Git', icon: FaGitAlt },
    { name: 'Design / PS', icon: FaPalette },
]

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
}

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 lg:py-32 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <span className="block text-sm text-accent-gold font-semibold tracking-[0.3em] uppercase mb-4">01</span>
                    <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-normal text-text-primary uppercase tracking-[0.05em] leading-none">
                        About
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-12 items-center text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="about-text"
                    >
                        <p className="text-xl text-text-secondary mb-8 leading-relaxed font-normal">
                            I'm <strong className="text-white font-bold">Deekshith M</strong>, a developer focused on creating clean, intuitive, and performant digital experiences. My approach blends technical expertise with a keen eye for minimalist design.
                        </p>
                        <p className="text-xl text-text-secondary mb-8 leading-relaxed font-normal">
                            Currently specializing in the <strong className="text-white font-bold">MERN Stack</strong>, I enjoy solving complex problems through elegant code and modern architecture.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="skills-container w-full lg:col-span-2 mt-8 lg:mt-0"
                    >
                        <div className="skills-grid grid grid-cols-2 md:grid-cols-4 gap-4">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ y: -5, borderColor: '#DFB852' }}
                                    className="skill-card group bg-zinc-900/50 p-6 border border-white/10 transition-colors duration-300 flex flex-col items-center gap-4 relative overflow-hidden backdrop-blur-sm"
                                >
                                    <div className="absolute top-0 right-0 w-8 h-8 bg-accent-gold/10 -mr-4 -mt-4 rotate-45 transition-all group-hover:bg-accent-gold/20"></div>
                                    <skill.icon className="text-4xl text-white transition-transform duration-300 group-hover:scale-110 group-hover:text-accent-gold" />
                                    <span className="text-sm font-bold text-white uppercase tracking-widest text-center">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
