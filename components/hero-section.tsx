"use client"

import { Button } from "@/components/ui/button"
import { Play, Users, Trophy, Zap, Gamepad2 } from "lucide-react"

export function HeroSection() {
  const scrollToDownload = () => {
    const element = document.getElementById("download")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 sm:pt-40 md:pt-44 px-4 sm:px-6"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-pink-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,188,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,64,129,0.15),transparent_50%)]"></div>
      </div>

      {/* Floating Elements - Optimized for mobile */}
      <div className="hidden sm:block absolute top-32 left-10 floating" style={{ willChange: 'transform' }}>
        <div className="w-4 h-4 bg-primary rounded-full glow-effect"></div>
      </div>
      <div className="hidden sm:block absolute top-52 right-20 floating" style={{ animationDelay: "1s", willChange: 'transform' }}>
        <div className="w-6 h-6 bg-secondary rounded-full glow-effect"></div>
      </div>
      <div className="hidden sm:block absolute bottom-40 left-20 floating" style={{ animationDelay: "2s", willChange: 'transform' }}>
        <div className="w-3 h-3 bg-primary rounded-full glow-effect"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 relative z-20">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl xl:text-7xl font-heading text-balance leading-tight">
                <span className="text-foreground drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]">Ethiopia's Best</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Multiplayer
                </span>
                <br />
                <span className="text-foreground drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]">Gaming Platform</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-pretty drop-shadow-[0_1px_2px_rgba(255,255,255,0.2)] px-2 sm:px-0">
                Join the Bankeru Challenge and start unlocking Major Discounts like never before.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-2 sm:px-0">
              <Button
                size="lg"
                onClick={scrollToDownload}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 pulse-glow text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 h-12 sm:h-14 md:h-16 font-heading w-full sm:w-auto relative z-30 pointer-events-auto"
              >
                <Play className="mr-2 h-5 w-5" />
                Download Now
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 pt-4 sm:pt-6 md:pt-8 px-2 sm:px-0">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-4 w-4 sm:h-6 sm:w-6 text-primary mr-1 sm:mr-2" />
                  <span className="text-lg sm:text-2xl font-gaming text-primary">50K+</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground drop-shadow-[0_1px_2px_rgba(255,255,255,0.2)]">
                  Active Players
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Trophy className="h-4 w-4 sm:h-6 sm:w-6 text-secondary mr-1 sm:mr-2" />
                  <span className="text-lg sm:text-2xl font-gaming text-secondary">100+</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground drop-shadow-[0_1px_2px_rgba(255,255,255,0.2)]">
                  Tournaments
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Zap className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary mr-1 sm:mr-2" />
                  <span className="text-lg sm:text-2xl font-gaming text-primary">24/7</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground drop-shadow-[0_1px_2px_rgba(255,255,255,0.2)]">
                  Online
                </p>
              </div>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative px-2 sm:px-4 lg:px-0 mt-8 lg:mt-0">
            <div className="relative p-2 sm:p-4 md:p-8 rounded-3xl">
              <img
                src="/home-image.png"
                alt="Happy gamers playing Bankeru Games"
                className="w-full h-auto max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto rounded-2xl relative z-10 -mt-8 sm:-mt-16 md:-mt-32 lg:-mt-48 transform scale-110 sm:scale-125 md:scale-150"
                style={{
                  maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
                  willChange: "auto", // Remove will-change for static images
                }}
                loading="eager"
                decoding="async"
              />
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 glass-card p-2 sm:p-4 rounded-2xl pulse-glow">
                <Gamepad2 className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
