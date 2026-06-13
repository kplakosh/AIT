import { NavLink } from 'react-router-dom'
import { navLinks, siteConfig } from '../../content/site'
import { focusRingOnDark } from '../../lib/a11y'
import { cn } from '../../lib/cn'
import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-deep-teal text-white">
      <Container>
        <div className="flex flex-col gap-8 py-10 md:flex-row md:items-stretch md:justify-between">
          <div className="flex items-stretch gap-4 sm:gap-6">
            <Logo
              className="h-20 w-auto shrink-0 object-contain object-left sm:h-24 md:h-full md:max-h-[5.5rem]"
              variant="on-dark"
            />
            <p className="flex max-w-xs items-center text-sm leading-relaxed text-white/75 sm:max-w-sm">
              {siteConfig.tagline}
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-col justify-center gap-3 md:items-end"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-warm-gold">
              Navigation
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
              {navLinks.map(({ label, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === '/'}
                  className={({ isActive }) =>
                    cn(
                      'text-sm text-white/85 transition-colors hover:text-warm-gold',
                      focusRingOnDark,
                      isActive && 'text-warm-gold',
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive ? <span className="sr-only"> (current page)</span> : null}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>

        <div className="border-t border-white/10 py-6">
          <p className="text-center text-sm text-white/60 md:text-left">
            {siteConfig.copyright}
          </p>
        </div>
      </Container>
    </footer>
  )
}
