'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon, MoonIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Experiências', href: '/experiencias' },
  { name: 'Como Funciona', href: '/como-funciona' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Contato', href: '/contato' },
  { name: 'FAQ', href: '/faq' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-areia-palido/95 backdrop-blur-md shadow-luxury' 
        : 'bg-areia-palido/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}>
          {/* Logo */}
          <Link 
            href="/" 
            className={`font-display font-bold text-marrom-espresso transition-all duration-300 hover:text-dourado-profundo ${
              scrolled ? 'text-2xl' : 'text-3xl'
            }`}
          >
            <div className="flex items-center gap-3">
              <MoonIcon className={`transition-all duration-300 ${scrolled ? 'w-7 h-7' : 'w-8 h-8'}`} />
              <span>Sombras do Oriente</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-medium transition-colors duration-300 hover:text-dourado-profundo py-2 px-1 ${
                  pathname === item.href 
                    ? 'text-dourado-profundo' 
                    : 'text-marrom-espresso'
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-dourado-profundo"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-3 rounded-lg text-marrom-espresso hover:text-dourado-profundo hover:bg-dourado-profundo/10 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Abrir menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-[100px] w-full h-full bg-gradient-to-b from-areia-palido to-bege-pastel shadow-luxury z-40"
            style={{ minHeight: 'calc(100vh - 100px)' }}
          >            
            <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20 py-8">
              <nav className="flex flex-col space-y-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-lg font-medium py-4 px-6 rounded-xl transition-all duration-300 ${
                      pathname === item.href
                        ? 'text-white bg-marrom-espresso shadow-luxury border border-dourado-profundo'
                        : 'text-marrom-espresso hover:text-dourado-profundo hover:bg-white/80 hover:shadow-md hover:px-8'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}