import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
  // const [darkMode, setDarkMode] = useState(false);
  const [value, setValue] = useDarkMode();

  
  const toggleMode = e => {
    e.preventDefault();
    setValue(!value);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={'dark-mode' ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
