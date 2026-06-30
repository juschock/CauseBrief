export const PARENT_BRAND = 'Racoben Engineering';
export const PRODUCT_NAME = 'CampaignKit';
export const TAGLINE = 'One short brief. A complete, ready-to-use marketing kit.';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN ?? 'https://racoben.com';
export const PUBLIC_PREFIX = '/campaignkit';
export const KIT_PRICE = '$99';
export const INTAKE_EMAIL = process.env.NEXT_PUBLIC_CAMPAIGNKIT_EMAIL ?? 'campaignkit@racoben.com';

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
