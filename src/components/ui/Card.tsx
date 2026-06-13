import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type CardVariant = 'default' | 'elevated' | 'accent'

type CardProps = {
  children: ReactNode
  className?: string
  id?: string
  variant?: CardVariant
}

const variantClasses: Record<CardVariant, string> = {
  default: 'border border-deep-teal/10 bg-white shadow-sm',
  elevated: 'border border-deep-teal/5 bg-white shadow-md',
  accent: 'border border-deep-teal/10 border-t-4 border-t-warm-gold bg-white shadow-sm',
}

export function Card({ children, className = '', id, variant = 'default' }: CardProps) {
  return (
    <div
      id={id}
      className={cn('rounded-xl p-6 transition-shadow hover:shadow-md', variantClasses[variant], className)}
    >
      {children}
    </div>
  )
}
