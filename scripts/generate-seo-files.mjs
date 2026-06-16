import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { loadEnv } from 'vite'

const env = loadEnv('production', process.cwd(), '')
const siteUrl = (
  env.PUBLIC_SITE_URL ||
  env.VITE_SITE_URL ||
  'https://www.aitechinc.com'
).replace(/\/$/, '')
const paths = ['/', '/about', '/people', '/services', '/careers', '/sustainability', '/contact']

const urlEntries = paths
  .map((path) => {
    const loc = path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`
    return `  <url>\n    <loc>${loc}</loc>\n  </url>`
  })
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`

const distDir = resolve(process.cwd(), 'dist')

writeFileSync(resolve(distDir, 'sitemap.xml'), sitemap)
writeFileSync(resolve(distDir, 'robots.txt'), robots)

console.log(`Generated SEO files for ${siteUrl}`)
