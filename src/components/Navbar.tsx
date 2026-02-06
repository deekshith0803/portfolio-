import React, { useState, useEffect } from 'react'

interface NavLink {
    name: string;
    href: string;
}

const navLinks: NavLink[] = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState<boolean>(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-bg-primary/95 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="font-display text-3xl tracking-widest text-text-primary z-[51] font-bold">DK.</a>

                {/* Desktop Nav */}
                <ul className="hidden lg:flex gap-12">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="text-sm font-bold text-text-secondary uppercase tracking-[0.2em] relative transition-colors duration-300 hover:text-text-primary hover:text-accent-gold"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden z-[51]">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="flex flex-col gap-1.5 group p-2 relative z-[52]">
                        <span className={`w-8 h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-8 h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-8 h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>

                {/* Mobile Nav */}
                <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center gap-10 transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="font-display text-4xl sm:text-5xl text-white uppercase tracking-widest hover:text-accent-gold transition-colors duration-300 relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-accent-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
