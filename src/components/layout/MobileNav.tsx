import { forwardRef, useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { navLinks } from '../../content/site'
import { useFocusTrap } from '../../hooks/useFocusTrap'
import { focusRing, focusRingOnDark } from '../../lib/a11y'
import { cn } from '../../lib/cn'
import { Logo } from '../ui/Logo'
import { NavLinkItem } from './NavLinkItem'

type MobileNavProps = {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: MobileNavProps) {
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
                <NavLinkItem key={path} to={path} end={path === '/'} onClick={onClose} mobile>
                  {label}
                </NavLinkItem>
              ))}
            </nav>
            <div className="mt-auto border-t border-white/10 pt-6">
              <Logo className="h-12 w-auto" variant="on-dark" />
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

export const MobileNavToggle = forwardRef<HTMLButtonElement, MobileNavToggleProps>(
  function MobileNavToggle({ open, onToggle }, ref) {
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
  },
)
