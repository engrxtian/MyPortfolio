// DarkModeToggle.js
import React, { useContext } from 'react';
import { DarkModeContext } from '../DarkMode/DarkModeContext';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
