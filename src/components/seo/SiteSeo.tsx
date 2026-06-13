import { Helmet } from 'react-helmet-async'
import { siteConfig } from '../../content/site'
import { absoluteUrl, seoDefaults, type SeoMeta } from '../../lib/seo'

type SiteSeoProps = {
  meta: SeoMeta
  noIndex?: boolean
}

export function SiteSeo({ meta, noIndex = false }: SiteSeoProps) {
  const canonical = absoluteUrl(meta.path)
  const ogImage = absoluteUrl(meta.ogImage ?? seoDefaults.ogImage)

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="theme-color" content={seoDefaults.themeColor} />

      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content={seoDefaults.ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content={seoDefaults.locale} />

      <meta name="twitter:card" content={seoDefaults.twitterCard} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/images/logo.png" />
    </Helmet>
  )
}
