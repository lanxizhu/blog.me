/**
 * re-export the default import
 *
 * An error occurred when you try to import the following components using an alias or index.ts in another component in the same folder.
 * ` Cannot read properties of null (reading 'xxx')`
 * But it will work when you change anything in the component and save it.
 *
 * And it works when you import the component directly from file.
 *
 * The error not be occurred when you import the component from another folder or built. Feel free to use it.
 */

export { default as BaseHead } from './BaseHead.astro'
export { default as Footer } from './Footer.astro'
export { default as FormattedDate } from './FormattedDate.astro'
export { default as Gravatar } from './Gravatar.astro'
export { default as Header } from './Header.astro'
export { default as HeaderLink } from './HeaderLink.astro'
export { default as Icon } from './Icon.astro'
export { default as IconAnimated } from './IconAnimated.astro'
export { default as Signature } from './Signature.astro'
export { default as ThemeToggle } from './ThemeToggle.astro'
export { default as ToTop } from './ToTop.astro'
