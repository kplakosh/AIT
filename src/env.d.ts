/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_FORMSPREE_FORM_ID?: string
  readonly PUBLIC_FORMSPREE_CAREERS_FORM_ID?: string
  readonly PUBLIC_SITE_URL?: string
  readonly VITE_FORMSPREE_FORM_ID?: string
  readonly VITE_FORMSPREE_CAREERS_FORM_ID?: string
  readonly VITE_SITE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
