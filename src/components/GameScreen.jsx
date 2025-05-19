import React, { useEffect } from 'react';
import Card from './Card';
import ExpressionInput from './ExpressionInput';
import { Delete, RefreshCw } from 'lucide-react';
import SuccessModal from './SuccessModal';
import { validateExpression } from '../utils/validateExpression';
import { shuffleDeck } from '../utils/shuffleDeck';
import useGameStore from '../store/gameStore';
import { shuffleArray } from '../utils/shuffleArray';
import Header from './Header';
import ErrorToast from './ErrorToast';

const GameScreen = () => {
  const {
    numberCards,
    targetCard,
    expression,
    isSolved,
    error,
    setNumberCards,
    setTargetCard,
    setExpression,
    appendToExpression,
    setError,
    setSolved,
  } = useGameStore();

  // Initialize game with shuffled cards
  useEffect(() => {
    const { numberCards, targetCard } = shuffleDeck();
    setNumberCards(numberCards);
    setTargetCard(targetCard);
  }, []);

  const handleCardClick = (number) => {
    if (isSolved) return;
    appendToExpression(number.toString());
  };

  const handleOperatorClick = (operator) => {
    if (isSolved) return;
    if (operator === 'backspace') {
      setExpression(expression.slice(0, -1));
    } else {
      appendToExpression(operator);
    }
  };

  const handleSubmit = () => {
    if (isSolved) return;
    const result = validateExpression(expression, numberCards, targetCard);
    if (result.success) {
      setSolved(true);
    } else {
      setError(result.error);
      setExpression(''); // 👈 This line clears the expression input
    }
  };

  const handleReshuffle = () => {
    setNumberCards(shuffleArray(numberCards));
  };
  
  const handleReset = () => {
    const { numberCards, targetCard } = shuffleDeck();
    setNumberCards(numberCards);
    setTargetCard(targetCard);
    setExpression('');
    setError(null);
    setSolved(false);
  };  

  const handleShuffle = () => {
    const { numberCards, targetCard } = shuffleDeck();
    setNumberCards(numberCards);
    setTargetCard(targetCard);
    setExpression('');
    setError(null);
    setSolved(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#1C1C1E] flex flex-col">
      {/* Top Header Bar */}
      <Header onReset={handleReset} />

  
      {/* Main Game Area */}
      <main className="flex-grow flex items-center justify-center mt-6 md:mt-12">
        <div className="w-[330px] mx-auto space-y-5 flex flex-col items-center text-center">
  
          {/* Target Card */}
          <div className="flex justify-center w-full">
            <Card
              number={targetCard}
              onClick={() => {}}
              isTarget={true}
            />
          </div>
  
          {/* Number Cards */}
          <div className="grid grid-cols-5 gap-2 w-full">
            {numberCards.map((number, index) => (
              <div key={index} className="flex justify-center">
                <Card
                  number={number}
                  onClick={handleCardClick}
                />
              </div>
            ))}
          </div>
  
          {/* Error + Expression Input */}
          <div className="w-full flex justify-center relative">
            <ErrorToast message={error} onClear={() => setError(null)} />
            <ExpressionInput
              value={expression}
              onChange={setExpression}
            />
          </div>

          {/* Operator Bar */}
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-6 gap-2 w-full">
              {["+", "-", "×", "÷", "(", ")"].map((op) => (
                <button
                  key={op}
                  onClick={() => handleOperatorClick(op)}
                  className="
                  h-12 w-full
                  flex items-center justify-center
                  font-medium text-base
                  rounded-lg
                  bg-[#E7E7E7] dark:bg-[#38383F]
                  text-[#111827] dark:text-[#E5E7EB]
                  border border-[#E7E7E7] dark:border-[#38383F]
                  hover:bg-[#FACC15] hover:text-[#111827] hover:border-[#FACC15]
                  transition-colors
                  select-none cursor-pointer
                "                
                  type="button"
                >
                  {op}
                </button>
              ))}
            </div>
          </div>

  
          {/* Action Buttons */}
          <div className="flex justify-between items-center w-[330px] gap-6">
            {/* Delete */}
            <button
              onClick={() => setExpression('')}
              className="flex-1 py-3 rounded-full font-medium text-base bg-white dark:bg-[#1C1C1E] text-[#121212] dark:text-[#E5E7EB] border border-[#E7E7E7] dark:border-[#38383F] hover:border-[#FACC15] hover:text-[#FACC15] transition-colors select-none cursor-pointer"
              type="button"
            >
              Delete
            </button>
  
          {/* Shuffle */}
          <button
          onClick={handleReshuffle}
          className="w-12 h-12 rounded-full bg-white dark:bg-[#1C1C1E] text-[#121212] dark:text-[#E5E7EB] border border-[#E7E7E7] dark:border-[#38383F] hover:border-[#FACC15] hover:text-[#FACC15] transition-colors select-none flex items-center justify-center cursor-pointer"
          type="button"
          aria-label="Shuffle"
          >
          <RefreshCw size={20} />
          </button>
  
          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="flex-1 py-3 rounded-full font-medium text-base bg-white dark:bg-[#1C1C1E] text-[#121212] dark:text-[#E5E7EB] border border-[#E7E7E7] dark:border-[#38383F] hover:border-[#FACC15] hover:text-[#FACC15] transition-colors select-none cursor-pointer"
            type="button"
          >
            Submit
          </button>
          </div>
  
          {/* Success Modal */}
          {isSolved && (
            <SuccessModal
              time="00:00"
              onShuffle={handleShuffle}
            />
          )}
        </div>
      </main>
      {/* Footer (outside main content box) */}
      <footer className="text-xs text-[#6B7280] dark:text-[#9CA3AF] text-center py-4 px-2 space-y-1">
      <div>© 2025 Sumthing | All rights reserved | A General Milz Media production</div>
      <div>Sumthing is an independent game inspired by classic math puzzles.</div>
      </footer>

    </div>
  );
};

export default GameScreen; 