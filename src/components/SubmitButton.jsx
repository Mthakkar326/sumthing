import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        px-8
        py-3
        rounded-full
        font-medium
        text-base
        bg-white dark:bg-[#1C1C1E]
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
      Submit
    </button>
  );
};

SubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SubmitButton; 