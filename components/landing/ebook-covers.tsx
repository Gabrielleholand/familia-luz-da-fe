'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const ebooks = [
  {
    title: 'Obediência',
    subtitle: 'A arte de dizer não com amor',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OBEDI%C3%8ANCIA%20%2810%29-hwglSilF6ptxom5QMhtQUuewp2x1rF.png',
    rotation: '-rotate-6',
  },
  {
    title: '5 Dicas para os Filhos te Escutarem',
    subtitle: 'Como a sua palavra chega de verdade',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OBEDI%C3%8ANCIA%20%2811%29-xnNIBSq7qh9dyoU7xslwiiJtkv9aQC.png',
    rotation: 'rotate-0 z-10',
  },
  {
    title: 'Como Lidar com a Fase das Birras',
    subtitle: 'O terrible two à luz da fé',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OBEDI%C3%8ANCIA%20%2812%29-VnGgnOBiPMKyziTsmDyLXtzphY0nDd.png',
    rotation: 'rotate-6',
  },
]

export function EbookCovers() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={containerRef}
      className="flex justify-center items-end gap-2 sm:gap-4 md:gap-6 ebook-perspective animate-on-scroll"
    >
      {ebooks.map((ebook, index) => (
        <div
          key={ebook.title}
          className={`${ebook.rotation} transition-transform duration-500`}
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          <div className="relative w-32 sm:w-40 md:w-48 lg:w-56 aspect-[3/4] rounded-sm shadow-elegant ebook-card overflow-hidden">
            <Image
              src={ebook.image}
              alt={`Capa do ebook: ${ebook.title}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
            />
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      ))}
    </div>
  )
}
