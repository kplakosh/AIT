import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { navLinks } from '../../content/site'
import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'
import { MobileNav, MobileNavToggle } from './MobileNav'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header
        className="site-header sticky top-0 z-40 border-b border-black/10 shadow-sm"
        style={{ backgroundColor: '#faf9f7' }}
      >
        <Container>
          <div className="flex items-center justify-between gap-4 py-3">
            <NavLink to="/" className="shrink-0" onClick={() => setMobileOpen(false)}>
              <Logo />
            </NavLink>

            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-1 md:flex"
            >
              {navLinks.map(({ label, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === '/'}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-teal text-white'
                        : 'text-deep-teal hover:bg-teal/10 hover:text-navy-plum'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            <MobileNavToggle
              open={mobileOpen}
              onToggle={() => setMobileOpen((current) => !current)}
            />
          </div>
        </Container>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
