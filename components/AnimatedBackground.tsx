'use client'

import { useEffect, useRef } from 'react'

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    const stars: Array<{ x: number; y: number; size: number; speed: number }> = []
    const planets: Array<{ 
      x: number; 
      y: number; 
      size: number; 
      color: string;
      orbitRadius: number;
      orbitSpeed: number;
      angle: number;
      centerX: number;
      centerY: number;
    }> = []

    // Initialize stars
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5
      })
    }

    // Initialize planets with orbital parameters
    const planetConfigs = [
      { x: 0.2, y: 0.3, radius: 150, size: [15, 25] },
      { x: 0.5, y: 0.6, radius: 200, size: [25, 35] },
      { x: 0.8, y: 0.4, radius: 180, size: [20, 30] }
    ]

    planetConfigs.forEach(config => {
      const orbitRadius = config.radius + Math.random() * 50
      const centerX = canvas.width * config.x
      const centerY = canvas.height * config.y
      
      planets.push({
        x: centerX + orbitRadius,
        y: centerY,
        size: config.size[0] + Math.random() * (config.size[1] - config.size[0]),
        color: `hsl(${Math.random() * 360}, 70%, 50%)`,
        orbitRadius,
        orbitSpeed: 0.0005 + Math.random() * 0.001,
        angle: Math.random() * Math.PI * 2,
        centerX,
        centerY
      })
    })

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw and update stars
      stars.forEach(star => {
        ctx.fillStyle = 'white'
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()

        star.y += star.speed
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
      })

      // Draw orbit paths
      planets.forEach(planet => {
        ctx.strokeStyle = `${planet.color}20`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(planet.centerX, planet.centerY, planet.orbitRadius, 0, Math.PI * 2)
        ctx.stroke()
      })

      // Draw and update planets
      planets.forEach(planet => {
        // Update planet position based on orbit
        planet.angle += planet.orbitSpeed
        planet.x = planet.centerX + Math.cos(planet.angle) * planet.orbitRadius
        planet.y = planet.centerY + Math.sin(planet.angle) * planet.orbitRadius

        // Draw planet with a glow effect
        const gradient = ctx.createRadialGradient(
          planet.x, planet.y, 0,
          planet.x, planet.y, planet.size
        )
        gradient.addColorStop(0, planet.color)
        gradient.addColorStop(1, 'transparent')
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(planet.x, planet.y, planet.size * 1.5, 0, Math.PI * 2)
        ctx.fill()

        // Draw the planet core
        ctx.fillStyle = planet.color
        ctx.beginPath()
        ctx.arc(planet.x, planet.y, planet.size * 0.7, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Recalculate planet positions based on new dimensions
      planets.forEach((planet, index) => {
        const config = planetConfigs[index]
        planet.centerX = canvas.width * config.x
        planet.centerY = canvas.height * config.y
        planet.x = planet.centerX + Math.cos(planet.angle) * planet.orbitRadius
        planet.y = planet.centerY + Math.sin(planet.angle) * planet.orbitRadius
      })
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen -z-10"
      style={{ 
        background: 'linear-gradient(to bottom, #000000, #1a1a2e)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh'
      }}
    />
  )
} 