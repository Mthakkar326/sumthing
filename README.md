# Sumthing

**Sumthing** is a math game inspired by classic metnal math puzzles, where you combine five numbers using basic math operators to hit a target number.

Built with **React**, **Tailwind CSS**, and good old-fashioned math nerdery.

## 🎯 How to Play

Your goal is to make an equation with all five number cards that equals the target card.

- You must use all five number cards.
- Each number can only be used once.
- You can use +, −, ×, ÷ and parentheses.
- Don't forget about order of operations.
- Mental math only. No calculators allowed.
- No combining digits (e.g., turning 2 and 3 into 23).

When your equation is valid and equals the target, you win!

## 💡 Example
**Cards:** 2, 3, 4, 6, 8
**Target:** 13

Your answer might include: 3*4+8/(6+2) = 13

## 🛠 Tech Stack

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- Zustand (for state management)
- Lucide Icons

## 📁 Project Structure

src/
  components/   // All UI components
  store/        // Global game state (Zustand)
  utils/        // Expression validation and card shuffling
  assets/       // Logos for light/dark mode

## 👨‍💻 Author
Built by [Milan Thakkar](https://github.com/Mthakkar326)

## 🪪  License
MIT — feel free to use, modify, or extend.
