import { Helmet } from 'react-helmet-async'
import { homeContent, pageMeta, siteConfig } from '../content/site'
import { ButtonLink } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>{pageMeta.home.title}</title>
        <meta name="description" content={pageMeta.home.description} />
      </Helmet>

      <Section variant="gradient">
        <Container>
          <div className="mx-auto max-w-3xl py-8 text-center md:py-12">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-warm-gold">
              {siteConfig.tagline}
            </p>
            <h1 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {siteConfig.name}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/90 md:text-lg">
              {homeContent.intro}
            </p>
            <div className="mt-8">
              <ButtonLink to="/contact" size="lg">
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="white">
        <Container size="narrow">
          <p className="text-center text-base leading-relaxed text-navy-plum/85 md:text-lg">
            {homeContent.location}
          </p>
        </Container>
      </Section>

      <Section variant="muted">
        <Container size="narrow">
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="text-base leading-relaxed text-navy-plum/85 md:text-lg">
              {homeContent.niAlliance}
            </p>
            <img
              src={homeContent.niBadge.src}
              alt={homeContent.niBadge.alt}
              width={homeContent.niBadge.width}
              height={homeContent.niBadge.height}
              className="mx-auto"
            />
          </div>
        </Container>
      </Section>
    </>
  )
}
