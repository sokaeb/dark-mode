import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
  // const [darkMode, setDarkMode] = useState(false);
  const [value, setValue] = useDarkMode(
    'darkMode'
  );
 
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
          className={value ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
