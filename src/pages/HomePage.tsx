import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { FadeIn } from '../components/ui/FadeIn'
import { Section } from '../components/ui/Section'
import { homeContent, routes, siteConfig } from '../content/site'

export function HomePage() {
  return (
    <>
      <Section variant="gradient" className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          aria-hidden="true"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, #aa9047 0%, transparent 40%), radial-gradient(circle at 80% 80%, #49888a 0%, transparent 35%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <Container className="relative">
          <FadeIn>
            <div className="mx-auto max-w-3xl py-10 text-center md:py-16">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-warm-gold">
                {siteConfig.tagline}
              </p>
              <h1 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
                {siteConfig.name}
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/90 md:text-lg">
                {homeContent.intro}
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <ButtonLink to={routes.about} size="lg" variant="secondary">
                  About Us
                </ButtonLink>
                <ButtonLink
                  to={routes.services}
                  size="lg"
                  variant="ghost"
                  className="border-white/30 text-white hover:border-white/50 hover:bg-white/10"
                >
                  Services
                </ButtonLink>
                <ButtonLink to={routes.contact} size="lg" className="gap-2">
                  Contact Us
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  )
}
