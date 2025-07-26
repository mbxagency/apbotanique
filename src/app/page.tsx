'use client'

import Hero from '@/components/sections/Hero'
import QuickInfo from '@/components/sections/QuickInfo'
import PriceHighlight from '@/components/sections/PriceHighlight'
import About from '@/components/sections/About'
import Gallery from '@/components/sections/Gallery'
import Location from '@/components/sections/Location'
import Region from '@/components/sections/Region'
import OptionalItems from '@/components/sections/OptionalItems'
import FloorPlan from '@/components/sections/FloorPlan'
import Video from '@/components/sections/Video'
import RegionDevelopment from '@/components/sections/RegionDevelopment'
import PropertyHighlights from '@/components/sections/PropertyHighlights'
import Contact from '@/components/sections/Contact'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import { useScrollTracking } from '@/hooks/useScrollTracking'

export default function Home() {
  useScrollTracking()
  return (
    <main className="min-h-screen">
      <Hero />
      <Video />
      <QuickInfo />
      <PriceHighlight />
      <About />
      <Gallery />
      <FloorPlan />
      <PropertyHighlights />
      <Location />
      <Region />
      <RegionDevelopment />
      <OptionalItems />
      <Contact />
      <FloatingWhatsApp />
    </main>
  )
}
