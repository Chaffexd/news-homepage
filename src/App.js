import React, { useEffect, useState } from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Layout/Header';
import Landing from './components/Main/Landing';
import './App.css';
import MobileHeader from './components/Layout/MobileHeader';
import MobileMain from './components/Mobile/MobileMain';

function App() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);
  const updateWidth = () => {
    setDesktop(window.innerWidth > 1000);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return() => {window.removeEventListener("resize", updateWidth)}
  });
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
