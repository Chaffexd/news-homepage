import React, { useEffect, useState } from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Layout/Header';
import Landing from './components/Main/Landing';
import './App.css';
import MobileHeader from './components/Layout/MobileHeader';
import MobileMain from './components/Mobile/MobileMain';

function App() {
  // Here we are using useState to determine the window width and render a diff
  // component based on that
  // remember: first var is default state, function is new state
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1150);
  const updateWidth = () => {
    setDesktop(window.innerWidth > 1150);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return() => {window.removeEventListener("resize", updateWidth)}
  }, [isDesktop]);
  return (
    <div className="App">
      {isDesktop ? <Header /> : <MobileHeader />}
      <main>
        {isDesktop ? <Landing /> : <MobileMain />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
