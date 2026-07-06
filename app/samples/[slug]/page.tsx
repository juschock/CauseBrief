import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SampleKitPreview } from '@/components/sample-kit-preview';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getSampleKit, sampleKits, sampleKitTitle } from '@/lib/sample-kits';
import { PRODUCT_NAME } from '@/lib/site';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return sampleKits.map((kit) => ({
    slug: kit.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = sampleKitTitle(slug);

  return {
    title: `${title} sample`,
    description: `Preview a fictional ${PRODUCT_NAME} sample campaign package.`
  };
}

export default async function SampleKitPage({ params }: PageProps) {
  const { slug } = await params;
  const kit = getSampleKit(slug);

  if (!kit) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <SampleKitPreview kit={kit} />
      </main>
      <SiteFooter />
    </div>
  );
}
