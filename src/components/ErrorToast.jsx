import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ErrorToast = ({ message, duration = 2000, onClear }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(onClear, 300); // wait for fade-out
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [message, duration, onClear]);

  return (
    <div
      className={`
        absolute top-11  -translate-y-full 
        px-4 py-2 rounded-md text-sm font-medium text-center
        bg-black text-white dark:bg-white dark:text-black 
        transition-opacity duration-300
        ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
    >
      {message}
    </div>
  );
};

ErrorToast.propTypes = {
  message: PropTypes.string,
  duration: PropTypes.number,
  onClear: PropTypes.func.isRequired,
};

export default ErrorToast;
