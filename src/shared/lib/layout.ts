/** Shared horizontal layout — keeps header, content, and footer aligned and centered. */
export const pageGutter =
  'mx-auto w-full max-w-content px-6 sm:px-10 lg:px-14 xl:px-20'

/**
 * Standard body paragraph — spans full container width.
 * Defined in global.css (.body-text). Use Prose.astro or this class on <p> elements.
 * Do not add max-w-* on section body copy; Container controls page width.
 */
export const bodyText = 'body-text'

/** Body copy on dark / gradient backgrounds */
export const bodyTextInverse = 'body-text-inverse'

/** @deprecated Use bodyText — kept for gradual migration */
export const proseBody = bodyText

/** @deprecated Use bodyText */
export const proseLead = bodyText

/** Text on the left, graphic/logo on the right */
export const contentPairGrid =
  'grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-x-12 lg:gap-x-16 xl:gap-x-24'

/** Graphic/logo on the left, text on the right */
export const contentPairGridMediaFirst =
  'grid items-center gap-10 md:grid-cols-[auto_minmax(0,1fr)] md:gap-x-12 lg:gap-x-16 xl:gap-x-24'
