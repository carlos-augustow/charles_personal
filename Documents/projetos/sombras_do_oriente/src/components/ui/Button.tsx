'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  href?: string
  className?: string
  disabled?: boolean
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  href, 
  className = '',
  disabled = false 
}: ButtonProps) {
  const baseClasses = 'btn inline-flex items-center justify-center font-semibold transition-all duration-300 cursor-pointer border-none focus:outline-none focus:ring-2 focus:ring-dourado-profundo focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary', 
    outline: 'btn-outline'
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-sm rounded-lg',
    lg: 'px-8 py-4 text-base rounded-lg'
  }

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  const content = (
    <motion.span
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className="flex items-center gap-2"
    >
      {children}
    </motion.span>
  )

  if (href && !disabled) {
    return (
      <a href={href} className={combinedClasses}>
        {content}
      </a>
    )
  }

  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={combinedClasses}
    >
      {content}
    </button>
  )
}