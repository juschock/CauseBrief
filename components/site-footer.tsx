import Link from "next/link"
import { SnickerdoodleMark } from "@/components/snickerdoodle-mark"
import { PRODUCT_EXCLUSIONS_DISCLAIMER, PRODUCT_NAME } from "@/lib/site"

const footerLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "What You Get", href: "/#what-you-get" },
  { label: "Examples", href: "/#examples" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-lg bg-secondary/80 ring-1 ring-border/60">
                <SnickerdoodleMark className="size-5" />
              </span>
              <span className="font-heading text-lg font-semibold text-foreground">
                {PRODUCT_NAME}
                <span className="ml-1.5 text-xs font-normal text-muted-foreground">by Racoben</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              You have something to promote. We give you the words, structure, and campaign
              materials to promote it professionally.
            </p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Footer">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Explore
            </span>
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Get started
            </span>
            <Link
              href="/brief"
              className="text-sm text-foreground transition-colors hover:text-primary"
            >
              Start Your Campaign Survey
            </Link>
            <Link
              href="/#what-you-get"
              className="text-sm text-foreground transition-colors hover:text-primary"
            >
              See What&apos;s Included
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-xs leading-relaxed text-muted-foreground">
            {PRODUCT_EXCLUSIONS_DISCLAIMER}
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Racoben. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
