import type { ReactNode } from 'react'
import { Container } from './Container'
import { Section } from './Section'

type PageHeaderProps = {
  title: string
  description?: string
  children?: ReactNode
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <Section variant="gradient" className="py-10 md:py-14">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-warm-gold">
            Advanced Instrument Technologies
          </p>
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 text-base leading-relaxed text-white/90 md:text-lg">
              {description}
            </p>
          ) : null}
          {children}
        </div>
      </Container>
    </Section>
  )
}
