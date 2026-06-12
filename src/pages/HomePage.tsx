import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import { LocationGraphic } from '../components/home/LocationGraphic'
import { ButtonLink } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { FadeIn } from '../components/ui/FadeIn'
import { Section } from '../components/ui/Section'
import { homeContent, pageMeta, siteConfig } from '../content/site'

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>{pageMeta.home.title}</title>
        <meta name="description" content={pageMeta.home.description} />
      </Helmet>

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
              <div className="mt-10">
                <ButtonLink to="/contact" size="lg" className="gap-2">
                  Contact Us
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section variant="white">
        <Container>
          <FadeIn>
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
              <p className="text-base leading-relaxed text-navy-plum/85 md:text-lg">
                {homeContent.location}
              </p>
              <LocationGraphic />
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <FadeIn delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-deep-teal/10 bg-white shadow-sm">
              <div className="grid items-center gap-8 p-8 md:grid-cols-[1fr_auto] md:gap-12 md:p-12">
                <p className="text-base leading-relaxed text-navy-plum/85 md:text-lg">
                  {homeContent.niAlliance}
                </p>
                <div className="flex justify-center md:justify-end">
                  <div className="rounded-xl border border-deep-teal/10 bg-cream px-8 py-6">
                    <img
                      src={homeContent.niBadge.src}
                      alt={homeContent.niBadge.alt}
                      width={homeContent.niBadge.width}
                      height={homeContent.niBadge.height}
                      className="mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  )
}
