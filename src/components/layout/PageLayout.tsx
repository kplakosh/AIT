import { Outlet } from 'react-router-dom'
import { SiteSeo } from '../seo/SiteSeo'
import { useRouteSeo } from '../../hooks/useRouteSeo'
import { focusRing } from '../../lib/a11y'
import { cn } from '../../lib/cn'
import { Footer } from './Footer'
import { Header } from './Header'

export function PageLayout() {
  const { meta, noIndex } = useRouteSeo()

  return (
    <>
      <SiteSeo meta={meta} noIndex={noIndex} />
      <a
        href="#main-content"
        className={cn(
          'sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-teal focus:px-4 focus:py-2 focus:text-white',
          focusRing,
        )}
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
