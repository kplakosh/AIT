import { useCallback, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks, routes } from '../../content/site'
import { focusRing } from '../../lib/a11y'
import { cn } from '../../lib/cn'
import { pageGutter } from '../../lib/layout'
import { Logo } from '../ui/Logo'
import { NavLinkItem } from './NavLinkItem'
import { MobileNav, MobileNavToggle } from './MobileNav'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuToggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobileNav = useCallback(() => {
    setMobileOpen(false)
    menuToggleRef.current?.focus()
  }, [])

  return (
    <>
      <header
        className={cn(
          'site-header fixed inset-x-0 top-0 z-40 w-full border-b border-deep-teal/10 transition-shadow duration-200',
          scrolled ? 'shadow-md' : 'shadow-sm',
        )}
      >
        <div className={cn(pageGutter, 'flex items-center justify-between gap-4 py-3')}>
          <NavLink
            to={routes.home}
            className={cn('shrink-0 rounded-md', focusRing)}
            onClick={() => setMobileOpen(false)}
          >
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
            ref={menuToggleRef}
            open={mobileOpen}
            onToggle={() => setMobileOpen((current) => !current)}
          />
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={closeMobileNav} />
    </>
  )
}
