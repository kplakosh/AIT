import { useMatches } from 'react-router-dom'
import {
  getDefaultSeo,
  resolveRouteSeoHandle,
  type RouteSeoHandle,
  type SeoMeta,
} from '../lib/seo'

type AppRouteHandle = {
  seo?: RouteSeoHandle
}

export function useRouteSeo(): { meta: SeoMeta; noIndex: boolean } {
  const matches = useMatches()

  for (let index = matches.length - 1; index >= 0; index -= 1) {
    const handle = matches[index]?.handle as AppRouteHandle | undefined
    const resolved = resolveRouteSeoHandle(handle?.seo)
    if (resolved) {
      return resolved
    }
  }

  return getDefaultSeo()
}
