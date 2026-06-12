import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { pageGutter } from '../../lib/layout'

type ContainerSize = 'default' | 'narrow' | 'wide'

type ContainerProps = {
  children: ReactNode
  className?: string
  size?: ContainerSize
}

const sizeClasses: Record<ContainerSize, string> = {
  default: '',
  narrow: 'max-w-3xl',
  wide: 'max-w-7xl',
}

export function Container({ children, className = '', size = 'default' }: ContainerProps) {
  return (
    <div className={cn(pageGutter, size !== 'default' && sizeClasses[size], className)}>
      {children}
    </div>
  )
}
