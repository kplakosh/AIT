import { ArrowRight } from 'lucide-react'
import { LocationGraphic } from '../components/home/LocationGraphic'
import { ButtonLink } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { FadeIn } from '../components/ui/FadeIn'
import { PageHeader } from '../components/ui/PageHeader'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { aboutContent, routes } from '../content/site'

export function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" description={aboutContent.pageSubtitle} />

      <Section variant="white">
        <Container>
          <FadeIn>
            <SectionHeading title={aboutContent.howItStarted.title} showDivider />
            <p className="max-w-3xl text-base leading-relaxed text-navy-plum/85 md:text-lg">
              {aboutContent.howItStarted.body}
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <FadeIn>
            <SectionHeading title="Who We Are" showDivider />
            <p className="max-w-3xl text-base leading-relaxed text-navy-plum/85 md:text-lg">
              {aboutContent.whoWeAre}
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section variant="white">
        <Container>
          <FadeIn>
            <SectionHeading title="Location & Reach" showDivider />
            <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-x-12 lg:gap-x-16 xl:gap-x-24">
              <p className="min-w-0 text-base leading-relaxed text-navy-plum/85 md:text-lg">
                {aboutContent.location}
              </p>
              <LocationGraphic />
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <FadeIn delay={0.1}>
            <SectionHeading title="NI Alliance Partner" showDivider />
            <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-x-12 lg:gap-x-16 xl:gap-x-24">
              <p className="min-w-0 text-base leading-relaxed text-navy-plum/85 md:text-lg">
                {aboutContent.niAlliance}
              </p>
              <div className="mx-auto flex w-[220px] shrink-0 justify-center justify-self-center sm:w-[240px] md:w-[260px]">
                <img
                  src={aboutContent.niBadge.src}
                  alt={aboutContent.niBadge.alt}
                  width={aboutContent.niBadge.width}
                  height={aboutContent.niBadge.height}
                  className="h-auto w-full max-w-[220px] md:max-w-[260px]"
                />
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section variant="white">
        <Container>
          <FadeIn>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <ButtonLink to={routes.services} size="lg" className="gap-2">
                View Services
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink to={routes.contact} size="lg" variant="secondary">
                Contact Us
              </ButtonLink>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  )
}
