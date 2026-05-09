import { Navigation } from '@/components/landing/navigation'
import { HeroSection } from '@/components/landing/hero-section'
import { PainSection } from '@/components/landing/pain-section'
import { EbooksSection } from '@/components/landing/ebooks-section'
import { PackSection } from '@/components/landing/pack-section'
import { AuthorSection } from '@/components/landing/author-section'
import { TrustSection } from '@/components/landing/trust-section'
import { FinalCtaSection } from '@/components/landing/final-cta-section'
import { Footer } from '@/components/landing/footer'

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <PainSection />
      <EbooksSection />
      <PackSection />
      <AuthorSection />
      <TrustSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
