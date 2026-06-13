import { createBrowserRouter, Navigate } from 'react-router-dom'
import { PageLayout } from './components/layout/PageLayout'
import { ContactPage } from './pages/ContactPage'
import { DevComponentsPage } from './pages/DevComponentsPage'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'

const devRoutes = import.meta.env.DEV
  ? [
      {
        path: 'dev/components',
        element: <DevComponentsPage />,
        handle: {
          seo: {
            title: 'Component Preview | Advanced Instrument Technologies',
            description: 'Development-only design system preview.',
            path: '/dev/components',
            noIndex: true,
          },
        },
      },
    ]
  : []

export const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        handle: { seo: { key: 'home' as const } },
      },
      {
        path: 'services',
        element: <ServicesPage />,
        handle: { seo: { key: 'services' as const } },
      },
      {
        path: 'contact',
        element: <ContactPage />,
        handle: { seo: { key: 'contact' as const } },
      },
      ...devRoutes,
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
])
