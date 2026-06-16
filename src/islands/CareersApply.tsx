import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { Briefcase, MapPin } from 'lucide-react'
import {
  careersContent,
  contactContent,
  type JobOpening,
} from '../shared/content/site'
import { inputFocusRing } from '../shared/lib/a11y'
import { cn } from '../shared/lib/cn'
import { bodyText } from '../shared/lib/layout'
import { Button, ExternalLink } from './ui/Button'
import { Card } from './ui/Card'
import { Modal } from './ui/Modal'
import { SectionHeading } from './ui/SectionHeading'

function getCareersFormId(): string {
  return (
    import.meta.env.PUBLIC_FORMSPREE_CAREERS_FORM_ID ||
    import.meta.env.VITE_FORMSPREE_CAREERS_FORM_ID ||
    'xrevdqop'
  )
}

const inputClasses = cn(
  'w-full rounded-lg border border-deep-teal/15 bg-white px-4 py-2.5 text-navy-plum placeholder:text-navy-plum/40 transition-colors disabled:cursor-not-allowed disabled:opacity-60',
  inputFocusRing,
)

const fieldErrorClasses = 'mt-1.5 text-sm text-muted-rose'

type JobDetailListProps = {
  title: string
  items: readonly string[]
}

function JobDetailList({ title, items }: JobDetailListProps) {
  return (
    <div>
      <h3 className="mb-3 text-lg font-semibold text-deep-teal">{title}</h3>
      <ul className={cn('list-disc space-y-2 pl-5', bodyText)}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

type JobOpeningCardProps = {
  opening: JobOpening
  onApply: () => void
}

function JobOpeningCard({ opening, onApply }: JobOpeningCardProps) {
  return (
    <Card variant="accent" id={opening.id} className="scroll-mt-24">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <SectionHeading title={opening.title} showDivider />
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-navy-plum/75">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
              {opening.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Briefcase className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
              {opening.employmentType}
            </span>
          </div>
        </div>
        <span className="inline-flex shrink-0 items-center rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal">
          {opening.status === 'open' ? 'Open' : 'Closed'}
        </span>
      </div>

      <p className={cn('mt-6', bodyText)}>
        {opening.summary}
      </p>

      <div className="mt-8 space-y-8">
        <JobDetailList title="Responsibilities" items={opening.responsibilities} />
        <JobDetailList title="Qualifications" items={opening.qualifications} />
        {opening.preferred && opening.preferred.length > 0 ? (
          <JobDetailList title="Preferred" items={opening.preferred} />
        ) : null}
      </div>

      <p className="mt-8">
        <Button type="button" size="lg" onClick={onApply}>
          Apply for this role
        </Button>
      </p>
    </Card>
  )
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
  const subject = encodeURIComponent(`${careersContent.applyEmailSubject}: ${opening.title}`)
  return `mailto:${contactContent.email}?subject=${subject}`
}

type JobApplicationFormProps = {
  formId: string
  opening: JobOpening
}

function JobApplicationForm({ formId, opening }: JobApplicationFormProps) {
  const [state, handleSubmit] = useForm(formId)
  const fieldId = (name: string) => `career-${name}-${opening.id}`

  if (state.succeeded) {
    return (
      <p className={bodyText} role="status">
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

function JobApplicationFormWrapper({ opening }: { opening: JobOpening }) {
  const formId = getCareersFormId()
  const isConfigured = Boolean(formId && formId !== 'your_careers_form_id_here')

  if (!isConfigured) {
    return (
      <div>
        <p className="rounded-lg border border-warm-gold/30 bg-warm-gold/10 px-4 py-3 text-sm text-navy-plum/85">
          Application form is not configured yet. Add your Formspree form ID to{' '}
          <code className="rounded bg-white/60 px-1 py-0.5 text-xs">.env</code> as{' '}
          <code className="rounded bg-white/60 px-1 py-0.5 text-xs">PUBLIC_FORMSPREE_CAREERS_FORM_ID</code>.
        </p>
        <p className="mt-6">
          <ExternalLink href={buildApplyMailto(opening)} size="lg">
            Email your application
          </ExternalLink>
        </p>
      </div>
    )
  }

  return <JobApplicationForm formId={formId} opening={opening} />
}

export default function CareersApply() {
  const openPositions = careersContent.openings.filter((opening) => opening.status === 'open')
  const [applyOpening, setApplyOpening] = useState<JobOpening | null>(null)

  return (
    <>
      {openPositions.length > 0 ? (
        <div className="space-y-10">
          {openPositions.map((opening) => (
            <JobOpeningCard
              key={opening.id}
              opening={opening}
              onApply={() => setApplyOpening(opening)}
            />
          ))}
        </div>
      ) : (
        <p className={bodyText}>
          {careersContent.noOpeningsMessage}
        </p>
      )}

      <Modal
        open={applyOpening !== null}
        onClose={() => setApplyOpening(null)}
        title={careersContent.applyHeading}
        description={applyOpening?.title}
      >
        {applyOpening ? <JobApplicationFormWrapper opening={applyOpening} /> : null}
      </Modal>
    </>
  )
}
