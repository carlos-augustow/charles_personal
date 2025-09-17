'use client'

import { motion } from 'framer-motion'
import Layout from '@/components/layout/Layout'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { 
  HeartIcon,
  BeakerIcon,
  SparklesIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

const values = [
  {
    icon: HeartIcon,
    title: 'Paixão',
    description: 'Cada fragrância é criada com amor e dedicação, transformando memórias em arte olfativa única e pessoal.'
  },
  {
    icon: BeakerIcon,
    title: 'Excelência',
    description: 'Utilizamos apenas ingredientes premium e técnicas avançadas para garantir qualidade excepcional em cada criação.'
  },
  {
    icon: SparklesIcon,
    title: 'Inovação',
    description: 'Combinamos tradição perfumística com métodos inovadores para criar experiências olfativas verdadeiramente únicas.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Confiança',
    description: 'Transparência total em nossos processos e garantia de satisfação em cada experiência que oferecemos.'
  },
  {
    icon: GlobeAltIcon,
    title: 'Sustentabilidade',
    description: 'Compromisso com práticas sustentáveis e ingredientes obtidos de forma ética e responsável.'
  },
  {
    icon: UserGroupIcon,
    title: 'Personalização',
    description: 'Cada cliente é único, e cada fragrância criada é uma expressão individual de personalidade e memórias.'
  }
]

const timeline = [
  {
    year: '2024',
    title: 'Fundação',
    description: 'Nasce o Sombras do Oriente com o sonho de democratizar a perfumaria personalizada no Brasil.'
  },
  {
    year: '2024',
    title: 'Primeiras Criações',
    description: 'Desenvolvimento das primeiras fragrâncias personalizadas, estabelecendo nossa metodologia única.'
  },
  {
    year: '2024',
    title: 'Expansão',
    description: 'Crescimento da clientela e reconhecimento pela qualidade excepcional de nossas criações.'
  },
  {
    year: 'Futuro',
    title: 'Visão',
    description: 'Expandir para todo Brasil, levando experiências olfativas únicas para cada vez mais pessoas.'
  }
]

export default function SobrePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-marrom-espresso via-cinza-quente to-marrom-espresso text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Sobre o <span className="text-dourado-profundo">Sombras do Oriente</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Uma jornada que começou com a paixão por transformar memórias 
              em fragrâncias inesquecíveis
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 md:py-24 bg-areia-palido">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-marrom-espresso mb-6">
                Nossa História
              </h2>
              <div className="space-y-6 text-cinza-quente leading-relaxed">
                <p className="text-lg">
                  O Sombras do Oriente nasceu da crença de que cada pessoa possui uma 
                  assinatura olfativa única, formada por suas memórias, experiências e 
                  personalidade. Nossa missão é descobrir e transformar essa essência 
                  em uma fragrância exclusiva.
                </p>
                <p className="text-lg">
                  Combinamos a tradição milenar da perfumaria oriental com técnicas 
                  modernas e ingredientes premium para criar experiências olfativas 
                  que transcendem o comum, conectando-se profundamente com quem as usa.
                </p>
                <p className="text-lg">
                  Cada fragrância que criamos é uma história única, uma memória 
                  cristalizada em aroma, uma expressão artística da individualidade 
                  de nossos clientes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="text-center p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-dourado-profundo to-cinza-quente rounded-full flex items-center justify-center mb-6 mx-auto">
                  <SparklesIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-marrom-espresso mb-4">
                  Nossa Missão
                </h3>
                <p className="text-cinza-quente text-lg">
                  Democratizar a perfumaria personalizada, tornando acessível a 
                  experiência de possuir uma fragrância única que conta sua história pessoal.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Nossos Valores</h2>
            <p className="section-subtitle">
              Os princípios que guiam nossa paixão pela perfumaria
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-dourado-profundo to-dourado-profundo/80 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold text-marrom-espresso mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-cinza-quente leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-bege-pastel">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Nossa Jornada</h2>
            <p className="section-subtitle">
              A evolução do Sombras do Oriente ao longo do tempo
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-dourado-profundo/30 hidden md:block"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative flex items-start gap-8"
                  >
                    {/* Timeline dot */}
                    <div className="w-16 h-16 bg-dourado-profundo text-white rounded-full flex items-center justify-center font-display font-bold text-sm flex-shrink-0 relative z-10">
                      {item.year}
                    </div>
                    
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-luxury">
                      <h3 className="font-display text-xl font-bold text-marrom-espresso mb-2">
                        {item.title}
                      </h3>
                      <p className="text-cinza-quente">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Nossa Equipe</h2>
            <p className="section-subtitle">
              Especialistas apaixonados pela arte da perfumaria
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="max-w-4xl mx-auto text-center p-8">
              <div className="w-24 h-24 bg-gradient-to-br from-dourado-profundo to-cinza-quente rounded-full flex items-center justify-center mb-6 mx-auto">
                <UserGroupIcon className="w-12 h-12 text-white" />
              </div>
              
              <h3 className="font-display text-2xl font-bold text-marrom-espresso mb-4">
                Perfumistas Especialistas
              </h3>
              
              <p className="text-cinza-quente text-lg leading-relaxed mb-6">
                Nossa equipe é formada por perfumistas com anos de experiência em casas 
                de fragrâncias internacionais, combinando técnica refinada com sensibilidade 
                artística para criar suas composições únicas.
              </p>
              
              <div className="bg-bege-pastel rounded-xl p-6">
                <p className="text-cinza-quente font-medium">
                  "Cada cliente é uma nova descoberta. Nosso papel é escutar não apenas 
                  com os ouvidos, mas com o olfato, traduzindo memórias e emoções em 
                  acordes aromáticos únicos."
                </p>
                <div className="mt-4 text-dourado-profundo font-semibold">
                  — Equipe Sombras do Oriente
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-marrom-espresso to-cinza-quente text-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Faça Parte da Nossa História
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Descubra como suas memórias podem se transformar em uma fragrância única 
              que contará sua história para sempre
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                href="/experiencias"
                className="bg-dourado-profundo hover:bg-dourado-profundo/90"
              >
                <SparklesIcon className="w-6 h-6" />
                Descobrir Experiências
              </Button>
              
              <Button 
                variant="secondary" 
                size="lg"
                href="/contato"
                className="text-white border-white hover:bg-white hover:text-marrom-espresso"
              >
                Falar Conosco
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}