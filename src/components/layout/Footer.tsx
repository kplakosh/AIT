import { NavLink } from 'react-router-dom'
import { navLinks, siteConfig } from '../../content/site'
import { Container } from '../ui/Container'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-deep-teal/10 bg-deep-teal text-white">
      <Container>
        <div className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/75">{siteConfig.copyright}</p>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-4">
            {navLinks.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                className="text-sm text-white/85 transition-colors hover:text-warm-gold"
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  )
}
