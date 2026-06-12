import { NavLink, type NavLinkProps } from 'react-router-dom'
import { cn } from '../../lib/cn'

type NavLinkItemProps = NavLinkProps & {
  className?: string | ((props: { isActive: boolean }) => string)
  mobile?: boolean
}

export function NavLinkItem({ className, mobile = false, ...props }: NavLinkItemProps) {
  return (
    <NavLink
      {...props}
      className={(state) =>
        cn(
          'font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal',
          mobile
            ? 'rounded-lg px-4 py-3 text-lg'
            : 'rounded-lg px-4 py-2 text-sm',
          typeof className === 'function' ? className(state) : className,
          state.isActive
            ? mobile
              ? 'bg-teal text-white'
              : 'bg-teal text-white'
            : mobile
              ? 'text-white/90 hover:bg-white/10'
              : 'text-deep-teal hover:bg-teal/10 hover:text-navy-plum',
        )
      }
    />
  )
}
