import React from 'react';
import './App.css';
import Buttons from './components/Buttons/Buttons';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Header></Header>
      <Buttons>Sort By Date</Buttons>
      <Cards></Cards>

    </>
  );
};

export default App;