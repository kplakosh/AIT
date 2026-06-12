import { NavLink } from 'react-router-dom'
import { navLinks, siteConfig } from '../../content/site'
import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-deep-teal text-white">
      <Container>
        <div className="flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-4 sm:gap-6">
            <Logo className="h-12 w-auto shrink-0" variant="on-dark" />
            <p className="max-w-xs text-sm leading-relaxed text-white/75 sm:max-w-sm">
              {siteConfig.tagline}
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-warm-gold">
              Navigation
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
              {navLinks.map(({ label, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === '/'}
                  className="text-sm text-white/85 transition-colors hover:text-warm-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warm-gold"
                >
                  {label}
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
