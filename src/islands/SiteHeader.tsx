import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { assets, navLinks, routes } from '../shared/content/site'
import { useFocusTrap } from './hooks/useFocusTrap'
import { focusRing, focusRingOnDark } from '../shared/lib/a11y'
import { cn } from '../shared/lib/cn'
import { pageGutter } from '../shared/lib/layout'

type SiteHeaderProps = {
  currentPath: string
}

function isActivePath(currentPath: string, path: string): boolean {
  return path === '/' ? currentPath === '/' : currentPath.startsWith(path)
}

type NavLinkItemProps = {
  href: string
  currentPath: string
  mobile?: boolean
  onClick?: () => void
  children: React.ReactNode
}

function NavLinkItem({ href, currentPath, mobile = false, onClick, children }: NavLinkItemProps) {
  const active = isActivePath(currentPath, href)

  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'font-medium transition-colors',
        mobile ? focusRingOnDark : focusRing,
        mobile ? 'rounded-lg px-4 py-3 text-lg' : 'rounded-lg px-4 py-2 text-sm',
        active
          ? 'bg-teal text-white'
          : mobile
            ? 'text-white/90 hover:bg-white/10'
            : 'text-deep-teal hover:bg-teal/10 hover:text-navy-plum',
      )}
      aria-current={active ? 'page' : undefined}
    >
      {children}
      {active ? <span className="sr-only"> (current page)</span> : null}
    </a>
  )
}

type MobileNavProps = {
  open: boolean
  currentPath: string
  onClose: () => void
}

function MobileNav({ open, currentPath, onClose }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useFocusTrap({
    containerRef: panelRef,
    active: open,
    onEscape: onClose,
  })

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const panelTransition = prefersReducedMotion ? { duration: 0 } : { type: 'tween' as const, duration: 0.25 }
  const overlayTransition = prefersReducedMotion ? { duration: 0 } : undefined

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" id="mobile-navigation">
          <motion.button
            type="button"
            className={cn('absolute inset-0 bg-navy-plum/60', focusRingOnDark)}
            aria-label="Close menu"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={overlayTransition}
          />
          <motion.div
            ref={panelRef}
            className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col bg-deep-teal p-6 shadow-xl"
            initial={prefersReducedMotion ? false : { x: '100%' }}
            animate={{ x: 0 }}
            exit={prefersReducedMotion ? undefined : { x: '100%' }}
            transition={panelTransition}
            aria-labelledby="mobile-nav-title"
          >
            <div className="mb-8 flex items-center justify-between">
              <span
                id="mobile-nav-title"
                className="text-sm font-medium uppercase tracking-wider text-white/70"
              >
                Menu
              </span>
              <button
                type="button"
                className={cn('rounded-lg p-2 text-white hover:bg-white/10', focusRingOnDark)}
                aria-label="Close menu"
                onClick={onClose}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {navLinks.map(({ label, path }) => (
                <NavLinkItem
                  key={path}
                  href={path}
                  currentPath={currentPath}
                  mobile
                  onClick={onClose}
                >
                  {label}
                </NavLinkItem>
              ))}
            </nav>
            <div className="mt-auto border-t border-white/10 pt-6">
              <img
                src={assets.logo.srcOnDark}
                alt={assets.logo.alt}
                className="h-12 w-auto"
                width={346}
                height={140}
              />
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  )
}

type MobileNavToggleProps = {
  open: boolean
  onToggle: () => void
}

const MobileNavToggle = forwardRef<HTMLButtonElement, MobileNavToggleProps>(function MobileNavToggle(
  { open, onToggle },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        'flex min-h-11 min-w-11 items-center justify-center rounded-lg text-deep-teal hover:bg-teal/10 md:hidden',
        focusRing,
      )}
      aria-expanded={open}
      aria-controls="mobile-navigation"
      aria-label={open ? 'Close menu' : 'Open menu'}
      onClick={onToggle}
    >
      <span className="flex h-6 w-6 flex-col items-center justify-center gap-1.5" aria-hidden="true">
        <span className="h-0.5 w-5 rounded-full bg-current" />
        <span className="h-0.5 w-5 rounded-full bg-current" />
        <span className="h-0.5 w-5 rounded-full bg-current" />
      </span>
    </button>
  )
})

export default function SiteHeader({ currentPath }: SiteHeaderProps) {
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
          <a
            href={routes.home}
            className={cn('shrink-0 rounded-md', focusRing)}
            onClick={() => setMobileOpen(false)}
          >
            <img
              src={assets.logo.src}
              alt={assets.logo.alt}
              className="h-14 w-auto md:h-16"
              width={346}
              height={140}
            />
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
            {navLinks.map(({ label, path }) => (
              <NavLinkItem key={path} href={path} currentPath={currentPath}>
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

      <MobileNav open={mobileOpen} currentPath={currentPath} onClose={closeMobileNav} />
    </>
  )
}
