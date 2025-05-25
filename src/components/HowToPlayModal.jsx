import React, { useState, useEffect } from 'react';
import { HelpCircle } from 'lucide-react';
import ReactDOM from 'react-dom';

const HowToPlayModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup on unmount (safety)
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Button */}
      <button
        onClick={toggleModal}
        className="text-[#111827] dark:text-[#E5E7EB] hover:text-[#FACC15] transition-colors"
        aria-label="How to Play"
      >
        <HelpCircle size={20} />
      </button>

      {/* Modal */}
      {isOpen &&
        ReactDOM.createPortal(
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-[#1C1C1E] rounded-xl shadow-xl max-w-md w-full p-6 relative">
                <button
                onClick={toggleModal}
                className="absolute top-4 right-4 text-[#111827] dark:text-[#E5E7EB] text-xl"
                aria-label="Close"
                >
                ✕
                </button>
                <h2 className="text-xl font-bold text-[#111827] dark:text-[#FACC15] mb-4">
                  How To Play
                </h2>
                <div className="text-[#111827] dark:text-[#E5E7EB] text-sm space-y-3">
                <p>Your goal is to make an equation with all five number cards that equals the target card.</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>You must use all five number cards.</li>
                    <li>Each number can only be used once.</li>
                    <li>You can use +, −, ×, ÷ and parentheses.</li>
                    <li>Operators can be used as multiple times.</li>
                    <li>Don't forget about order of operations.</li>
                    <li>No combining digits (turning 2 and 3 into 23).</li>
                </ul>
                <p>When your equation is valid and equals the target, YOU WIN!</p>
                </div>
            </div>
            </div>,
            document.body
        )
        }
    </>
  );
};

export default HowToPlayModal;
