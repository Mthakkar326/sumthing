# Sumthing

## Overview
Sumthing is a math puzzle game built with React. Players are given a target number and a set of cards with numbers, and must create a mathematical expression using those numbers and operators (+, -, x, ÷) to reach the target.

## Tech Stack
- **Frontend**: React 19 with Vite
- **Styling**: Tailwind CSS v4 (via @tailwindcss/vite plugin)
- **State Management**: Zustand
- **Math Evaluation**: mathjs
- **Icons**: lucide-react

## Project Structure
- `src/` - Source code
  - `components/` - React components (Card, GameScreen, Header, etc.)
  - `store/` - Zustand game state store
  - `utils/` - Utility functions (shuffle, validation, theme)
  - `assets/` - Logo SVGs
- `public/` - Static assets (icons, manifest)
- `vite.config.js` - Vite configuration (port 5000, all hosts allowed)

## Running
- Dev: `npm run dev` (runs on port 5000)
- Build: `npm run build` (outputs to `dist/`)

## Deployment
- Static deployment serving the `dist/` directory after build
