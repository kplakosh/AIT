import { type ReactNode, useEffect, useId, useRef } from 'react'
import { X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useFocusTrap } from '../../hooks/useFocusTrap'
import { focusRing } from '../../lib/a11y'
import { cn } from '../../lib/cn'

type ModalProps = {
  open: boolean
  onClose: () => void
  title: string
  description?: string
  children: ReactNode
}

export function Modal({ open, onClose, title, description, children }: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const titleId = useId()
  const descriptionId = useId()
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

  const panelTransition = prefersReducedMotion ? { duration: 0 } : { type: 'tween' as const, duration: 0.2 }
  const overlayTransition = prefersReducedMotion ? { duration: 0 } : undefined

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="presentation">
          <motion.button
            type="button"
            className={cn('absolute inset-0 bg-navy-plum/60', focusRing)}
            aria-label="Close dialog"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={overlayTransition}
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={description ? descriptionId : undefined}
            className="relative z-10 flex max-h-[min(90vh,48rem)] w-full max-w-lg flex-col overflow-hidden rounded-xl border border-deep-teal/10 bg-white shadow-xl"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.96, y: 8 }}
            transition={panelTransition}
          >
            <div className="flex items-start justify-between gap-4 border-b border-deep-teal/10 px-6 py-4">
              <div className="min-w-0">
                <h2 id={titleId} className="text-lg font-semibold text-deep-teal">
                  {title}
                </h2>
                {description ? (
                  <p id={descriptionId} className="mt-1 text-sm text-navy-plum/75">
                    {description}
                  </p>
                ) : null}
              </div>
              <button
                type="button"
                className={cn(
                  'shrink-0 rounded-lg p-2 text-navy-plum/70 hover:bg-deep-teal/5 hover:text-deep-teal',
                  focusRing,
                )}
                aria-label="Close"
                onClick={onClose}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="overflow-y-auto px-6 py-5">{children}</div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  )
}
