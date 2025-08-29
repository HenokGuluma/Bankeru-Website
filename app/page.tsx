import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { DownloadSection } from "@/components/download-section"
import { DiscountsSection } from "@/components/discounts-section"
import { ExploreSection } from "@/components/explore-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <DownloadSection />
        <DiscountsSection />
        <ExploreSection />
      </main>
      <div className="border-t-2 border-white/20"></div>
      <Footer />
    </div>
  )
}
