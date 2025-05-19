import React from 'react';
import PropTypes from 'prop-types';

const ExpressionInput = ({ value, onChange }) => {
  const handleKeyDown = (e) => {
    // Prevent default behavior for arrow keys to allow cursor movement
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      return;
    }

    // Allow: backspace, delete, tab, escape, enter, numbers, operators, and parentheses
    const allowedKeys = [
      'Backspace',
      'Delete',
      'Tab',
      'Escape',
      'Enter',
      'ArrowLeft',
      'ArrowRight',
      '+',
      '-',
      '*',
      '/',
      '(',
      ')',
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9'
    ];

    if (!allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div className="w-full px-4">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="
          w-full
          h-12
          px-4
          text-2xl
          font-bold
          rounded-lg
          bg-white dark:bg-[#1C1C1E]
          text-[#111827] dark:text-[#E5E7EB]
          placeholder:text-base
          placeholder:font-normal
          placeholder-[#6B7280] dark:placeholder-[#9CA3AF]
          focus:placeholder-transparent
          focus:outline-none
          select-none
          [caret-color:#FACC15]
          text-center
        "
        placeholder="Start by typing or clicking"
        aria-label="Math expression input"
        role="textbox"
        aria-multiline="false"
      />
    </div>
  );
};

ExpressionInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ExpressionInput; 