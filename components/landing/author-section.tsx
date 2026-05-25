'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export function AuthorSection() {
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
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="autora" ref={sectionRef} className="bg-navy py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Author Photo */}
          <div className="flex justify-center animate-on-scroll">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Photo with gold border and shadow */}
              <div 
                className="relative w-full h-full rounded-full overflow-hidden"
                style={{ 
                  border: '3px solid #C9A84C',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(201, 168, 76, 0.15)'
                }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uzrGS1LrshWxQ0inLo8NZFQ56nJEg4.png"
                  alt="Foto da autora"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 256px, 320px"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-gold/40" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-gold/40" />
            </div>
          </div>

          {/* Text Content */}
          <div>
            {/* Label */}
            <p className="font-label text-gold text-xs tracking-[0.3em] uppercase mb-4 animate-on-scroll">
              Quem Está Por Detrás Disto
            </p>
            
            {/* Title */}
            <h2 className="font-title text-3xl sm:text-4xl text-text-light mb-6 animate-on-scroll">
              Família à Luz da Fé
            </h2>
            
            {/* Decorative Line */}
            <div className="h-px bg-gold/30 w-20 mb-6 animate-on-scroll" />
            
            {/* Paragraphs */}
            <div className="space-y-4 font-body text-text-light/80 text-base sm:text-lg leading-relaxed">
              <p className="animate-on-scroll">
                Sou cirurgiã-dentista, mas há alguns anos tomei uma das decisões mais importantes da minha vida: estar em casa, de corpo e alma, nesta primeira infância dos meus filhos Joaquim e Celina. Casada com Douglas, aprendi cedo que a maternidade católica não é um ideal distante — é uma vocação que se vive nas birras do mercado, na décima vez que repetiste a mesma instrução e no fim do dia em que ainda tens de encontrar paciência onde parecia não haver mais nenhuma.
              </p>
              <p className="animate-on-scroll">
                Foi nesse lugar real, e não num manual teórico, que esta coleção nasceu. Porque formar filhos não é uma tarefa que se faz apesar da fé — é uma tarefa que só se faz plenamente com ela.
              </p>
              <p className="animate-on-scroll italic text-text-light/70">
                Se chegaste até aqui, acredito que já sabes disso. Esta coleção é para ti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
