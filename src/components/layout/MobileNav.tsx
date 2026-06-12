import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useEffect } from 'react'
import { navLinks } from '../../content/site'
import { Logo } from '../ui/Logo'

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

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
      <button
        type="button"
        className="absolute inset-0 bg-navy-plum/60"
        aria-label="Close menu"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col bg-deep-teal p-6 shadow-xl">
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
        <nav className="flex flex-col gap-2">
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              onClick={onClose}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 text-lg font-medium transition-colors ${
                  isActive
                    ? 'bg-teal text-white'
                    : 'text-white/90 hover:bg-white/10'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto border-t border-white/10 pt-6">
          <Logo className="h-12 w-auto" />
        </div>
      </div>
    </div>
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
      <Menu className="h-6 w-6" />
    </button>
  )
}
