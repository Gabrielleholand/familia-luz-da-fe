'use client'

import { useEffect, useRef } from 'react'
import { Megaphone, Clock, HeartCrack } from 'lucide-react'

const painPoints = [
  {
    icon: Megaphone,
    text: 'Gritas mais do que queres',
  },
  {
    icon: Clock,
    text: 'Repetes a mesma ordem vezes sem conta',
  },
  {
    icon: HeartCrack,
    text: 'Sentes que estás sempre a falhar',
  },
]

export function PainSection() {
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
    <section ref={sectionRef} className="bg-cream py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <h2 className="font-title text-2xl sm:text-3xl md:text-4xl text-text-dark text-center mb-12 sm:mb-16 animate-on-scroll">
          Já repetiste a mesma coisa dez vezes hoje?
        </h2>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-14 sm:mb-16">
          {painPoints.map((point, index) => (
            <div 
              key={index} 
              className="text-center animate-on-scroll"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-navy/10 mb-5">
                <point.icon className="w-7 h-7 sm:w-9 sm:h-9 text-gold-dark" strokeWidth={1.5} />
              </div>
              <p className="font-body text-lg sm:text-xl text-text-dark leading-relaxed">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Line */}
        <div className="decorative-line max-w-md mx-auto mb-10" />

        {/* Transition Text */}
        <p className="font-body text-xl sm:text-2xl text-text-dark/80 text-center italic max-w-2xl mx-auto animate-on-scroll">
          Não estás a falhar. Só precisas das ferramentas certas.
        </p>
      </div>
    </section>
  )
}
