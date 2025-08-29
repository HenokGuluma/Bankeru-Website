"use client"

import { Gamepad2, Star } from "lucide-react"

export function DownloadSection() {
  return (
    <section id="download" className="py-12 md:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Gamer Image */}
          <div className="relative order-2 lg:order-1 px-4 sm:px-0">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto glass-card rounded-full p-6 sm:p-8 glow-effect">
                <img
                  src="/winning-modified.png"
                  alt="Excited gamer celebrating win"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Floating Gaming Icons */}
              <div className="absolute top-6 sm:top-10 -right-2 sm:-right-5 floating glass-card p-2 sm:p-3 rounded-xl">
                <Gamepad2 className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div
                className="absolute bottom-6 sm:bottom-10 -left-2 sm:-left-5 floating glass-card p-2 sm:p-3 rounded-xl"
                style={{ animationDelay: "1s" }}
              >
                <Star className="h-4 w-4 sm:h-6 sm:w-6 text-secondary" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-balance">
                <span className="text-glow font-heading">Download the app</span>
                <br />
                <span className="text-glow font-heading">and kickstart your</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  winning streak
                </span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground text-pretty">
                Create your account in Bankeru Games. Then play the multiplayer games, invite your friends and host
                games to them in order to boost your Trending Score.
              </p>
            </div>

            <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 relative z-10 justify-center sm:justify-start px-2 sm:px-0">
              <a
                href="https://apps.apple.com/us/app/bankeru/id6462580299"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all duration-300 hover:scale-105 cursor-pointer block relative z-20 flex-shrink-0"
              >
                <img
                  src="/app-store.png"
                  alt="Download on App Store"
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain group-hover:drop-shadow-lg max-w-none"
                />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.bankeru.eth"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all duration-300 hover:scale-105 cursor-pointer block relative z-20 flex-shrink-0"
              >
                <img
                  src="/play-store.png"
                  alt="Get it on Google Play"
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain group-hover:drop-shadow-lg max-w-none"
                />
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 pt-6 md:pt-8">
              <div className="glass-card p-3 sm:p-4 rounded-xl hover:glow-effect transition-all duration-300">
                <div className="text-primary text-lg sm:text-2xl font-heading">Cross-Platform</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Play anywhere, anytime</div>
              </div>
              <div className="glass-card p-3 sm:p-4 rounded-xl hover:glow-effect transition-all duration-300">
                <div className="text-secondary text-lg sm:text-2xl font-heading">Real-Time</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Instant multiplayer action</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground italic">
              "The riskier you play, the higher your chances of winning." The Bankeru Challenge™
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
