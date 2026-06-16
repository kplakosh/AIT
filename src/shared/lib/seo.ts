import { pageMeta, siteConfig } from '../content/site'

export type PageSeoKey = keyof typeof pageMeta

export type SeoMeta = {
  title: string
  description: string
  path: string
  ogImage?: string
}

export type RouteSeoHandle =
  | { key: PageSeoKey; noIndex?: boolean }
  | ({ noIndex?: boolean } & SeoMeta)

export const seoDefaults = {
  ogImage: '/images/logo.png',
  ogType: 'website',
  locale: 'en_US',
  twitterCard: 'summary_large_image',
  themeColor: '#234958',
} as const

export function getSiteUrl(): string {
  const envUrl =
    import.meta.env.PUBLIC_SITE_URL ||
    import.meta.env.VITE_SITE_URL
  const base = (envUrl || siteConfig.url).replace(/\/$/, '')
  return base
}

export function absoluteUrl(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${getSiteUrl()}${normalizedPath}`
}

export function resolveSeoMeta(handle: RouteSeoHandle): SeoMeta {
  if ('key' in handle) {
    const meta = pageMeta[handle.key]
    return {
      title: meta.title,
      description: meta.description,
      path: meta.path,
      ogImage: meta.ogImage,
    }
  }

  return {
    title: handle.title,
    description: handle.description,
    path: handle.path,
    ogImage: handle.ogImage,
  }
}

export function resolveRouteSeoHandle(handle: RouteSeoHandle | undefined): {
  meta: SeoMeta
  noIndex: boolean
} | null {
  if (!handle) {
    return null
  }

  return {
    meta: resolveSeoMeta(handle),
    noIndex: handle.noIndex ?? false,
  }
}

/** Default SEO when a route does not declare its own handle. */
export function getDefaultSeo(): { meta: SeoMeta; noIndex: boolean } {
  return {
    meta: resolveSeoMeta({ key: 'home' }),
    noIndex: false,
  }
}

export const publicPagePaths = Object.values(pageMeta).map((page) => page.path)
