"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { SnickerdoodleMark } from "@/components/snickerdoodle-mark"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { PRODUCT_NAME, SURVEY_CTA } from "@/lib/site"

const navLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "What You Get", href: "/#what-you-get" },
  { label: "Examples", href: "/#examples" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex size-8 items-center justify-center rounded-lg bg-secondary/80 ring-1 ring-border/60">
            <SnickerdoodleMark className="size-5" />
          </span>
          <span className="font-heading text-xl font-semibold leading-none text-foreground sm:text-2xl">
            {PRODUCT_NAME}
            <span className="ml-1.5 text-xs font-normal text-muted-foreground sm:text-sm">by Racoben</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            size="lg"
            nativeButton={false}
            render={<Link href="/brief">{SURVEY_CTA}</Link>}
          />
        </div>

        <button
          type="button"
          className="inline-flex size-9 items-center justify-center rounded-lg text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-border/70 bg-background md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
            >
              {link.label}
            </Link>
          ))}
          <Button
            size="lg"
            className="mt-2"
            nativeButton={false}
            render={<Link href="/brief" onClick={() => setOpen(false)}>{SURVEY_CTA}</Link>}
          />
        </nav>
      </div>
    </header>
  )
}
