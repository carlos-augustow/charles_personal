'use client'

import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { SparklesIcon, HeartIcon } from '@heroicons/react/24/outline'

export default function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-hero-pattern">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-marrom-espresso/90 via-marrom-espresso/80 to-cinza-quente/70" />
      
      {/* Floating elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-24 left-12 text-dourado-profundo/20 hidden lg:block"
      >
        <SparklesIcon className="w-16 h-16" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-24 right-12 text-dourado-profundo/20 hidden lg:block"
      >
        <HeartIcon className="w-12 h-12" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h1 
            className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 text-balance leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforme Suas{' '}
            <span className="text-dourado-profundo">Memórias</span>{' '}
            em Perfumes Únicos
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl mb-12 text-white/90 max-w-3xl mx-auto text-balance leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experiências olfativas personalizadas que capturam a essência 
            das suas memórias mais preciosas através da arte da perfumaria de nicho
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              variant="primary" 
              size="lg"
              href="/experiencias"
              className="min-w-[200px]"
            >
              <SparklesIcon className="w-5 h-5" />
              Descobrir Experiências
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg"
              href="/como-funciona"
              className="min-w-[200px] text-white border-white hover:bg-white hover:text-marrom-espresso"
            >
              Como Funciona
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 text-white/70"
          >
            <p className="text-sm md:text-base">
              ✨ Mais de 100 clientes satisfeitos • 🌿 Ingredientes premium • 🎨 Criação artesanal
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-wide">Scroll</span>
          <div className="w-0.5 h-8 bg-white/30"></div>
        </div>
      </motion.div>
    </section>
  )
}