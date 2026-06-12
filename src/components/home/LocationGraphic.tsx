import { MapPin } from 'lucide-react'

export function LocationGraphic() {
  return (
    <div
      className="relative mx-auto flex h-48 w-48 items-center justify-center md:h-56 md:w-56"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full bg-teal/10" />
      <div className="absolute inset-4 rounded-full border border-teal/20" />
      <div className="absolute inset-8 rounded-full border border-dashed border-warm-gold/40" />
      <div className="relative flex flex-col items-center gap-2 text-teal">
        <MapPin className="h-10 w-10" strokeWidth={1.5} />
        <span className="text-xs font-semibold uppercase tracking-widest text-deep-teal">
          Cumming, GA
        </span>
      </div>
    </div>
  )
}
