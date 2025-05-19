import React from 'react';
import logoLight from '../assets/logo-light.svg';
import logoDark from '../assets/logo-dark.svg';
import HowToPlayModal from './HowToPlayModal';
import { Shuffle } from 'lucide-react';
import { Lightbulb } from 'lucide-react';
import { toggleTheme } from '../utils/theme';


const Header = ({ onReset }) => {
  return (
    <div className="
      w-full h-12 
      bg-white dark:bg-[#1C1C1E] 
      border-b border-[#E5E7EB] dark:border-[#38383F] 
      flex items-center justify-between px-4
    ">
      {/* Left: Logo */}
      <div className="flex items-center h-full">
        <img
          src={logoLight}
          alt="Logo"
          className="block dark:hidden h-8"
        />
        <img
          src={logoDark}
          alt="Logo"
          className="hidden dark:block h-8"
        />
      </div>

      {/* Right: Mode + Shuffle + How to Play */}
      <div className="space-x-4 flex items-center">
        <button
          onClick={toggleTheme}
          title="Toggle Theme"
          className="text-[#111827] dark:text-[#E5E7EB] hover:text-[#FACC15] transition-colors"
        >
          <Lightbulb size={20} />
        </button>
        <button
          onClick={onReset}
          title="New Game"
          className="text-[#111827] dark:text-[#E5E7EB] hover:text-[#FACC15] transition-colors"
        >
          <Shuffle size={20} />
        </button>

        <HowToPlayModal />
      </div>
    </div>
  );
};

export default Header;
