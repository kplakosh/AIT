import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type SectionVariant = 'default' | 'muted' | 'white' | 'dark' | 'gradient'

type SectionProps = {
  children: ReactNode
  className?: string
  id?: string
  variant?: SectionVariant
}

const variantClasses: Record<SectionVariant, string> = {
  default: '',
  muted: 'bg-cream',
  white: 'bg-white',
  dark: 'bg-deep-teal text-white',
  gradient: 'bg-linear-to-br from-navy-plum via-deep-teal to-teal text-white',
}

export function Section({
  children,
  className = '',
  id,
  variant = 'default',
}: SectionProps) {
  return (
    <section id={id} className={cn('py-12 md:py-20', variantClasses[variant], className)}>
      {children}
    </section>
  )
}
