import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Magnet = ({ children, className = "" }) => {
    const magnetRef = useRef(null);

    useEffect(() => {
        const el = magnetRef.current;
        if (!el) return;

        const handleMouseMove = (e) => {
            const { left, top, width, height } = el.getBoundingClientRect();
            const x = e.clientX - left - width / 2;
            const y = e.clientY - top - height / 2;

            gsap.to(el, {
                x: x * 0.2, // Magnetic strength
                y: y * 0.2,
                duration: 0.4,
                ease: "power2.out"
            });
        };

        const handleMouseLeave = () => {
            gsap.to(el, {
                x: 0,
                y: 0,
                duration: 0.6,
                ease: "elastic.out(1, 0.3)"
            });
        };

        el.addEventListener('mousemove', handleMouseMove);
        el.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            el.removeEventListener('mousemove', handleMouseMove);
            el.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div ref={magnetRef} className={`inline-block ${className}`}>
            {children}
        </div>
    );
};

export default Magnet;
