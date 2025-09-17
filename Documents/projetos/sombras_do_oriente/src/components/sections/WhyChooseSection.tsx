'use client'

import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { 
  BeakerIcon, 
  SparklesIcon, 
  HeartIcon,
  StarIcon,
  UserGroupIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: BeakerIcon,
    title: 'Ciência & Arte',
    description: 'Combinamos técnicas científicas avançadas com a arte milenar da perfumaria para criar fragrâncias únicas e memoráveis.'
  },
  {
    icon: SparklesIcon,
    title: '100% Personalizado',
    description: 'Cada perfume é criado exclusivamente para você, baseado nas suas memórias, preferências e personalidade única.'
  },
  {
    icon: HeartIcon,
    title: 'Memórias Transformadas',
    description: 'Desenvolvemos métodos únicos para traduzir suas lembranças mais preciosas em composições olfativas extraordinárias.'
  },
  {
    icon: StarIcon,
    title: 'Ingredientes Premium',
    description: 'Utilizamos apenas matérias-primas da mais alta qualidade, muitas delas raras e importadas especialmente para suas criações.'
  },
  {
    icon: UserGroupIcon,
    title: 'Atendimento Exclusivo',
    description: 'Acompanhamento personalizado durante todo o processo, com consultas detalhadas e ajustes até alcançar a perfeição.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Garantia de Satisfação',
    description: 'Garantimos sua satisfação completa. Se não ficar 100% satisfeito, recriaremos sua fragrância sem custo adicional.'
  }
]

export default function WhyChooseSection() {
  return (
    <section className="py-16 md:py-24 bg-areia-palido">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Por que Escolher o <span className="gradient-text">Sombras do Oriente</span>?
          </h2>
          <p className="section-subtitle">
            Combinamos tradição, ciência e arte para criar fragrâncias que contam sua história
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full text-center group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-dourado-profundo to-dourado-profundo/80 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold text-marrom-espresso mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-cinza-quente leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-luxury max-w-4xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-marrom-espresso mb-4">
              Mais de 100 Clientes Satisfeitos
            </h3>
            <p className="text-cinza-quente text-lg mb-6">
              Descubra por que nossos clientes consideram nossas fragrâncias verdadeiras obras de arte olfativas
            </p>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-cinza-quente font-semibold">4.9/5 (127 avaliações)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}