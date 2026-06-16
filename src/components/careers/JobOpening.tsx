import { Briefcase, MapPin } from 'lucide-react'
import type { JobOpening as JobOpeningType } from '../../content/site'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'

type JobOpeningProps = {
  opening: JobOpeningType
  onApply: () => void
}

function JobDetailList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div>
      <h3 className="mb-3 text-lg font-semibold text-deep-teal">{title}</h3>
      <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-navy-plum/85">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export function JobOpening({ opening, onApply }: JobOpeningProps) {
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

      <p className="mt-6 max-w-3xl text-base leading-relaxed text-navy-plum/85 md:text-lg">
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
