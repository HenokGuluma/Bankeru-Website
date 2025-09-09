"use client"

import { Button } from "@/components/ui/button"
import { Percent, Gift, Zap, Crown, Star } from "lucide-react"

export function DiscountsSection() {
  const scrollToDownload = () => {
    const element = document.getElementById("download")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="discounts" className="py-12 md:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-l from-secondary/5 to-primary/5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading text-balance leading-tight">
                <span className="text-glow font-orbitron drop-shadow-sm">Ready to get</span>
                <br />
                <span className="text-primary font-orbitron drop-shadow-sm">Discounts</span>
                <span className="text-glow font-orbitron drop-shadow-sm"> by</span>
                <br />
                <span className="text-glow font-orbitron drop-shadow-sm">gaming?</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground text-pretty leading-relaxed">
                Win Games continuously to unlock Major Discounts. Check out the discounts you have unlocked and how long
                you have to reach major discounts in our platform. Then live a Discounted Life.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Crown className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground">Unlock exclusive rewards through gameplay</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-secondary/20 rounded-lg">
                  <Gift className="h-5 w-5 text-secondary" />
                </div>
                <span className="text-foreground">Major discounts on popular brands</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground">Real-time discount tracking</span>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={scrollToDownload}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 pulse-glow text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 h-12 sm:h-14 md:h-16 font-heading relative z-50 pointer-events-auto"
              >
                <Star className="mr-2 h-5 w-5" />
                Start Earning Discounts
              </Button>
            </div>

            <p className="text-sm text-muted-foreground italic">It's never too late to start unlocking deals.</p>
          </div>

          {/* 3D Discount Visualization */}
          <div className="relative px-4 sm:px-8 md:px-4 lg:px-0 mt-8 lg:mt-0">
            <div className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96">
              {/* Main Sphere */}
              <div className="absolute inset-0 glass-card rounded-full glow-effect flex items-center justify-center">
                <img
                  src="/futuristic-holographic-discount-sphere-with-phone-.png"
                  alt="Discount sphere with phone"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating Discount Badges */}
              <div className="absolute top-0 sm:-top-2 md:-top-4 lg:-top-8 left-4 sm:left-2 md:left-4 lg:left-8 floating glass-card p-1.5 sm:p-2 md:p-3 rounded-xl pulse-glow">
                <div className="text-primary font-bold text-xs sm:text-sm md:text-lg">25% OFF</div>
              </div>
              <div
                className="absolute top-8 sm:top-4 md:top-8 lg:top-16 right-0 sm:-right-2 md:-right-4 lg:-right-8 floating glass-card p-1.5 sm:p-2 md:p-3 rounded-xl pulse-glow"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-secondary font-bold text-xs sm:text-sm md:text-lg">50% OFF</div>
              </div>
              <div
                className="absolute bottom-0 sm:-bottom-2 md:-bottom-4 lg:-bottom-8 right-8 sm:right-4 md:right-8 lg:right-16 floating glass-card p-1.5 sm:p-2 md:p-3 rounded-xl pulse-glow"
                style={{ animationDelay: "2s" }}
              >
                <div className="text-primary font-bold text-xs sm:text-sm md:text-lg">95% OFF</div>
              </div>
              <div
                className="absolute bottom-8 sm:bottom-4 md:bottom-8 lg:bottom-16 left-0 sm:-left-2 md:-left-4 lg:-left-8 floating glass-card p-1.5 sm:p-2 md:p-3 rounded-xl pulse-glow"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="text-secondary font-bold text-xs sm:text-sm md:text-lg">FREE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}