import React, { useEffect, useState } from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Layout/Header';
import Landing from './components/Main/Landing';
import MobileHeader from './components/Layout/MobileHeader';
import MobileMain from './components/Mobile/MobileMain';
import Modal from './components/Modal/Modal';
import './App.css';


function App() {
  // Here we are using useState to determine the window width and render a diff
  // component based on that
  // remember: first var is default state, function is new state
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1150);
  const [showModal, setModal] = useState(false);

  const showModalHandler = () => {
    setModal(true);
  };

  const hideModalHandler = () => {
    setModal(false);
  };

  const updateWidth = () => {
    setDesktop(window.innerWidth > 1150);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return() => {window.removeEventListener("resize", updateWidth)}
  }, []);
  return (
    <div className="App">
      {showModal && <Modal onHideModal={hideModalHandler} />}
      {isDesktop ? <Header /> : <MobileHeader />}
      <main>
        {isDesktop ? <Landing onClick={showModalHandler} /> : <MobileMain />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
