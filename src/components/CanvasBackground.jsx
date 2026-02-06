import React, { useEffect, useRef } from 'react'

const CanvasBackground = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animationFrameId
        let particles = []
        let mouse = { x: null, y: null }

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            initParticles()
        }

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.size = Math.random() * 2 + 0.5
                this.speedX = Math.random() * 0.5 - 0.25
                this.speedY = Math.random() * 0.5 - 0.25
                this.color = 'rgba(212, 175, 55, 0.4)' // Gold
            }

            update() {
                this.x += this.speedX
                this.y += this.speedY

                if (this.size > 0.2) this.size -= 0.01 // Shrink over time
                if (this.size <= 0.2) {
                    this.x = Math.random() * canvas.width
                    this.y = Math.random() * canvas.height
                    this.size = Math.random() * 2 + 0.5
                }

                // Interactive repulsion
                if (mouse.x != null) {
                    let dx = mouse.x - this.x
                    let dy = mouse.y - this.y
                    let distance = Math.sqrt(dx * dx + dy * dy)
                    if (distance < 100) {
                        this.x -= dx / 20
                        this.y -= dy / 20
                    }
                }
            }

            draw() {
                ctx.fillStyle = this.color
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        const initParticles = () => {
            particles = []
            for (let i = 0; i < 100; i++) {
                particles.push(new Particle())
            }
        }

        const animate = () => {
            // Create a gradient trail effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Draw Gradient Blobs
            // We can draw a large radial gradient that moves slowly
            const time = Date.now() * 0.0005
            const x = Math.sin(time) * 200 + canvas.width / 2
            const y = Math.cos(time * 0.8) * 100 + canvas.height / 2

            const gradient = ctx.createRadialGradient(x, y, 0, x, y, 600)
            gradient.addColorStop(0, 'rgba(60, 50, 20, 0.08)') // Golden glow
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

            ctx.fillStyle = gradient
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            particles.forEach(p => {
                p.update()
                p.draw()
            })
            animationFrameId = requestAnimationFrame(animate)
        }

        window.addEventListener('resize', resize)
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x
            mouse.y = e.y
        })

        resize()
        animate()

        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        />
    )
}

export default CanvasBackground
