"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Gamepad2, Users, Trophy, Target, Zap, Star, Play } from "lucide-react"
import { useState } from "react"

const games = [
  {
    title: "Rapidball",
    description: "Test your football knowledge in intense multiplayer matches",
    icon: Trophy,
    color: "primary",
    players: "15K+",
    key: "rapidball",
  },
  {
    title: "Bankeru",
    description: "Master the art of strategic card games and dominate",
    icon: Target,
    color: "secondary",
    players: "8K+",
    key: "bankeru",
  },
  {
    title: "Hacker",
    description: "Fast-paced action games for instant entertainment",
    icon: Zap,
    color: "primary",
    players: "25K+",
    key: "hacker",
  },
]

export function ExploreSection() {
  const [showGameModal, setShowGameModal] = useState<string | null>(null)

  const scrollToDownload = () => {
    const element = document.getElementById("download")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openGameModal = (gameKey: string) => {
    setShowGameModal(gameKey)
  }

  const closeGameModal = () => {
    setShowGameModal(null)
  }

  const scrollToHome = () => {
    const element = document.getElementById("home")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setShowGameModal(null)
  }

    const gameDetails = {
    rapidball: {
      title: "RapidBall",
      description: "Test your football knowledge in lightning-fast multiplayer matches",
      content: `
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-primary/20 to-secondary/20 p-6 rounded-xl">
            <h3 class="text-2xl font-heading text-primary mb-4">⚽ How to Play</h3>
            <p class="text-lg">Rapid-Ball is a game where you choose the right choice between two footballers as quickly as possible. The correct choice is determined by the category of Rapid-Ball chosen (Jersey, Goals, Age, or Height).</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="glass-card p-6 rounded-xl">
              <h4 class="text-xl font-heading text-secondary mb-3">🎯 Objective</h4>
              <p>Aim to select the correct option accurately and swiftly, as the time allotted for each choice decreases gradually. If the timer runs out, the game will be over, and your final score will be displayed.</p>
            </div>
            
            <div class="glass-card p-6 rounded-xl">
              <h4 class="text-xl font-heading text-secondary mb-3">🏆 Token Play Mode</h4>
              <p>Use tokens to earn "Trending Points". Each game round costs 1 token but rewards you with 5 Trending Points. Stay online while playing to ensure you receive your points.</p>
            </div>
          </div>
          
          <div class="bg-gradient-to-r from-secondary/10 to-primary/10 p-6 rounded-xl">
            <h4 class="text-xl font-heading text-primary mb-3">🌟 Pro Tips</h4>
            <ul class="list-disc pl-6 space-y-2">
              <li>Study player statistics to improve your accuracy</li>
              <li>Practice with different categories to become well-rounded</li>
              <li>Stay focused as the timer speeds up in later rounds</li>
              <li>Keep track of current season stats for better predictions</li>
            </ul>
          </div>
        </div>
      `,
    },
    bankeru: {
      title: "Bankeru",
      description: "Master the art of strategic card prediction in this thrilling group game",
      content: `
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-primary/20 to-secondary/20 p-6 rounded-xl">
            <h3 class="text-2xl font-heading text-primary mb-4">🃏 How to Play</h3>
            <p class="text-lg">Bankeru is an interesting card game often played in groups. It is a game of guessing whether a final drawn card will lie between two initially drawn cards.</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="glass-card p-6 rounded-xl">
              <h4 class="text-xl font-heading text-secondary mb-3">🎮 Game Flow</h4>
              <p>When the game starts, two initial cards are drawn. The player with the turn chooses to either draw a final card or skip that round. If they think the final card will lie between the two initial cards, they draw. Otherwise, they skip.</p>
            </div>
            
            <div class="glass-card p-6 rounded-xl">
              <h4 class="text-xl font-heading text-secondary mb-3">💡 Example</h4>
              <p>If initial cards are '2' and 'J', there's a good chance the final card will be between these values. If you draw '6', you win as '6' lies between '2' and 'J'. If you draw 'Q', you lose as 'Q' is not between '2' and 'J'.</p>
            </div>
          </div>
          
          <div class="glass-card p-6 rounded-xl">
            <h4 class="text-xl font-heading text-secondary mb-3">🏆 Token Play Mode</h4>
            <p>Use tokens to earn "Trending Points". Each game round costs 1 token but rewards you with 5 Trending Points. Stay online while playing to ensure you receive your points.</p>
          </div>
          
          <div class="bg-gradient-to-r from-secondary/10 to-primary/10 p-6 rounded-xl">
            <h4 class="text-xl font-heading text-primary mb-3">🌟 Strategy Tips</h4>
            <ul class="list-disc pl-6 space-y-2">
              <li>Calculate probability based on card values and suits</li>
              <li>Consider the gap between initial cards - larger gaps have better odds</li>
              <li>Know when to skip - sometimes the safe play is the smart play</li>
              <li>Watch other players' patterns to improve your own strategy</li>
            </ul>
          </div>
        </div>
      `,
    },
    hacker: {
      title: "Hacker",
      description: "Lightning-fast tile tapping action that tests your reflexes and precision",
      content: `
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-primary/20 to-secondary/20 p-6 rounded-xl">
            <h3 class="text-2xl font-heading text-primary mb-4">⚡ How to Play</h3>
            <p class="text-lg">The main idea of the game is to press the tiles as quickly as possible as they proceed downward across the screen before they pass the bottom edge. You should always click only the tile located last at the bottom.</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="glass-card p-6 rounded-xl">
              <h4 class="text-xl font-heading text-secondary mb-3">🎯 Objective</h4>
              <p>Tap tiles in sequence as they fall down the screen. Miss a tile or tap the wrong one, and it's game over! The speed increases as you progress, testing your reflexes to the limit.</p>
            </div>
            
            <div class="glass-card p-6 rounded-xl">
              <h4 class="text-xl font-heading text-secondary mb-3">🏆 Token Play Mode</h4>
              <p>Use tokens to earn "Trending Points". Each game round costs 1 token but rewards you with 5 Trending Points. Stay online while playing to ensure you receive your points.</p>
            </div>
          </div>
          
          <div class="bg-gradient-to-r from-secondary/10 to-primary/10 p-6 rounded-xl">
            <h4 class="text-xl font-heading text-primary mb-3">🌟 Pro Tips</h4>
            <ul class="list-disc pl-6 space-y-2">
              <li>Focus on the bottom row - always tap the lowest tile first</li>
              <li>Use your peripheral vision to track multiple tiles</li>
              <li>Stay relaxed - tension slows down your reaction time</li>
              <li>Practice regularly to build muscle memory</li>
              <li>Find your optimal tapping rhythm and stick to it</li>
            </ul>
          </div>
          
          <div class="glass-card p-6 rounded-xl">
            <h4 class="text-xl font-heading text-secondary mb-3">🔥 Challenge Modes</h4>
            <p>Experience different difficulty levels with varying tile speeds, patterns, and special challenge tiles that require precise timing and strategy.</p>
          </div>
        </div>
      `,
    },
    maze: {
      title: "Maze",
      description: "Navigate through intricate mazes with speed and precision",
      content: `
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-primary/20 to-secondary/20 p-6 rounded-xl">
            <h3 class="text-2xl font-heading text-primary mb-4">🧩 How to Play</h3>
            <p class="text-lg">The main idea of the game is to drag the circle located at the top left corner through an open path and move it all the way into the bottom right corner. The faster you can achieve this, the better score you get.</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="glass-card p-6 rounded-xl">
              <h4 class="text-xl font-heading text-secondary mb-3">🎯 Objective</h4>
              <p>Navigate from start to finish through increasingly complex mazes. Time is your enemy - find the optimal path quickly while avoiding dead ends and obstacles.</p>
            </div>
            
            <div class="glass-card p-6 rounded-xl">
              <h4 class="text-xl font-heading text-secondary mb-3">🏆 Token Play Mode</h4>
              <p>Use tokens to earn "Trending Points". Each game round costs 1 token but rewards you with 5 Trending Points. Stay online while playing to ensure you receive your points.</p>
            </div>
          </div>
          
          <div class="bg-gradient-to-r from-secondary/10 to-primary/10 p-6 rounded-xl">
            <h4 class="text-xl font-heading text-primary mb-3">🌟 Strategy Tips</h4>
            <ul class="list-disc pl-6 space-y-2">
              <li>Scan the entire maze before starting to identify the best path</li>
              <li>Look for patterns and shortcuts that might not be immediately obvious</li>
              <li>Practice smooth dragging motions to maintain speed</li>
              <li>Don't panic if you hit a dead end - backtrack efficiently</li>
              <li>Study maze-solving algorithms to improve your approach</li>
            </ul>
          </div>
          
          <div class="glass-card p-6 rounded-xl">
            <h4 class="text-xl font-heading text-secondary mb-3">🏁 Scoring System</h4>
            <p>Your score is based on completion time and path efficiency. Bonus points are awarded for finding the shortest route and completing within time limits.</p>
          </div>
        </div>
      `,
    },
  }

  return (
    <>
      <section id="explore" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-secondary/5"></div>

        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            {/* Game Cards Image */}
            <div className="relative order-2 lg:order-1 px-2 sm:px-0">
              <div className="relative">
                <img
                  src="/games.png"
                  alt="Soccer players with playing cards"
                  className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md mx-auto rounded-3xl glass-card p-2 sm:p-4"
                />

                {/* Floating Game Icons */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 floating glass-card p-2 sm:p-4 rounded-2xl pulse-glow -z-10 pointer-events-none">
                  <Star className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 text-secondary" />
                </div>
                <div
                  className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-2 floating glass-card p-2 sm:p-4 rounded-2xl pulse-glow -z-10 pointer-events-none"
                  style={{ animationDelay: "1s" }}
                >
                  <Users className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2 px-2 sm:px-0">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading text-balance">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Explore
                  </span>
                  <span className="text-glow"> our Games</span>
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground text-pretty">
                  Our platform has the best games to play in multiplayer. Check out which ones you like the most and
                  start boosting your skill.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  We got it all from Rapidball to strategy card games. And a lot more.
                </p>
              </div>

              {/* Game Cards */}
              <div className="space-y-3 sm:space-y-4">
                {games.map((game, index) => (
                  <Card
                    key={game.title}
                    className="glass-card p-6 hover:glow-effect transition-all duration-300 group cursor-pointer relative z-10 pointer-events-auto"
                    onClick={() => openGameModal(game.key)}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-3 rounded-xl ${game.color === "primary" ? "bg-primary/20" : "bg-secondary/20"} group-hover:scale-110 transition-transform`}
                      >
                        <game.icon
                          className={`h-6 w-6 ${game.color === "primary" ? "text-primary" : "text-secondary"}`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading text-foreground">{game.title}</h3>
                        <p className="text-muted-foreground text-sm">{game.description}</p>
                      </div>
                      <div className="text-right">
                        <div
                          className={`text-lg font-gaming ${game.color === "primary" ? "text-primary" : "text-secondary"}`}
                        >
                          {game.players}
                        </div>
                        <div className="text-xs text-muted-foreground">players</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Button
                size="lg"
                onClick={scrollToDownload}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 pulse-glow text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-heading w-full sm:w-auto relative z-50 pointer-events-auto"
              >
                <Gamepad2 className="mr-2 h-5 w-5" />
                Start Playing Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {showGameModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="max-w-4xl w-full max-h-[80vh] overflow-y-auto glass-card rounded-2xl p-8 relative">
            <button
              onClick={closeGameModal}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors text-2xl"
            >
              ×
            </button>

            <h2 className="text-3xl font-bold text-foreground mb-6 text-glow">
              {gameDetails[showGameModal as keyof typeof gameDetails]?.title}
            </h2>

            <div
              className="prose prose-invert max-w-none text-muted-foreground space-y-4"
              dangerouslySetInnerHTML={{
                __html: gameDetails[showGameModal as keyof typeof gameDetails]?.content,
              }}
            />

            <div className="flex justify-center mt-8">
              <button
                onClick={scrollToHome}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 pulse-glow"
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}