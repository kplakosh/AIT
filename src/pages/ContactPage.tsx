import { ContactDetails } from '../components/contact/ContactDetails'
import { ContactForm } from '../components/contact/ContactForm'
import { Container } from '../components/ui/Container'
import { FadeIn } from '../components/ui/FadeIn'
import { PageHeader } from '../components/ui/PageHeader'
import { Section } from '../components/ui/Section'
import { contactContent } from '../content/site'
import { focusRing } from '../lib/a11y'
import { cn } from '../lib/cn'

export function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" description={contactContent.welcome} />

      <Section variant="white">
        <Container>
          <FadeIn>
            <div className="mx-auto w-full md:w-2/3">
              <ContactForm />
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-x-8 lg:gap-x-12 [&>*]:min-w-0">
            <FadeIn>
              <ContactDetails />
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="w-full">
                <iframe
                  title={contactContent.map.title}
                  src={contactContent.map.embedUrl}
                  width="100%"
                  height="350"
                  loading="lazy"
                  className="rounded-xl border border-deep-teal/10 shadow-sm"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <p className="mt-3 text-sm">
                  <a
                    href={contactContent.map.viewLargerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn('text-teal underline-offset-4 hover:underline', focusRing, 'rounded-sm')}
                  >
                    View Larger Map
                  </a>
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  )
}
