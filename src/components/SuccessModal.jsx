import React from 'react';
import PropTypes from 'prop-types';

const SUCCESS_MESSAGES = [
    "Sumone’s been practicing their math!",
    "Sumhow… you nailed it! Didn't think you had it in you.",
    "Sumwhere, a calculator just blushed!",
    "Sumthing clicked in that brain of yours!",
    "Sumtimes genius strikes in the most unexpected placed!",
    "Wow, that was sumwhat impressive!",
    "Sum might say that was too easy!",
    "Sum days are easier than others!",
    "Sumbody stop you… you're on fire!",
    "Sumthing tells me you’ve done this before!",
    "Sumtimes the math just clicks!",
    "Sumthing tells me you’ll be back tomorrow!"
  ];

  const SuccessModal = ({ time, onShuffle }) => {
    const randomMessage = SUCCESS_MESSAGES[Math.floor(Math.random() * SUCCESS_MESSAGES.length)];
  
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
        <div className="
          bg-[#F9FAFB] dark:bg-[#1C1C1E]
          p-6
          rounded-lg
          max-w-sm
          w-full
          text-center
          space-y-4
        ">
          <h2 className="
            text-xl
            font-semibold
            text-[#111827] dark:text-[#E5E7EB]
          ">
            {randomMessage}
          </h2>
  
          <button
            onClick={onShuffle}
            className="
              px-8
              py-3
              rounded-full
              font-medium
              text-base
              bg-[#F9FAFB] dark:bg-[#1C1C1E]
              text-[#111827] dark:text-[#E5E7EB]
              border
              border-[#E7E7E7] dark:border-[#38383F]
              transition-colors
              select-none
              w-full
              sm:w-auto
            "
            type="button"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  };

SuccessModal.propTypes = {
  time: PropTypes.string.isRequired,
  onShuffle: PropTypes.func.isRequired,
};

export default SuccessModal; 