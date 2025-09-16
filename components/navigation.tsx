"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Download", href: "#download" },
  { name: "Discounts", href: "#discounts" },
  { name: "Explore", href: "#explore" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = navItems.map((item) => item.href.slice(1))
          const scrollPosition = window.scrollY + 100

          for (const section of sections) {
            const element = document.getElementById(section)
            if (element) {
              const { offsetTop, offsetHeight } = element
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(section)
                break
              }
            }
          }
          ticking = false
        })
        ticking = true
      }
    }

    // Use passive event listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const scrollToHome = () => {
    const element = document.getElementById("home")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-background/95 border-b border-white/20 shadow-2xl" style={{ willChange: 'transform' }}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-28 sm:h-30 md:h-32">
          <div className="flex items-center">
            <button onClick={scrollToHome} className="relative group transition-transform duration-300 hover:scale-105">
              <img src="/logo.png" alt="Bankeru Games Logo" className="h-16 sm:h-20 md:h-24 w-auto object-contain" />
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse group-hover:bg-primary/40 transition-colors duration-300"></div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-6 py-3 rounded-xl text-sm font-heading transition-all duration-300 group overflow-hidden backdrop-blur-xl ${
                    activeSection === item.href.slice(1)
                      ? "text-white bg-gradient-to-r from-primary to-secondary border border-primary/50 shadow-lg shadow-primary/25 pulse-glow"
                      : "text-muted-foreground hover:text-primary hover:bg-white/10 border border-white/10 hover:border-white/30 hover:shadow-lg hover:shadow-primary/20"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                  <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-300"></div>
                  <span className="relative z-10">{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors p-2 rounded-lg backdrop-blur-xl bg-white/10 border border-white/20 hover:border-white/40 hover:shadow-lg"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-2xl bg-background/90 border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block px-4 py-3 rounded-xl text-base font-heading w-full text-left transition-all duration-300 backdrop-blur-xl ${
                  activeSection === item.href.slice(1)
                    ? "text-white bg-gradient-to-r from-primary to-secondary border border-primary/30 pulse-glow"
                    : "text-muted-foreground hover:text-primary hover:bg-white/10 border border-transparent hover:border-white/20"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}