type ServiceBulletListProps = {
  items: readonly string[]
}

export function ServiceBulletList({ items }: ServiceBulletListProps) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-navy-plum/85">
          <span
            className="mt-2 h-2 w-2 shrink-0 rounded-full bg-warm-gold"
            aria-hidden="true"
          />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}
