'use client'

import { motion } from 'framer-motion'
import Layout from '@/components/layout/Layout'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { 
  ChatBubbleLeftRightIcon,
  BeakerIcon,
  SparklesIcon,
  GiftIcon,
  ClockIcon,
  UserGroupIcon,
  StarIcon
} from '@heroicons/react/24/outline'

const detailedSteps = [
  {
    number: '01',
    icon: ChatBubbleLeftRightIcon,
    title: 'Consulta Personalizada',
    duration: '2 horas',
    description: 'Iniciamos com uma conversa íntima e detalhada para conhecer você profundamente.',
    details: [
      'Análise do seu histórico olfativo pessoal',
      'Exploração das suas memórias mais significativas',
      'Identificação das suas preferências aromáticas',
      'Definição da personalidade da fragrância',
      'Seleção dos primeiros acordes e direções'
    ],
    image: '/images/step1.jpg'
  },
  {
    number: '02',
    icon: BeakerIcon,
    title: 'Criação da Fórmula',
    duration: '7-10 dias',
    description: 'Nosso perfumista especializado desenvolve sua composição única em laboratório.',
    details: [
      'Seleção de matérias-primas premium',
      'Desenvolvimento dos acordes principais',
      'Balanceamento das notas de saída, corpo e fundo',
      'Testes de estabilidade e projeção',
      'Criação de múltiplas versões para análise'
    ],
    image: '/images/step2.jpg'
  },
  {
    number: '03',
    icon: SparklesIcon,
    title: 'Refinamento e Ajustes',
    duration: '5-7 dias',
    description: 'Testamos e ajustamos a fragrância junto com você até alcançar a perfeição.',
    details: [
      'Apresentação das versões desenvolvidas',
      'Sessão de teste e feedback detalhado',
      'Ajustes finos baseados nas suas percepções',
      'Validação da longevidade e sillage',
      'Aprovação final da composição'
    ],
    image: '/images/step3.jpg'
  },
  {
    number: '04',
    icon: GiftIcon,
    title: 'Entrega Especial',
    duration: '2-3 dias',
    description: 'Preparamos sua fragrância exclusiva com todo cuidado e atenção aos detalhes.',
    details: [
      'Produção final da fragrância em lote único',
      'Embalagem em frasco de cristal personalizado',
      'Criação do certificado de autenticidade',
      'Documentação da história da criação',
      'Entrega premium com acompanhamento'
    ],
    image: '/images/step4.jpg'
  }
]

const processHighlights = [
  {
    icon: UserGroupIcon,
    title: 'Atendimento 1:1',
    description: 'Acompanhamento pessoal durante todo processo'
  },
  {
    icon: ClockIcon,
    title: '14-21 dias',
    description: 'Tempo total para sua fragrância única'
  },
  {
    icon: StarIcon,
    title: 'Garantia Total',
    description: 'Satisfação 100% garantida ou refazemos'
  }
]

export default function ComoFuncionaPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-marrom-espresso to-cinza-quente text-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Como Funciona
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Um processo único e personalizado para transformar suas memórias 
              em fragrâncias exclusivas
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              {processHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <highlight.icon className="w-8 h-8 text-dourado-profundo mb-2" />
                  <div className="font-display font-semibold text-lg">
                    {highlight.title}
                  </div>
                  <div className="text-white/80 text-sm">
                    {highlight.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-16 md:py-24 bg-areia-palido">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="space-y-24">
            {detailedSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-dourado-profundo text-white rounded-full flex items-center justify-center font-display font-bold text-xl">
                      {step.number}
                    </div>
                    <div>
                      <h2 className="font-display text-3xl font-bold text-marrom-espresso">
                        {step.title}
                      </h2>
                      <div className="flex items-center gap-2 text-cinza-quente">
                        <ClockIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">{step.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-cinza-quente mb-8 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h3 className="font-display text-xl font-semibold text-marrom-espresso">
                      O que acontece nesta etapa:
                    </h3>
                    <ul className="space-y-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-dourado-profundo rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-cinza-quente">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="overflow-hidden">
                    <div className="h-80 bg-gradient-to-br from-bege-pastel to-areia-palido rounded-xl flex items-center justify-center relative">
                      <div className="text-center text-marrom-espresso/30">
                        <step.icon className="w-24 h-24 mx-auto mb-4" />
                        <h3 className="font-display text-2xl font-bold">
                          {step.title}
                        </h3>
                      </div>
                      
                      {/* Decorative elements */}
                      <motion.div
                        animate={{ 
                          y: [0, -10, 0],
                          rotate: [0, 5, 0]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                        className="absolute top-4 right-4 text-dourado-profundo/20"
                      >
                        <SparklesIcon className="w-8 h-8" />
                      </motion.div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-marrom-espresso to-cinza-quente rounded-3xl p-8 md:p-16 text-white max-w-5xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Pronto para Começar Sua Jornada Olfativa?
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
                Junte-se a centenas de clientes que já descobriram sua fragrância única 
                e transformaram suas memórias em arte olfativa
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <Button 
                  variant="primary" 
                  size="lg"
                  href="/experiencias"
                  className="bg-dourado-profundo hover:bg-dourado-profundo/90 min-w-[250px]"
                >
                  <SparklesIcon className="w-6 h-6" />
                  Escolher Minha Experiência
                </Button>
                
                <Button 
                  variant="secondary" 
                  size="lg"
                  href="/contato"
                  className="text-white border-white hover:bg-white hover:text-marrom-espresso min-w-[250px]"
                >
                  Falar com Especialista
                </Button>
              </div>
              
              <div className="text-white/80 text-sm">
                💫 Garantia de satisfação • 🌿 Ingredientes premium • 🎨 Criação artesanal
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}