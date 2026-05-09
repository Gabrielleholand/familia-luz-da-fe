export function Footer() {
  return (
    <footer className="bg-navy-dark py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Name */}
        <p className="font-label text-gold text-sm sm:text-base tracking-widest uppercase mb-3">
          Família à Luz da Fé
        </p>
        
        {/* Ornament */}
        <p className="text-gold text-lg mb-3">✦</p>
        
        {/* Tagline */}
        <p className="font-body text-text-light/60 text-sm sm:text-base mb-6">
          Formação Católica para a Vida Familiar • 0–5 anos
        </p>
        
        {/* Decorative Line */}
        <div className="h-px bg-gold/20 max-w-xs mx-auto mb-6" />
        
        {/* Links */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 font-body text-text-light/50 text-xs sm:text-sm">
          <a href="#" className="hover:text-gold transition-colors">
            Política de Privacidade
          </a>
          <span className="text-gold/30">•</span>
          <a href="#" className="hover:text-gold transition-colors">
            Termos e Condições
          </a>
        </div>
        
        {/* Copyright */}
        <p className="font-body text-text-light/30 text-xs mt-8">
          © {new Date().getFullYear()} Família à Luz da Fé. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
