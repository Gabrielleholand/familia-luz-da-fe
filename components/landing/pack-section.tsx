'use client'

import { useEffect, useRef } from 'react'
import { Check } from 'lucide-react'

const packItems = [
  'Ebook I — Obediência',
  'Ebook II — 5 Dicas para os Filhos te Escutarem',
  'Ebook III — Como Lidar com a Fase das Birras',
  'Reflexão espiritual enraizada na fé católica',
  'Orientações práticas com exemplos reais',
  'Acesso imediato em formato PDF',
]

export function PackSection() {
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
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="pack" ref={sectionRef} className="bg-cream py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Ornament */}
        <p className="text-gold-dark text-2xl mb-6 animate-on-scroll">✦</p>
        
        {/* Label */}
        <p className="font-label text-gold-dark text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 animate-on-scroll">
          Melhor Escolha
        </p>
        
        {/* Title */}
        <h2 className="font-title text-3xl sm:text-4xl md:text-5xl text-text-dark mb-4 animate-on-scroll">
          Leva os 3 ebooks por €19,90
        </h2>
        
        {/* Subtitle */}
        <p className="font-body text-xl sm:text-2xl text-text-dark/70 mb-10 sm:mb-12 animate-on-scroll">
          Poupa €9,80 — acesso imediato após o pagamento
        </p>
        
        {/* Items List */}
        <ul className="text-left max-w-md mx-auto space-y-4 mb-10 sm:mb-12">
          {packItems.map((item, index) => (
            <li 
              key={index} 
              className="flex items-start gap-3 animate-on-scroll"
            >
              <Check className="w-5 h-5 text-gold-dark flex-shrink-0 mt-1" strokeWidth={2.5} />
              <span className="font-body text-text-dark text-base sm:text-lg leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
        
        {/* Price Box */}
        <div className="bg-navy rounded-sm p-6 sm:p-8 mb-8 animate-on-scroll">
          <div className="space-y-2 text-left sm:text-center">
            <p className="font-body text-text-light/70 text-base sm:text-lg">
              <span className="line-through">Preço individual: 3 × €9,90 = €29,70</span>
            </p>
            <p className="font-title text-2xl sm:text-3xl text-gold">
              Pack completo: €19,90
            </p>
            <p className="font-label text-gold-dark text-sm tracking-wider">
              Poupa: €9,80
            </p>
          </div>
        </div>
        
        {/* CTA Button */}
        <a
          href="https://pay.hotmart.com/G105722473I"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full sm:w-auto font-label text-sm sm:text-base tracking-wider uppercase bg-gold text-navy px-10 sm:px-12 py-4 hover:bg-gold-dark transition-all btn-gold-hover shadow-lg hover:shadow-xl animate-on-scroll"
        >
          Levar o Pack Agora — €19,90
        </a>
        
        {/* Trust Note */}
        <p className="font-body text-text-dark/60 text-sm mt-6 animate-on-scroll">
          Pagamento seguro • Acesso imediato • Formato PDF
        </p>
      </div>
    </section>
  )
}
