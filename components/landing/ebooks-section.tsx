'use client'

import { useEffect, useRef } from 'react'
import { Check } from 'lucide-react'
import Image from 'next/image'

const LINK1 = 'https://pay.hotmart.com/T105697988T'
const LINK2 = 'https://pay.hotmart.com/N105698109J'
const LINK3 = 'https://pay.hotmart.com/E105698185I'
const CN = 'block w-full font-label text-sm tracking-wider uppercase text-center py-3.5 transition-all btn-gold-hover border border-gold text-gold hover:bg-gold/10'
const CF = 'block w-full font-label text-sm tracking-wider uppercase text-center py-3.5 transition-all btn-gold-hover bg-gold text-navy hover:bg-gold-dark'

export function EbooksSection() {
  const sectionRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.ebook-card-item').forEach((card, index) => {
            setTimeout(() => card.classList.add('visible'), index * 200)
          })
        }
      })
    }, { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="ebooks" ref={sectionRef} className="bg-navy py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="font-title text-3xl sm:text-4xl md:text-5xl text-text-light inline-flex items-center gap-4">
            <span className="text-gold text-2xl">✦</span>
            A Coleção
            <span className="text-gold text-2xl">✦</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 items-stretch">

          <div className="ebook-card-item animate-on-scroll" style={{ transitionDelay: '0ms' }}>
            <div className="relative bg-navy-dark border border-gold/20 rounded-sm overflow-hidden h-full">
              <div className="relative w-full aspect-[3/4] max-h-64 overflow-hidden">
                <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OBEDI%C3%8ANCIA%20%2810%29-hwglSilF6ptxom5QMhtQUuewp2x1rF.png" alt="Ebook 1" fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/50 to-transparent" />
              </div>
              <div className="p-6 sm:p-8 flex flex-col h-full -mt-16 relative z-10">
                <p className="font-label text-gold text-xs tracking-widest mb-3">EBOOK I</p>
                <h3 className="font-title text-xl sm:text-2xl text-text-light mb-2 leading-tight">Obediência</h3>
                <p className="font-body text-text-light/70 italic mb-6">A arte de dizer não com amor</p>
                <div className="h-px bg-gold/30 mb-6" />
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={2} /><span className="font-body text-text-light/90 text-sm leading-relaxed">Os 3 pilares da obediência filial</span></li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={2} /><span className="font-body text-text-light/90 text-sm leading-relaxed">Os 7 erros que destroem a autoridade</span></li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={2} /><span className="font-body text-text-light/90 text-sm leading-relaxed">Como recuperar a autoridade perdida</span></li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={2} /><span className="font-body text-text-light/90 text-sm leading-relaxed">Exemplos reais com script pronto a usar</span></li>
                </ul>
                <div className="mt-auto">
                  <p className="font-title text-2xl sm:text-3xl text-gold mb-4">€9,90</p>
                  <a href={LINK1} className={CN}>Adquirir</a>
                </div>
              </div>
            </div>
          </div>

          <div className="ebook-card-item animate-on-scroll lg:card-featured" style={{ transitionDelay: '100ms' }}>
            <div className="relative bg-navy-dark border border-gold/20 rounded-sm overflow-hidden h-full ring-2 ring-gold/50">
              <div className="relative w-full aspect-[3/4] max-h-64 overflow-hidden">
                <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OBEDI%C3%8ANCIA%20%2811%29-xnNIBSq7qh9dyoU7xslwiiJtkv9aQC.png" alt="Ebook 2" fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/50 to-transparent" />
              </div>
              <div className="p-6 sm:p-8 flex flex-col h-full -mt-16 relative z-10">
                <p className="font-label text-gold text-xs tracking-widest mb-3">EBOOK II</p>
                <h3 className="font-title text-xl sm:text-2xl text-text-light mb-2 leading-tight">5 Dicas para os Filhos te Escutarem</h3>
                <p className="font-body text-text-light/70 italic mb-6">Como a tua palavra chega de verdade</p>
                <div className="h-px bg-gold/30 mb-6" />
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={2} /><span className="font-body text-text-light/90 text-sm leading-relaxed">A conexão antes do comando</span></li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={2} /><span className="font-body text-text-light/90 text-sm leading-relaxed">Instrução adaptada à faixa etária</span></li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={2} /><span className="font-body text-text-light/90 text-sm leading-relaxed">Comandos curtos, específicos e afirmativos</span></li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={2} /><span className="font-body text-text-light/90 text-sm leading-relaxed">O elogio técnico que multiplica o bem</span></li>
                </ul>
                <div className="mt-auto">
                  <p className="font-title text-2xl sm:text-3xl text-gold mb-4">€9,90</p>
                  <a href={LINK2} className={CF}>Adquirir</a>
                </div>
              </div>
            </div>
          </div>

          <div className="ebook-card-item animate-on-scroll" style={{ transitionDelay: '200ms' }}>
            <div className="relative bg-navy-dark border border-gold/20 rounded-sm overflow-hidden h-full">
              <div className="relative w-full aspect-[3/4] max-h-64 overflow-hidden">
                <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OBEDI%C3%8ANCIA%20%2812%29-VnGgnOBiPMKyziTsmDyLXtzphY0nDd.png" alt="Ebook 3" fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/50 to-transparent" />
              </div>
              <div className="p-6 sm:p-8 flex flex-col h-full -mt-16 relative z-10">
                <p className="font-label text-gold text-xs tracking-widest mb-3">EBOOK III</p>
                <h3 className="font-title text-xl sm:text-2xl text-text-light mb-2 leading-tight">Como Lidar com a Fase das Birras</h3>
                <p className="font-body text-text-light/70 italic mb-6">O terrible two à luz da fé</p>
                <div className="h-px bg-gold/30 mb-6" />
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={2} /><span className="font-body text-text-light/90 text-sm leading-relaxed">O que é o Terrible Two de verdade</span></li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={2} /><span className="font-body text-text-light/90 text-sm leading-relaxed">Os 4 pilares para amenizar a fase</span></li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={2} /><span className="font-body text-text-light/90 text-sm leading-relaxed">Morder, bater e jogar comida: protocolos</span></li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={2} /><span className="font-body text-text-light/90 text-sm leading-relaxed">Linha de base estável — ser um farol</span></li>
                </ul>
                <div className="mt-auto">
                  <p className="font-title text-2xl sm:text-3xl text-gold mb-4">€9,90</p>
                  <a href={LINK3} className={CN}>Adquirir</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
