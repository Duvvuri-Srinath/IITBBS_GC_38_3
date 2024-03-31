// Header.tsx
import React from 'react';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import logo from '../assets/IITBBS_Logo.png';

const Header: React.FC<{ showPrompts: boolean; togglePrompts: () => void }> = ({ showPrompts, togglePrompts }) => {
  return (
    <header className="w-full p-2 md:p-4 flex justify-between items-center shadow-lg fixed top-0 z-50">
      <div className="flex items-center">
        <img src={logo} alt="IIT BBS Logo" className="h-8 md:h-10 mr-2"/>
        <div className="relative z-10 text-xs md:text-sm lg:text-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          IIT BBS GPT
        </div>
      </div>
      <BsFillQuestionCircleFill
        className="text-xl md:text-2xl cursor-pointer text-neutral-200"
        onClick={togglePrompts}
      />
    </header>
  );
};

export default Header;