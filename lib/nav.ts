import { productPath } from '@/lib/site';

export function ckPath(path: string = '/') {
  return productPath(path);
}

export function ckAnchor(id: string) {
  return `${productPath('/')}#${id}`;
}
