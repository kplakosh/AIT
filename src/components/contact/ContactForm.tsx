import { useForm, ValidationError } from '@formspree/react'
import { contactContent } from '../../content/site'
import { inputFocusRing } from '../../lib/a11y'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'

const formId = import.meta.env.VITE_FORMSPREE_FORM_ID || 'xpqeovky'
const isConfigured = Boolean(formId && formId !== 'your_form_id_here')

const inputClasses = cn(
  'w-full rounded-lg border border-deep-teal/15 bg-white px-4 py-2.5 text-navy-plum placeholder:text-navy-plum/40 transition-colors disabled:cursor-not-allowed disabled:opacity-60',
  inputFocusRing,
)

const fieldErrorClasses = 'mt-1.5 text-sm text-muted-rose'

type RequiredFieldLabelProps = {
  htmlFor: string
  children: string
}

function RequiredFieldLabel({ htmlFor, children }: RequiredFieldLabelProps) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-deep-teal">
      {children}
      <span className="text-muted-rose" aria-hidden="true">
        {' '}
        *
      </span>
      <span className="sr-only"> (required)</span>
    </label>
  )
}

type ConfiguredContactFormProps = {
  formId: string
}

function ConfiguredContactForm({ formId }: ConfiguredContactFormProps) {
  const [state, handleSubmit] = useForm(formId)

  if (state.succeeded) {
    return (
      <Card variant="elevated" className="h-full">
        <SectionHeading title="Send us a message" showDivider />
        <p className="text-base leading-relaxed text-navy-plum/85" role="status">
          Thank you for your message. We will get back to you soon.
        </p>
      </Card>
    )
  }

  return (
    <Card variant="elevated" className="h-full">
      <SectionHeading title="Send us a message" showDivider />
      <p className="mb-6 text-sm text-navy-plum/70">All fields are required.</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <RequiredFieldLabel htmlFor="contact-name">Name</RequiredFieldLabel>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            disabled={state.submitting}
            className={inputClasses}
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className={fieldErrorClasses} />
        </div>

        <div>
          <RequiredFieldLabel htmlFor="contact-email">Email</RequiredFieldLabel>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            disabled={state.submitting}
            className={inputClasses}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className={fieldErrorClasses} />
        </div>

        <div>
          <RequiredFieldLabel htmlFor="contact-message">Message</RequiredFieldLabel>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            aria-required="true"
            disabled={state.submitting}
            className={cn(inputClasses, 'min-h-[8rem] resize-y')}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className={fieldErrorClasses}
          />
        </div>

        <ValidationError errors={state.errors} className={fieldErrorClasses} />

        <p className="text-sm text-navy-plum/70">
          Or email us directly at{' '}
          <a
            href={`mailto:${contactContent.email}`}
            className="text-teal underline-offset-4 hover:underline"
          >
            {contactContent.email}
          </a>
          .
        </p>

        <Button type="submit" size="lg" disabled={state.submitting}>
          {state.submitting ? 'Sending…' : 'Send message'}
        </Button>
      </form>
    </Card>
  )
}

export function ContactForm() {
  if (!isConfigured) {
    return (
      <Card variant="elevated" className="h-full">
        <SectionHeading title="Send us a message" showDivider />
        <p className="rounded-lg border border-warm-gold/30 bg-warm-gold/10 px-4 py-3 text-sm text-navy-plum/85">
          Form submissions are not configured yet. Add your Formspree form ID to{' '}
          <code className="rounded bg-white/60 px-1 py-0.5 text-xs">.env</code> as{' '}
          <code className="rounded bg-white/60 px-1 py-0.5 text-xs">VITE_FORMSPREE_FORM_ID</code>{' '}
          (see <code className="rounded bg-white/60 px-1 py-0.5 text-xs">.env.example</code>).
        </p>
      </Card>
    )
  }

  return <ConfiguredContactForm formId={formId} />
}
