import { assets } from '../../content/site'

type LogoProps = {
  className?: string
}

export function Logo({ className = 'h-14 w-auto md:h-16' }: LogoProps) {
  return (
    <img
      src={assets.logo.src}
      alt={assets.logo.alt}
      className={className}
      width={346}
      height={140}
    />
  )
}
