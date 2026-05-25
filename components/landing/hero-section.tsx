import { EbookCovers } from './ebook-covers'

export function HeroSection() {
  return (
    <section className="min-h-screen bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(201, 168, 76, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(201, 168, 76, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-16">
        {/* Top Bar */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="font-label text-gold text-xs sm:text-sm tracking-[0.3em] uppercase">
            Família à Luz da Fé
          </p>
          <p className="text-gold text-xl mt-3">✦</p>
        </div>

        {/* Main Title */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <h1 className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-light leading-tight tracking-wide">
            Para a mãe que quer educar com fé e firmeza
          </h1>
          <p className="font-body text-lg sm:text-xl md:text-2xl text-text-light/80 mt-6 sm:mt-8 italic leading-relaxed max-w-3xl mx-auto">
            Uma coleção de 3 ebooks de formação parental enraizada na sabedoria católica — com orientações práticas para o dia a dia
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 sm:mb-20">
          <a
            href="#pack"
            className="w-full sm:w-auto font-label text-sm tracking-wider uppercase bg-gold text-navy px-8 py-4 hover:bg-gold-dark transition-all btn-gold-hover text-center shadow-lg hover:shadow-xl"
          >
            Levar os 3 por €19,90
          </a>
          <a
            href="#ebooks"
            className="w-full sm:w-auto font-label text-sm tracking-wider uppercase border-2 border-gold text-gold px-8 py-4 hover:bg-gold/10 transition-all text-center"
          >
            Ver os ebooks
          </a>
        </div>

        {/* Ebook Covers */}
        <EbookCovers />
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
    </section>
  )
}
