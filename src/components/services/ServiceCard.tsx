import type { LucideIcon } from 'lucide-react'
import { Code2, Cpu, HelpCircle, Layers, Mail } from 'lucide-react'
import { servicesContent, routes } from '../../content/site'
import { cn } from '../../lib/cn'
import { ButtonLink } from '../ui/Button'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'
import { ServiceBulletList } from './ServiceBulletList'

type ServiceSection = (typeof servicesContent.sections)[number]

const serviceIcons: Record<ServiceSection['id'], LucideIcon> = {
  'labview-teststand': Code2,
  hardware: Cpu,
  'total-solutions': Layers,
  'how-can-we-help': HelpCircle,
  'let-us-help-you': Mail,
}

type ServiceCardProps = {
  section: ServiceSection
  variant?: 'default' | 'elevated' | 'accent'
  className?: string
}

export function ServiceCard({ section, variant = 'default', className = '' }: ServiceCardProps) {
  const Icon = serviceIcons[section.id]

  return (
    <Card variant={variant} className={cn('h-full', className)}>
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-teal/10 text-teal">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>

      <SectionHeading title={section.title} showDivider />

      {'intro' in section && section.intro ? (
        <p className="mb-4 text-sm italic text-muted-rose">{section.intro}</p>
      ) : null}

      {'bullets' in section && section.bullets ? (
        <ServiceBulletList items={section.bullets} />
      ) : null}

      {'body' in section && section.body ? (
        <p className="leading-relaxed text-navy-plum/85">{section.body}</p>
      ) : null}

      {section.id === 'let-us-help-you' ? (
        <div className="mt-6">
          <ButtonLink to={routes.contact}>Contact Us</ButtonLink>
        </div>
      ) : null}
    </Card>
  )
}
