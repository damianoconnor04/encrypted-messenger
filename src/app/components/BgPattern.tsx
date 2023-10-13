'use client'
import React, { useState, useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  velocityX: number
  velocityY: number
}

const BgPattern: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([])
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    let particleCount = 0; // responsive: less particles
    if (window.innerWidth < 1920) { particleCount = 70 } 
    else if (window.innerWidth < 768) { particleCount = 50 } 
    else { particleCount = 120 }
    const newParticles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      velocityX:
        (Math.random() - 0.5) * (window.innerWidth < 768 ? 0.1 : 0.2), // slower velocity on smaller screens
      velocityY:
        (Math.random() - 0.5) * (window.innerWidth < 768 ? 0.1 : 0.2), // slower velocity on smaller screens
    }));
    setParticles(newParticles)
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const updateCanvasSize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }

    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const particleSize = 2
      particles.forEach((particle) => {
        let newX = particle.x + particle.velocityX // horizontal pos
        let newY = particle.y + particle.velocityY // vertical pos
        if (newX < 0 || newX > canvas.width) {
          newX = Math.random() < 0.5 ? 0 : canvas.width
        }
        if (newY < 0 || newY > canvas.height) {
          newY = Math.random() < 0.5 ? 0 : canvas.height
        }
        particle.x = newX;
        particle.y = newY;

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particleSize, 0, 2 * Math.PI)
        ctx.fillStyle = '#000'
        ctx.fill()
      });

      const connectionDistance = window.innerWidth < 768 ? 75 : 190 // responsive: less connections
      ctx.strokeStyle = '#000'
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < connectionDistance) {
            const alpha = 1 - distance / connectionDistance //lower opacity when connection farther
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.globalAlpha = alpha
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 1; //reset opacity to stop blinking
      requestAnimationFrame(updateParticles) //re render particles
    };

    updateCanvasSize();
    updateParticles();
    const handleResize = () => { updateCanvasSize() }
    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize) }
  }, [particles]);

  return <canvas className='absolute -z-50 left-0 top-0' ref={canvasRef} />;
};

export default BgPattern;