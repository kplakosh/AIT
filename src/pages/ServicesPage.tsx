import { Helmet } from 'react-helmet-async'
import { pageMeta, servicesContent } from '../content/site'
import { ButtonLink } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'

export function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>{pageMeta.services.title}</title>
        <meta name="description" content={pageMeta.services.description} />
      </Helmet>

      <PageHeader title="Services" />

      <Section variant="muted">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {servicesContent.sections.map((section, index) => (
              <Card
                key={section.id}
                variant={section.id === 'total-solutions' ? 'accent' : index % 2 === 0 ? 'elevated' : 'default'}
                className="h-full"
              >
                <SectionHeading title={section.title} showDivider />
                {'intro' in section && section.intro ? (
                  <p className="mb-4 text-sm italic text-muted-rose">{section.intro}</p>
                ) : null}
                {'bullets' in section && section.bullets ? (
                  <ul className="list-disc space-y-2 pl-5 text-navy-plum/85">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {'body' in section && section.body ? (
                  <p className="leading-relaxed text-navy-plum/85">{section.body}</p>
                ) : null}
                {section.id === 'let-us-help-you' ? (
                  <div className="mt-6">
                    <ButtonLink to="/contact">Contact Us</ButtonLink>
                  </div>
                ) : null}
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
