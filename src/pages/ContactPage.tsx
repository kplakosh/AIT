import { Helmet } from 'react-helmet-async'
import { ContactDetails } from '../components/contact/ContactDetails'
import { ContactForm } from '../components/contact/ContactForm'
import { Container } from '../components/ui/Container'
import { FadeIn } from '../components/ui/FadeIn'
import { PageHeader } from '../components/ui/PageHeader'
import { Section } from '../components/ui/Section'
import { contactContent, pageMeta } from '../content/site'
import { contentPairGrid } from '../lib/layout'

export function ContactPage() {
  return (
    <>
      <Helmet>
        <title>{pageMeta.contact.title}</title>
        <meta name="description" content={pageMeta.contact.description} />
      </Helmet>

      <PageHeader title="Contact" description={contactContent.welcome} />

      <Section variant="white">
        <Container>
          <div className={contentPairGrid}>
            <FadeIn>
              <ContactDetails />
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="w-full md:max-w-md md:justify-self-end lg:max-w-lg">
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
                    className="text-teal underline-offset-4 hover:underline"
                  >
                    View Larger Map
                  </a>
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <FadeIn>
            <ContactForm />
          </FadeIn>
        </Container>
      </Section>
    </>
  )
}
