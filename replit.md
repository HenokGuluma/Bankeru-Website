# Bankeru Games - Gaming Platform

## Overview
Bankeru Games is Ethiopia's premier gaming platform featuring a modern, futuristic website built with Next.js 15, React 19, and Tailwind CSS 4. The site showcases multiplayer games including Rapidball, Bankeru, Hacker, and Maze with amazing discounts and rewards.

## Recent Changes
- **September 8, 2025**: Initial project import and setup for Replit environment
  - Installed dependencies with legacy peer deps to resolve React 19 compatibility
  - Configured Next.js for Replit proxy environment with allowedDevOrigins
  - Set up development workflow on port 5000 with proper host configuration
  - Configured autoscale deployment for production

## Project Architecture
- **Frontend**: Next.js 15 with React 19, TypeScript
- **Styling**: Tailwind CSS 4 (CSS-first approach) with custom futuristic gaming theme
- **UI Components**: shadcn/ui with Radix UI primitives
- **Fonts**: Orbitron for headings/gaming text, Inter for body text
- **Animations**: Custom CSS animations with glass morphism effects

## Development Setup
- **Port**: 5000 (frontend)
- **Host**: 0.0.0.0 for Replit compatibility
- **Dev Command**: `npm run dev`
- **Build Command**: `npm run build`

## Key Features
- Futuristic gaming theme with blue-green and pink accents
- Glass morphism UI effects
- Responsive design
- Custom animations (floating, pulse-glow)
- Game showcase sections
- Download links for mobile apps

## Dependencies
- Next.js 15.2.4
- React 19
- Tailwind CSS 4
- TypeScript 5
- Various Radix UI components
- Lucide React icons
- Custom animation libraries

## Deployment
- **Target**: Autoscale deployment
- **Build**: `npm run build`
- **Start**: `npm run start`
- Static export capability (currently disabled for development)