import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { navLinks } from '../../content/site'
import { cn } from '../../lib/cn'
import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'
import { NavLinkItem } from './NavLinkItem'
import { MobileNav, MobileNavToggle } from './MobileNav'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'site-header sticky top-0 z-40 border-b border-deep-teal/10 transition-shadow duration-200',
          scrolled ? 'shadow-md' : 'shadow-sm',
        )}
      >
        <Container>
          <div className="flex items-center justify-between gap-4 py-3">
            <NavLink to="/" className="shrink-0 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal" onClick={() => setMobileOpen(false)}>
              <Logo />
            </NavLink>

            <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
              {navLinks.map(({ label, path }) => (
                <NavLinkItem key={path} to={path} end={path === '/'}>
                  {label}
                </NavLinkItem>
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
