import React from 'react';
import useDarkMode from 'use-dark-mode';
import Toggle from './Toggle';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className='toggle-location'>
      <button className='button-switch ' type="button" onClick={darkMode.disable}>
        ☀
      </button>
      <Toggle className='toggle-control' checked={darkMode.value} onChange={darkMode.toggle} />
      <button className='button-switch ' type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </div>
  );
};

export default DarkModeToggle;