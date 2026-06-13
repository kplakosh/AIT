import { servicesContent } from '../content/site'
import { ServiceCard } from '../components/services/ServiceCard'
import { Container } from '../components/ui/Container'
import { FadeIn } from '../components/ui/FadeIn'
import { PageHeader } from '../components/ui/PageHeader'
import { Section } from '../components/ui/Section'

const [labviewSection, hardwareSection, totalSolutionsSection, howCanWeHelpSection, letUsHelpSection] =
  servicesContent.sections

export function ServicesPage() {
  return (
    <>
      <PageHeader title="Services" />

      <Section variant="white">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <FadeIn>
              <ServiceCard section={labviewSection} variant="elevated" />
            </FadeIn>
            <FadeIn delay={0.1}>
              <ServiceCard section={hardwareSection} variant="default" />
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <FadeIn>
            <ServiceCard section={totalSolutionsSection} variant="accent" />
          </FadeIn>
        </Container>
      </Section>

      <Section variant="white">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <FadeIn>
              <ServiceCard section={howCanWeHelpSection} variant="default" />
            </FadeIn>
            <FadeIn delay={0.1}>
              <ServiceCard section={letUsHelpSection} variant="elevated" />
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  )
}
