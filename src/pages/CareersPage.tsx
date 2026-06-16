import { useState } from 'react'
import { JobApplicationModal } from '../components/careers/JobApplicationModal'
import { JobOpening } from '../components/careers/JobOpening'
import { ButtonLink } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { FadeIn } from '../components/ui/FadeIn'
import { PageHeader } from '../components/ui/PageHeader'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { careersContent, routes, type JobOpening as JobOpeningType } from '../content/site'

export function CareersPage() {
  const openPositions = careersContent.openings.filter((opening) => opening.status === 'open')
  const [applyOpening, setApplyOpening] = useState<JobOpeningType | null>(null)

  return (
    <>
      <PageHeader title="Careers" description={careersContent.pageSubtitle} />

      <Section variant="white">
        <Container>
          <FadeIn>
            <SectionHeading title={careersContent.cultureHeading} showDivider />
            <p className="max-w-3xl text-base leading-relaxed text-navy-plum/85 md:text-lg">
              {careersContent.cultureBody}
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <FadeIn>
            <SectionHeading title={careersContent.openingsHeading} showDivider />
            {openPositions.length > 0 ? (
              <div className="space-y-10">
                {openPositions.map((opening) => (
                  <JobOpening
                    key={opening.id}
                    opening={opening}
                    onApply={() => setApplyOpening(opening)}
                  />
                ))}
              </div>
            ) : (
              <p className="max-w-3xl text-base leading-relaxed text-navy-plum/85 md:text-lg">
                {careersContent.noOpeningsMessage}
              </p>
            )}
          </FadeIn>
        </Container>
      </Section>

      <JobApplicationModal opening={applyOpening} onClose={() => setApplyOpening(null)} />

      <Section variant="white">
        <Container>
          <FadeIn>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <ButtonLink to={routes.about} size="lg" variant="secondary">
                About AIT
              </ButtonLink>
              <ButtonLink to={routes.contact} size="lg">
                Contact Us
              </ButtonLink>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  )
}
