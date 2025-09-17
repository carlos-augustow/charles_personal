import Link from 'next/link'
import { 
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'

const footerNavigation = {
  main: [
    { name: 'Experiências', href: '/experiencias' },
    { name: 'Como Funciona', href: '/como-funciona' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Contato', href: '/contato' },
  ],
  social: [
    {
      name: 'Instagram',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.017 0C8.396 0 7.971.013 6.729.066 5.49.119 4.681.187 4.006.35c-.722.189-1.253.408-1.771.771C1.746 1.483 1.35 2.247 1.35 3.036c0 .337.043.662.128 1.012.085.349.225.673.425.992.2.319.45.62.75.9s.581.5.9.75c.32.2.643.34.992.425.35.085.675.128 1.012.128.789 0 1.553-.396 2.017-.854.536-.53.854-1.285.854-2.017v-.071c-.008-3.621-.02-4.046-.066-5.288C16.029.013 15.604 0 12.017 0zm5.988 5.988c-.001 3.638-.012 4.083-.066 5.324-.053 1.238-.121 2.047-.25 2.722-.163.864-.376 1.295-.771 1.813-.518.518-.95.731-1.813.771-.675.129-1.484.197-2.722.25-1.241.054-1.686.065-5.324.066-3.638-.001-4.083-.012-5.324-.066-1.238-.053-2.047-.121-2.722-.25-.864-.163-1.295-.376-1.813-.771-.518-.518-.731-.95-.771-1.813-.129-.675-.197-1.484-.25-2.722C.013 16.071.001 15.626 0 12.017c.001-3.638.012-4.083.066-5.324.053-1.238.121-2.047.25-2.722.163-.864.376-1.295.771-1.813.518-.518.95-.731 1.813-.771.675-.129 1.484-.197 2.722-.25C7.946.013 8.391.001 12.017 0c3.626.001 4.071.012 5.312.066 1.238.053 2.047.121 2.722.25.864.163 1.295.376 1.813.771.518.518.731.95.771 1.813.129.675.197 1.484.25 2.722.054 1.241.065 1.686.066 5.324zm-1.294 6.262c.45 0 .814-.364.814-.814 0-.45-.364-.814-.814-.814-.45 0-.814.364-.814.814 0 .45.364.814.814.814z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/5551996145638',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-marrom-espresso text-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 text-dourado-profundo">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                </svg>
              </div>
              <span className="font-display text-2xl font-bold text-dourado-profundo">
                Sombras do Oriente
              </span>
            </Link>
            <p className="text-white/80 mb-8 max-w-md leading-relaxed text-base">
              Transformando memórias em fragrâncias únicas desde 2024. 
              Uma experiência olfativa personalizada que captura a essência 
              das suas lembranças mais preciosas.
            </p>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/60 hover:text-dourado-profundo transition-all duration-300 hover:scale-110"
                  target={item.name === 'WhatsApp' ? '_blank' : undefined}
                  rel={item.name === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-7 w-7" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-semibold text-dourado-profundo mb-6">
              Links Rápidos
            </h3>
            <ul className="space-y-4">
              {footerNavigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-dourado-profundo transition-all duration-300 hover:pl-2 text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-xl font-semibold text-dourado-profundo mb-6">
              Contato
            </h3>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <PhoneIcon className="w-6 h-6 text-dourado-profundo flex-shrink-0" />
                <a 
                  href="https://wa.me/5551996145638" 
                  className="text-white/80 hover:text-dourado-profundo transition-colors duration-300 text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (51) 99614-5638
                </a>
              </div>
              <div className="flex items-center gap-4">
                <EnvelopeIcon className="w-6 h-6 text-dourado-profundo flex-shrink-0" />
                <a 
                  href="mailto:contato@sombrasdooriente.com.br"
                  className="text-white/80 hover:text-dourado-profundo transition-colors duration-300 text-base"
                >
                  contato@sombrasdooriente.com.br
                </a>
              </div>
              <div className="flex items-start gap-4">
                <MapPinIcon className="w-6 h-6 text-dourado-profundo flex-shrink-0 mt-1" />
                <span className="text-white/80 text-base leading-relaxed">
                  Porto Alegre, RS<br />
                  Brasil
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-16 pt-10 text-center">
          <p className="text-white/60 text-base">
            &copy; {new Date().getFullYear()} Sombras do Oriente. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}