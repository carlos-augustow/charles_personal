'use client'

import { motion } from 'framer-motion'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { 
  ChatBubbleLeftRightIcon,
  BeakerIcon,
  SparklesIcon,
  GiftIcon
} from '@heroicons/react/24/outline'

const steps = [
  {
    number: '01',
    icon: ChatBubbleLeftRightIcon,
    title: 'Consulta Personalizada',
    description: 'Conversamos sobre suas memórias, preferências e experiências olfativas em uma sessão detalhada e íntima.'
  },
  {
    number: '02',
    icon: BeakerIcon,
    title: 'Criação da Fórmula',
    description: 'Nosso perfumista especializado desenvolve uma composição única baseada no seu perfil olfativo personalizado.'
  },
  {
    number: '03',
    icon: SparklesIcon,
    title: 'Refinamento',
    description: 'Testamos e ajustamos a fragrância junto com você até alcançar a perfeição desejada para sua criação.'
  },
  {
    number: '04',
    icon: GiftIcon,
    title: 'Entrega Especial',
    description: 'Receba seu perfume único em uma embalagem luxuosa, junto com certificado de autenticidade e história da criação.'
  }
]

export default function ProcessPreviewSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Como Funciona</h2>
          <p className="section-subtitle">
            Um processo único e personalizado para criar sua fragrância exclusiva
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <Card className="h-full text-center group relative overflow-hidden">
                {/* Number badge */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-dourado-profundo text-white rounded-full flex items-center justify-center font-display font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                
                <div className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-marrom-espresso to-cinza-quente rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold text-marrom-espresso mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-cinza-quente leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>

              {/* Connection line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-dourado-profundo/30 transform -translate-y-1/2 z-10">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-dourado-profundo rounded-full"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-marrom-espresso to-cinza-quente rounded-2xl p-8 md:p-12 text-white">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Pronto para Começar Sua Jornada Olfativa?
            </h3>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Junte-se a centenas de clientes que já descobriram sua fragrância única
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                href="/experiencias"
                className="bg-dourado-profundo hover:bg-dourado-profundo/90"
              >
                <SparklesIcon className="w-5 h-5" />
                Ver Experiências
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                href="/como-funciona"
                className="text-white border-white hover:bg-white hover:text-marrom-espresso"
              >
                Saber Mais
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}