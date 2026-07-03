export const PARENT_BRAND = 'Racoben Engineering';

/** Customer-facing product name — update here when rebranding. */
export const PRODUCT_NAME = 'CauseBrief';

/** Internal folder/order prefix (no spaces). Derived from PRODUCT_NAME. */
export const INTERNAL_ORDER_PREFIX = PRODUCT_NAME.replace(/\s+/g, '');

export const TAGLINE = 'One survey. A complete campaign package.';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN ?? 'https://racoben.com';

/** URL path under racoben.com — update alongside PRODUCT_NAME when rebranding. */
export const PUBLIC_PREFIX = '/causebrief';

export const KIT_PRICE = '$99';
export const INTAKE_EMAIL = process.env.NEXT_PUBLIC_CAUSEBRIEF_EMAIL ?? 'causebrief@racoben.com';

export const PRODUCT_SCOPE_INTRO = `${PRODUCT_NAME} helps you prepare campaign copy and planning materials.`;

export const PRODUCT_LEGAL_DISCLAIMER = `${PRODUCT_NAME} provides campaign copy and planning materials. It is not legal, fundraising compliance, tax, or advertising advice.`;

export const PRODUCT_EXCLUSIONS_DISCLAIMER = `${PRODUCT_NAME} provides campaign copy and planning materials. It does not include custom graphic design, ad buying, email sending, social media posting, list management, or guaranteed campaign results.`;

export const PRODUCT_META_DESCRIPTION = `${PRODUCT_NAME} prepares a polished campaign package from one structured brief — emails, social posts, landing page copy, flyer copy, press release, subject lines, CTAs, and a posting schedule. Prepared and human-reviewed by Racoben, delivered within 48 hours.`;

export function productPath(path: string = '/') {
  if (path === '/') return '/';
  return path.startsWith('/') ? path : `/${path}`;
}

export function publicUrl(path: string = '/') {
  if (path === '/') return `${SITE_ORIGIN}${PUBLIC_PREFIX}`;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_ORIGIN}${PUBLIC_PREFIX}${normalized}`;
}

/** Public folder assets — Next Image does not always honor basePath in dev. */
export function publicAsset(path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${PUBLIC_PREFIX}${normalized}`;
}
