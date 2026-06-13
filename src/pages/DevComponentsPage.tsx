import { routes } from '../content/site'
import { Button, ButtonLink, ExternalLink } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'

export function DevComponentsPage() {
  return (
    <>
      <PageHeader
        title="Design System Preview"
        description="Internal component showcase for Phase 2. This route is development-only."
      />

      <Section variant="white">
        <Container>
          <SectionHeading title="Buttons" subtitle="Primary, secondary, and ghost variants." />
          <div className="flex flex-wrap gap-4">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <ButtonLink to={routes.contact}>Button Link</ButtonLink>
            <ExternalLink href="mailto:info@aitechinc.com">External Link</ExternalLink>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <SectionHeading title="Cards" subtitle="Default, elevated, and accent variants." />
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <SectionHeading title="Default" showDivider={false} />
              <p className="text-navy-plum/80">Standard card with subtle border and shadow.</p>
            </Card>
            <Card variant="elevated">
              <SectionHeading title="Elevated" showDivider={false} />
              <p className="text-navy-plum/80">Raised card for emphasis.</p>
            </Card>
            <Card variant="accent">
              <SectionHeading title="Accent" showDivider={false} />
              <p className="text-navy-plum/80">Gold top border accent.</p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            title="Section Variants"
            subtitle="Background options for page sections."
            align="center"
          />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-deep-teal/10 bg-cream p-6 text-center text-sm">
              muted / cream
            </div>
            <div className="rounded-xl border border-deep-teal/10 bg-white p-6 text-center text-sm">
              white
            </div>
            <div className="rounded-xl bg-deep-teal p-6 text-center text-sm text-white">
              dark
            </div>
            <div className="rounded-xl bg-linear-to-br from-navy-plum via-deep-teal to-teal p-6 text-center text-sm text-white">
              gradient
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
