import { create } from 'zustand';

const useGameStore = create((set) => ({
  // Game state
  numberCards: [],
  targetCard: null,
  expression: '',
  isSolved: false,
  error: null,

  // Actions
  setNumberCards: (cards) => set({ numberCards: cards }),
  setTargetCard: (target) => set({ targetCard: target }),
  setExpression: (expr) => set({ expression: expr }),
  appendToExpression: (value) => set((state) => ({ 
    expression: state.expression + value 
  })),
  clearExpression: () => set({ expression: '' }),
  setError: (error) => set({ error }),
  setSolved: (solved) => set({ isSolved: solved }),
}));

export default useGameStore; 