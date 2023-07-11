import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

import NavBar from "../src/components/NavBar";
import MenuHamburger from '../src/components/MenuHamburger';
import Home from './components/Home';
import About from './components/About';
import Stack from './components/Stack';

function App() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {isMobile ? <MenuHamburger showMenu={showMenu} toggleMenu={toggleMenu} /> : <NavBar isHome={true} />}
      <Home />
      <About />
      <Stack />
      </>
  )
}

export default App