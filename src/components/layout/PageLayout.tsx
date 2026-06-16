import { Outlet } from 'react-router-dom'
import { SiteSeo } from '../seo/SiteSeo'
import { useRouteSeo } from '../../hooks/useRouteSeo'
import { focusRing } from '../../lib/a11y'
import { cn } from '../../lib/cn'
import { Footer } from './Footer'
import { Header } from './Header'
import { ScrollToTop } from './ScrollToTop'

export function PageLayout() {
  const { meta, noIndex } = useRouteSeo()

  return (
    <div className="flex min-h-svh flex-col">
      <ScrollToTop />
      <SiteSeo meta={meta} noIndex={noIndex} />
      <a
        href="#main-content"
        className={cn(
          'sr-only focus:not-sr-only focus:fixed focus:left-4 focus:z-50 focus:rounded-lg focus:bg-teal focus:px-4 focus:py-2 focus:text-white',
          'focus:top-[calc(var(--spacing-site-header)+0.5rem)]',
          focusRing,
        )}
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="main-offset-header flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
