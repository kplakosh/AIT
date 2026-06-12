import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { cn } from '../../lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-teal text-white hover:bg-deep-teal focus-visible:outline-teal',
  secondary:
    'bg-warm-gold text-white hover:bg-muted-rose focus-visible:outline-warm-gold',
  ghost:
    'border border-teal/30 bg-transparent text-deep-teal hover:border-teal hover:bg-teal/5 focus-visible:outline-teal',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50'

type SharedProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & SharedProps

type ButtonLinkProps = LinkProps & SharedProps

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & SharedProps

function buttonClassName(variant: ButtonVariant, size: ButtonSize, className?: string) {
  return cn(baseClasses, variantClasses[variant], sizeClasses[size], className)
}

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

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={buttonClassName(variant, size, className)} {...props}>
      {children}
    </Link>
  )
}

export function ExternalLink({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ExternalLinkProps) {
  return (
    <a className={buttonClassName(variant, size, className)} {...props}>
      {children}
    </a>
  )
}
