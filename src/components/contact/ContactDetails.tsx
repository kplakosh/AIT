import { Building2, Mail, MapPin, Phone } from 'lucide-react'
import { contactContent } from '../../content/site'

const detailItems = [
  {
    icon: Building2,
    label: 'Company',
    content: contactContent.company,
  },
  {
    icon: MapPin,
    label: 'Address',
    content: (
      <>
        {contactContent.address.street}
        <br />
        {contactContent.address.suite}
        <br />
        {contactContent.address.city}
      </>
    ),
  },
  {
    icon: Phone,
    label: 'Phone',
    content: (
      <a
        href={`tel:${contactContent.phone}`}
        className="text-teal underline-offset-4 hover:underline"
      >
        {contactContent.phone}
      </a>
    ),
  },
  {
    icon: Mail,
    label: 'Email',
    content: (
      <a
        href={`mailto:${contactContent.email}`}
        className="text-teal underline-offset-4 hover:underline"
      >
        {contactContent.email}
      </a>
    ),
  },
] as const

export function ContactDetails() {
  return (
    <address className="not-italic">
      <ul className="space-y-6">
        {detailItems.map(({ icon: Icon, label, content }) => (
          <li key={label} className="flex gap-4">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-teal/10 text-teal"
              aria-hidden="true"
            >
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-deep-teal">{label}</p>
              <p className="mt-1 leading-relaxed text-navy-plum/85">{content}</p>
            </div>
          </li>
        ))}
      </ul>
    </address>
  )
}
