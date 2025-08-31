"use client"

import { Facebook, Instagram, Send, Linkedin } from "lucide-react"
import { useState } from "react"

export function Footer() {
  const [showModal, setShowModal] = useState<string | null>(null)

  const scrollToHome = () => {
    const element = document.getElementById("home")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setShowModal(null)
  }

  const openModal = (type: string) => {
    setShowModal(type)
  }

  const closeModal = () => {
    setShowModal(null)
  }

  const modalContent = {
    privacy: {
      title: "Privacy Policy",
      content: `
        <div class="space-y-6">
          <p><strong>Last updated:</strong> March 19, 2023</p>
          
          <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
          
          <h3 class="text-xl font-semibold text-primary mt-6 mb-3">Definitions</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Account:</strong> A unique account created for You to access our Service</li>
            <li><strong>Application:</strong> Refers to Bankeru, the software program provided by the Company</li>
            <li><strong>Company:</strong> Refers to Bankeru (Ethiopia)</li>
            <li><strong>Personal Data:</strong> Any information that relates to an identified or identifiable individual</li>
          </ul>
          
          <h3 class="text-xl font-semibold text-primary mt-6 mb-3">Personal Data We Collect</h3>
          <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information including:</p>
          <ul class="list-disc pl-6 space-y-1">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Usage Data</li>
          </ul>
          
          <h3 class="text-xl font-semibold text-primary mt-6 mb-3">Third-Party Social Media Services</h3>
          <p>The Company allows You to create an account and log in through:</p>
          <ul class="list-disc pl-6 space-y-1">
            <li>Google</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
          
          <h3 class="text-xl font-semibold text-primary mt-6 mb-3">Use of Your Personal Data</h3>
          <p>The Company may use Personal Data for the following purposes:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>To provide and maintain our Service</li>
            <li>To manage Your Account</li>
            <li>For the performance of a contract</li>
            <li>To contact You with updates and communications</li>
            <li>To provide news, special offers and information about similar services</li>
          </ul>
          
          <h3 class="text-xl font-semibold text-primary mt-6 mb-3">Security of Your Personal Data</h3>
          <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
          
          <h3 class="text-xl font-semibold text-primary mt-6 mb-3">Children's Privacy</h3>
          <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13.</p>
          
          <h3 class="text-xl font-semibold text-primary mt-6 mb-3">Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, You can contact us by email: <strong>henimagne@gmail.com</strong></p>
        </div>
      `,
    },
    terms: {
      title: "Terms & Conditions",
      content: `
        <div class="space-y-6">
          <h3 class="text-xl font-semibold text-primary mt-6 mb-3">1. Introduction</h3>
          <p>The terms and conditions (the "Agreement") constitute a legally binding agreement between the user and Bankeru (the "Company"), with respect to the use of Bankeru (the "Application").</p>
          
          <h3 class="text-xl font-semibold text-primary mt-6 mb-3">2. Acceptance of Terms</h3>
          <p>By accessing or using the Application, you signify your acknowledgment and assent to the terms and conditions of this Agreement. If you do not agree to all of these terms and conditions, then you may not use the Application.</p>
          
          <h3 class="text-xl font-semibold text-primary mt-6 mb-3">3. Eligibility</h3>
          <p>Only individuals eighteen (18) years or older who are not otherwise prohibited by law may use the Application. By using or accessing the Application, you represent and warrant that you are eighteen (18) years of age or older.</p>
          
          <h3 class="text-xl font-semibold text-primary mt-6 mb-3">4. Prohibited Activities</h3>
          <p>You may not use the Application in any manner that:</p>
          <ul class="list-disc pl-6 space-y-1">
            <li>Violates any applicable law, regulation or guideline relating to online or offline gambling</li>
            <li>Disrupts, interferes with or otherwise harms the Services or any other users</li>
          </ul>
          
          <h3 class="text-xl font-semibold text-primary mt-6 mb-3">5. Age Limitation</h3>
          <p>No one under the age of eighteen (18) is allowed to access or use the Application. Parents and guardians are responsible for monitoring any minors who have access to the Application and their devices.</p>
          
          <h3 class="text-xl font-semibold text-primary mt-6 mb-3">6. Termination</h3>
          <p>Either you or us may terminate this Agreement at any time by providing written notice to the other via email or letter. We may suspend your access to the Application if we believe that you are in breach of this Agreement.</p>
          
          <h3 class="text-xl font-semibold text-primary mt-6 mb-3">7. Governing Law</h3>
          <p>This Agreement shall be governed by and construed in accordance with the laws of Ethiopia without regard to conflicts of law principles. The parties consent to exclusive jurisdiction in Ethiopia.</p>
          
          <h3 class="text-xl font-semibold text-primary mt-6 mb-3">10. No Refunds Policy</h3>
          <p>Our service does not offer refunds for any bets made within the app. All bets are final and non-refundable; users can only claim their current balance that is shown in their wallet.</p>
          
          <h3 class="text-xl font-semibold text-primary mt-6 mb-3">11. Service Charge</h3>
          <p>We charge a 12 percent service fee on all withdrawals, regardless of whether or not the user has played any games.</p>
          
          <h3 class="text-xl font-semibold text-primary mt-6 mb-3">14. Contact Information</h3>
          <p>If you have any questions about these Terms and Conditions please contact us at <strong>henimagne@gmail.com</strong></p>
        </div>
      `,
    },
    cookies: {
      title: "Cookie Policy",
      content: `
        <h3>What Are Cookies</h3>
        <p>Cookies are small text files that are stored on your device when you visit our website or use our games.</p>
        
        <h3>How We Use Cookies</h3>
        <p>We use cookies to enhance your gaming experience, remember your preferences, and analyze how our services are used.</p>
        
        <h3>Types of Cookies We Use</h3>
        <p>Essential cookies for basic functionality, performance cookies to improve our services, and functional cookies to remember your preferences.</p>
        
        <h3>Managing Cookies</h3>
        <p>You can control and manage cookies through your browser settings. However, disabling cookies may affect the functionality of our games.</p>
        
        <h3>Third-Party Cookies</h3>
        <p>We may use third-party services that place cookies on your device to help us analyze usage and improve our services.</p>
      `,
    },
    gdpr: {
      title: "GDPR Compliance",
      content: `
        <h3>Your Rights Under GDPR</h3>
        <p>If you are a resident of the European Union, you have certain rights regarding your personal data under the General Data Protection Regulation.</p>
        
        <h3>Right to Access</h3>
        <p>You have the right to request access to the personal data we hold about you.</p>
        
        <h3>Right to Rectification</h3>
        <p>You have the right to request correction of inaccurate or incomplete personal data.</p>
        
        <h3>Right to Erasure</h3>
        <p>You have the right to request deletion of your personal data under certain circumstances.</p>
        
        <h3>Data Protection Officer</h3>
        <p>For GDPR-related inquiries, please contact our Data Protection Officer at dpo@bankerugames.com</p>
        
        <h3>Legal Basis for Processing</h3>
        <p>We process your data based on consent, contract performance, legal obligations, and legitimate interests.</p>
      `,
    },
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
      <footer className="relative py-16 glass-card border-t bg-gradient-to-b from-black via-black/30 to-pink-500/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="relative">
                  <img src="/bankeru-text.png" alt="Bankeru Games Logo" className="h-12 w-auto object-contain" />
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Ethiopia's premier multiplayer gaming platform. Join the challenge and unlock amazing discounts.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100094014886854"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass-card rounded-lg hover:glow-effect transition-all cursor-pointer"
                >
                  <Facebook className="h-5 w-5 text-primary" />
                </a>
                <a
                  href="https://www.linkedin.com/company/bankeru-games"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass-card rounded-lg hover:glow-effect transition-all cursor-pointer"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                </a>
                <a
                  href="https://www.instagram.com/bankeru_games/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass-card rounded-lg hover:glow-effect transition-all cursor-pointer"
                >
                  <Instagram className="h-5 w-5 text-secondary" />
                </a>
                <a
                  href="https://web.telegram.org/k/#-2188290329"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass-card rounded-lg hover:glow-effect transition-all cursor-pointer"
                >
                  <Send className="h-5 w-5 text-secondary" />
                </a>
              </div>
            </div>

            {/* Games */}
            <div className="space-y-4">
              <h3 className="text-lg font-heading text-foreground">Games</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li
                  className="hover:text-primary transition-colors cursor-pointer"
                  onClick={() => openModal("rapidball")}
                >
                  Rapidball
                </li>
                <li
                  className="hover:text-primary transition-colors cursor-pointer"
                  onClick={() => openModal("bankeru")}
                >
                  Bankeru
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer" onClick={() => openModal("hacker")}>
                  Hacker
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer" onClick={() => openModal("maze")}>
                  Maze
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="text-lg font-heading text-foreground">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li
                  className="hover:text-primary transition-colors cursor-pointer"
                  onClick={() => openModal("privacy")}
                >
                  Privacy Policy
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer" onClick={() => openModal("terms")}>
                  Terms & Conditions
                </li>
                <li
                  className="hover:text-primary transition-colors cursor-pointer"
                  onClick={() => openModal("cookies")}
                >
                  Cookie Policy
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer" onClick={() => openModal("gdpr")}>
                  GDPR
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Bankeru Games. All rights reserved. Made with ❤️ in Ethiopia.
            </p>
          </div>
        </div>
      </footer>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="max-w-4xl w-full max-h-[80vh] overflow-y-auto glass-card rounded-2xl p-8 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors text-2xl"
            >
              ×
            </button>

            <h2 className="text-3xl font-bold text-foreground mb-6 text-glow">
              {
                (
                  modalContent[showModal as keyof typeof modalContent] ||
                  gameDetails[showModal as keyof typeof gameDetails]
                )?.title
              }
            </h2>

            <div
              className="prose prose-invert max-w-none text-muted-foreground space-y-4"
              dangerouslySetInnerHTML={{
                __html: (
                  modalContent[showModal as keyof typeof modalContent] ||
                  gameDetails[showModal as keyof typeof gameDetails]
                )?.content,
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
