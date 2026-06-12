import type { ReactNode } from 'react'

type SectionHeadingProps = {
  title: string
  subtitle?: string
  className?: string
  children?: ReactNode
}

export function SectionHeading({
  title,
  subtitle,
  className = '',
  children,
}: SectionHeadingProps) {
  return (
    <div className={`mb-8 md:mb-10 ${className}`}>
      <h2 className="text-2xl font-semibold tracking-tight text-deep-teal md:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-navy-plum/80">
          {subtitle}
        </p>
      ) : null}
      {children}
    </div>
  )
}
