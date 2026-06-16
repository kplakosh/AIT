import type { ReactNode } from 'react'
import { cn } from '../../shared/lib/cn'
import { bodyText } from '../../shared/lib/layout'

type SectionHeadingProps = {
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
  showDivider?: boolean
  inverted?: boolean
  children?: ReactNode
}

export function SectionHeading({
  title,
  subtitle,
  className = '',
  align = 'left',
  showDivider = true,
  inverted = false,
  children,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-6 md:mb-8', align === 'center' && 'text-center', className)}>
      {showDivider ? (
        <div
          className={cn('mb-4 h-1 w-12 rounded-full bg-warm-gold', align === 'center' && 'mx-auto')}
          aria-hidden="true"
        />
      ) : null}
      <h2
        className={cn(
          'font-heading text-2xl font-semibold tracking-tight md:text-3xl',
          inverted ? 'text-white' : 'text-deep-teal',
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={cn('mt-3', inverted ? 'body-text-inverse' : bodyText)}>
          {subtitle}
        </p>
      ) : null}
      {children}
    </div>
  )
}
