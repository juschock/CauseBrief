import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/sections/hero"
import { Problem } from "@/components/sections/problem"
import { WhoItsFor } from "@/components/sections/who-its-for"
import { CampaignTypes } from "@/components/sections/campaign-types"
import { WhatYouGet } from "@/components/sections/what-you-get"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Examples } from "@/components/sections/examples"
import { UseAnywhere } from "@/components/sections/use-anywhere"
import { WhyDifferent } from "@/components/sections/why-different"
import { TrustLimitations } from "@/components/sections/trust-limitations"
import { Pricing } from "@/components/sections/pricing"
import { Faq } from "@/components/sections/faq"
import { FinalCta } from "@/components/sections/final-cta"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Problem />
        <WhoItsFor />
        <CampaignTypes />
        <WhatYouGet />
        <HowItWorks />
        <Examples />
        <UseAnywhere />
        <WhyDifferent />
        <TrustLimitations />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}
