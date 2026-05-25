'use client'

import { useEffect, useRef } from 'react'

export function FinalCtaSection() {
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
    <section ref={sectionRef} className="bg-navy py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Ornament */}
        <p className="text-gold text-2xl mb-6 animate-on-scroll">✦</p>
        
        {/* Title */}
        <h2 className="font-title text-2xl sm:text-3xl md:text-4xl text-text-light mb-4 leading-tight animate-on-scroll">
          A tua família merece uma mãe com as ferramentas certas.
        </h2>
        
        {/* Subtitle */}
        <p className="font-body text-lg sm:text-xl text-text-light/70 italic mb-10 sm:mb-12 animate-on-scroll">
          Começa hoje. O primeiro passo é o mais importante.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll">
          <a
            href="https://pay.hotmart.com/G105722473I"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto font-label text-sm tracking-wider uppercase bg-gold text-navy px-10 py-4 hover:bg-gold-dark transition-all btn-gold-hover shadow-lg hover:shadow-xl"
          >
            Levar o Pack — €19,90
          </a>
          <a
            href="#ebooks"
            className="w-full sm:w-auto font-label text-sm tracking-wider uppercase border border-gold text-gold px-10 py-4 hover:bg-gold/10 transition-all"
          >
            Escolher individualmente — €9,90
          </a>
        </div>
      </div>
    </section>
  )
}
