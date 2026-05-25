'use client'

import { useEffect, useRef } from 'react'
import { Shield, Download, Star } from 'lucide-react'

const trustItems = [
  {
    icon: Shield,
    title: 'Pagamento Seguro',
    description: 'Plataforma certificada',
  },
  {
    icon: Download,
    title: 'Acesso Imediato',
    description: 'PDF enviado na hora',
  },
  {
    icon: Star,
    title: 'Conteúdo Exclusivo',
    description: 'Formação com profundidade',
  },
]

export function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll')
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible')
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-cream py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {trustItems.map((item, index) => (
            <div 
              key={item.title} 
              className="text-center animate-on-scroll"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-navy/10 mb-4">
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-gold-dark" strokeWidth={1.5} />
              </div>
              <h3 className="font-label text-text-dark text-sm sm:text-base tracking-wider uppercase mb-1">
                {item.title}
              </h3>
              <p className="font-body text-text-dark/70 text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
