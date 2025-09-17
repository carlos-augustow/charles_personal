'use client'

import { ReactNode, useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'
import WhatsAppFloat from '../ui/WhatsAppFloat'
import { ArrowUpIcon, SparklesIcon, SunIcon } from '@heroicons/react/24/outline'

interface LayoutProps {
  children: ReactNode
  className?: string
  showPatterns?: boolean
}

export default function Layout({ 
  children, 
  className = '',
  showPatterns = true 
}: LayoutProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [time, setTime] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  
  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.6, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  // Enhanced loading with longer, more elegant animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  // Animated time for dynamic effects
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 0.01)
    }, 16)
    return () => clearInterval(interval)
  }, [])

  // Enhanced scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 600
      setShowScrollTop(scrolled)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Sophisticated mouse movement tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        })
      }
    }

    if (showPatterns && containerRef.current) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true })
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [showPatterns])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {/* Enhanced Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
            style={{
              background: `
                radial-gradient(circle at 20% 80%, rgba(168, 124, 64, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(122, 110, 99, 0.3) 0%, transparent 50%),
                linear-gradient(135deg, #3D2B24 0%, #7A6E63 50%, #3D2B24 100%)
              `
            }}
          >
            {/* Animated Background Particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-dourado-profundo/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Central Loading Content */}
            <div className="text-center relative z-10">
              {/* Logo Animation Container */}
              <motion.div
                initial={{ scale: 0, rotateY: 180 }}
                animate={{ 
                  scale: 1, 
                  rotateY: 0,
                  rotateZ: [0, 5, -5, 0]
                }}
                transition={{ 
                  scale: { duration: 1.2, ease: "backOut" },
                  rotateY: { duration: 1, ease: "easeOut" },
                  rotateZ: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="relative w-24 h-24 mx-auto mb-8"
              >
                {/* Outer Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dourado-profundo/30 rounded-full"
                />
                
                {/* Inner Ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 border border-dourado-profundo/50 rounded-full"
                />
                
                {/* Center Icon */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 4, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute inset-4 flex items-center justify-center"
                >
                  <SunIcon className="w-8 h-8 text-dourado-profundo" />
                </motion.div>
              </motion.div>

              {/* Brand Name */}
              <motion.h1 
                initial={{ opacity: 0, y: 30, letterSpacing: "0.5em" }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  letterSpacing: "0.1em"
                }}
                transition={{ 
                  duration: 1.5, 
                  delay: 0.5,
                  ease: "easeOut"
                }}
                className="font-display text-4xl md:text-5xl font-bold text-dourado-profundo mb-4"
              >
                Sombras do Oriente
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 1, 
                  delay: 1.2,
                  ease: "backOut"
                }}
                className="text-white/90 text-lg font-light tracking-wide mb-8"
              >
                Essências Únicas & Artesanais
              </motion.p>

              {/* Loading Progress */}
              <motion.div 
                className="w-64 h-1 bg-white/20 rounded-full mx-auto overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: 256 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-dourado-profundo via-cinza-quente to-dourado-profundo"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ 
                    duration: 2, 
                    delay: 1,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>

            {/* Decorative Corner Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-dourado-profundo/50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ duration: 1.5, delay: 1.2 }}
              className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-dourado-profundo/50"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sophisticated Main Layout */}
      <div 
        ref={containerRef}
        className={`min-h-screen flex flex-col relative overflow-hidden ${className}`}
        style={{
          background: `
            radial-gradient(circle at 10% 20%, rgba(246, 241, 236, 0.8) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(237, 230, 220, 0.6) 0%, transparent 50%),
            linear-gradient(to bottom, #F6F1EC 0%, #EDE6DC 50%, #F6F1EC 100%)
          `
        }}
      >
        {/* Ultra-Sophisticated Background System */}
        {showPatterns && (
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {/* Dynamic Floating Orbs */}
            <motion.div
              animate={{
                x: mousePosition.x * 0.05 + Math.sin(time) * 20,
                y: mousePosition.y * 0.03 + Math.cos(time * 0.8) * 15,
              }}
              style={{ 
                y: y1, 
                scale,
                background: `
                  radial-gradient(circle, 
                    rgba(168, 124, 64, 0.15) 0%, 
                    rgba(168, 124, 64, 0.08) 40%, 
                    transparent 70%
                  )
                `,
                filter: 'blur(40px)'
              }}
              transition={{ type: "spring", stiffness: 20, damping: 15 }}
              className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full opacity-30"
            />

            <motion.div
              animate={{
                x: mousePosition.x * -0.03 + Math.cos(time * 1.2) * 25,
                y: mousePosition.y * -0.02 + Math.sin(time * 0.6) * 20,
              }}
              style={{ 
                y: y2, 
                opacity: opacity1,
                background: `
                  radial-gradient(circle, 
                    rgba(122, 110, 99, 0.12) 0%, 
                    rgba(122, 110, 99, 0.06) 50%, 
                    transparent 80%
                  )
                `,
                filter: 'blur(60px)'
              }}
              transition={{ type: "spring", stiffness: 15, damping: 20 }}
              className="absolute bottom-1/3 right-1/5 w-80 h-80 rounded-full opacity-25"
            />

            <motion.div
              animate={{
                x: mousePosition.x * 0.02 + Math.sin(time * 1.5) * 15,
                y: mousePosition.y * 0.04 + Math.cos(time) * 10,
                rotate: time * 10
              }}
              style={{ 
                y: y3,
                background: `
                  conic-gradient(from 0deg, 
                    rgba(61, 43, 36, 0.1), 
                    rgba(168, 124, 64, 0.15), 
                    rgba(122, 110, 99, 0.08), 
                    rgba(61, 43, 36, 0.1)
                  )
                `,
                filter: 'blur(30px)'
              }}
              transition={{ type: "spring", stiffness: 25, damping: 12 }}
              className="absolute top-2/3 left-1/2 w-64 h-64 rounded-full opacity-20"
            />

            {/* Particle System */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-dourado-profundo/20"
                style={{
                  left: `${10 + (i * 5.5) % 80}%`,
                  top: `${20 + (i * 7) % 60}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, Math.sin(i) * 10, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 6 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Elegant Pattern Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 20%, #A87C40 1px, transparent 1px),
                  radial-gradient(circle at 60% 60%, #7A6E63 0.5px, transparent 0.5px),
                  radial-gradient(circle at 80% 40%, #3D2B24 0.8px, transparent 0.8px)
                `,
                backgroundSize: '120px 120px, 80px 80px, 100px 100px',
                backgroundPosition: '0 0, 40px 40px, 80px 20px'
              }}
            />

            {/* Sophisticated Light Rays */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                background: `
                  conic-gradient(from 45deg at 25% 25%, 
                    transparent 0deg, 
                    rgba(168, 124, 64, 0.1) 60deg, 
                    transparent 120deg,
                    rgba(122, 110, 99, 0.05) 180deg,
                    transparent 240deg,
                    rgba(61, 43, 36, 0.08) 300deg,
                    transparent 360deg
                  )
                `,
                transform: `rotate(${time * 5}deg)`,
                filter: 'blur(100px)'
              }}
            />
          </div>
        )}

        {/* Enhanced Header */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: isLoading ? 2.5 : 0, ease: "backOut" }}
        >
          <Header />
        </motion.div>

        {/* Premium Main Content */}
        <motion.main 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: isLoading ? 3 : 0.3,
            ease: "easeOut"
          }}
          className="flex-1 relative z-10"
          style={{ paddingTop: '5rem' }} // 80px para compensar header fixo
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 1.5, 
              delay: isLoading ? 3.2 : 0.5,
              ease: "easeOut"
            }}
            className="min-h-[calc(100vh-20rem)]" // Altura mínima considerando header + footer
          >
            {children}
          </motion.div>
        </motion.main>

        {/* Enhanced Footer */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 1, 
            delay: isLoading ? 3.5 : 0.7,
            ease: "backOut"
          }}
        >
          <Footer />
        </motion.div>

        {/* Premium WhatsApp Float */}
        <motion.div
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1, 
            delay: isLoading ? 4 : 1,
            type: "spring",
            stiffness: 200,
            damping: 10
          }}
        >
          <WhatsAppFloat />
        </motion.div>

        {/* Ultra-Premium Scroll to Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 20 }}
              whileHover={{ 
                scale: 1.15,
                boxShadow: "0 20px 40px rgba(61, 43, 36, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="fixed bottom-28 left-8 z-40 group"
              aria-label="Voltar ao topo"
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-dourado-profundo rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                
                {/* Main Button */}
                <div className="relative w-16 h-16 bg-gradient-to-br from-marrom-espresso via-cinza-quente to-marrom-espresso text-white rounded-full shadow-luxury hover:shadow-luxury-lg transition-all duration-500 flex items-center justify-center overflow-hidden">
                  {/* Inner Glow */}
                  <div className="absolute inset-1 bg-gradient-to-br from-dourado-profundo/20 to-transparent rounded-full" />
                  
                  {/* Icon */}
                  <ArrowUpIcon className="relative z-10 w-7 h-7 group-hover:animate-bounce transition-transform duration-300" />
                  
                  {/* Ripple Effect */}
                  <motion.div
                    className="absolute inset-0 bg-dourado-profundo/30 rounded-full"
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Cinematic Ambient Lighting */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {/* Top Light */}
          <motion.div 
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-32 left-1/4 w-96 h-96 bg-gradient-radial from-dourado-profundo/10 via-dourado-profundo/5 to-transparent blur-3xl" 
          />
          
          {/* Bottom Light */}
          <motion.div 
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
            className="absolute -bottom-32 right-1/4 w-96 h-96 bg-gradient-radial from-cinza-quente/8 via-cinza-quente/4 to-transparent blur-3xl" 
          />
          
          {/* Side Lights */}
          <motion.div 
            animate={{
              x: [-20, 20, -20],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 -left-32 w-64 h-96 bg-gradient-radial from-marrom-espresso/6 to-transparent blur-3xl" 
          />
          
          <motion.div 
            animate={{
              x: [20, -20, 20],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 -right-32 w-64 h-96 bg-gradient-radial from-bege-pastel/6 to-transparent blur-3xl" 
          />
        </div>

        {/* Ultra-Premium Scroll Progress */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-2 z-50 overflow-hidden"
          initial={{ scaleX: 0 }}
        >
          <motion.div
            className="h-full origin-left"
            style={{ 
              scaleX: smoothProgress,
              background: `
                linear-gradient(90deg, 
                  #A87C40 0%, 
                  #7A6E63 25%, 
                  #3D2B24 50%, 
                  #7A6E63 75%, 
                  #A87C40 100%
                )
              `
            }}
          />
          
          {/* Glow Effect */}
          <motion.div
            className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-sm"
            style={{ 
              x: useTransform(smoothProgress, [0, 1], ['-100%', '100vw'])
            }}
          />
        </motion.div>

        {/* Immersive Sound Wave Visualization */}
        <div className="fixed bottom-0 left-0 right-0 h-1 pointer-events-none overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 w-1 bg-gradient-to-t from-dourado-profundo/30 to-transparent"
              style={{
                left: `${i * 2}%`,
                height: '100%'
              }}
              animate={{
                scaleY: [0.3, 1, 0.3],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 2 + (i % 3),
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </>
  )
}