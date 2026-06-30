import type { MetadataRoute } from 'next';
import { publicUrl } from '@/lib/site';

const routes = ['/', '/brief', '/faq', '/privacy', '/terms'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: publicUrl(route),
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '/' ? 0.9 : 0.7
  }));
}
