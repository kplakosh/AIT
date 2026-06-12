import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

type ButtonVariant = 'primary' | 'ghost'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-teal text-white hover:bg-deep-teal focus-visible:outline-teal',
  ghost:
    'border border-teal/30 bg-transparent text-deep-teal hover:border-teal hover:bg-teal/5 focus-visible:outline-teal',
}

const baseClasses =
  'inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  children: ReactNode
}

type ButtonLinkProps = LinkProps & {
  variant?: ButtonVariant
  children: ReactNode
}

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant
  children: ReactNode
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function ButtonLink({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  )
}

export function ExternalLink({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
