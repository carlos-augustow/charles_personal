'use client'

import { motion } from 'framer-motion'
import Layout from '@/components/layout/Layout'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { 
  SparklesIcon,
  HeartIcon,
  StarIcon,
  ClockIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const experiences = [
  {
    id: 'feminina',
    title: 'Experiência Feminina',
    subtitle: 'Elegância e Sofisticação',
    description: 'Uma jornada olfativa que celebra a feminilidade em todas as suas facetas. Criamos fragrâncias que capturam sua essência única, combinando notas florais delicadas, frutas exóticas e madeiras preciosas.',
    price: 'R$ 890',
    image: '/images/feminina-bg.jpg',
    gradient: 'from-pink-100 via-purple-50 to-indigo-100',
    features: [
      'Consulta personalizada de 2 horas',
      'Análise detalhada do perfil olfativo',
      'Criação de fragrância exclusiva 50ml',
      'Embalagem luxuosa personalizada',
      'Certificado de autenticidade',
      'Acompanhamento pós-criação'
    ],
    ingredients: [
      'Rosas búlgaras Premium',
      'Jasmim de Grasse',
      'Vanilla de Madagascar',
      'Sândalo australiano',
      'Íris florentina',
      'Almíscar branco'
    ],
    process: '14-21 dias para criação'
  },
  {
    id: 'masculina',
    title: 'Experiência Masculina',
    subtitle: 'Força e Personalidade',
    description: 'Desenvolvemos fragrâncias que expressam masculinidade contemporânea, combinando força e elegância. Cada criação conta a história única de quem a usa, com notas amadeiradas, especiarias e acordes frescos.',
    price: 'R$ 890',
    image: '/images/masculina-bg.jpg',
    gradient: 'from-blue-100 via-slate-50 to-emerald-100',
    features: [
      'Consulta personalizada de 2 horas',
      'Análise detalhada do perfil olfativo',
      'Criação de fragrância exclusiva 50ml',
      'Embalagem luxuosa personalizada',
      'Certificado de autenticidade',
      'Acompanhamento pós-criação'
    ],
    ingredients: [
      'Oud cambodiano',
      'Vetiver haitiano',
      'Cedro atlas',
      'Bergamota italiana',
      'Pimenta rosa',
      'Âmbar cinzento'
    ],
    process: '14-21 dias para criação'
  }
]

export default function ExperienciasPage() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-areia-palido">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="section-title">Nossas Experiências</h1>
            <p className="section-subtitle">
              Escolha a experiência que mais ressoa com sua personalidade e estilo único
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="h-full overflow-hidden group">
                  {/* Header Image */}
                  <div className={`h-64 bg-gradient-to-br ${experience.gradient} rounded-xl mb-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-marrom-espresso">
                        {experience.id === 'feminina' ? (
                          <HeartIcon className="w-20 h-20 mx-auto mb-4 opacity-30" />
                        ) : (
                          <SparklesIcon className="w-20 h-20 mx-auto mb-4 opacity-30" />
                        )}
                        <h3 className="font-display text-2xl font-bold">
                          {experience.subtitle}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Floating elements */}
                    <motion.div
                      animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute top-4 right-4 text-dourado-profundo/40"
                    >
                      <StarIcon className="w-8 h-8" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-display text-3xl font-bold text-marrom-espresso mb-2">
                        {experience.title}
                      </h2>
                      <p className="text-cinza-quente leading-relaxed">
                        {experience.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="bg-bege-pastel rounded-xl p-6">
                      <h4 className="font-display text-lg font-semibold text-marrom-espresso mb-4">
                        ✨ O que está incluído:
                      </h4>
                      <ul className="space-y-2">
                        {experience.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 text-cinza-quente">
                            <div className="w-2 h-2 bg-dourado-profundo rounded-full flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ingredients Preview */}
                    <div>
                      <h4 className="font-display text-lg font-semibold text-marrom-espresso mb-3">
                        🌿 Ingredientes Premium:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.ingredients.slice(0, 4).map((ingredient, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-white border border-dourado-profundo/20 rounded-full text-sm text-cinza-quente"
                          >
                            {ingredient}
                          </span>
                        ))}
                        <span className="px-3 py-1 bg-dourado-profundo/10 border border-dourado-profundo/20 rounded-full text-sm text-dourado-profundo font-medium">
                          +{experience.ingredients.length - 4} mais
                        </span>
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-6 border-t border-dourado-profundo/10">
                      <div>
                        <div className="flex items-center gap-2 text-cinza-quente mb-1">
                          <ClockIcon className="w-4 h-4" />
                          <span className="text-sm">{experience.process}</span>
                        </div>
                        <div className="font-display text-3xl font-bold text-marrom-espresso">
                          {experience.price}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-cinza-quente">
                          <ShieldCheckIcon className="w-4 h-4" />
                          <span>Garantia de satisfação</span>
                        </div>
                      </div>
                    </div>

                    <Button 
                      variant="primary" 
                      size="lg"
                      className="w-full group-hover:scale-105 transition-transform duration-300"
                      onClick={() => {
                        // Here you would handle the purchase flow
                        console.log(`Starting purchase for ${experience.id}`)
                      }}
                    >
                      <SparklesIcon className="w-5 h-5" />
                      Iniciar Experiência
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-luxury max-w-4xl mx-auto">
              <h3 className="font-display text-2xl font-bold text-marrom-espresso mb-4">
                Dúvidas sobre qual experiência escolher?
              </h3>
              <p className="text-cinza-quente text-lg mb-6">
                Nossa equipe está pronta para ajudar você a encontrar a experiência perfeita para sua personalidade
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  size="lg"
                  href="/contato"
                >
                  Falar com Especialista
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  href="/como-funciona"
                >
                  Como Funciona
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}