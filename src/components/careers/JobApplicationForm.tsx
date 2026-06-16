import { useForm, ValidationError } from '@formspree/react'
import { careersContent, contactContent, type JobOpening } from '../../content/site'
import { inputFocusRing } from '../../lib/a11y'
import { cn } from '../../lib/cn'
import { Button, ExternalLink } from '../ui/Button'

const formId = import.meta.env.VITE_FORMSPREE_CAREERS_FORM_ID || 'xrevdqop'
const isConfigured = Boolean(formId && formId !== 'your_careers_form_id_here')

const inputClasses = cn(
  'w-full rounded-lg border border-deep-teal/15 bg-white px-4 py-2.5 text-navy-plum placeholder:text-navy-plum/40 transition-colors disabled:cursor-not-allowed disabled:opacity-60',
  inputFocusRing,
)

const fieldErrorClasses = 'mt-1.5 text-sm text-muted-rose'

type JobApplicationFormProps = {
  opening: JobOpening
}

type FieldLabelProps = {
  htmlFor: string
  children: string
  required?: boolean
}

function FieldLabel({ htmlFor, children, required = false }: FieldLabelProps) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-deep-teal">
      {children}
      {required ? (
        <>
          <span className="text-muted-rose" aria-hidden="true">
            {' '}
            *
          </span>
          <span className="sr-only"> (required)</span>
        </>
      ) : null}
    </label>
  )
}

function buildApplyMailto(opening: JobOpening): string {
  const subject = encodeURIComponent(`${careersContent.applyEmailSubject} — ${opening.title}`)
  return `mailto:${contactContent.email}?subject=${subject}`
}

type ConfiguredJobApplicationFormProps = {
  formId: string
  opening: JobOpening
}

function ConfiguredJobApplicationForm({ formId, opening }: ConfiguredJobApplicationFormProps) {
  const [state, handleSubmit] = useForm(formId)
  const fieldId = (name: string) => `career-${name}-${opening.id}`

  if (state.succeeded) {
    return (
      <p className="text-base leading-relaxed text-navy-plum/85" role="status">
        {careersContent.applySuccessMessage}
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="position" value={opening.title} />
      <input type="hidden" name="job_id" value={opening.id} />

      <div>
        <FieldLabel htmlFor={fieldId('name')} required>
          Name
        </FieldLabel>
        <input
          id={fieldId('name')}
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
        <FieldLabel htmlFor={fieldId('email')} required>
          Email
        </FieldLabel>
        <input
          id={fieldId('email')}
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
        <FieldLabel htmlFor={fieldId('phone')} required>
          Phone
        </FieldLabel>
        <input
          id={fieldId('phone')}
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          aria-required="true"
          disabled={state.submitting}
          className={inputClasses}
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} className={fieldErrorClasses} />
      </div>

      <div>
        <FieldLabel htmlFor={fieldId('message')} required>
          Cover letter
        </FieldLabel>
        <textarea
          id={fieldId('message')}
          name="message"
          rows={5}
          required
          aria-required="true"
          disabled={state.submitting}
          placeholder="Tell us why you are interested in this role and what relevant experience you bring."
          className={cn(inputClasses, 'min-h-[8rem] resize-y')}
        />
        <ValidationError
          prefix="Cover letter"
          field="message"
          errors={state.errors}
          className={fieldErrorClasses}
        />
      </div>

      <div>
        <FieldLabel htmlFor={fieldId('resume')} required>
          Resume
        </FieldLabel>
        <input
          id={fieldId('resume')}
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          required
          aria-required="true"
          disabled={state.submitting}
          className={cn(
            inputClasses,
            'cursor-pointer file:mr-4 file:rounded-md file:border-0 file:bg-teal/10 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-deep-teal',
          )}
        />
        <p className="mt-1.5 text-xs text-navy-plum/60">PDF, DOC, or DOCX</p>
        <ValidationError prefix="Resume" field="resume" errors={state.errors} className={fieldErrorClasses} />
      </div>

      <ValidationError errors={state.errors} className={fieldErrorClasses} />

      <p className="text-sm text-navy-plum/70">
        Or email your application to{' '}
        <a href={buildApplyMailto(opening)} className="text-teal underline-offset-4 hover:underline">
          {contactContent.email}
        </a>
        .
      </p>

      <Button type="submit" size="lg" disabled={state.submitting}>
        {state.submitting ? 'Submitting…' : 'Submit application'}
      </Button>
    </form>
  )
}

export function JobApplicationForm({ opening }: JobApplicationFormProps) {
  if (!isConfigured) {
    return (
      <div>
        <p className="rounded-lg border border-warm-gold/30 bg-warm-gold/10 px-4 py-3 text-sm text-navy-plum/85">
          Application form is not configured yet. Add your Formspree form ID to{' '}
          <code className="rounded bg-white/60 px-1 py-0.5 text-xs">.env</code> as{' '}
          <code className="rounded bg-white/60 px-1 py-0.5 text-xs">VITE_FORMSPREE_CAREERS_FORM_ID</code>{' '}
          (see <code className="rounded bg-white/60 px-1 py-0.5 text-xs">.env.example</code>).
        </p>
        <p className="mt-6">
          <ExternalLink href={buildApplyMailto(opening)} size="lg">
            Email your application
          </ExternalLink>
        </p>
      </div>
    )
  }

  return <ConfiguredJobApplicationForm formId={formId} opening={opening} />
}
