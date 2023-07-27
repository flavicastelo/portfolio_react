import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

import NavBar from "../src/components/NavBar";
import MenuHamburger from '../src/components/MenuHamburger';
import Home from './components/Home';
import About from './components/About';
import Stack from './components/Stack';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ButtonDarkMode from './components/ButtonDakMode';
import NavBottom from './components/NavMobile';

function App() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <>
    {/* <MenuHamburger darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> */}
      {isMobile ? (
        <NavBottom darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      ) : (
        <NavBar  darkMode={darkMode}  toggleDarkMode={toggleDarkMode} />
      )}
      <Home darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Stack darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      {/* {isMobile ? (null): (<ButtonDarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />)} */}
    </>
  );
}

export default App;
