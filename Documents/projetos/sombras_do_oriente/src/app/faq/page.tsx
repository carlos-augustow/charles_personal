'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Layout from '@/components/layout/Layout'
import Button from '@/components/ui/Button'
import { 
  ChevronDownIcon,
  ChevronUpIcon,
  QuestionMarkCircleIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  CurrencyDollarIcon,
  BeakerIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

interface FAQItem {
  id: string
  category: string
  question: string
  answer: string
  icon: any
}

const faqData: FAQItem[] = [
  {
    id: '1',
    category: 'Processo',
    icon: BeakerIcon,
    question: 'Como funciona o processo de criação de uma fragrância personalizada?',
    answer: 'O processo é dividido em 4 etapas principais: 1) Consulta personalizada onde conhecemos suas preferências e memórias; 2) Criação da fórmula em laboratório pelo nosso perfumista; 3) Refinamento e ajustes baseados no seu feedback; 4) Entrega da fragrância final em embalagem luxuosa. Todo o processo leva de 14 a 21 dias.'
  },
  {
    id: '2',
    category: 'Processo',
    icon: ClockIcon,
    question: 'Quanto tempo demora para criar minha fragrância?',
    answer: 'O tempo total varia entre 14 a 21 dias úteis. A consulta inicial dura 2 horas, a criação da fórmula leva de 7-10 dias, o refinamento de 5-7 dias, e a finalização e entrega de 2-3 dias. Mantemos você informado sobre cada etapa do processo.'
  },
  {
    id: '3',
    category: 'Preços',
    icon: CurrencyDollarIcon,
    question: 'Qual o valor das experiências?',
    answer: 'Tanto a Experiência Feminina quanto a Masculina custam R$ 890,00. Este valor inclui: consulta personalizada de 2 horas, criação da fragrância exclusiva de 50ml, embalagem luxuosa personalizada, certificado de autenticidade e acompanhamento pós-criação.'
  },
  {
    id: '4',
    category: 'Preços',
    icon: CurrencyDollarIcon,
    question: 'Posso parcelar o pagamento?',
    answer: 'Sim! Oferecemos opções de parcelamento flexíveis. Você pode parcelar em até 12x no cartão de crédito ou fazer o pagamento via PIX com desconto especial. Entre em contato para conhecer todas as condições disponíveis.'
  },
  {
    id: '5',
    category: 'Produto',
    icon: BeakerIcon,
    question: 'Que tipo de ingredientes são utilizados?',
    answer: 'Utilizamos apenas matérias-primas premium de fornecedores especializados. Isso inclui óleos essenciais raros, absolutos florais, madeiras preciosas e moléculas aromáticas de alta qualidade. Muitos ingredientes são importados especialmente para suas criações, garantindo exclusividade e qualidade excepcional.'
  },
  {
    id: '6',
    category: 'Produto',
    icon: BeakerIcon,
    question: 'Posso solicitar alterações na fragrância após pronta?',
    answer: 'Sim! Durante o processo de refinamento, você pode solicitar quantos ajustes forem necessários até ficar 100% satisfeito. Mesmo após a entrega, se houver algum aspecto que gostaria de modificar, oferecemos garantia de satisfação e refazemos a fragrância sem custo adicional.'
  },
  {
    id: '7',
    category: 'Garantia',
    icon: ShieldCheckIcon,
    question: 'Existe garantia de satisfação?',
    answer: 'Absolutamente! Oferecemos garantia total de satisfação. Se por qualquer motivo você não ficar completamente satisfeito com sua fragrância, refazemos todo o processo sem custo adicional. Nossa missão é que você tenha uma experiência perfeita do início ao fim.'
  },
  {
    id: '8',
    category: 'Garantia',
    icon: ShieldCheckIcon,
    question: 'A fragrância tem prazo de validade?',
    answer: 'Suas fragrâncias são criadas para durar. Com armazenamento adequado (local seco, longe da luz direta e temperaturas extremas), uma fragrância pode manter suas características por muitos anos. Fornecemos instruções detalhadas de conservação junto com sua criação.'
  },
  {
    id: '9',
    category: 'Atendimento',
    icon: ChatBubbleLeftRightIcon,
    question: 'Como é feita a consulta personalizada?',
    answer: 'A consulta pode ser presencial em nossa sede em Porto Alegre ou por videochamada para clientes de outras regiões. Durante 2 horas, conversamos sobre suas memórias, preferências olfativas, personalidade e estilo de vida. É um processo íntimo e detalhado que forma a base de sua fragrância única.'
  },
  {
    id: '10',
    category: 'Atendimento',
    icon: ChatBubbleLeftRightIcon,
    question: 'Atendem todo o Brasil?',
    answer: 'Sim! Atendemos todo o Brasil. Para clientes de Porto Alegre e região metropolitana, oferecemos atendimento presencial. Para demais regiões, a consulta é feita por videochamada e a entrega é feita via correio com embalagem especial de proteção.'
  },
  {
    id: '11',
    category: 'Produto',
    icon: BeakerIcon,
    question: 'Posso criar uma fragrância para presente?',
    answer: 'Claro! Muitos clientes criam fragrâncias como presentes únicos. Neste caso, a consulta pode incluir informações sobre a pessoa presenteada ou ser feita diretamente com ela. Oferecemos embalagem especial para presentes e cartão personalizado explicando o processo.'
  },
  {
    id: '12',
    category: 'Produto',
    icon: BeakerIcon,
    question: 'Posso recomprar a mesma fragrância no futuro?',
    answer: 'Sim! Mantemos a fórmula da sua fragrância arquivada permanentemente. Você pode recomprar quantas vezes quiser, e também oferecemos a opção de criar variações sazonais ou para ocasiões especiais baseadas na sua fórmula original.'
  }
]

const categories = [
  { name: 'Todas', icon: QuestionMarkCircleIcon },
  { name: 'Processo', icon: BeakerIcon },
  { name: 'Preços', icon: CurrencyDollarIcon },
  { name: 'Produto', icon: BeakerIcon },
  { name: 'Garantia', icon: ShieldCheckIcon },
  { name: 'Atendimento', icon: ChatBubbleLeftRightIcon }
]

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('Todas')
  const [openItems, setOpenItems] = useState<string[]>([])

  const filteredFAQ = activeCategory === 'Todas' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory)

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

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
            <QuestionMarkCircleIcon className="w-20 h-20 text-dourado-profundo mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Perguntas Frequentes
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Encontre respostas para as dúvidas mais comuns sobre nossos 
              processos e experiências
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24 bg-areia-palido">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category.name
                      ? 'bg-dourado-profundo text-white shadow-golden'
                      : 'bg-white text-cinza-quente hover:bg-dourado-profundo/10 hover:text-dourado-profundo'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {filteredFAQ.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-white rounded-xl shadow-luxury overflow-hidden border border-dourado-profundo/10"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-dourado-profundo/5 transition-colors duration-300"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-10 h-10 bg-dourado-profundo/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-dourado-profundo" />
                        </div>
                        <div>
                          <span className="text-xs font-medium text-dourado-profundo bg-dourado-profundo/10 px-2 py-1 rounded-full">
                            {item.category}
                          </span>
                          <h3 className="font-display text-lg font-semibold text-marrom-espresso mt-2">
                            {item.question}
                          </h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        {openItems.includes(item.id) ? (
                          <ChevronUpIcon className="w-6 h-6 text-dourado-profundo" />
                        ) : (
                          <ChevronDownIcon className="w-6 h-6 text-cinza-quente" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence>
                      {openItems.includes(item.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <div className="border-t border-dourado-profundo/10 pt-4">
                              <p className="text-cinza-quente leading-relaxed">
                                {item.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Still Have Questions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-luxury max-w-3xl mx-auto">
              <ChatBubbleLeftRightIcon className="w-16 h-16 text-dourado-profundo mx-auto mb-6" />
              <h3 className="font-display text-2xl font-bold text-marrom-espresso mb-4">
                Ainda tem dúvidas?
              </h3>
              <p className="text-cinza-quente text-lg mb-8">
                Nossa equipe está pronta para esclarecer qualquer questão sobre 
                nossas experiências e processos
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="primary" 
                  size="lg"
                  href="/contato"
                >
                  <ChatBubbleLeftRightIcon className="w-5 h-5" />
                  Entrar em Contato
                </Button>
                
                <Button 
                  variant="secondary" 
                  size="lg"
                  href="https://wa.me/5551996145638"
                  className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              Pronto para Sua Jornada Olfativa?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Agora que você conhece nosso processo, que tal começar a criar 
              sua fragrância única?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                href="/experiencias"
                className="bg-dourado-profundo hover:bg-dourado-profundo/90"
              >
                <BeakerIcon className="w-6 h-6" />
                Ver Experiências
              </Button>
              
              <Button 
                variant="secondary" 
                size="lg"
                href="/como-funciona"
                className="text-white border-white hover:bg-white hover:text-marrom-espresso"
              >
                Como Funciona
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}