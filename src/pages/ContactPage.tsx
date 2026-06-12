import { Helmet } from 'react-helmet-async'
import { contactContent, pageMeta } from '../content/site'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'

export function ContactPage() {
  return (
    <>
      <Helmet>
        <title>{pageMeta.contact.title}</title>
        <meta name="description" content={pageMeta.contact.description} />
      </Helmet>

      <Section className="bg-linear-to-br from-deep-teal to-navy-plum text-white">
        <Container>
          <div className="py-4 md:py-8">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Contact
            </h1>
            <p className="mt-4 max-w-2xl text-white/90">{contactContent.welcome}</p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <address className="not-italic">
              <p className="text-lg font-medium text-deep-teal">
                {contactContent.company}
              </p>
              <p className="mt-4 leading-relaxed text-navy-plum/85">
                {contactContent.address.street}
                <br />
                {contactContent.address.suite}
                <br />
                {contactContent.address.city}
              </p>
              <p className="mt-4">
                <span className="font-medium text-deep-teal">Phone:</span>{' '}
                <a
                  href={`tel:${contactContent.phone}`}
                  className="text-teal underline-offset-4 hover:underline"
                >
                  {contactContent.phone}
                </a>
              </p>
              <p className="mt-2">
                <span className="font-medium text-deep-teal">Email:</span>{' '}
                <a
                  href={`mailto:${contactContent.email}`}
                  className="text-teal underline-offset-4 hover:underline"
                >
                  {contactContent.email}
                </a>
              </p>
            </address>

            <div>
              <iframe
                title={contactContent.map.title}
                src={contactContent.map.embedUrl}
                width="100%"
                height="350"
                loading="lazy"
                className="rounded-xl border border-deep-teal/10"
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
          </div>

          <div className="mt-10 rounded-xl border border-dashed border-teal/30 bg-teal/5 p-6 text-sm text-navy-plum/75">
            Formspree contact form will be added here in Phase 5.
          </div>
        </Container>
      </Section>
    </>
  )
}
