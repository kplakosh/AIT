import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { focusRing } from '../../shared/lib/a11y'
import { cn } from '../../shared/lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-teal text-white hover:bg-deep-teal',
  secondary: 'bg-warm-gold text-white hover:bg-muted-rose',
  ghost: 'border border-teal/30 bg-transparent text-deep-teal hover:border-teal hover:bg-teal/5',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

const baseClasses = cn(
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors disabled:pointer-events-none disabled:opacity-50',
  focusRing,
)

type SharedProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
}

function buttonClassName(variant: ButtonVariant, size: ButtonSize, className?: string) {
  return cn(baseClasses, variantClasses[variant], sizeClasses[size], className)
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & SharedProps

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & SharedProps

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button type="button" className={buttonClassName(variant, size, className)} {...props}>
      {children}
    </button>
  )
}

export function AnchorButton({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: AnchorProps) {
  return (
    <a className={buttonClassName(variant, size, className)} {...props}>
      {children}
    </a>
  )
}

export function ExternalLink({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: AnchorProps) {
  return (
    <a className={buttonClassName(variant, size, className)} {...props}>
      {children}
    </a>
  )
}
