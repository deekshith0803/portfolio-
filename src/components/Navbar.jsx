import React, { useState, useEffect } from 'react'

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Lock body scroll on mobile menu open
    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto'
        return () => (document.body.style.overflow = 'auto')
    }, [mobileMenuOpen])

    return (
        <>
            {/* Navbar */}
            <nav
                className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500
                ${scrolled
                        ? 'bg-black/30 backdrop-blur-xl border-b border-white/10 shadow-xl'
                        : 'bg-black/10 backdrop-blur-md'}
                `}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <a
                        href="#home"
                        className="font-display text-2xl tracking-widest text-white font-bold"
                    >
                        DK.
                    </a>

                    {/* Desktop Nav */}
                    <ul className="hidden lg:flex gap-12">
                        {navLinks.map(link => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80 hover:text-white transition"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden relative z-[110] flex flex-col gap-1.5"
                        aria-label="Toggle Menu"
                    >
                        <span className={`w-7 h-[2px] bg-white transition ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`w-7 h-[2px] bg-white transition ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`w-7 h-[2px] bg-white transition ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-[90] transition-all duration-500
                ${mobileMenuOpen
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'}
                bg-black/60 backdrop-blur-2xl
                `}
            >
                <div className="h-full flex flex-col items-center justify-center gap-10">
                    {navLinks.map(link => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-4xl font-display uppercase tracking-widest text-white hover:text-accent-gold transition"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Navbar
