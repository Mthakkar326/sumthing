import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ number, onClick, isTarget = false }) => {
    const baseStyles = `
    w-16 h-16
    flex items-center justify-center
    font-bold text-lg leading-none
    rounded-lg
    border border-transparent
    transition-colors
    select-none
    cursor-pointer
  `;
  
  
  const themeStyles = isTarget
    ? 'bg-[#FACC15] text-[#111827] border-[#FACC15] dark:border-[#FACC15]'
    : 'bg-[#E7E7E7] dark:bg-[#38383F] text-[#111827] dark:text-[#E5E7EB] border-[#E7E7E7] dark:border-[#38383F] hover:bg-[#FACC15] hover:text-[#111827] hover:border-[#FACC15]';

  
    return (
      <button
        onClick={() => onClick(number)}
        className={`${baseStyles} ${themeStyles}`}
        type="button"
      >
        {number}
      </button>
    );
  };

Card.propTypes = {
  number: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  isTarget: PropTypes.bool
};

export default Card;
