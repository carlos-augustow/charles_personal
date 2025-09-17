'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import Layout from '@/components/layout/Layout'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const contactInfo = [
  {
    icon: PhoneIcon,
    title: 'WhatsApp',
    content: '(51) 99614-5638',
    action: 'Enviar mensagem',
    href: 'https://wa.me/5551996145638',
    color: 'text-green-600'
  },
  {
    icon: EnvelopeIcon,
    title: 'E-mail',
    content: 'contato@sombrasdooriente.com.br',
    action: 'Enviar e-mail',
    href: 'mailto:contato@sombrasdooriente.com.br',
    color: 'text-blue-600'
  },
  {
    icon: MapPinIcon,
    title: 'Localização',
    content: 'Porto Alegre, RS - Brasil',
    action: 'Ver no mapa',
    href: '#',
    color: 'text-red-600'
  },
  {
    icon: ClockIcon,
    title: 'Horário de Atendimento',
    content: 'Segunda a Sexta: 9h às 18h\nSábado: 9h às 14h',
    action: '',
    href: '',
    color: 'text-purple-600'
  }
]

const faqQuestions = [
  {
    question: 'Como funciona o processo de criação?',
    answer: 'O processo envolve consulta personalizada, criação da fórmula, refinamento e entrega especial, totalizando 14-21 dias.'
  },
  {
    question: 'Posso fazer alterações na fragrância?',
    answer: 'Sim! Durante o processo de refinamento, você pode solicitar ajustes até ficar 100% satisfeito com o resultado.'
  },
  {
    question: 'Qual a garantia oferecida?',
    answer: 'Oferecemos garantia total de satisfação. Se não ficar satisfeito, recriaremos sua fragrância sem custo adicional.'
  }
]

export default function ContatoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>()

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitMessage('Mensagem enviada com sucesso! Retornaremos em breve.')
      reset()
    } catch (error) {
      setSubmitMessage('Erro ao enviar mensagem. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
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
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Fale Conosco
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Estamos aqui para ajudar em sua jornada olfativa. 
              Entre em contato e vamos criar algo único juntos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-areia-palido">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl font-bold text-marrom-espresso mb-8">
                Informações de Contato
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-luxury-lg transition-shadow duration-300">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 ${info.color} bg-current/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <info.icon className={`w-6 h-6 ${info.color}`} />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="font-display text-lg font-semibold text-marrom-espresso mb-2">
                            {info.title}
                          </h3>
                          <p className="text-cinza-quente mb-3 whitespace-pre-line">
                            {info.content}
                          </p>
                          {info.action && (
                            <a
                              href={info.href}
                              target={info.href.startsWith('http') ? '_blank' : undefined}
                              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className={`${info.color} hover:underline font-medium`}
                            >
                              {info.action} →
                            </a>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Quick FAQ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-12"
              >
                <h3 className="font-display text-2xl font-bold text-marrom-espresso mb-6">
                  Perguntas Frequentes
                </h3>
                <div className="space-y-4">
                  {faqQuestions.map((faq, index) => (
                    <Card key={index} className="p-4">
                      <h4 className="font-semibold text-marrom-espresso mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-cinza-quente text-sm">
                        {faq.answer}
                      </p>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <ChatBubbleLeftRightIcon className="w-8 h-8 text-dourado-profundo" />
                  <h2 className="font-display text-2xl font-bold text-marrom-espresso">
                    Envie sua Mensagem
                  </h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-marrom-espresso mb-2">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        {...register('name', { required: 'Nome é obrigatório' })}
                        className="w-full px-4 py-3 border border-cinza-quente/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-dourado-profundo focus:border-transparent transition-all duration-300"
                        placeholder="Seu nome"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-marrom-espresso mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        {...register('email', { 
                          required: 'E-mail é obrigatório',
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'E-mail inválido'
                          }
                        })}
                        className="w-full px-4 py-3 border border-cinza-quente/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-dourado-profundo focus:border-transparent transition-all duration-300"
                        placeholder="seu@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-marrom-espresso mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        {...register('phone')}
                        className="w-full px-4 py-3 border border-cinza-quente/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-dourado-profundo focus:border-transparent transition-all duration-300"
                        placeholder="(11) 99999-9999"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-marrom-espresso mb-2">
                        Assunto *
                      </label>
                      <select
                        {...register('subject', { required: 'Assunto é obrigatório' })}
                        className="w-full px-4 py-3 border border-cinza-quente/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-dourado-profundo focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Selecione</option>
                        <option value="experiencia">Interessado em uma experiência</option>
                        <option value="duvidas">Dúvidas sobre o processo</option>
                        <option value="agendamento">Agendamento de consulta</option>
                        <option value="suporte">Suporte pós-venda</option>
                        <option value="outro">Outro assunto</option>
                      </select>
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-marrom-espresso mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      {...register('message', { required: 'Mensagem é obrigatória' })}
                      rows={6}
                      className="w-full px-4 py-3 border border-cinza-quente/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-dourado-profundo focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Conte-nos sobre suas preferências, memórias que gostaria de transformar em fragrância, ou qualquer dúvida que tenha..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <EnvelopeIcon className="w-5 h-5" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>

                  {submitMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-lg text-center ${
                        submitMessage.includes('sucesso')
                          ? 'bg-green-50 text-green-700 border border-green-200'
                          : 'bg-red-50 text-red-700 border border-red-200'
                      }`}
                    >
                      {submitMessage}
                    </motion.div>
                  )}
                </form>
              </Card>
            </motion.div>
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
            <div className="bg-gradient-to-r from-marrom-espresso to-cinza-quente rounded-3xl p-8 md:p-16 text-white max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Prefere Falar Diretamente?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Nossa equipe está disponível no WhatsApp para atendimento personalizado
              </p>
              
              <Button 
                variant="primary" 
                size="lg"
                href="https://wa.me/5551996145638"
                className="bg-green-500 hover:bg-green-600"
              >
                <PhoneIcon className="w-6 h-6" />
                Chamar no WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}