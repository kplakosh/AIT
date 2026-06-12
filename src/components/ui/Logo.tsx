import { assets } from '../../content/site'
import { cn } from '../../lib/cn'

type LogoVariant = 'default' | 'on-dark'

type LogoProps = {
  className?: string
  variant?: LogoVariant
}

export function Logo({ className = 'h-14 w-auto md:h-16', variant = 'default' }: LogoProps) {
  const src = variant === 'on-dark' ? assets.logo.srcOnDark : assets.logo.src

  return (
    <img
      src={src}
      alt={assets.logo.alt}
      className={cn(className)}
      width={346}
      height={140}
    />
  )
}
