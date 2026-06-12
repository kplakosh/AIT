import { X } from 'lucide-react'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../../content/site'
import { Logo } from '../ui/Logo'
import { NavLinkItem } from './NavLinkItem'

type MobileNavProps = {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" id="mobile-navigation">
          <motion.button
            type="button"
            className="absolute inset-0 bg-navy-plum/60"
            aria-label="Close menu"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col bg-deep-teal p-6 shadow-xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="text-sm font-medium uppercase tracking-wider text-white/70">
                Menu
              </span>
              <button
                type="button"
                className="rounded-lg p-2 text-white hover:bg-white/10"
                aria-label="Close menu"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
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

export function MobileNavToggle({ open, onToggle }: MobileNavToggleProps) {
  return (
    <button
      type="button"
      className="rounded-lg p-2 text-deep-teal hover:bg-teal/10 md:hidden"
      aria-expanded={open}
      aria-controls="mobile-navigation"
      aria-label={open ? 'Close menu' : 'Open menu'}
      onClick={onToggle}
    >
      <span className="flex h-6 w-6 flex-col items-center justify-center gap-1.5">
        <span className="h-0.5 w-5 rounded-full bg-current" />
        <span className="h-0.5 w-5 rounded-full bg-current" />
        <span className="h-0.5 w-5 rounded-full bg-current" />
      </span>
    </button>
  )
}
